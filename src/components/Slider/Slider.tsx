// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { View, PanResponder, Dimensions, Image } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const Before = ({ state, children }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        width: state.width,
        height: state.height,
      }}
    >
      {children}
    </View>
  </View>
);

const After = ({ state, children }) => {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 9,
        overflow: 'hidden',
        left: state.left,
      }}
    >
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: state.width,
          height: state.height,
        }}
      >
        {children}
      </View>
    </View>
  );
};

const DefaultDragger = ({ parent, state }) => (
  <View
    /* eslint-disable-next-line no-underscore-dangle,react/jsx-props-no-spreading */
    {...parent._panResponder.panHandlers}
    style={{
      height: state.height,
      width: state.draggerWidth,
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      zIndex: 10,
      marginLeft: -state.draggerWidth / 2,
      left: state.left,
    }}
  >
    <View
      style={{
        opacity: 0.6,
        width: 50,
        height: 50,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        borderRadius: 25,
        marginTop: state.height / 2 - 25,
      }}
    >
      <Image
        /* eslint-disable-next-line global-require */
        source={require('../../../assets/images/arrows.png')}
        style={{ width: 40, height: 40, margin: 5 }}
      />
    </View>
  </View>
);

const Dragger = ({ parent, state, children }): unknown => (
  <View
    /* eslint-disable-next-line no-underscore-dangle,react/jsx-props-no-spreading */
    {...parent._panResponder.panHandlers}
    style={{
      height: state.height,
      width: state.draggerWidth,
      position: 'absolute',
      top: 0,
      zIndex: 10,
      marginLeft: -state.draggerWidth / 2,
      left: state.left,
    }}
  >
    {children}
  </View>
);

export default function Compare(props: any): unknown {
  const {
    initial = 0,
    width = deviceWidth,
    height = deviceWidth / 2,
    draggerWidth: sliderWidth,
    onMove = () => null,
    onMoveStart = () => null,
    onMoveEnd = () => null,
  } = props;
  const draggerWidth = sliderWidth || sliderWidth === 0 ? sliderWidth : 50;

  const [state, setState] = useState({
    width,
    height,
    draggerWidth,
    currentLeft: initial,
    left: initial,
    leftExtra: 0,
    dx: 0,
    onMove,
    onMoveStart,
    onMoveEnd,
  });
  const [exa, setExa] = useState(1);
  const [parent, setParent] = useState({ _panResponder: () => null });
  const tempLeft = useRef(0);

  useEffect(() => {
    setParent({
      _panResponder: PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderGrant: () => {
          setState({ ...state, dx: 0 });
          state.onMoveStart();
        },
        tempLeft: 0,
        onPanResponderMove: (event, gestureState) => {
          const { dx } = gestureState;

          let left = state.currentLeft + dx;

          const { width: someWidth } = state;

          if (left < 0) left = 0;
          else if (left >= someWidth) left = someWidth;

          tempLeft.current = left;

          setState({ ...state, left });
          setExa(exa + 1);
          state.onMove();
        },
        onPanResponderRelease: () => {
          state.onMoveEnd();
          setState({
            ...state,
            currentLeft: tempLeft.current,
            left: tempLeft.current,
          });
        },
      }),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const renderChildren = (someProps: any, someState: any) => {
    return React.Children.map(someProps.children, (child) => {
      return React.cloneElement(child, {
        state: someState,
        parent,
      });
    });
  };

  const { itemOne, itemTwo } = props;
  return (
    <View style={{ width, height, backgroundColor: '#f2f2f2' }}>
      <Before state={state} parent={parent}>
        {itemOne}
      </Before>
      <After state={state} parent={parent}>
        {itemTwo}
      </After>
      {renderChildren(props, state)}
    </View>
  );
}

export { DefaultDragger, Dragger };
