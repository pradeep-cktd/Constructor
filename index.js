// // Example of object constructor 
function Student(rollNo,firstName,lastName,age,cls){
this.rollNo=rollNo;
this.firstNamae=firstName;
this.lastName=lastName;
this.age=age;
this.class=cls;
}
let student= new Student(103,"Pradeep","Kumar",25,"BCA");
let student2= new Student(104,"Deepak","Kumar",28, "MCA");
// in this way we make many object.
console.log(student,student2);


