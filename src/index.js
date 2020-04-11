import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import Number from './number';
// import Display from './display'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: '0'
        }
        this.displayStuff = this.displayStuff.bind(this);
    }

    displayStuff(x){
        if(this.state.display !== '0'){
            this.setState({
                display: this.state.display + x
            }, console.log(this.state.display));
        } else {
            this.setState({
                display: x
            }, console.log(this.state.display));
        }
        
    }

    render(){
        return(
            <div id="calculator">
                <div id="display">{this.state.display}</div>
                <div onClick={() => this.displayStuff('7')} id="seven">7</div>
                <div id="eight" value="8">8</div>
                <div id="nine" value="9">9</div>
                <div id="four" value="4">4</div>
                <div id="five" value="5">5</div>
                <div id="six" value="6">6</div>
                <div id="one" value="1">1</div>
                <div id="two" value="2">2</div>
                <div id="three" value="3">3</div>
                <div id="zero" value="0">0</div>
                <div id="decimal">.</div>
                <div id="clear">AC</div>
                <div id="equals">=</div>
                <div id="add">+</div>
                <div id="subtract">-</div>
                <div id="multiply">*</div>
                <div id="divide">/</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />, document.getElementById('root')
)