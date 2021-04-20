let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let i=0; i<par.length; i++){
    let letra = par[i].toLowerCase();
    if (par[i] != " "){
        if (counts.hasOwnProperty(letra)) {
            counts[letra] = counts[letra] + 1
        } else {
            counts[letra] = 1;
        }
    }
}

console.log(counts);