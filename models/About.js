import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  paragraph1: { type: String, required: true },
  paragraph2: { type: String, required: true },
});

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;
