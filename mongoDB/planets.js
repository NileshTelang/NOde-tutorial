
const mongoose = require ('mongoose');

const planetSchema = new mongoose.Schema({
  name : String,
  position : {
    type : Number ,
    validate : {
      validator : v => v % 2 === 0 ,
      message : props => props.value + ' is  not an even Number',
    }
  },
})

planetSchema.methods.sayHi = function () { 
  console.log("\nHey , It's Nova ! Wanna check out the " +this.name)
}

module.exports = mongoose.model("planets",planetSchema)
