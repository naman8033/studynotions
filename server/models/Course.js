const mongoose= require("mongoose");

const courseSchema = new mongoose.Schema({
  
     courseName:{
        type:String,
        required:true,
     },
     courseDescription:{
        type:String,
        required:true,
     },
     instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

     },
     whatYouWillLearn:{
        type:String,
     },
     courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section",
        }
     ],
     ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingsAndReview"
        }
     ],
     price:{
        type:String,
     },
     thumbnail:{
        type:String,
     },
     tag:{
      type:[String],
      
     },
     Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
     },
     studentEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      //   required:true,
     },
     instructions: {
		type: String,
	},
	status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    createdAt: {
		type:Date,
		default:Date.now
	},


});

module.exports=mongoose.model("Course",courseSchema);