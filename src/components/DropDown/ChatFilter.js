import React from 'react'

const ChatFilter = () => {
    return (
            <select onChange={changeHandler}>
                <option value=''>Select Value</option>
                <option value='BarChart'>Bar Chart</option>
                <option value='PieChart'>Pie Chart</option>
            </select>
    )
}

export default ChatFilter;
