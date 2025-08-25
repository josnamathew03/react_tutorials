type ListProps<T> ={
    items: T[]
    clickHandle: (value: T) => void
}
const ListRendering =<T extends {}>({items, clickHandle}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {
        items.map((item, index)=>{
            return (
                <div onClick={()=> clickHandle(item)} key={index}>
                    {/* {item} */}
                    {JSON.stringify(item)} 
                </div>
            )
        })
      }
    </div>
  )
}

export default ListRendering
