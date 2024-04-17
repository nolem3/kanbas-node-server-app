import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: String,
    course: String,
    lessons: Array
},
    { collection: "modules" });
export default moduleSchema;