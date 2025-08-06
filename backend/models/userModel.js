import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    }
},{ minimize: false,timestamps: true },// Prevent mongoose from removing empty objects
 );

const UserModel = mongoose.models.user || mongoose.model("User", userSchema); // Create the model if it doesn't exist

export default UserModel;
