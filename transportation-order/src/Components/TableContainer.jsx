import React, {useEffect, useState} from 'react';
import {Table, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getLocationsAction} from "../redux/actions/getLocations";
import {setLocationEnd, setLocationStart} from "../redux/actions/setLocations";
import {useSearchParams} from "react-router-dom";
import {getSelectedRowWaypointsAction} from "../redux/actions/getSelectedRowWayPoints";

const TableContainer = () => {
    const locations = useSelector(state => state.locations)
    const wayPoint = useSelector(state => state.wayPoints)
    const dispatch = useDispatch()


    let [searchParams, setSearchParams] = useSearchParams({
        page: 1,
        row: 0
    });
    const [page, setPage] = useState(searchParams.get('page'))
    const [selectedRowIndex, setSelectedRowIndex] = useState(searchParams.get('row'))

    const {Option} = Select;

    const handleChangeStart = (value) => {
        dispatch(setLocationStart(value.split(',').map(point => +point), page, selectedRowIndex))
    }

    const handleChangeEnd = (value) => {
        dispatch(setLocationEnd(value.split(',').map(point => +point), page, selectedRowIndex))
    }

    const handlePagination = (page) => {
        setPage(page);
        setSearchParams({
            page: page,
            row: selectedRowIndex
        })
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
                                               key={`${location.latitude}-${index}`}>{location.state}</Option>
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
                                return <Option value={location.geo.toString()} key={`${location.latitude}-${index}`}>{location.state}</Option>
                            })
                        }
                    </Select>
                )
            }
        }
    ];

    console.log(wayPoint);

    return (
        <Table
            dataSource={locations}
            columns={columns}
            rowClassName={(record, index = 0, page) => {
                return index === +selectedRowIndex ? 'selected' : ''
            }}
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        event.stopPropagation()
                        setSelectedRowIndex(rowIndex)
                        setSearchParams({page: page, row: rowIndex})
                        dispatch(getSelectedRowWaypointsAction(page, rowIndex, wayPoint))
                    },
                };
            }}
            pagination={{defaultPageSize: 10, onChange: handlePagination, current: +page}}
        />
    );
};

export default TableContainer;
