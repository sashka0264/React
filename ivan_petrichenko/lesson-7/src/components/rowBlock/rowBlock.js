import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return (
        <div>
            <Row>
                <Col md='6'>
                    {left}
                </Col>
                <Col md='6'>
                    {right}
                </Col>
            </Row>
        </div>
    )
}

export default RowBlock;