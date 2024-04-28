import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String, 
    required: true,
  },
  profilePicture:{
    type: String, 
    default: "https://t4.ftcdn.net/jpg/04/62/63/65/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;