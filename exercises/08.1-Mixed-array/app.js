var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

var nuevo = [];
for (let i=0; i<mix.length; i++){
    nuevo.push(typeof mix[i]);
}
console.log(nuevo);


