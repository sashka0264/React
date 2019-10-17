import React, {Component} from 'react';
import GotService from "../../services/gotService";
import styled from 'styled-components';
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    img {
        width: 100%;
    }
`

const Term = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {

    gotService = new GotService();

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false, 
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140+25);
        // const id = 1000000000000000;
        // Диапазон 25-140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError); 
    }

    state = {
        char: {},
        loading: true
    } 

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        console.log("render");

        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;

        const spinner = loading ? <Spinner/> : null;

        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender</Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born</Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died</Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture</Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}