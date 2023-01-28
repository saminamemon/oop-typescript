#! /usr/bin/env node
class Birds {
    name;
    constructor(name) {
        this.name = name;
    }
    eat(a) {
        console.log(`${this.name} eats ${this.eat}`);
    }
}
class Dove extends Birds {
    constructor(name) {
        super(name);
    }
    eat(a = "grain") {
        console.log(` ${this.name}eats ${a}`);
        super.eat(a);
    }
}
let dove = new Dove("lolo");
dove.eat();
dove.name;
export {};
