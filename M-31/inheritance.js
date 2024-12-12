class Person {
  school = "Port city School";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat_food() {
    console.log("I love eating food");
  }
}

class Teacher extends Person {
  // Teacher inherits Person
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(
      `${this.name} sir teaches us ${this.subject} in ${this.school}`
    );
  }
}

Sakib = new Teacher("Sakib", 34, "Bangla");
console.log(Sakib);
Sakib.teach();
console.log(Sakib.school);

rakib = new Teacher("Rakib", 45, "English");
console.log(rakib);
rakib.teach();
