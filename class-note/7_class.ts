class PersonTS {
    name: string;
    age: number;
    readonly log: string;

    constructor(name:string, age:number, log:string) {
        this.name = name;
        this.age = age;
        this.log = log;
    }
}

let peter = new PersonTS('peter', 45, 'created');
// peter.log = 'dead'; // Cannot assign to 'log' because it is a read-only property
