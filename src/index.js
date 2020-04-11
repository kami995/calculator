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
    }

    saberi(x,y){
        return x+y;
    }
    oduzmi(x,y){
        return x-y;
    }
    podeli(x,y){
        return x/y;
    }
    pomnozi(x,y){
        return x*y;
    }

    displayStuff(x){
        if(this.state.display !== '0'){
            this.setState({
                display: this.state.display + x
            })
        } else {
            this.setState({
                display: x
            });
        }
        
    }

    clear(){
        this.setState({display: '0'});
    }

    izracunaj(textOnDisplay){
        console.log(textOnDisplay)
    }

    render(){
        return(
            <div id="calculator">
                <div id="display">{this.state.display}</div>
                <div onClick={() => this.displayStuff('7')} id="seven">7</div>
                <div onClick={() => this.displayStuff('8')} id="eight" value="8">8</div>
                <div onClick={() => this.displayStuff('9')} id="nine" value="9">9</div>
                <div onClick={() => this.displayStuff('4')} id="four" value="4">4</div>
                <div onClick={() => this.displayStuff('5')} id="five" value="5">5</div>
                <div onClick={() => this.displayStuff('6')} id="six" value="6">6</div>
                <div onClick={() => this.displayStuff('1')} id="one" value="1">1</div>
                <div onClick={() => this.displayStuff('2')} id="two" value="2">2</div>
                <div onClick={() => this.displayStuff('3')} id="three" value="3">3</div>
                <div onClick={() => this.displayStuff('0')} id="zero" value="0">0</div>
                <div onClick={() => this.displayStuff('.')} id="decimal">.</div>
                <div id="clear" onClick={() => this.clear()}>AC</div>
                <div id="equals" onClick={() => this.izracunaj(this.state.display)}>=</div>
                <div onClick={() => this.displayStuff('+')} id="add">+</div>
                <div onClick={() => this.displayStuff('-')} id="subtract">-</div>
                <div onClick={() => this.displayStuff('*')} id="multiply">*</div>
                <div onClick={() => this.displayStuff('/')} id="divide">/</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />, document.getElementById('root')
)