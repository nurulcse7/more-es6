// syntactic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai')
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);
/*print:
Instructor {
  name: 'aamir',
  designation: 'Web Course Instructor',
  team: 'web team',
  location: 'mumbai'
}
start the support session at 9.00
please create quiz for module 60
*/

const solaiman = new Instructor('Solaiman Khan', 'dhaka')
console.log(solaiman);
/*print:
Instructor {
  name: 'Solaiman Khan',
  designation: 'Web Course Instructor',
  team: 'web team',
  location: 'dhaka'
}
*/