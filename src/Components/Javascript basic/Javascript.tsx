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