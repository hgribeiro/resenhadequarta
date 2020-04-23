import React from 'react';



export default class Input extends React.Component {
  render(){
    let helpStyle = {
      'font-size': '10px',
      color: 'red'
  };

    let customProps = {
      ...this.props
  };
  delete customProps['className'];
  delete customProps['onClick'];
  delete customProps['required'];
  delete customProps['label'];

    return (
      
      <>
        <label for={this.props.name}>{this.props.label}</label>
        <input
        {...customProps}
        />
        <small style={helpStyle} onClick={this.props.onClick}>
                    {this.props.help}
                </small>
      </>
      
    )
  }
}