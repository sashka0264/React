import React from 'react';
import styled from "styled-components";

const HeaderBlock = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        transition: color 0.8s;
        color: ${props => props.colored ? "black" : "red"}
        :hover {
            color: gray;
            cursor: pointer;
            transition: color 0.8s
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        <HeaderBlock colored>
            <h1>Kolesnikov Alexandr</h1>
            <h2>entries: 5, like it: 0</h2>
        </HeaderBlock>
    )
}

export default AppHeader;