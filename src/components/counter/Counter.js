import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increaseAction} from '../../actions/CounterAction';

class Counter extends Component {
    constructor(props){
        super(props);
        this.onIncreaseClick = this.onIncreaseClick.bind(this);
    }
    onIncreaseClick(){
        this.props.dispatch(increaseAction);
    }
    render() {
        const {CounterReducer} = this.props;
        return (
            <div>
                <span>{CounterReducer.count}</span>
                <button onClick={this.onIncreaseClick}>Increase</button>
            </div>
        )
    }
}


export default connect(
    (state)=>({
        CounterReducer:state.CounterReducer,
    })
)(Counter)

