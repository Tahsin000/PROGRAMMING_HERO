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




function clickHandler(){
    console.log('inside click handler ', this);
}
document.getElementById('btn-click-2').addEventListener('click', function(){
    console.log(this);
});