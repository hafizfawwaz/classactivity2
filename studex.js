class student{
    constructor(name,matricNo,major){
        this.name=name;
        this.matricNo=matricNo;
        this.major=major;
    }
    
    get Name(){
        return this.name;
    }
    
    set Name(name){
        this.name=name;
    }
    get MatricNo(){
        return this.matricNo;
    }
    
    set MatricNo(matricNo){
        this.matricNo=matricNo;
    }
    get Major(){
        return this.major;
    }
    
    set Major(major){
        this.major=major;
    }
    get Display(){
        return this.major;
    }
    
   Display=()=>{
    console.log(`Your name is:  ${this.name}`);
    console.log(`Your Matric Number is: ${this.matricNo}`);
    console.log(`Your major is: ${this.major}`);

   }
    }
    module.exports = student;