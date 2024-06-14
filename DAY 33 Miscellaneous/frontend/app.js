// const std1 = {
//     name: "arvind",
//     age: 23,
//     marks: 95
// }

// const std2 = {
//     name: "kitty",
//     age: 23,
//     marks: 98
// }



// 04.Object Prototypes
// let arr = [1, 3, 4, 5];
// let arr2 = [1, 3, 4, 5];
// arr.sayhello = () => {
//     console.log("hello");
// }

// arr2.sayhello = () => {
//     console.log("hello");
// }



//05. Factory Functions
// function personMaker(name, age) {
//     const person = {
//         name: "arvind",
//         age: 23,
//         talk() {
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }
//     return person;
// }
// let p1 = personMaker("arvind", 23);
// let p2 = personMaker("kitty", 23);



//06. New Operator
//CONSTRUCTOR- IT DOES NOT RETURN ANYTHING AND START WITH CAPITAL LETTER (OPTIONAL)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function () {
//     console.log(`Hi My name is ${this.name}`);
// }
// let p1 = new Person("arvind", 23);
// let p2 = new Person("kitty", 23);



//07. Classes in JS
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi My name is ${this.name}`);
//     }
// }
// let p1 = new Person("Arvind", 23);
// let p2 = new Person("Kitty", 23);
// console.log(p1);
// console.log(p2);
// console.log(p1.talk === p2.talk); //TRUE BECAUSE SAME COPY REFERING



// 08. Inheritance CONCEPTS IN JAVASCRIPT
class Person {
    constructor(name, age) {
        console.log("Person class constructos is called");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi My name is ${this.name}`);
    }
}

// class Student {
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk() {
//         console.log(`Hi My name is ${this.name}`);
//     }
// }

class Student extends Person {
    // constructor(name, age, marks) {
    //     this.name = name;
    //     this.age = age;
    //     this.marks = marks;
    // }
    // talk() {
    //     console.log(`Hi My name is ${this.name}`);
    // }
    constructor(name, age, marks) {
        console.log("Student class constructos is called");
        super(name, age); //PARENTS CLASS CONSTEUCTER IS BEING CALLED
        this.marks = marks;
    }
}
let s1 = new Student("Arvind", 23, 95);
console.log(s1);
console.log(s1.name);
console.log(s1.age);
console.log(s1.marks);
// console.log(s1.talk); // THIS WILL CALL ONLY THE FUNCTION AND THEIR METHODS
s1.talk();

// class Teacher {
//     constructor(name, age, subject) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talk() {
//         console.log(`Hi My name is ${this.name}`);
//     }
// }
class Teacher extends Person {
    constructor(name, age, subject) {
        console.log("Teacher class constructos is called");
        super(name, age); //PARENTS CLASS CONSTEUCTER IS BEING CALLED
        this.subject = subject;
    }
}
let t1 = new Teacher("Raghu", 28, "Coding");
console.log(t1);
console.log(t1.name);
console.log(t1.age);
console.log(t1.subject);


//mamol example
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded"
    }
    eat() {
        console.log("i am eating");
    }
}
class dogs extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("i am barking");
    }
    //OVERWRITING THE FUNCTION
    eat() {
        console.log("dog is eating");
    }
}
let d1 = new dogs("Taco");
console.log(d1);
d1.bark();

class cats extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("I am doing meow meow (funny)");
    }
}
let c1 = new cats("Mr. Mistoffelees.");
console.log(c1);
c1.meow();
c1.eat();



// 09. JS OOPS 11(Qs)
//Qs10. What will be the output for the following code
class Box {
    constructor(name, l, b) {
        this.name = name;
        this.l = 1;
        this.b = b;
    }
    area() {
        let area = this.l * this.b;
        console.log(`Box area is ${area}`);
    }
}

class Square extends Box {
    constructor(a) {
        super("square", a, a);
    }
    area() {
        let area = this.l * this.b;
        console.log(`Square area is ${area}`);
    }
}
let sq1 = new Square(4);
sq1.area();