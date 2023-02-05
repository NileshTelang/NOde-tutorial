
const mongoose = require ('mongoose');
const planets = require("./planets")

mongoose.connect("mongodb://localhost:27017/fruitDB" , { useNewUrlParser : true  });


run()
async function run() {
    // const planet = new planets({name : "Earth" , position : 4})
    // await planet.save() or
    try {
        const  planet = await planets.create({name:"Sun" , position : 0})
        console.log(planet)
        planet.sayHi()
    } catch (e) {
        console.log(e.message)
    }

}