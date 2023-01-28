#! /usr/bin/env nod
class human {
    gender;
    constructor(gender) {
        this.gender = gender;
    }
    alive() {
        console.log(this.gender + "is a alive human ");
    }
}
class animal {
    gender;
    constructor(gender) {
        this.gender = gender;
    }
    alive() {
        console.log(this.gender + "is an animal and is alive");
    }
}
class bird {
    name;
    constructor(name) {
        this.name = name;
    }
    alive() {
        console.log(this.name + "is a bird and is alive");
    }
}
class robot {
    name;
    constructor(name) {
        this.name = name;
    }
}
let Human = new human("male");
let Animal = new animal("female");
let Bird = new bird("eagle");
let Robot = new robot("r3 y6");
//Human=Animal
// Bird=Robot//error because robot don't have alive method
//Robot=Bird//ok 
console.log(Robot.name);
console.log(Human.alive());
export {};
