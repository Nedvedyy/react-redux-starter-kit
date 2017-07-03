import React, { PureComponent }  from 'react'
import './HomeView.scss'
import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/javascript';
import 'brace/theme/github';

export class HomeView extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  componentDidMount() {
    //this.refs.editor = Ace.edit("editor");
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    );
  }

}


export default HomeView
