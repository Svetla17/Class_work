import { useState, useCallback, Component, createRef, useRef, useEffect } from "react";


class ClassComponent extends Component {
    ref = createRef();
    componentDidMount() {
      this.ref.current.focus();
    }
    render() {
      return <input ref={this.ref}></input>;
    }
  }
  
  

  

  export default ClassComponent
