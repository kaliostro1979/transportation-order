import React, {useEffect} from 'react';
import {Col, Row} from "antd";
import TableContainer from "./TableContainer";
import Map from "./Map";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedWaypointsAction} from "../redux/actions/setSelectedWayPoints";

const Main = () => {
    const wayPoint = useSelector(state => state.wayPoints)
    const selectedWaypoints = useSelector(state => state.selectedWaypoints)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (wayPoint.start && wayPoint.end){
            dispatch(setSelectedWaypointsAction(wayPoint))
        }
    }, [dispatch, wayPoint])


    return (
        <div className={'.container'}>
            <Row>
                <Col span={8}>
                    <TableContainer wayPoint={wayPoint} selectedWaypoints={selectedWaypoints}/>
                </Col>
                <Col span={16}>
                    <Map/>
                </Col>
            </Row>
        </div>
    );
};

export default Main;
