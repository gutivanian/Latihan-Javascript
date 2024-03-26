export const nama = 'John Doe';
export const umur = 30;
export const alamat = 'Jakarta';

export function sayHello(message) {
    console.log(`Hello, ${message}`);
}

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}