import React, {Component} from 'react';
import GotService from "../../services/gotService";
import styled from 'styled-components'
import Spinner from "../spinner/spinner";

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

// const SelectError = styled.div`
//     color: #fff;
//     text-align: center;
//     font-size: 26px;
// `

const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export {Field}

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            });
        // this.foo.bar = 0;
    }

    render() {
        if (!this.state.char) {
            return <CharDetailsBlock><Spinner/></CharDetailsBlock>
        }
        
        const {char} = this.state;
        const {name} = this.state.char;
 
        return (
            <CharDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char});
                        })
                    }
                </ul>
            </CharDetailsBlock>
        );
    }
}