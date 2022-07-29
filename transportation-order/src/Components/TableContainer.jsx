import React from 'react';
import {Table} from "antd";

const TableContainer = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Alaska'
        },
        {
            key: '2',
            name: 'Nevada'
        },
    ];

    const columns = [
        {
            title: 'Start Point',
            dataIndex: 'start-point',
            key: 'start'
        },
        {
            title: 'End Point',
            dataIndex: 'end-point',
            key: 'end',
        }
    ];

    return (
        <Table dataSource={dataSource} columns={columns} />
    );
};

export default TableContainer;