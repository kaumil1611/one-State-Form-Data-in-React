import React from 'react';
import { Table } from 'reactstrap';
const DisplayTabel = ({onPassData}) => {
    return (
            <Table border={1} align='center'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {onPassData.map((data)=>{
                        return(
                            <tr key={data.id}> 
                                <td>{data.title}</td>
                                <td>{data.amount}</td>
                                <td>{`${data.date.getDate()}-${data.date.getMonth() + 1}-${data.date.getFullYear()}`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    )
}

export default DisplayTabel;
