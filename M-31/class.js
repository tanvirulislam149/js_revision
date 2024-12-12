class Teacher {
  school = "Port City School";
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  teach() {
    console.log(
      `${this.name} sir teaches us ${this.subject} in ${this.school}`
    );
  }
}

Sakib = new Teacher("Sakib", "Bangla");
console.log(Sakib);
Sakib.teach();
console.log(Sakib.school);

rakib = new Teacher("Rakib", "English");
console.log(rakib);
rakib.teach();
