import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    pic: { type: String, required: true }, // Main image
    images: { type: [String], required: true }, // Array of additional image URLs (renamed from 'otherPics')
    pickUp: { type: String, required: true },
    drop: { type: String, required: true },
    itinerary: [{
        day: { type: Number, required: true },
        description: { type: String, required: true },
        activities: { type: [String], required: true }
    }],
    inclusions: { type: [String], required: true },
    exclusions: { type: [String], required: true },
    otherDetails: { type: [String], required: true },
    reviews: [{
        user: { type: String, required: true },
        rate: { type: Number, required: true, min: 0, max: 5 },
        comment: { type: String, required: true }
    }],
    topFlag: { type: Boolean, required: true, default: false },
    recommendedSeason: { type: [String], required: true, enum: ['winter', 'summer', 'monsoon'] },
}, { timestamps: true });

const tripModel = mongoose.models.Trip || mongoose.model("Trip", tripSchema);

export default tripModel;