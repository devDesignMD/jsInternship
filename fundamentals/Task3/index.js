let obj ={
    with: 200,
    height: 800,
    title: "My menu"
}

function multiplyNumeric(obj) {
     for(let key in obj){
        if(typeof obj[key]== 'number')  {
         obj[key] *=2;
      }
    }
}

multiplyNumeric(obj);
console.log(obj)