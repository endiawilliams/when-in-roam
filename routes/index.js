const express = require('express');
const db = require('../models')
const router = express.Router();

// GET about page
    // render to about.ejs
router.get('/about', (req, res) => {
    res.render('about');
});

// GET region (COMPLETE? Need testing)
    // user selects region to see all countries with posts
    // first, search all post db to return list of locationId
    // second, using returned list of locationId, return a list of region
    // third, using req.body.region?, return a list of all countries
router.get('/region/:name', (req, res) => {
    // search post model for all locationId 
    db.post.findAll().then(function(foundLocation) {
        // use foundLocation to search all region name
        foundLocation.getRegion().then(function(foundRegion) {
            // search all found Region, to get all Countries
            // foundRegion.getCountry().then(function(foundCountry) {
            // use foundRegion to findOne region selected by user
            foundRegion.findOne({where: {region: req.body.region}
            // then return a list of found countries
            }).then(function(foundCountry) {
                // return all countries/cities
                console.log(foundCountry);
                console.log(foundCountry.dataValues.city);
                // render to region.ejs
                res.render('region');
            })
        })
    })
});


// GET city
    // user selects city to see all sites with posts
    // search post model for all locationID with city name
    // render to city.ejs
router.get('/city/:name', (req, res) => {
    res.render('city');
});


// GET site
    // user selects specific site to see all posts
    // search post model for all locationID with siteId
    // render to site.ejs
router.get('/site/:id', (req, res) => {
    res.render('site');
});


// GET profile (COMPLETE? Need testing)
    // returns all current user posts
    // render to profile.ejs
router.get('/profile/:name', (req, res) => {
    // search user db to find One and return to foundUser
    db.user.findOne().then(function(foundUser) {
        // use foundUser to search Post using req.body.userId?
        foundUser.getPost({
            userId: req.body.userId
        // then using selected userId, return all Post
        }).then(function(allPost) {
            // return allPost
            console.log(allPost);
            console.log(allPost.dataValues);
            // render to profile.ejs
            res.render('profile');
        })
    })
});


// GET post
    // returns user to edit page from profile or post page
    // find postId
    // render to edit.ejs
router.get('/post/:id', (req, res) => {
    res.render('edit');
});


// POST post
    // user submits post and/or edits on a post
    // find user name && postId
    // render to post.ejs
router.post('/post/:id', (req, res) => {
    res.render('post');
});


// GET post
    // user goes to form page to create a new post
    // render to create.ejs
router.get('/post', (req, res) => {
    res.render('create');
});


// export router
module.exports = router;