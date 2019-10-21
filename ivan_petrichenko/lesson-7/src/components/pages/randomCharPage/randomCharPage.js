import React, {Component} from 'react';
import {Col, Row, Button} from 'reactstrap';
import styled from 'styled-components';
import ErrorMessage from "../../errorMessage/errorMessage";
import RandomChar from "../../randomChar/randomChar";

const StyledButton = styled(Button)`
    margin-bottom: 40px;
`

export default class RandomCharPage extends Component {
    
    state = {
        error: false,
        randomCharView: false,
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
        )
    }
}