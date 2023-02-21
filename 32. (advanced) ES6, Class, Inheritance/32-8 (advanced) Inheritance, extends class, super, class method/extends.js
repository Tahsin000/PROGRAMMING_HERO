class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedBack(){
        console.log(`${this.name} thanks you for your feebback.`);
    }
}
class Instructor extends TeamMember{
    
    
    designation = 'web course Instructor';
    team = 'web team';
    tech;
    constructor(name, location){
       super(name, location);
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`);
    }
    startSupporSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
    
}
class Developer extends TeamMember{
   
    designation = 'web course Instructor';
    team = 'web team';
    tech;
    constructor(name, location, tech){
       super(name, location, tech);
       this.tech = tech;
    }
    provideResume (feature){ 
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent (version) {
        console.log(`please release the version ${version}`);
    }
}
class JobPlacement extends TeamMember{
   
    designation = 'web course Instructor';
    team = 'web team';
    region;
    constructor(name, location, region){
       super(name, location);
       this.region = region;
    }
    provideResume (feature){ 
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent (version) {
        console.log(`please release the version ${version}`);
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedBack();

const bipasha = new JobPlacement ('bipasha', 'kolkata', 'india');
console.log(bipasha);