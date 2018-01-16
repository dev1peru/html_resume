
/* the valid json file uses double quotes in key and value */
var person =
{
    name: "Brad",
    age: 35,
    address: {
                street: "5 main street",
                city: "Lima"
             },
    friends: ["flu flu","jara"]
};


// convert to JSON format
//person = JSON.stringify(person);
//person = JSON.parse(person);

//console.log(person.friends[1]);


// create an array of javascript objects
var people = [
    
                {
                    name:"victor",
                    age:38
                },
                {
                    name:"caro",
                    age:36
                },
                {
                    name:"fluflu",
                    age:2
                }
             ];

console.log(people[1].age);

















