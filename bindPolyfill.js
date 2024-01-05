let name = {
    firstname: "Parth",
    lastname: "Sarthy"
}

let printName = function (){
    console.log(this.firstname+ " " + this.lastname);
}

let printMyName = printName.bind(name);
printMyName();