<div align="center">
  <h1>React Native Compare Slider</h1>
  <p>Compare two components side-by-side</p>

![Example](./examples/assets/images/slider-teaser.gif)

<a href="https://github.com/taranisag/react-native-compare-slider/blob/master/LICENSE">
<img src="https://img.shields.io/npm/l/react-compare-slider.svg" alt="License MIT" />
</a>
<a href="https://github.com/taranisag/react-native-compare-slider">
<img src="https://travis-ci.com/taranisag/react-native-compare-slider.svg?branch=master" alt="Build Status" />
</a>
<a href="https://coveralls.io/github/taranisag/react-native-compare-slider?branch=master">
<img src="https://coveralls.io/repos/github/taranisag/react-native-compare-slider/badge.svg?branch=master" alt="Coverage" />
</a>

</div>

---

## Features

- Supports images and any other React components (`picture`, `video`, `canvas`, `iframe` etc.)
- Supports landscape and portrait orientations
- Customization

### Examples

You can run examples by performing these steps:

```
$ git clone git@github.com:taranisag/react-native-compare-slider.git
$ npm install
$ npm start android
```

### Install

```sh
$ npm install react-native-compare-slider
$ npm start
```

## Props

| Prop                   | Type                                 | Required | Default value  | Description                         |
| ---------------------- | ------------------------------------ | :------: | -------------- | ----------------------------------- |
| `before`               | `ReactNode`                          |    ✓     | `undefined`    | First component to show in slider.  |
| `after`                | `ReactNode`                          |    ✓     | `undefined`    | Second component to show in slider. |
| `containerSize`        | `{ width: number; height: number; }` |          | `{100%, 100%}` | Container dimensions.               |
| `sliderSize`           | `{ width: number; height: number; }` |          | `{50, 50}`     | Slider's handle dimensions.         |
| `SliderComponent`      | `ReactNode`                          |          | `undefined`    | Slider's handle component.          |
| `sliderStyles`         | `ViewStyle`                          |          | `undefined`    | Slider's handle styles.             |
| `showSeparationLine`   | `boolean`                            |          | `undefined`    | Separation line visibility.         |
| `separationLineStyles` | `ViewStyle`                          |          | `undefined`    | Separation line styles.             |

### Basic Image Usage

```jsx
import { CompareSlider } from 'react-native-compare-slider';

<CompareSlider
  before={<Image source={imageBefore} resizeMode="cover" />}
  after={<Image source={imageAfter} resizeMode="cover" />}
/>;
```

### Google Maps Usage

install `react-native-maps` library

```jsx
import { CompareSlider } from 'react-native-compare-slider';
import RNM, { MAP_TYPES, PROVIDER_GOOGLE } from 'react-native-maps';

<CompareSlider
  before={
    <RNM
      provider={PROVIDER_GOOGLE}
      mapType={MAP_TYPES.SATELLITE}
      initialRegion={{
        latitude: 33.61099089454942,
        longitude: -90.79735743461134,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    />
  }
  after={
    <RNM
      provider={PROVIDER_GOOGLE}
      mapType={MAP_TYPES.STANDARD}
      initialRegion={{
        latitude: 33.61099089454942,
        longitude: -90.79735743461134,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    />
  }
/>;
```

![Example](./examples/assets/images/slider-map.gif)

### Customization Usage

```jsx
import { CompareSlider } from 'react-native-compare-slider';

<CompareSlider
  before={<Image source={imageBefore} resizeMode="cover" />}
  after={<Image source={imageAfter} resizeMode="cover" />}
  sliderStyles={{ backgroundColor: 'green' }}
  showSeparationLine={false}
/>;
```
