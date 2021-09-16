//If we wanted to wrap the Ref component above to simulate it being clicked immediately after mounting, we could use a ref to get access to the Ref component's input and call its focusInput method manually:

import React from 'react';
import Ref from './Ref';

class AutoFocusTextInput extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusInput();
  }

  render() {
    return (
      <div>
        {/* using a ref to get access to the Ref component's input so that we can access the focusInput method when mounting above */}
        <Ref ref={this.textInput} />
      </div>
    );
  }
}

export default AutoFocusTextInput;
