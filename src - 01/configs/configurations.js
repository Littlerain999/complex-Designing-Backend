const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const Joi = require("joi");
const Bcrypt = require("bcrypt");
const router = express.Router();
const { Schema, model, models, connect} = mongoose;
const { config } = dotenv;
const app = express();

module.exports = {
    mongoose,
    express,
    cors,
    router,
    Schema,
    model,
    models,
    connect,
    config,
    app,
    Joi,
    Bcrypt
}