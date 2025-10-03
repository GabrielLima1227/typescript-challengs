interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type PersonAndEmployee = Person & Employee;

const worker: PersonAndEmployee = {
    name: "Leonard Hofstadter",
    age: 30,
    employeeId: 245,
    department: "Experimental Physics"
};

console.log(worker);
