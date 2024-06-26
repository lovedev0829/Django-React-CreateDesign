// src/SliderComponent.js
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => (
    <div style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
        <h4>Details for {data.name} (Code: {data.code})</h4>
        <p><strong>Reference:</strong> {data.reference}</p>
        <p><strong>Optimized:</strong> {data.optimized}</p>
        <p><strong>Data:</strong> {data.additionalInfo}</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
);


const MixDesignTable = ({ data }) => {

    const columns = [
        { name: 'Code', selector: row => row.code },
        { name: 'Name', selector: row => row.name },
        { name: 'Reference', selector: row => row.reference },
        { name: 'Optimized', selector: row => row.optimized },
    ];
    return (
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    );

    /*
    const data = [
        {
            "code": "HNTEST0001",
            "name": "Cement",
            "reference": 20,
            "optimized": 282,
        },
        {
            "code": "HNTEST0002",
            "name": "Cement",
            "reference": 45,
            "optimized": 282,
        },
        {
            "code": "HNTEST0003",
            "name": "Cement",
            "reference": 12,
            "optimized": 282,
        },
        {
            "code": "HNTEST0004",
            "name": "Cement",
            "reference": 34,
            "optimized": 282,
        },
        {
            "code": "HNTEST0005",
            "name": "Cement",
            "reference": 90,
            "optimized": 282,
        },
        {
            "code": "HNTEST0006",
            "name": "Cement",
            "reference": 85,
            "optimized": 282,
        },
    ]
    */


    // Filter function 
    //const filteredItems  = data.filter(data => data.reference > 0 || data.reference < props.range )

    // Update the reference values based on props.range
    /*
    const updatedData = data.map(item => ({
        ...item,
        reference: props.range
    }));

    return (
        <DataTable
            columns={columns}
            data={updatedData}
        />
  );
  
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
    */

};

export default MixDesignTable