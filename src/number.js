import React from 'react';

class Number extends React.Component{
    render(){
        return(
            <div id={this.props.id}>
                {this.props.value}
            </div>
        )
    }
}

export default Number