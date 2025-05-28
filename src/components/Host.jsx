import React from "react";


/**
 * Host component displays the host's name and image in a styled rectangle.
 * @param {string} hostName - The name of the host.
 * @param {string} hostImage - The URL of the host's image.
 */
function Host({ hostName, hostImage }) {
    return (
      <div className="host">
        <div className="host__name">{hostName}</div>
        <div className="host__image-circle">
          <img src={hostImage} alt={hostName} className="host__image" />
        </div>
      </div>
    );
  }
  
  export default Host;