import React from 'react';

class Ref extends React.Component {
  constructor() {
    super();
    this.state = {};
    //create a ref to store the myRef dom element
    this.myRef = React.createRef();
    this.focusInput - this.focusInput.bind(this);
  }

  //
  focusInput = () => {
    //focus the input using the raw DOM api
    //we're using current to get the DOM node
    this.myRef.current.focus();
  };
  render() {
    // tell React that we want to associate the <input> ref
    // with the `myRef` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusInput}
        />
      </div>
    );
  }
}

export default Ref;
