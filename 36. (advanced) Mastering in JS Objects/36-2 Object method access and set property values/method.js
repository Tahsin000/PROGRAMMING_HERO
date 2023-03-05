const student = {
    name: 'kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'gematry'],
    exam : function(){
        return this.name + `is participating in an exam`;
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
console.log(reExam);
const remaining = student.treatDey(900);
console.log(remaining);