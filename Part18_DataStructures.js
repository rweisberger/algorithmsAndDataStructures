// we will implement data structures as classes, but js is not a true object- oriented language

// we make a mold to build a dataset that is 
class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let firstStudent = new Student("Rachel", "Weisberger", 37);
let secondStudent = new Student("Nora", "Weisberger", 4);


// we will add methods to our Student

class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.tardies = 0; 
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }
    markLate(){
        this.tardies += 1;
        if (this.tardies >3){
            return "You are removed from this course!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }
    addScores(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }

}

// now we are going to add static method, which can be used as a utility function on the class 
// and not on an individual instance

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}