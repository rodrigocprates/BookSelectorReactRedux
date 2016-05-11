# BookSelectorReactRedux

A really simple app shown at React Redux Course (https://www.udemy.com/react-redux/). It was implemented to better understand Redux basics.

###Few points for reference###

- React and Redux are completely separated libraries, that are actually connected through react-redux package.
- Reducers are Javascript functions that return a piece of application state.
- When we connect a React Component to Redux, it becomes a Container (or sometimes called Smart Component).
- Container is a component that has direct access to application state (Redux). Remember: Plain React Components doesn't have access to it.
- Whenever our application state changes, our container will be re-rendered.

###How to run###
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:rodrigocprates/BookSelectorReactRedux.git
	> cd BookSelectorReactRedux
	> npm install
	> npm start
```
