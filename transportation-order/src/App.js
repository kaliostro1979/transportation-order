import Map from "./Components/Map";
import {Col, Row} from 'antd';
import TableContainer from "./Components/TableContainer";



function App() {
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
}



export default App;
