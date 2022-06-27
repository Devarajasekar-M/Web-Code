/* 
   Arithmetic expression is a combination of...
   Operands (values, variables, etc.)
   Operators (+ - * / %)
   That can be evaluated to a value
   Ex. y = x + 5;
*/

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;
students = students ** 2; // 2-> represents multiple count

console.log(students);

//Compound assignment 
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students %= 2;

students %= 7;
console.log(students)

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 2) * (3 + 4);

console.log(result);