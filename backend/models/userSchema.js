import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 300
        },
        password: {
            type: String,
            required: true,
            min: 4,
            max: 20,
        },
        phone: {
            type: Number,
            required: true
        },
        role: {
            type: String,
            required: true
        },

        //For Agggregator Accounts
        business_id: {
            type: String,
        },
        business_cac: {
            type: String,
        },
        availability: {
            type: String,
        },
        //
        //
        //
        establishment_type: {
            type: String,
        },
        sex: {
            type: String,
        },
        dob: {
            type: Date
        },
        occupation: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        nationality: {
            type: String,
        },
        point_balance: {
            type: String,
        },
        user_img: {
            type: String,
        },
    }
, {timestamps: true});

export const User =  mongoose.models.User || mongoose.model("User", userSchema);