const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect(process.env.MONGO_URL);

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

