import Tour from '../models/Tour.js';



// Create Tour

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save();

        res.status(200).json({ success: true, message: "Successfully Created", data: savedTour });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Create. Try Again" });
    }
};

// Update Tour

export const UpdateTour = async (req, res) => {


    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true })

        res.status(200).json({ success: true, message: "Successfully Updated", data: updatedTour });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Updated. Try Again" });
    }
};






export const deleteTour = async (req, res) => {

    const id = req.params.id

    try {
       await Tour.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully Deleted"});

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Delete. Try Again" });
    }
};


// get single tour 
export const getSingleTour = async (req, res) => {


    const id = req.params.id

    try {
       const singleTour = await Tour.findById(id).populate('reviews');

        res.status(200).json({ success: true, message: "Successfully Get", data:singleTour });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Get. Try Again" });
    }
};





export const getAllTour = async (req, res) => {

        // pagination

        const page = parseInt(req.query.page);

    try {
        const getAll = await Tour.find({})
        .populate('reviews')
        .skip(page * 8)
        .limit(8);
 
         res.status(200).json({ success: true, count:getAll.length, message: "Successfully Get All Data", data:getAll });
 
     } catch (err) {
         res.status(500).json({ success: false, message: "Failed To Get All Data. Try Again" });
     }
};



export const getTourBySearch = async(req,res) => {

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize =parseInt(req.query.maxGroupSize)

    try {

        const tours = await Tour.find({ city, distance:{$gte : distance},
        maxGroupSize:{$gte:maxGroupSize },
     })
     .populate('reviews');

        res.status(200).json({ success: true, message: "Successfully Get All Data", data:tours });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed. Try Again" });
    }
}




export const getFeaturedTour = async (req, res) => {


try {
    const getAll = await Tour.find({featured:true})
    .populate('reviews')
    .limit(8);

     res.status(200).json({ success: true,message: "Successfully Get All Data", data:getAll });

 } catch (err) {
     res.status(500).json({ success: false, message: "Failed To Get All Data. Try Again" });
 }
};



export const getTourCount = async(req,res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data:tourCount });
        
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Get All Data. Try Again" });
    }
}
