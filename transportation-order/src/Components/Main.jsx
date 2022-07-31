import React, {useEffect} from 'react';
import TableContainer from "./TableContainer";
import Map from "./Map";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedWaypointsAction} from "../redux/actions/setSelectedWayPoints";
import Split from 'react-split'


const Main = () => {
    const wayPoint = useSelector(state => state.wayPoints)
    const selectedWaypoints = useSelector(state => state.selectedWaypoints)
    const dispatch = useDispatch()

    useEffect(() => {
        if (wayPoint.start && wayPoint.end) {
            dispatch(setSelectedWaypointsAction(wayPoint))
        }
    }, [dispatch, wayPoint])


    return (
        <div className={'container'}>
            <Split
                direction={'horizontal'}
                sizes={[25, 75]}
                gutterSize={5}
                className={'flex'}
                style={{display: 'flex', height: '80vh', overflow: 'hidden', paddingTop: '100px'}}
                cursor="col-resize"
                minSize={250}
                maxSize={[500, Infinity]}
                dragInterval={0.2}
            >
                <TableContainer wayPoint={wayPoint} selectedWaypoints={selectedWaypoints}/>
                <Map/>
            </Split>
        </div>
    );
};

export default Main;
