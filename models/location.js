import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  location: { type: String },
  amTime: { type: String }, // AM timing
  pmTime: { type: String }, // PM timing
});

export default mongoose.models.Location ||
  mongoose.model("Location", locationSchema);
