const mongoose = require("mongoose");
const MyConstants = require("./MyConstants");

const uri = "mongodb://shopping_Db:shopping_db@ac-w1hrnzh-shard-00-00.qvpqvjt.mongodb.net:27017,ac-w1hrnzh-shard-00-01.qvpqvjt.mongodb.net:27017,ac-w1hrnzh-shard-00-02.qvpqvjt.mongodb.net:27017/shoppingonline?ssl=true&replicaSet=atlas-h0kxyq-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

module.exports = mongoose;