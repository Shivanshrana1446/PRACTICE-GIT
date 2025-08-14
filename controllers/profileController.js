const Profile = require("../models/profileModel");

const getProfile = async(req,res) => {
    const data = await Profile.find({});
    return res.status(200).json({ 
        message: "All Profiles",
        data
    });
}

// Create Profile
const createProfile = async (req, res) => {
        const {
            imageUrl,
            summary,
            skills,
            workExperience,
            linkedinUrl,
            githubUrl,
            codingPlatforms,
            resumeUrl
        } = req.body;

        if(!imageUrl || !summary , !skills || !workExperience || !linkedinUrl || !githubUrl || !codingPlatforms || !resumeUrl) {
            return res.status(400).json({message: "Please Add all mandatory fields"});
        }
        //console.log(req.user);

        const newProfile = new Profile({
            imageUrl,
            summary,
            skills,
            workExperience,
            linkedinUrl,
            githubUrl,
            codingPlatforms,
            resumeUrl
        })

        const data = await newProfile.save() ;

        return res.status(201).json({
            message: "Profile created" ,
            data 
        });
}
const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedProfile = await Profile.findByIdAndUpdate(id, updates, { 
            new: true,
            runValidators: true
        });

        if (!updatedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.status(200).json({ 
            message: "Profile updated successfully", 
            profile: updatedProfile 
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
module.exports = {
    getProfile,
    createProfile,
    updateProfile
};