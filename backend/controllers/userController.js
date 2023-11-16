import User from '../models/User.js';



// Create User

export const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save();

        res.status(200).json({ success: true, message: "Successfully Created", data: savedUser });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Create. Try Again" });
    }
};

// Update User

export const UpdateUser = async (req, res) => {


    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true })

        res.status(200).json({ success: true, message: "Successfully Updated", data: updatedUser });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Updated. Try Again" });
    }
};






export const deleteUser = async (req, res) => {

    const id = req.params.id

    try {
       await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully Deleted"});

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Delete. Try Again" });
    }
};



export const getSingleUser = async (req, res) => {


    const id = req.params.id

    try {
       const singleUser = await User.findById(id);

        res.status(200).json({ success: true, message: "Successfully Get", data:singleUser });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Get. Try Again" });
    }
};





export const getAllUser = async (req, res) => {

      

    try {
        const getUsers = await User.find({});
        
 
         res.status(200).json({ success: true, message: "Successfully Get All Data", data:getUsers });
 
     } catch (err) {
         res.status(500).json({ success: false, message: "Failed To Get All Data. Try Again" });
     }
};