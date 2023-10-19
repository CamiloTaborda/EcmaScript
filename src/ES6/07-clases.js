class user {
    // metodos
    greeting() {
        return "Hello, world!";
    }
};

const camilo = new user ();
console.log(camilo.greeting());
const vale = new user();
console.log(vale.greeting());

// constructor
class user {
    constructor() {
        console.log("Nuevo Usuario");
    }
    greeting(){
        return "Hello";
    }
}

const david = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Ana");
console.log(ana.greeting());

// setters getters
class user{
    constructor(name, age) {
       this.name = name;
       this.age = age;
    }
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`; 
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new user("david", 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);