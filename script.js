class person{
    constructor(name, birthyear, gender) {
        this.name = name;
        this.birthyear = birthyear;
        this.gender = gender; 
        }
    
        static greet() {
            console.log("Hello how are you?");
        }
    }
calculateAge = (birthyear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthyear;
};
    console.log("Hello how are you?");



let Jon = new person("Jon", 1989, "Male");
let JonDuplicate = new person("Jon, 1989, 'Male'");
console.log(Jon);




let Person = function(name, gender, birthyear) {
    this.name = name;   
    this.gender = gender
    this.birthyear = birthyear;
}

let mary = new Person("Mary, Female, 1990");
console.log(mary);
mary.calculateAge
person.greet();
console.log('Mary');
