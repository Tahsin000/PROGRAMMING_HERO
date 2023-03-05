const kodomAli = {
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
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam ',
    money: 8000
}
const result2 = kodomAli.exam.call(badamAli);
dd(result2);
const badamMony = kodomAli.treatDey.call(badamAli, 400, 30);
const badamMony2 = kodomAli.treatDey.call(badamAli, 400, 30);
dd(badamMony, badamMony2);



function dd (x, y){console.log(x, y)};