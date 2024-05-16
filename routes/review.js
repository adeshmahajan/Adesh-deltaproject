const express = require("express");
const router = express.Router({ mergeParams:true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const { isLoggedIn, isReviweAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")

//Reviews
//post route
router.post("/" ,isLoggedIn, wrapAsync(reviewController.createReview));
 
 //Delite reviewe route
 router.delete("/:reviewId",isLoggedIn,isReviweAuthor, wrapAsync(reviewController.destroyReview));


 module.exports = router;
 