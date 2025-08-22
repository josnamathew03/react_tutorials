// import React from 'react'
type styleProp = {
    // styleHead: {

    //     border: string,
    //     padding: string
       
    // }
    styleHead : React.CSSProperties
}

const Container = ({styleHead}: styleProp) => {
    return (
        <div>
            <h2 style={styleHead}>styling heading</h2>
        </div>
    )

}


export default Container
