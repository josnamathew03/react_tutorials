export
let age: number = 20;

type Employee = {
    readonly id: number,
    name: string,
    retire:(date: Date) => void
}

let employee: Employee = {
    id :1, 
    name: 'Miss all sunday',
    retire(date: Date) {
        console.log(date)
    }
}

employee.retire(new Date())


function kgToLbs(weight: number | string){
    if(typeof weight === 'number') //narrowing
        return weight*2.2
    else{
        return Number(weight) * 2.2
    }
        
}

console.log(kgToLbs('45'))

let weight: number & string

type Draggable = {
    drag : ()=> void
}

type Resizable = {
    resize : ()=> void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget ={
    drag ()  {},
    resize () {}
}

type Quantity = 50| 100
let quantity: Quantity = 100

function greet(name: string | null | undefined){
    if(name)
        console.log(name.toLocaleUpperCase)
    else
        console.log('hola!')
}
greet(undefined)

function arraygeneric<T>(arr: T[]): T {
    console.log(arr)
}
arraygeneric([1,2,3])
arraygeneric(['ji','rfj'])





