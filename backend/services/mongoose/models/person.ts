import mongoose from 'mongoose';

export default mongoose.model(
    'Person',
    new mongoose.Schema(
        {
            name: String
        },
        {
            timestamps: true
        }
    )
);
