import React from 'react'
import './ColorContainer.css'
import ColorBox from '../ColorBox/ColorBox'

let arrayOfBoxes = []

let string_of_colors = []

class ColorContainer extends React.Component{
    constructor(props){
        super(props)
        this.rgb = " "
    }

    colorGenerator(){

        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        this.rgb = `rgb(${r},${g},${b})`;
        let hexString = rgbToHex(r,g,b)
        string_of_colors.push(hexString)
    }

    arrayGenerator(num){
        for(let i = 0; i < num; i++){
            arrayOfBoxes.push('ColorBox')
        }
    }

    render(){
        this.arrayGenerator(this.props.number)
        return(
            <div className="ColorContainer">
            <div class="container">
                {
                    arrayOfBoxes.map((objct,i) =>{
                        this.colorGenerator()
                        return <ColorBox obj={objct} key={i} color={this.rgb}/> 
                        arrayOfBoxes.clear();
                    })

                    
                }
            </div>  
             <p id="string">{"{ " +string_of_colors.join(" ")+" }" }</p>
            </div>
            
        );
        
    }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

export default ColorContainer