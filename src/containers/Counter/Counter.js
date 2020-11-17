import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementToCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementToCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractToCounter}  />
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        ctr:state.counter
    };
};

const mapDispatchToProps=dispatch=>{
    return {
        onIncrementToCounter:()=>dispatch({type:'INCREMENT'}),
        onDecrementToCounter:()=>dispatch({type:"DECREMENT"}),
        onAddToCounter:()=>dispatch({type:"ADD"}),
        onSubtractToCounter:()=>dispatch({type:"SUBTRACT"})
    };
}
// const mapDispatchToProps=dispatch=>{
//     return {
//         onIncrementToCounter:()=>dispatch({type:'INCREMENT'})
//     };
// }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);