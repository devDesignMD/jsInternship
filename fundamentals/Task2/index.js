const startInt= 22;
const endInt= 42;
let sum = 0;
for (let i = startInt; i< endInt; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log('suma: ', sum)