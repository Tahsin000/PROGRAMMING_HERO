// syntactic sugar
class Instructor{
    name;
    location;
    designation = 'web course Instructor';
    team = 'web team';
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupporSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
}

const aamir = new Instructor('aamir', 'mumbai')
console.log(aamir);
aamir.startSupporSession('12:00 PM');
aamir.createQuiz('09:00 PM');