import React from 'react'

function Column() {
    const items = [{
        title: 'jijuif',
        id: '16'
    }]
    return (
        <>
        {items.map(item => (
            <React.Fragment key={items.id}>
                <h1>{items.title}</h1>
            </React.Fragment>
            )  )}
            <td>name</td>
            <td>age</td>

        </>
    )
}

export default Column
