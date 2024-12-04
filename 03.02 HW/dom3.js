// const adam = {
//     name: "Dias",
//     age: 17,
//     height: 175,
//     weight: 56,
//     address: "Talgar"
// }

// console.log(adam.address);

// const adam = {
//     name: "Dias",
//     age: 17,
//     height: 175,
//     weight: 56,
//     address: "Talgar",
//     songs: ["Idea", "22" , "Dias" , "Chihiro"],
//     color: ["yellow", "black" , "red"],
//     live: function(){
//         return this.name + " lives in " + this.address
//     }
// }

// console.log(adam.live());


// const adamdar = [
//     {
//         name: "Ismail", 
//         age: 15, 
//         weight: 64, 
//         address: "Alma City 5",
//         car: ["BMW", "Lexus"]
//     },
//     {
//         name: "Dias", 
//         age: 17, 
//         weight: 56, 
//         address: "Talgar",
//         car: ["Toyota mark 2", "Mercedes 300", "Volga"]
//     },
//     {
//         name: "Imangali", 
//         age: 17, 
//         weight: 69, 
//         address: "Kamenka",
//         car: ["BMW", "Tesla", "Cobalt"]
//     }
// ]

// let persons = adamdar.filter((adam) => adam.car.includes("BMW"))

// for(let adam of persons){
//     console.log(adam.name);
// }

const schools = [ 
    { 
        name: "№1 мектеп",
        district: "Алмалы", 
        students: 500 
    }, 
    { 
        name: "№2 мектеп",
        district: "Бостандық", 
        students: 700 },
    {
        name: "HaileyBury",
        district: "Almaly",
        students: 1200
    } 
];

function totalStudents(schools){
    var sum = 0
    schools.forEach(school => {
        sum += school.students
    })
    return sum
}


console.log(totalStudents(schools));


