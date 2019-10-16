import React from "react";
import {createGlobalStyle} from 'styled-components'

const SpinnerStyle = createGlobalStyle`
    @keyframes lds-spinner {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .lds-spinner {
        position: relative;
        width: 141px !important;
        height: 141px !important;
        transform: translate(-70.5px, -70.5px) scale(0.705) translate(70.5px, 70.5px);
        margin: 0 auto;
        div {
            left: 94px;
            top: 48px;
            position: absolute;
            animation: lds-spinner linear 1s infinite;
            background: black;
            width: 12px;
            height: 24px;
            border-radius: 40%;
            transform-origin: 6px 52px;
        }
        div:nth-child(1) {
            transform: rotate(0deg);
            animation-delay: -0.916666666666667s;
        }
        div:nth-child(2) {
            transform: rotate(30deg);
            animation-delay: -0.833333333333333s;
        }
        div:nth-child(3) {
            transform: rotate(60deg);
            animation-delay: -0.75s;
        }
        div:nth-child(4) {
            transform: rotate(90deg);
            animation-delay: -0.666666666666667s;
        }
        div:nth-child(5) {
            transform: rotate(120deg);
            animation-delay: -0.583333333333333s;
        }
        div:nth-child(6) {
            transform: rotate(150deg);
            animation-delay: -0.5s;
        }
        div:nth-child(7) {
            transform: rotate(180deg);
            animation-delay: -0.416666666666667s;
        }
        div:nth-child(7) {
            transform: rotate(180deg);
            animation-delay: -0.416666666666667s;
        }
        div:nth-child(8) {
            transform: rotate(210deg);
            animation-delay: -0.333333333333333s;
        }
        div:nth-child(9) {
            transform: rotate(240deg);
            animation-delay: -0.25s;
        }
        div:nth-child(10) {
            transform: rotate(270deg);
            animation-delay: -0.166666666666667s;
        }
        div:nth-child(11) {
            transform: rotate(300deg);
            animation-delay: -0.083333333333333s;
        }
        div:nth-child(12) {
            transform: rotate(330deg);
            animation-delay: 0s;
        }
    }
`

const Spinner = () => {
    return (
        <div class="lds-css ng-scope">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <SpinnerStyle/>
        </div>
    )
}

export default Spinner;