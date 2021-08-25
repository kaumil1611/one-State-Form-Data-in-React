import React, { useState } from 'react';
import { Button } from 'reactstrap';
import FormChart from "./FormChart";

const NewChart = ({getDatas}) => {
    const [isAdd, setIsAdd] = useState(false);

    const onDataGetHandler = (formData)=>{
        const formDataValues={
            id: Math.random().toString(),
            ...formData,
        }
        getDatas(formDataValues);
        setIsAdd(false);
    }

    return (
        <div>
            {!isAdd && (<Button color='primary' style={{marginTop: '50px', marginBottom: '50px'}} onClick={()=> setIsAdd(true)}>Add New Data</Button>)}

            {isAdd && (<FormChart onDataGet={onDataGetHandler} onCancel={()=> setIsAdd(false)} />)}
        </div>
    )
}

export default NewChart;