# News App [![rajibola](https://circleci.com/gh/rajibola/news.svg?style=svg)](https://app.circleci.com/pipelines/github/rajibola/news)

<span>
<img src="./docs/assets/preview.gif" alt="preview"  width="270" />
</span>

<hr />

## Getting Started

- Fork or Clone the repo, then set it up:

```
$ cd news
$ yarn install
```

### Run on Android

```
$ yarn run android
```

### Run on iOS

```
$ cd ios && pod install
$ cd .. && yarn run ios
```

## A brief description of the project

### Task

> Build a News App

> Perform CRUD actions on news and comments

## Technologies Used

1. Implemented app navigation with `react-navigation`.

2. Used `jest`,`react-test-renderer` and `testing-library/react-native` for component and unit test.

3. Optimised image rendering using `react-native-fast-image`.

4. Used `redux-rematch` for managing global state.

5. Used `circleci` for continuous integration.
