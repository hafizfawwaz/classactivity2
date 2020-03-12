// Hafiz Fawwaz Bin Mohamad 1710045
const student = require('./studex.js');
const readline = require('readline');

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});


rl.question('What is your name? ', (answer) => {
    rl.question('What is your matric number? ', (answer2) => {
        rl.question('What is your major? ', (answer3) => {
       
            let stud= new student(answer,answer2,answer3);
            //let student=new Student(answer,answer2,answer3)
            stud.Display();
    
    
    rl.close();
        })
    })
    });
