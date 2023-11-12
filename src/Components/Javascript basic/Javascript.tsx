// ------------------- Infertypes
// inferTypes with means type will define automatically when initial 
// declaretion was happened
// TypeScript will automatically verify the types
let userName = 'athul raj'
// userName=0 if we use this it will shows an error
// ---------------Defining types or (Explicit Types)
let explicitName : string = 'athulraj';
let explicitNumber : number = 1000;
let explicitBoolean : boolean = true
let explicitMySkills :string[]= ['React,Js,CSS']
let explicitNumbers :number[]= [1,2,3,4,5];
let explicitMyDetails :{
    name:string;
    age:number;
    salary:number;
    is_working:boolean;
}={
    name:'Athulraj',
    age:24,
    salary:4,
    is_working:false
}
// -------------------This is the overAll explicit Types 

// Now Moving to interFace concept in TypeScript
interface MyDetailsTypes{
    name:string;
    age:number
    getName?:() => void  //getName ? is used for is it not mandatory that the function is avalable is avabile then check the types else nothing will shows
}
let Mydetails :MyDetailsTypes={
    name:'Athulraj',
    age:24
}

// ---------------------Now moving to Types
type MyProfileDetails = {
    name:string;
    age:number
}
// also similar to interface but type declare using equal interface using curlyBracket



// -------------------------Now moving to Union operator
// for multiple types in a variable
interface MyDetailsTypesUnion{
    name:string;
    age:number | string; //here is will accept number and string
    getName?:() => void  //getName ? is used for is it not mandatory that the function is avalable is avabile then check the types else nothing will shows
    // this is also knows as Optional types
}




// take an example if an array containing number and string so we have to use Union Operter
let skills : (string | number)[]=['TS',7]
// now this will make sense 

let u: GetMyDetailsFunctionTypes = { name: 'athulraj' };
// -----------------Moving to function when types is working in a function
interface GetMyDetailsFunctionTypes {
    name: string;
}
function getMyDetails(myDetails: GetMyDetailsFunctionTypes) {
    return myDetails.name;
}
getMyDetails(u);

// ----------------if we are returning a value should be like this
let myName: GetMyDetailsFunctionTypes = { name: 'athulraj' };
// -----------------Moving to function when types are working in a function
interface GetMyDetailsFunctionTypes {
    name: string;
} 
function getMyName(myDetails: GetMyDetailsFunctionTypes): string {
    return myDetails.name;
}
getMyDetails(myName);
