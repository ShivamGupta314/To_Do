const mongoose=require("mongoose");

mongoose.connect("")
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

