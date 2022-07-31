import React, {useEffect, useState} from 'react';
import {Table, Select, Radio} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getLocationsAction} from "../redux/actions/getLocations";
import {setLocationEnd, setLocationStart} from "../redux/actions/setLocations";
import {selectRowAction} from "../redux/actions/selectRow";

const TableContainer = () => {
    const locations = useSelector(state => state.locations)
    const selectedRowIndex = useSelector(state => state.selectedRow)
    const dispatch = useDispatch()

    const {Option} = Select;

    const handleChangeStart = (value)=>{
        dispatch(setLocationStart(value.split(',').map(point=>+point)))
    }

    const handleChangeEnd = (value)=>{
        dispatch(setLocationEnd(value.split(',').map(point=>+point)))
    }

    useEffect(()=>{
        dispatch(getLocationsAction())
    }, [dispatch])

    useEffect(()=>{
        if (locations.length){
            dispatch(setLocationStart(locations[0].geo))
            dispatch(setLocationEnd(locations[1].geo))
        }
    }, [dispatch, locations])

    const columns = [
        {
            title: 'Start Point',
            dataIndex: 'start-point',
            key: 'start',
            render: () => {
                return (
                    <Select defaultValue={locations[0].name} style={{width: 120}} onChange={handleChangeStart}>
                        {
                            locations.map(location => {
                                return <Option value={location.geo.toString()} key={location.latitude}>{location.state}</Option>
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
            render: () => {
                return (
                    <Select defaultValue={locations[1].name} style={{width: 120}} onChange={handleChangeEnd}>
                        {
                            locations.map(location => {
                                return <Option value={location.geo.toString()} key={location.latitude}>{location.state}</Option>
                            })
                        }
                    </Select>
                )
            }
        }
    ];

    return (
        <Table dataSource={locations} columns={columns} rowClassName={(record, index = 0) => {
            return index === selectedRowIndex ? 'selected' : ''
        }}
               onRow={(record, rowIndex) => {
            return {
                onClick: event => {
                    dispatch(selectRowAction(rowIndex));}, // click row
            };
        }}/>
    );
};

export default TableContainer;
