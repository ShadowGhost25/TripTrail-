import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    places: {
        type: Number,
        require: true
    },
    notes: { 
        type: String, 
        require: true
    },
    budget: {
        type: Number,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    }
},
    {
        timestamps: true
    })
export default mongoose.model('Route', routeSchema)