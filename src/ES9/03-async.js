async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log("Hello");

async function array(arr) {
   for await (let value of arr) {
    console.log(value);
   }
}

const names = array(["camilo", "oscar", "david"]);
console.log("after");