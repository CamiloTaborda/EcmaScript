var lastName = "Camilo";
lastName = "Cristian";
console.log(lastName);

let fruit = "banano";
fruit = "manzana";
console.log(fruit);

const animal = "Dog";
animal = "Cat";
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "manzana"; /*function scope */
        let fruit2 = "banano"; /*block scope */
        const fruit3 = "pera"; /*block scope */
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

