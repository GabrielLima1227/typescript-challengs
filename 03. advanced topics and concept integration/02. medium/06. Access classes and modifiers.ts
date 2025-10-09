class Person {
    public name: string;
    private email: string;
    protected salary: number;

    constructor(name: string, email: string, salary: number) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
}

class Employee extends Person {
    constructor(name: string, email: string, salary: number) {
        super(name, email, salary);
    }
}

const emp = new Employee("Gabriel", "gabriel@email.com", 5000);
console.log(emp.name);