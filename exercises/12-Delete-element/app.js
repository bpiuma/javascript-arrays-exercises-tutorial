var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var arr = [];
    for (let i=0; i<people.length; i++) {
        if (people[i] != personName){
            arr.push(people[i]);
        }
    }
    return arr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));