import React, { useState } from 'react'

function Tabular() {
    const content= [
        ['Anuja','Bhakti','Anish'],
        ['Apple','Banana', 'Cherry'],
        ['Dog','Cat','Elephant']
    ]
    const [contentIndex, setContentIndex] = useState(1);
    return (
    <>
    <div className='card'>
        <div className='card-body'>
        <h3>Tabular Data</h3>
        <button className="btn btn-primary ml-2 pr-4"onClick={() => setContentIndex(0)}>Content 1</button> 
        <button className="btn btn-primary ml-2 pr-4" onClick={() => setContentIndex(1)}>Content 2</button> 
        <button className="btn btn-primary ml-2 pr-4" onClick={() => setContentIndex(2)}>Content 3</button>
        </div>
        <ul>
           {content[contentIndex].map((ele,index)=>(
            <li key={index}>{ele}</li>
           ))}
        </ul>
    </div>
    </>
    )
}

export default Tabular
