# Project notes: 

## 1. Use context + Use Reducer for state management

- Create the useContext
- Create the useReducer in the parent component
- Pass the reducer property in the parent component
```js
<UseContext provider value = {{state,dispatch}}></UseContext>
```
-Call the object in the childComponent 
```js
const {state,dispatch} = useContext(contextName);
```

-pass dispatch function to the onClick event.
```js
<button onClick = dispatch{() => dispatch({type:'name'})}>
```

## 2. UseState
- Can set the object to the state
```js
const [state,setState] = useState({key1:value1,key2:value2,key3:value3})
```

## 3.Build Progress bar plain css
- Use 2 div, 1 div is a container, 1 div is actual progress bar 
-  the second div will display absolute and the use the width property to display the current progress of the progress bar

## 4. Display opacity background
- Add one 1 aboslute div to wrap the element that display on top of the div background
- The absolute div has the background-color : rgba(255,255,255,0.6)
  
## 5. Deploy Gh pages 

- install github pages
```js
npm i gh-pages
```
- add homepage and gh scripts to package.json
```js
"homepage": "https://username.github.io/reponame"
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
- run deploy command

```js
npm run deploy
```