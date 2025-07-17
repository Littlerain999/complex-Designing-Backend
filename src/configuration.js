const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const joi = require("joi")
const bcrypt = require("bcrypt")

dotenv.config()



const { connect, Schema, model, models }=mongoose
const { hash }=bcrypt


const port = process.env.PORT
const uri = process.env.MONGO_URI
const salts = Number(process.env.SALTS)
const client = process.env.CLIENT
const admin = process.env.ADMIN


const app = express()
const router = express.Router()


app.use(express.json())


module.exports = {
    app, port, uri, connect, // for database
    router, // for router
    Schema, model, client, admin, models, // for models
    joi, // for validation
    hash, salts // for encryption
    
}