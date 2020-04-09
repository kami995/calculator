import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Number from './number';
import Display from './display'

class Calculator extends React.Component{
    render(){
        return(
            <div id="calculator">
                <Display />
                <Number id="seven" value="7"></Number>
                <Number id="eight" value="8"></Number>
                <Number id="nine" value="9"></Number>
                <Number id="four" value="4"></Number>
                <Number id="five" value="5"></Number>
                <Number id="six" value="6"></Number>
                <Number id="one" value="1"></Number>
                <Number id="two" value="2"></Number>
                <Number id="three" value="3"></Number>
                <Number id="zero" value="0"></Number>
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