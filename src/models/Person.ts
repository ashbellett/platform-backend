import mongoose from 'mongoose';

export default mongoose.model(
    'Person',
    new mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
                unique: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            birth: {
                type: Date
            },
            about: {
                type: String
            }
        },
        {
            timestamps: true
        }
    )
);
