class teamMembar {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback !`);
    }
}
class Instructor extends teamMembar {
    position = 'web development course instructor';
    team = 'web Team';

    constructor(name, location) { // deafult Name: constructor!
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start support session at ${time}`);
    }
    createQuiz(moduleNumber) {
        console.log(`create a quiz for ${moduleNumber}  module`);
    }

}
class Developer extends teamMembar {

    position = 'web development course instructor';
    team = 'web Team';
    tech;
    constructor(name, location, tech) { // deafult Name: constructor!
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please Develop The ${feature}`);
    }
    relese(varsion) {
        console.log(`Please relese The ${varsion}`);
    }
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback !`);
    }
}


class JobPlacement extends teamMembar {
    position = 'job Placement Commandos';
    team = 'Job Placement';
    region;
    constructor(name, location, region) { // deafult Name: constructor!
        super(name,location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please Privide The ${feature}`);
    }
    preparesStudenrs(varsion) {
        console.log(`Please relese The ${varsion}`);
    }
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback !`);
    }
} 
// use this 
const aliya = new Developer ('aliya vhat', 'london ', 'React')
console.log(aliya);
aliya.provideFeedBack();

const bipasa = new JobPlacement ('Bipasa', 'India-kolkata', 'india');
console.log(bipasa);
bipasa.provideResume('Reasume');