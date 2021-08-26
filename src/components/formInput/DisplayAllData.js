import React, { useState } from 'react';
import DisplayTabel from './DisplayTabel';
import ChatFilter from '../DropDown/ChatFilter';
import ChartDisplay from '../Chart/ChartDisplay';
import { Container, Row, Col } from 'reactstrap';

const DisplayAllData = ({onPassData}) => {
    const [selectChartValue,setselectChartValue] = useState('');
    if(onPassData.length === 0){
        return <h2>Please Enter Data</h2>
    }
    return (
        <Container>
            <Row xs="1">
                <Col><DisplayTabel onPassData={onPassData} /></Col>
            </Row>
            <Row xs="3">
                <ChatFilter onChartFilter={(selectedChartData)=>{setselectChartValue(selectedChartData.target.value)}}/>
            </Row>
            <Row xs="1">
                <ChartDisplay onDataValue={onPassData} onSelectedChart={selectChartValue} />
            </Row>
         </Container>
       
    )
}

export default DisplayAllData;
