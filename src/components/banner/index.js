import React from 'react';



export default class Banner extends React.Component {
  render(){
    return (
      
      
      <>
        <div className="h-banner">
          <div className="h-banner-img">
            <img src={this.props.picture} alt=""/>
          </div>
        </div>
      </>
    )
  }
}