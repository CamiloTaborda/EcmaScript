function* iterate(arr) {
    for (let value of arr) {
        yield value;
 }
}

const it = iterate(["oscar", "david", "camilo", "valentina"])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);