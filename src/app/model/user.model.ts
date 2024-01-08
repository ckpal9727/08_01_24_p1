export interface User {
    id?:number,
    name:string,
    email:string, 
    password:string ,
    address:Adddress  
}
export interface Adddress{
    streetName:string,
    streetNumber:number
    
}