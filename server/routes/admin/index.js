const express = require("express")
const AdminRouter = express.Router();
const nodemailer = require("nodemailer")
const config = require('../../config.json')
const db = require('../db');




module.exports = AdminRouter;
