const friends = [0,1,2,"asd","asdfg",[9,8,"a","b"]]
console.log(friends);
const years = new Array(1992,1996,2000,2004);
years[3]="jay"
console.log(years[years.length-1]);
console.log(friends[friends.length-1]);
console.log(friends[5][0]);
console.log("test Kiran");

const jonas ={
    firsstName:"jonas",
    lastName:"asdf",
    age:2037-1990,
    job:"teacher",
    friends:["a","b",1,2]
}

console.log(jonas.job,jonas.age,jonas.friends[0]);

const interestedIn = prompt("what do you want to know abou jonas? job, friends")

if (jonas[interestedIn]){
    console.log(jonas[interestedIn])
}
else alert("wrong entry")
console.log("completed");