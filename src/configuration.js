const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

dotenv.config()



const { connect, Schema, model, models, Types }=mongoose
const { hash, compare }=bcrypt
const { sign, verify }=jwt


const port = process.env.PORT
const uri = process.env.MONGO_URI
const salts = Number(process.env.SALTS)
const client = process.env.CLIENT
const admin = process.env.ADMIN
const jwtSecret = process.env.JWT_SECRET


const app = express()
const router = express.Router()


app.use(express.json())


module.exports = {
    app, port, uri, connect, // for database
    router, // for router
    Schema, model, client, admin, models, Types, // for models
    joi, // for validation
    hash, salts, compare, // for encryption
    sign, jwtSecret, verify // token
}