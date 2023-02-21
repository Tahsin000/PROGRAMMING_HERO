const student = {
    name:'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks:{
        math: 78,
        physics: 89,
        chemistry: 65,
    }
}
const chemistry = student.marks.chemistry;
const subject = 'chemistry';
const chemistry1 = student.marks[subject];
console.log(chemistry1);