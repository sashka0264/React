import React, {Component} from 'react';
import nextId from "react-id-generator";
// Основа
import {Container} from 'reactstrap';
import {createGlobalStyle} from 'styled-components'
// CSS
import Header from '../header/header';
import RandomCharPage from "../pages/randomCharPage/randomCharPage";
import CharactersPage from "../pages/characterPage/characterPage";
import BooksPage from "../pages/booksPage/booksPage";
import HousesPage from "../pages/housesPage/housesPage";
// Компоненты
import GotService from "../services/gotService";
// Доп. сервисы

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

export default class App extends Component {

    state = {
        error: false,
        selectedChar: 130,
        selectedBook: 1,
        selectedHouse: 1
    }

    createNextId = () => {
        return nextId();
    }

    gotService = new GotService();

    componentDidCatch() {
        this.setState({error: true});
    }

    onCharSelected = (id) => {
        this.setState({selectedChar: id+41})
    }

    onBookSelected = (id) => {
        this.setState({selectedBook: id+1})
    }

    onHouseSelected = (id) => {
        this.setState({selectedHouse: id+1})
    }

    render() {
        return (
            <> 
                <GlobalStyle/>
                {/* CSS */}

                <Container>
                    <Header />
                </Container>

                <Container>
                    <RandomCharPage/>

                    <CharactersPage 
                        createNextId={this.createNextId}
                        getData={this.gotService.getAllCharacters}
                        getIdData={this.gotService.getCharacter} 
                        onItemSelected={this.onCharSelected} 
                        itemId={this.state.selectedChar} 
                    />

                    <BooksPage 
                        createNextId={this.createNextId}
                        getData={this.gotService.getAllBooks}
                        getIdData={this.gotService.getBook} 
                        onItemSelected={this.onBookSelected} 
                        itemId={this.state.selectedBook}
                    />

                    <HousesPage 
                        createNextId={this.createNextId}
                        getData={this.gotService.getAllHouses}
                        getIdData={this.gotService.getHouse} 
                        onItemSelected={this.onHouseSelected} 
                        itemId={this.state.selectedHouse}
                    />
                </Container>
            </>
        );
    };
};