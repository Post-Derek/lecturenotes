


let car = {
    model: "Tesla",
    color: 'Black',
    year: 2020,
    batteryPowered: true,
    chargedLevel: 8,
    wheel: {
        rims:20,
        color: "SILVER",
    }

}
console.log(car.year);
console.log(typeof car);

let charged = 100
let dead = 10

if (car.chargedLevel <= dead) {
    console.log(`Needs charged`);
}
else {
    console.log(`Battery is charged`);
}

car.year = 2019; 
console.log(car.year);






