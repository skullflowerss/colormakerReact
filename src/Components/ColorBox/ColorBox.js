import React from 'react'
import './ColorBox.css'

class ColorBox extends React.Component{

    render(){
        return(
            <div className="ColorBox" style={{background: this.props.color}} >
                <p>{this.props.color}</p>
            </div>
        )
    }
}

export default ColorBox