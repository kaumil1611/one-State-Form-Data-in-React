import React from 'react'

const ChatFilter = ({onChartFilter}) => {
    const changeHandler = (event)=>{
        onChartFilter(event);
    }
    return (
            <select onChange={changeHandler}>
                <option value=''>Select Value</option>
                <option value='BarChart'>Bar Chart</option>
                <option value='PieChart'>Pie Chart</option>
            </select>
    )
}

export default ChatFilter;
