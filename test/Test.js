import React, { Component } from 'react';
import { Failback, VisibleContext, VisibleControl } from '../dist/index';


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