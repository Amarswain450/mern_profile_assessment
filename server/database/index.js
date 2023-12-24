const mongoose = require("mongoose");

const connect = async () => {
    try{
        const response = await mongoose.connect(process.env.MONGO_DB_URL);
        if(response){
            console.log("Database connected...");
        }
    }catch(error){
        console.log("Database not connected...");
    }
}

module.exports = connect;