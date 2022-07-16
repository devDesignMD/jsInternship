function square (value) {
    return value * value;
}

function double(value){
    return 2 * value;
}

function triple(value){
    return 3 * value;
}

function convert(fn, array){
    return array.map(item => fn(item));
}

const initialArray = [1,2,3,4];

console.log('initial: ', initialArray, 'square', convert(square, initialArray));
console.log('initial: ', initialArray, 'double', convert(double, initialArray));
console.log('initial: ', initialArray, 'triple', convert(triple, initialArray));
