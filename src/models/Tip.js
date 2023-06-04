import mongoose from "mongoose";

const { Schema } = mongoose;

const tipSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        tags: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Tip", tipSchema);
