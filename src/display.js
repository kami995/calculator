import React from 'react'

class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '0'
        }
    }
    render(){
        return(
            <div id='display'>
                {this.state.value}
            </div>
        );
    }
}

export default Display