import React from 'react';



export default class BarTitle extends React.Component {
  render(){
    return (
        
          <>
            <div className="h-bar">
                <div className="h-bar--title">
                  {this.props.title}
                </div>
                <div className="h-bar--link">
                  <a>VER TUDO ></a>
                </div>
            </div>
          </>
        
    )
  }
}