import React from 'react';
import DisplayTabel from './DisplayTabel';
import ChatFilter from '../DropDown/ChatFilter';

const DisplayAllData = ({onPassData}) => {
    if(onPassData.length === 0){
        return <h2>Please Enter Data</h2>
    }
    return (
        <div>
            <DisplayTabel onPassData={onPassData} />
            <ChatFilter />
        </div>
    )
}

export default DisplayAllData;
