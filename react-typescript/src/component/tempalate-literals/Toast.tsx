// position can be one of 
// left-center | left-top | left-bottom | center | center-top |center-bottom | right-center | right-top | right-bottom

type Horizontal = 'left' | 'center' | 'right'
type Vertical = 'top' | 'center' | 'bottom'

type ToastProps ={
    position : Exclude<`${Horizontal}-${Vertical}`,'center-center'> | 'center' //to include center and to exclide 'center-center'
}

const Toast = ({position}: ToastProps) => {
  return (
    <div>
      Toast notification positon -  {position} 
    </div>
  )
}

export default Toast
