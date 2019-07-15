# Running Examples

Each example is a [Create React App](https://facebook.github.io/create-react-app/) app.

_You must link @merc/react-timeline before running any examples._

```
# from the library root
$ npm link
$ cd examples/image-timeline
$ npm i && yarn start
```

A `postinstall` hook in each example handles the second part of the linking process.

Rebuild the library after making changes to see them reflected in example apps.

```
# from the library root
$ yarn build
```
