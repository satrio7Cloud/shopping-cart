require("dotenv").config();
const mongose = require("mongoose");

const connectDB = async () => {
    try {
        await mongose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connecttion Success")
    } catch(error) {
        console.log("MongoDB Connection Error!:" + error)
        process.exit(1);
    }
};

module.exports = connectDB;