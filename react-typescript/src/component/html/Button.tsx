
type buttonProp ={
    varient: 'primary' | ' secondary'
    children: string
} & Omit<React.ComponentProps<'button'>,'children'>

const Button = ({varient,children,...rest}: buttonProp) => {
  return (
    <div>
      <button className={`class-with-${varient}`} {...rest}> {children}</button>
    </div>
  )
}

export default Button
