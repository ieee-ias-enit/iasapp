import React from 'react';
import "./Button.css"

const Button=(props)=>{
    return(
        <React.Fragment>
             <button className="buttonTheme">
                <div>{props.text}</div>
            </button>
        </React.Fragment>
    )
  }
  export default Button
