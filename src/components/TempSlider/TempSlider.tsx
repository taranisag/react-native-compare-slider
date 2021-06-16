// @ts-nocheck
// base source code - https://github.com/vmaryada/react-native-before-after-slider-v2
import React, { Component, useState, useEffect } from 'react';
import { View, PanResponder, Dimensions, Image } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const Before = (props) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        width: props.state.width,
        height: props.state.height,
      }}
    >
      {props.children}
    </View>
  </View>
);

const After = (props) => (
  <View
    style={{
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 9,
      overflow: 'hidden',
      left: props.state.left,
    }}
  >
    <View
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: props.state.width,
        height: props.state.height,
      }}
    >
      {props.children}
    </View>
  </View>
);

const DefaultDragger = (props) => (
  <View
    {...props.parent._panResponder.panHandlers}
    style={{
      height: props.state.height,
      width: props.state.draggerWidth,
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      zIndex: 10,
      marginLeft: -props.state.draggerWidth / 2,
      left: props.state.left,
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
        marginTop: props.state.height / 2 - 25,
      }}
    >
      <Image
        source={require('../../../assets/images/arrows.png')}
        style={{ width: 40, height: 40, margin: 5 }}
      />
    </View>
  </View>
);

const Dragger = (props) => (
  <View
    {...props.parent._panResponder.panHandlers}
    style={{
      height: props.state.height,
      width: props.state.draggerWidth,
      position: 'absolute',
      top: 0,
      zIndex: 10,
      marginLeft: -props.state.draggerWidth / 2,
      left: props.state.left,
    }}
  >
    {props.children}
  </View>
);

export default function Compare(props) {
  const initial = props.initial ? props.initial : 0;
  const width = props.width ? props.width : deviceWidth;
  const height = props.height ? props.height : width / 2;
  const draggerWidth =
    props.draggerWidth || props.draggerWidth == 0 ? props.draggerWidth : 50;
  const onMove = props.onMove ? props.onMove : () => {};
  const onMoveStart = props.onMoveStart ? props.onMoveStart : () => {};
  const onMoveEnd = props.onMoveEnd ? props.onMoveEnd : () => {};

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
  const [parent, setParent] = useState({ _panResponder: () => {} });
  let tempLeft;

  useEffect(() => {
    setParent({
      _panResponder: PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderGrant: (e, gestureState) => {
          setState({ ...state, dx: 0 });
          state.onMoveStart();
        },
        tempLeft: 0,
        onPanResponderMove: (event, gestureState) => {
          const { dx } = gestureState;

          let left = state.currentLeft + dx;

          const { width, draggerWidth } = state;

          if (left < 0) left = 0;
          else if (left >= width) left = width;

          tempLeft = left;

          setState({ ...state, left });
          setExa(exa + 1);
          state.onMove();
        },
        onPanResponderRelease: (e, { vx, vy }) => {
          state.onMoveEnd();
          setState({ ...state, currentLeft: tempLeft, left: tempLeft });
        },
      }),
    });
  }, [props]);

  const renderChildren = (props, state) => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        state,
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

export { Before, After, DefaultDragger, Dragger };
