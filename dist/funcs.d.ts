import { Component } from "react";


export declare function createContext(contextName: string) {
  return {
    context: class CustomVisibleContext extends Component<{ data: (object | []) }, {}> { },
    control: class CustomVisibleControl extends Component<{ visibleKey: string }, {}> { },
    createControl: (visible: (data: object) => boolean) => class CustomVisibleControl extends Component<{}, {}> { },
  }
}

export default { createContext }