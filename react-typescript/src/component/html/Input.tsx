type inputProps = React.ComponentProps<'input'>
const Input = (allprops: inputProps) => {
  return (
    <div>
      <input {...allprops}/>
    </div>
  )
}

export default Input
