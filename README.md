# React Visible Control

[![CircleCI](https://circleci.com/gh/Soontao/react-visible-control.svg?style=shield)](https://circleci.com/gh/Soontao/react-visible-control) [![codecov](https://codecov.io/gh/Soontao/react-visible-control/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/react-visible-control) [![npm version](https://badge.fury.io/js/react-visible-control.svg)](https://badge.fury.io/js/react-visible-control)

Control the rendering or non-rendering of components in simple way.

Works for React & React Native.

WARNING!!!, please make sure you know what you are doing !

this lib use [React Context API](https://reactjs.org/docs/context.html), please make sure the `shouldComponentUpdate` method works correct in your project

## install

```bash
npm i -S react-visible-control
```

## sample application

[Here is a sample application based on react-visible-control](https://github.com/Soontao/react-visible-control-sample)

Basic usage as following

```jsx
import React, { Component } from 'react';
import { Failback, VisibleContext, VisibleControl } from 'react-visible-control';


const visibleData = { "home": true, "page1": true, "page2": false }

export default class Test extends Component {
  render() {
    return (
      <VisibleContext data={visibleData}>
        <div>
          <VisibleControl visibleKey={"home"}>
            <p>home</p>
          </VisibleControl>
          <VisibleControl visibleKey={"page1"}>
            <p>page1</p>
          </VisibleControl>
          <VisibleControl visibleKey={"page2"}>
            <p>page2</p>
            <Failback><p>you cant access page2, but you could show a failback thing here</p></Failback>
          </VisibleControl>
          <VisibleControl visibleKey={"page3"}>
            <p>page3</p>
          </VisibleControl>
        </div>
      </VisibleContext>
    );
  }
}
```

Render Result: 

```html
<div>
  <p>
    home
  </p>
  <p>
    page1
  </p>
  <p>
    you cant access page2, but you could show a failback thing here
  </p>
</div>
```

## custom usage

in this demo, without permission, react will not render child component

```javascript

// mock user data
const users = [
  {
    "name": "Theo Sun",
    "permissions": [
      "user_read",
      "user_write",
      "user_update",
      "user_delete"
    ],
    "role": "user_manager"
  },
  {
    "name": "Cherry Xu",
    "permissions": ["user_read"],
    "role": "user_viewer"
  }

];

// custome Control
const userHavePermission = per => data => data.permissions && data.permissions.indexOf(per) >= 0

export const UserReadPermission   = createVisibleControl(userHavePermission("user_read"));
export const UserWritePermission  = createVisibleControl(userHavePermission("user_write"));
export const UserDeletePermission = createVisibleControl(userHavePermission("user_delete"));
export const UserUpdatePermission = createVisibleControl(userHavePermission("user_update"));

// app view
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "counter": 0,
      "visibleData": {}
    };
  }

  render() {
    return (
      <VisibleContext data={this.state.visibleData}>
        <button onClick={() => {
          this.setState({ "visibleData": users[this.state.counter % users.length] });
          this.setState({ "counter": this.state.counter + 1 });
        }} >
          change user</button>
        <div className="App">
          <UserDeletePermission><p>You have User Delete Permission</p></UserDeletePermission>
          <UserWritePermission><p>You have User Write Permission</p></UserWritePermission>
          <UserReadPermission><p>You have User Read Permission</p></UserReadPermission>
          <UserUpdatePermission><p>You have User Update Permission</p></UserUpdatePermission>
        </div>
      </VisibleContext>
    );
  }
}
```

## License 

MIT