import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled, {createGlobalStyle} from 'styled-components'
import nextId from "react-id-generator";
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../characterPage/characterPage";

const GlobalStyle = createGlobalStyle`
    body {
        padding-bottom: 80px;
    }
    a {
        color: inherit;
        text-decoration: none;
        :visited {
            text-decoration: none;
            color: inherit;
        }
        :hover {
            text-decoration: none;
            color: inherit;
        }
        :focus {
            text-decoration: none;
            color: inherit;
        }
        :active {
            text-decoration: none;
            color: inherit;
        }
    }
`
const StyledButton = styled(Button)`
    margin-bottom: 40px;
`

export default class App extends Component {

    state = {
        randomCharView: false,
        error: false
    }

    createNextId = () => {
        return nextId();
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    onChangeRandomCharView = () => {
        this.setState({
            randomCharView: !this.state.randomCharView, 
        })
    }

    render() {
        const content = (this.state.randomCharView) ? <RandomChar/> : null;
        const buttonText = (this.state.randomCharView) ? "Скрыть" : "Показать";
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <GlobalStyle/>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {content}
                            <StyledButton 
                                color="primary" 
                                onClick={this.onChangeRandomCharView}>
                                {buttonText} рандомного персонажа
                            </StyledButton>
                        </Col>
                    </Row>
                    <CharacterPage createNextId={this.createNextId}/>
                </Container>
            </>
        );
    };
};
