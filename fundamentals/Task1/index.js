//for
for (let i = 0; i < 5; i++ ){
    console.log(i)
}

//while
let k = 0;
while (k < 5){
    k++
    console.log(k)
}


//for in

let num = [1,2,3,4];

for (let element in num) {
    console.log(element);
}

// for of
let n = ['1', '2', '3'];

for (let element of n) {
    console.log(element);
}

//forEach
let a = ["1", "2", "3"];
a.forEach(function(entry) {
    console.log(entry);
});

//map
let arr =[3,4,5,6];

let modifiedArr=
    arr.map(function(element){
        return element*3;
    });
console.log(modifiedArr)


'for простой споcоб вывести массив'