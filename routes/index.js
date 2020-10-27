const express = require('express');
const db = require('../models')
const router = express.Router();

// GET about page
    // render to about.ejs
router.get('/about', (req, res) => {
    res.render('about');
});


// // GET region page
//     // render to region.ejs
// router.get('/region', (req, res) => {
//     res.render('region');
// });


// GET region (COMPLETE? need toUpperCase all regions)
router.get('/region/:name', (req, res) => {
    let currentRegion = req.params.name;
    let selectedRegion = currentRegion.charAt(0).toUpperCase()+currentRegion.slice(1);

    if (selectedRegion === "Northamerica" || selectedRegion === "Southamerica") {
        selectedRegion = selectedRegion.replace("america", " America");
    } 
    // first, find all entries in the location table where the
    // region matches the URL parameter (e.g. all entries with region 'North America' on /region/northamerica)
    // then find all entries in the post table where the locationId matches the id in the location table
    // then pass to context object and render
    db.location.findAll({
        where: {
            region: selectedRegion
        }
    }).then(function(foundRegion) {
        let regionIds = []

        for (let i = 0; i < foundRegion.length; i++) {
            regionIds.push(foundRegion[i].dataValues.id)
        }

        db.post.findAll({
            where: {
                locationId: regionIds
            }
        }).then(function(allRegionPosts) {
            res.render('region', {region: foundRegion, posts: allRegionPosts});
        })
    })
})


// // GET city page
//     // render to city.ejs
// router.get('/city', (req, res) => {
//     res.render('city');
// });


// // GET city  (COMPLETE? need toUpperCase all cities?)
//     // user selects city to see all sites with posts
//     // render to city.ejs
router.get('/city/:id', (req, res) => {
    let selectedCity = req.params.id;
    db.location.findOne({
        where: {
            id: selectedCity
        }
    }).then(function(foundCity) {
        res.render('city', {city: foundCity});
    })
})


// // GET site page
//     // render to site.ejs
// router.get('/site', (req, res) => {
//     res.render('site');
// });



// GET site
    // user selects specific site to see all posts
    // render to site.ejs
router.get('/site/:id', (req, res) => {
    let currentSite = req.params.id;
    db.site.findOne({
        where: {
            locationId: currentSite
        }
    }).then(function(foundSite) {
        console.log(foundSite);
        res.render('site', {site: foundSite});
    })
});


// GET profile (COMPLETE? Need testing)
    // returns all current user posts
    // render to profile.ejs
router.get('/profile/:username', (req, res) => {
    db.user.findOne({
        where: {
            name: req.params.username
        }
    }).then(function(foundUser) {
        db.post.findAll({
            where: {
                userId: foundUser.dataValues.id
            }
        }).then(function(allPosts) {
            console.log(allPosts);
            res.render('profile', {posts: allPosts});
        })
    })
});


// GET post  (COMPLETE? Need testing)
    // returns user to edit page from profile or post page
    // find postId
    // render to edit.ejs
router.get('/post/:id', (req, res) => {
    db.post.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(foundPost) {
        console.log(foundPost);
        res.render('post', {post: foundPost});
    })
});


// POST post  (COMPLETE? Need testing)
    // user submits post and/or edits on a post
    // render to post.ejs
router.post('/post/:id', (req, res) => {
    db.post.create(req.body).then(newPost => {
        console.log(newPost);
        res.render('post', {newPost: newPost});
    })
});


// GET new 
    // user goes to form page to create a new post
    // render to create.ejs
router.get('/new', (req, res) => {
    res.render('new');
});


// export router
module.exports = router;