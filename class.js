// p:01
/**
class Instructor {
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location) { // constructor Default , so no changed it.
        this.name = name;
        this.location = location
    }
    startSupportSession(time) {
        console.log(`start support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`create quizs for ${module}`);
    }
}
const rahul = new Instructor('rahul', 'badda-motijil');
console.log(rahul);
rahul.createQuiz(60);


// P:02 nije nije similar tai 
class MeInstructor {
    name;
    designation = 'web development course ';
    team = 'web team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`star support at ${time}`);
    }
    createQuiz(moduleNumber) {
        console.log(`Creaet Module for ${moduleNumber}`);
    }
}
const sayef = new MeInstructor('sayef','hijolTola Sarder Bari');
console.log(sayef);
sayef.startSupportSession('11 AM');
sayef.createQuiz(30)
 */
// P:03 nije nije ager tai
class Instructor {
    name;
    position = 'web development course instructor';
    team= 'web Team';
    phoneNumber;
    constructor(name, phoneNumber){ // deafult Name: constructor!
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    startSupportSession(time){
        console.log(`start support session at ${time}`);
    }
    createQuiz(moduleNumber){
        console.log(`create a quiz for ${moduleNumber}  module`);
    }
}
const sayed = new Instructor('jabedul Alom', '01717173366');
console.log(sayed);
// P:04 nije nije create kore koro