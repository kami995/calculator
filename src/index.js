import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formula: '',
            display: '0',
            isDecimal: false,
            limit: false,
            lastPressed: undefined
        }
    }

    handleDecimal(){
        if(this.state.isDecimal || this.state.limit || this.state.lastPressed === '+'
            || this.state.lastPressed === '-' || this.state.lastPressed === '*' || this.state.lastPressed === '/'){
            console.log("Number is already decimal");
        } else {
            this.setState({
                display: this.state.display + '.',
                isDecimal: true
            })
        }
    }

    handleOperators = (o) => {
        this.setState({lastPressed: o, isDecimal: false})
        switch(o){
            case '+':
            case '/':
            case '*':
                {
                    if(['0','1','2','3','4','5','6','7','8','9'].includes(this.state.lastPressed)){
                        this.setState({
                            formula: this.state.formula + this.state.display,
                            display: o,
                        })
                    } else if(['+','-','*','/'].includes(this.state.lastPressed)){
                        this.setState({
                            display: o
                        })
                    } else if(this.state.lastPressed === '='){
                        this.setState({
                            formula: this.state.display,
                            display: o
                        })
                    } else {
                        this.setState({
                            formula: '',
                            display: o
                        })
                    }
                }
            break;
            case '-':
                {
                    if(['0','1','2','3','4','5','6','7','8','9'].includes(this.state.lastPressed)){
                        this.setState({
                            formula: this.state.formula + this.state.display,
                            display: o,
                        })
                    } else if(['+','*','/'].includes(this.state.lastPressed)){
                        this.setState({
                            display: this.state.display + o
                        })
                    } else if(this.state.lastPressed === '='){
                        this.setState({
                            formula: this.state.display,
                            display: o
                        })
                    } else if(this.state.lastPressed === '-'){
                        this.setState({
                            display: o
                        })
                    } else {
                        this.setState({
                            formula: '',
                            display: o
                        })
                    }             
                }
            break;
        }        
    }

    handleNumbers(x){
        if(this.state.display.length >= 16 || this.state.formula.length >= 16){
            alert("Limit reached");
            this.setState({
                limit: true
            })
        }
        if(this.state.limit === true){
            this.setState({
                display: this.state.display,
                formula: this.state.formula,
                lastPressed: x
            });
        } else {
            if(this.state.lastPressed === '='){
                this.setState({
                    formula: '',
                    display: x,
                    isDecimal: false,
                    limit: false,
                    lastPressed: x
                });
            } else if(this.state.lastPressed === undefined){
                this.setState({
                    display: x,
                    lastPressed: x
                })
            } else {
                if(this.state.display === '0'){
                    this.setState({
                        display: x,
                        lastPressed: x
                    })
                } else {
                    this.setState({
                        display: this.state.display + x,
                        lastPressed: x
                    })
                }
            }
        }
    }


    clear(){
        this.setState({
            formula: '',
            display: '0',
            isDecimal: false,
            limit: false,
            lastPressed: '0'
        });
    }

    izracunaj(){
        let izraz = this.state.formula + this.state.display;
        let rezultat = parseFloat(eval(izraz).toFixed(5));

        this.setState({
            formula: izraz + '=',
            display: rezultat,
            lastPressed: '='
        })
    }

    render(){
        return(
            <div id="calculator">
                <div id="DISPLEJ">
                    <div id="formula">{this.state.formula}</div>                    
                    <div id="display">{this.state.display}</div>
                </div>
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
                <div id="equals" onClick={() => this.izracunaj()}>=</div>
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