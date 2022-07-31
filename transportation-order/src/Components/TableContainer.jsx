import React, {useEffect, useState} from 'react';
import {Table, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getLocationsAction} from "../redux/actions/getLocations";
import {setLocationEnd, setLocationStart} from "../redux/actions/setLocations";
import {resetState} from "../redux/actions/resestState";
import {getSelectedRowWaypoints} from "../redux/actions/getSelectedRowWaypoints";


const TableContainer = ({selectedWaypoints}) => {
    const locations = useSelector(state => state.locations)
    const dispatch = useDispatch()

    const [selectedRowIndex, setSelectedRowIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)

    const {Option} = Select;

    const handleChangeStart = (value, options) => {
        setPrevIndex(options.row)
        if (options.row !== prevIndex) {
            dispatch(resetState())
        }

        dispatch(setLocationStart(value.split(',').map(point => +point), options.row))
    }

    const handleChangeEnd = (value, options) => {
        dispatch(setLocationEnd(value.split(',').map(point => +point), options.row))
    }

    useEffect(() => {
        dispatch(getLocationsAction())
    }, [dispatch])

    const columns = [
        {
            title: 'Start Point',
            dataIndex: 'start-point',
            key: 'start',
            render: (item, record, index) => {
                return (
                    <Select style={{width: 120}} onChange={handleChangeStart}>
                        {
                            locations.map((location) => {
                                return <Option value={location.geo.toString()}
                                               key={`${location.latitude}`} row={index}>{location.state}</Option>
                            })
                        }
                    </Select>
                )
            }
        },
        {
            title: 'End Point',
            dataIndex: 'end-point',
            key: 'end',
            render: (item, record, index) => {
                return (
                    <Select style={{width: 120}} onChange={handleChangeEnd}
                            key={index}>
                        {
                            locations.map((location) => {
                                return <Option value={location.geo.toString()} key={`${location.latitude}-${index}`}
                                               row={index}>{location.state}</Option>
                            })
                        }
                    </Select>
                )
            }
        }
    ];

    return (
        <Table
            dataSource={locations}
            columns={columns}
            rowClassName={(record, index = 0) => {
                return index === +selectedRowIndex ? 'selected' : ''
            }}
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        if (event.target.parentElement === event.currentTarget) {
                            event.stopPropagation()
                            setSelectedRowIndex(rowIndex)
                            if (selectedWaypoints.length){
                                dispatch(getSelectedRowWaypoints(selectedWaypoints, rowIndex))
                            }
                        }
                    },
                };
            }}
            pagination={false}
        />
    );
};

export default TableContainer;
