const person1 = { name:'xyz',
age:10,
address:'pune'}
console.log(person1);

A = person1;
A.name='abc';
A.address ='mumbai';

console.log(A);

for(let key in person1){
    val = person1[key];
    console.log([key].person1);
}

