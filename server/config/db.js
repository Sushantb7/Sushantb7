import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('Database connected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/Hire me`)
    
}
 export default connectDB