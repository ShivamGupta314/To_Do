const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://shivamgupta34100:JzDhwCaTUN05AU8t@cluster0.vrmyc.mongodb.net/")
const userSchema= mongoose.Schema({
      title : String,
      description : String,
      completed : Boolean,
      update : Boolean
    
})
const todo= mongoose.model('todos',userSchema);
module.exports={
    todo
}

