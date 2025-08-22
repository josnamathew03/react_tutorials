// import React from 'react'

// const inputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
//     console.log(e.target.value)
// }
// const InputChange = () => {
//   return (
//     <div>
//       <input onChange={(e)=>inputHandler(e)}/>
//     </div>
//   )
// }

// export default InputChange



import React from 'react'

type inputProp = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}


const InputChange = (props: inputProp) => {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.handleChange}/>
        </div>
    )
}

export default InputChange
