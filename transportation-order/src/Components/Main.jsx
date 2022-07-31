import React from 'react';
import {Col, Row} from "antd";
import TableContainer from "./TableContainer";
import Map from "./Map";

const Main = () => {
    return (
        <div className={'.container'}>
            <Row>
                <Col span={8}>
                    <TableContainer/>
                </Col>
                <Col span={16}>
                    <Map/>
                </Col>
            </Row>
        </div>
    );
};

export default Main;