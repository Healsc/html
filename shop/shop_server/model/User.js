const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    userId:Schema.Types.ObjectId,
    userName:{
        unique:true,
        type:String
    },
    password:String,
    createDate:{
        type:Date,
        default:Date.now()
    }
});
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,slat)=>{
        if(err) return next(err);
        bcrypt.hash(this.password,slat,(err,hash)=>{
            if(err) return next(err);
            this.password = hash;
            next();
        });
    });
})


mongoose.model('User',userSchema);