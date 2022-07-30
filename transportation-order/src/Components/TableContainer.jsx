import React from 'react';
import {Table, Select} from "antd";

const TableContainer = () => {

    const { Option } = Select;

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
            key: 'start',
            render: ()=> {
                return (
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                )
            }
        },
        {
            title: 'End Point',
            dataIndex: 'end-point',
            key: 'end',
            render: ()=> {
                return (
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                )
            }
        }
    ];

    return (
        <Table dataSource={dataSource} columns={columns} />
    );
};

export default TableContainer;