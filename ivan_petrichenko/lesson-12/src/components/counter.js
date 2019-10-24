import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";
import {bindActionCreators} from "redux";

const Counter = ({state, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <div id="counter-block" className="counter-block">
                <h1 id="counter">{state.num}</h1>
            </div>
            <div className="counter-buttons">
                <div 
                    onClick={() => {
                    inc();
                    console.log(state);
                }} 
                    className="btn btn-primary">+</div>
                <div 
                    onClick={() => {
                    dec();
                    console.log(state);
                }} 
                    className="btn btn-primary">-</div>
                <div 
                    onClick={() => {
                    rnd();
                    console.log(state);
                }}  
                    className="btn btn-primary">C</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);