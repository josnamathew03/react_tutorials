
export type profileProps ={
    name: string
}
export const Profile = ({name}: profileProps)=>{
    return <div>Private profile compoennt. Name is {name}</div>
}