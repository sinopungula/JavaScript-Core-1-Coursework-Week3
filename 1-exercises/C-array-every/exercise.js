/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];


var namesInGroup = group.every(name => students.includes(name));


  if (namesInGroup) {
    console.log("The group contains only students");
} else {
    console.log("The group does not contain only students");
}

// var groupIsOnlyStudents = function (){
//   return group.every();                                                                                                                                                                                                        t)
//   if (groupIsOnlyStudents) {

//}

//} complete this statement



/* EXPECTED RESULT */

// The group does not contain only students
