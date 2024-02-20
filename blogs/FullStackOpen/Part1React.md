## React Components
- It has both logic and appearance. It is a function that returns
markup. It can be used multiple of time. 
- Starts with capital letter.
```
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
- JSX(JavaScript XML) lets you put markup into JavaScript using curly `{}` brackets.Under the hood, JSX returned by React components is compiled into JavaScript by Babel.

- using `state` in react to remember something done in the browser.You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount) 

### React Hooks
Functions starting with use are called Hooks

### Props
props: passing data to components

React can return only one node. But if multiple is needed, wrap them around `span` or `div` element tag. 