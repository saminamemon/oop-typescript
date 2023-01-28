#! /usr/bin/env node
class Birds{
    name : string;
    
    constructor(name:string){
        this.name=name
        
    }
    eat(a:string){
        console.log(`${this.name} eats ${this.eat}`);
        
    }
}
class  Dove extends Birds{
    
    constructor(name:string){
    
        super(name)
        
    }
    eat(a="grain"){
        console.log( ` ${this.name}eats ${a}` );
        super.eat(a)
    }
}
let dove=new Dove("lolo")
dove.eat()
dove.name