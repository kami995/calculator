import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import Number from './number';
// import Display from './display'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: '0',
            isDecimal: false,
            limit: false
        }
    }

    handleDecimal(){
        if(this.state.isDecimal){
            console.log("Number is already decimal");
        } else {
            this.setState({
                display: this.state.display + '.',
                isDecimal: true
            })
        }
    }

    handleOperators(){

    }

    handleNumbers(x){
        if(this.state.display !== '0' && this.state.limit === false){
            this.setState({
                display: this.state.display + x
            })
            if(this.state.display.length >= 16){
                this.setState({
                    limit: true
                })
                alert("LIMIT REACHED");
            }
        } else if(this.state.limit){
            this.setState({
                display: this.state.display
            });
        } else {
            this.setState({
                display: x
            })
        }
    }

    clear(){
        this.setState({
            display: '0',
            isDecimal: false,
            limit: false
        });
    }

    izracunaj(textOnDisplay){
        let rezultat = 0;
        console.log(rezultat, textOnDisplay);
    }

    render(){
        return(
            <div id="calculator">
                <div id="display">{this.state.display}</div>
                <div onClick={() => this.handleNumbers('7')} id="seven">7</div>
                <div onClick={() => this.handleNumbers('8')} id="eight">8</div>
                <div onClick={() => this.handleNumbers('9')} id="nine">9</div>
                <div onClick={() => this.handleNumbers('4')} id="four">4</div>
                <div onClick={() => this.handleNumbers('5')} id="five">5</div>
                <div onClick={() => this.handleNumbers('6')} id="six">6</div>
                <div onClick={() => this.handleNumbers('1')} id="one">1</div>
                <div onClick={() => this.handleNumbers('2')} id="two">2</div>
                <div onClick={() => this.handleNumbers('3')} id="three">3</div>
                <div onClick={() => this.handleNumbers('0')} id="zero">0</div>
                <div onClick={() => this.handleDecimal()} id="decimal">.</div>
                <div id="clear" onClick={() => this.clear()}>AC</div>
                <div id="equals" onClick={() => this.izracunaj(this.state.display)}>=</div>
                <div onClick={() => this.handleOperators('+')} id="add">+</div>
                <div onClick={() => this.handleOperators('-')} id="subtract">-</div>
                <div onClick={() => this.handleOperators('*')} id="multiply">*</div>
                <div onClick={() => this.handleOperators('/')} id="divide">/</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />, document.getElementById('root')
)