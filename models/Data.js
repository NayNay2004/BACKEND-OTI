import mongoose from "mongoose";

const Data = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    umur:{
        type: Number,
        required: true
    },
    mbti:{
        type: String,
        required: true
    },
    likes:{
        type: String,
        required: true
    },
    dislikes:{
        type: String,
        required: true
    }
});

export default mongoose.model('Datas', Data);