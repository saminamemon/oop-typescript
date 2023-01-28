#! /usr/bin/env node


class student{
   public fullname :string;
    static schoolname:string  ="xyz school";
    readonly schoolcodeno :number=5555

constructor(fullname:string){
    this.fullname=fullname;
    
}
    
    getinfo(){
        console.log(`fullname ${this.fullname}  school : ${student.schoolname}`);
        
    }
static sayhello(){
    console.log(`how r u`);
    
}
    }
  
    

    
    let st = new student("samina")
    st.getinfo()
    console.log(student.sayhello());