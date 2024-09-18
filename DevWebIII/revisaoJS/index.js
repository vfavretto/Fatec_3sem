// function addPerson(objPerson) {
//     console.log(objPerson.age);
// }

// addPerson(person);

//console.log(person);

// const printAge = (objPerson) => {
//     const { age, name, id } = objPerson;
//     console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
// };


// const printAge = ({ age, name, id }) => {
//     console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
// };

// const people = [
//     {id: 1, name: 'John', age: 34, salary: 2000},
//     { id: 2, name: 'Jane', age: 30, salary: 1500},
//     { id: 3, name: 'Mike', age: 28, salary: 3000 },
//     { id: 4, name: 'Emma', age: 29, salary: 4500 },
//     person,
// ];

// const getById = (people, id) => {
//     const persona = people.find((p) => p.id === id)
//     return persona;
// }

// const getById = (people, id) => people.find((p) => p.id === id);

// const objPerson = getById(people, 2);

// const getById = (people=[], id=0) => {
//     return people.filter((p) => p.id === id); // Filter retorna um array das ocorrencias
// }

// const foundPerson = getById(people, 2);

// const getOlderThan16 = (people=[], age=0) => {
//     return people.filter((p) => p.age >= age);
// }

// const olderPeople = getOlderThan16(people);

// console.log(`People Older thans 16 ${JSON.stringify(olderPeople)}`);

const people = [
    {id: 1, name: 'John', age: 34, salary: 2000},
    { id: 2, name: 'Jane', age: 30, salary: 1500},
    { id: 3, name: 'Mike', age: 28, salary: 3000 },
    { id: 4, name: 'Emma', age: 29, salary: 4500 },
];

// const reajustSalary = (people=[]) => {
//     return people.map(({id, name, age, salary}) => ({
//         id,
//         name,
//         age,
//         salary: salary * 1.05
//     }));
// }