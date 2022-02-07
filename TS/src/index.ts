//basic types
let id: number = 5
let company: String = 'Traversy Media'
let ispublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true,'hello']

//tuple
let person: [number, string, boolean] = [1, 'hi', true]
//tuple array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jonah']
]

//Union
let pid: string | number
pid= '22'

//Enum
enum Direction1 
{
    Up=1,
    Down,
    Left,
    right,
}
enum Direction2
{
    Up='Up',
    Down='Down',
    Left='Left',
    right='Right',
}
//console.log(Direction2.Left)

// Objects
type User = {
    id: number
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addnum(x:number, y:number): number {
    return x+y
}

//console.log(addnum(1,9))

// Void
function log(message: string | number): void{
    console.log(message)
}

// Interface

interface UserInterface      {
    id: number
    name: string
    age?: number
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
}

//type Point = number | string
//const p1: Point= 1

// user1.id = 5 with this we can change the value of user1 id to 5 from 1 as age is an optional property it is possible, if the age is not an optional property then there will be an error

interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y


interface PersonInterface      {
    id: number
    name: string
    register(): string
}


// Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
            this.id= id
            this.name = name
        }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2,  'Mike')

//brad.id=5  // we cant access to id if they are in private or protected from outer classs

// Subclass
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3 ,'Shawn','Developer')
console.log(emp.name)
 console.log(emp.register())

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray= getArray<number>([1,2,3,4])
let stringArray= getArray<string>(['Brad','John','Jill'])

//numArray.push('hello') //error
//stringArray.push(1) //error

