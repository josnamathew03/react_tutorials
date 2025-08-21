export
    let mess = 'hello world';
let mess1 = 'welcome back';
console.log(mess, mess1);

let isBeginer: boolean = true;
let total: number = 3;
let name: string = 'jos';

let sentance: string = `i am ${name}
i am a beginner in typescript`;

console.log(sentance);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean | null = null;
let myName: string | undefined = undefined;

let list1: number[] = [1, 2];
let list2: Array<number> = [1, 2];

let person1: [string, number] = ['chris', 22];

enum colors {
    red = 5, green = 3, blue
};
let c: colors = colors.green;
console.log(c);

let randomValue: any = 10;
randomValue = true
randomValue = 'anyyyyy'



let myVariable: unknown = 'srtttt';
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" && "name" in obj
}
if (hasName(myVariable)) {
    console.log(myVariable.name);

}

(myVariable as string).toUpperCase() // my variable should be treated as a string and the properties can be then applied
