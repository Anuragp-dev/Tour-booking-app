import Booking from "../models/Booking.js"; 

// booking controller

   
// create booking page of tour app controller
export const createBooking = async (req, res) => { 

    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();  

        res.status(200).json({success:true, message: "Your Tour Is Booked", data:savedBooking});

    } catch (err) {

        res.status(500).json({success:false, message: "Internal Server Error"});
        console.log(err);
    }
};

// get single booking

export const getBooking = async(req ,res ) => {
    const id = req.params.id

    try {

        const book = await Booking.findById(id);

        res.status(200).json({success:true, message: "Successful", data:book});

    } catch (err) {
        res.status(404).json({success:true, message: "Failed"});
    }
};




// get all booking 
export const getAllBooking = async(req ,res ) => {
    const id = req.params.id

    try {

        const books = await Booking.find(id);

        res.status(200).json({success:true, message: "Successful", data:books});

    } catch (err) {
        res.status(500).json({success:true, message: "Failed"});
    }
};
