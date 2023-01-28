#! /usr/bin/env node
class student {
    fullname;
    static schoolname = "xyz school";
    schoolcodeno = 5555;
    constructor(fullname) {
        this.fullname = fullname;
    }
    getinfo() {
        console.log(`fullname ${this.fullname}  school : ${student.schoolname}`);
    }
    static sayhello() {
        console.log(`how r u`);
    }
}
let st = new student("samina");
st.getinfo();
console.log(student.sayhello());
export {};
