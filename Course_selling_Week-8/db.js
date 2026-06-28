require("dotenv").config();
const dns = require("node:dns");
const mongoose = require("mongoose");

// Force public DNS resolvers so Atlas SRV lookups do not depend on the local DNS server.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoUri = process.env.MONGO_URL || "mongodb+srv://Aryan2222:wXtwdvwOLnwOzyjq@cluster0.7n3ce9a.mongodb.net/";

mongoose
        .connect(mongoUri)
        .then(() => {
                console.log("MongoDB connected successfully");
        })
        .catch((error) => {
                console.error("MongoDB connection failed:", error.message);
                process.exit(1);
        });

const Schema = mongoose.Schema;

const userSchema = new Schema({
        email: {type: String, unique: true, required: true},
        password: String, 
        FirstName: String,
        LastName: String
});

const adminSchema = new Schema({
        email: {type: String, unique: true, required: true},
        password: String, 
        FirstName: String,
        LastName: String
});

const courseSchema = new Schema({
        title: String,
        description: String,
        price: Number,
        imageURL: String,
        creatorID: String
});

 
const purchaseSchema = new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref:"user"
        },
        courseId: {
            type: Schema.Types.ObjectId,
            ref:"course"
        },
});

const UserModel = mongoose.model("user", userSchema);
const AdminModel = mongoose.model("admin", adminSchema);
const CourseModel = mongoose.model("course", courseSchema);
const PurchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
        PurchaseModel
};

