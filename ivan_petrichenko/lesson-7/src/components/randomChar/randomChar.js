import React, {Component} from 'react';
import styled from 'styled-components'

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

const Term = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock className="rounded">
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Gender</Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Born</Term>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Died</Term>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
