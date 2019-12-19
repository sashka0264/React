import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";
import {bindActionCreators} from "redux";

const Counter = ({state, inc, dec, rnd}) => {
    const {num, width, height} = state;
    return (
        <div className="jumbotron">
            <div style={{width: `${width}px`, height: `${height}px`}} id="counter-block" className="counter-block">
                <h1 id="counter">{num}</h1>
            </div>
            <div className="counter-buttons">
                <div onClick={inc} className="btn btn-primary">
                    <img src={process.env.PUBLIC_URL + "/img/Vector.png"} alt="plus"></img>
                </div>

                <div onClick={dec} className="btn btn-primary">
                    <img src={process.env.PUBLIC_URL + "/img/Minus.png"} alt="plus"></img>
                </div>

                <div onClick={rnd} className="btn btn-primary">
                    <img src={process.env.PUBLIC_URL + "/img/Group.png"} alt="reset"></img>
                </div>
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