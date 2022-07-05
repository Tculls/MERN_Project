const mongoose = require("mongoose")

const bcrypt = require('bcrypt');

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [3, "First Name must be at least 3 characters"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [3, "Last Name must be at least 3 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
      
    }
  }, {timestamps: true});

  UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword) 
    .set(value => this._confirmPassword = value);

  UserSchema.pre('validate', function(next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match')
    }
    next();
  });

module.exports.Register = mongoose.model("Register", UserSchema)