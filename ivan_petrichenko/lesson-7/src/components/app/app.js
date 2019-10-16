import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

export default class App extends Component {

    state = {
        randomCharView: false
    }

    onChangeRandomCharView = () => {
        this.setState({
            randomCharView: !this.state.randomCharView
        })
    }

    render() {
        const content = (this.state.randomCharView) ? <RandomChar/> : null;
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
                            <Button color="info" onClick={this.onChangeRandomCharView}>Показать рандомного персонажа</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};
