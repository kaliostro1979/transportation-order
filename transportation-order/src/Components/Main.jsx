import React from 'react';
import TableContainer from "./TableContainer";
import Map from "./Map";
import Split from 'react-split'


const Main = () => {

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
                <TableContainer/>
                <Map/>
            </Split>
        </div>
    );
};

export default Main;
