import React, { Component } from 'react';

class Green extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props
        }
    }
    
    onClick = () => {
        this.setState({
            data: {
                number: this.state.data.number-1
            }
        }, () => this.props.back(this.state.data));
        
    }
    render(){
        return(
            <div className="box green">
                {this.state.data.number}
                <button onClick={this.onClick}>Click Me!</button>
            </div>
        )
    }
}
export default Green;