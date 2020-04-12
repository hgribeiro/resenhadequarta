import React from 'react';

import banner40 from '../../assets/bannter40.png';

export default class Banner extends React.Component {
  render(){
    return (
      
      
      <>
        <div className="h-banner">
          <div className="h-banner-img">
            <img src={banner40} alt=""/>
          </div>
        </div>
      </>
    )
  }
}