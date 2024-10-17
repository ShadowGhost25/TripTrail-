import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
})

const budgetItemSchema = new mongoose.Schema({
  transport: { type: Number, required: true },
  accommodation: { type: Number, required: true },
  food: { type: Number, required: true },
})

const routeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    places: {
      type: [placeSchema],
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    budget: {
      type: [budgetItemSchema],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Route', routeSchema)
