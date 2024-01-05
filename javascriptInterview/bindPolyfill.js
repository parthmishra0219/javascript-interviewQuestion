let name= {
    firstname: "Parth",
    lastname: "Sarthy"
}

let printName = function (hometown,state){
    console.log(this.firstname+ " " + this.lastname + " ," + hometown+" ," + state);
}

let printMyName = printName.bind(name,"gaya");
printMyName("Bihar");


Function.prototype.mybind = function(...args){
    let obj = this,
    params =args.slice(1);
    return function(...args2){
       obj.apply(args[0],[ ...params,...args2]);
    }

}

let printMyName2 = printName.mybind(name, "gaya");
printMyName2("Bihar");
