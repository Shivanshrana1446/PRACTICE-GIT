const mongoose = require("mongoose");

const {Schema} = mongoose ;

const ProjectSchema = new Schema({
    userId: {type: Schema.Types.ObjectId } ,
    imageUrl  : {type: String , required:true} ,
    projectOwner: {type: String , required:true} ,
    projectTitle : {type: String , required:true} ,
    description : {type: String , required:true} ,
    techStack : {type: [String] , required:true} ,
    workExperience : {type: [String] , required:true} ,
    projectContributor: {type: [String] } ,
    isActive: {type: Boolean , required:true , default: true} ,

}, 
{timestamps: true});

module.exports = mongoose.model("Project", ProjectSchema);