import React from 'react';
import './FormBox.css'
import ColorContainer from '../ColorContainer/ColorContainer'

class FormBox extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { num : 2 }
    }

    handleClick(e){
        let text = e.target.value
        console.log(text)
        this.setState({
            num : text
        })
    }

    render(){
        return(
            <div className="FormBox">
                <div class="color-box">
                    <div class="color-container">
                        <p for="colorPicker">Pick how many colors do you want  </p>
                            <form onClick={this.handleClick}>
                                <input type="radio" name="src" value="2" /> 2
                                <input type="radio" name="src" value="3" /> 3
                                <input type="radio" name="src" value="4" /> 4
                                <input type="radio" name="src" value="5" /> 5
                            </form>
                    </div>
                </div>

               <ColorContainer number={this.state.num} />
            </div>

        )
    }
}

export default FormBox