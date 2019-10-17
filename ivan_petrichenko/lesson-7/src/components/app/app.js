import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import styled, {createGlobalStyle} from 'styled-components'
import nextId from "react-id-generator";

const GlobalStyle = createGlobalStyle`
    body {
        padding-bottom: 80px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: none;
        color: inherit;
    }
    a:focus {
        text-decoration: none;
        color: inherit;
    }
    a:active {
        text-decoration: none;
        color: inherit;
    }
`

const StyledButton = styled(Button)`
    margin-bottom: 40px;
`

export default class App extends Component {

    state = {
        randomCharView: true,
        selectedChar: 130
    }

    // createNextId = () => {
    //     console.log(nextId);
    // }

    onChangeRandomCharView = () => {
        this.setState({
            randomCharView: !this.state.randomCharView, 
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const content = (this.state.randomCharView) ? <RandomChar/> : null;
        const buttonText = (this.state.randomCharView) ? "Скрыть" : "Показать";

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
                            <StyledButton color="info" 
                                onClick={this.onChangeRandomCharView}>
                                {buttonText} рандомных персонажей
                            </StyledButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList createNextId={this.createNextId} onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};
