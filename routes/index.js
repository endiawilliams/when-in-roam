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
        // let str = selectRegion.charAt(5).toUpperCase()
        // let arr = str.split();
        // arr.splice(5, 0, " ");
        // selectRegion = arr.toString();
        // console.log(selectRegion);
        let newRegion = selectedRegion.replace("america", " America");
        console.log(newRegion);
    } 
    db.location.findAll({
        where: {
            region: selectedRegion
        }
    }).then(function(foundRegion) {
        console.log(foundRegion);
        res.render('region', {region:currentRegion});
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


// // // GET site
// //     // user selects specific site to see all posts
// //     // render to site.ejs
router.get('/site/:id', (req, res) => {
    let currentSite = req.params.id;
    db.site.findOne({
        where: {
            locationId: currentSite
        }
    }).then(function(foundSite) {
        console.log(foundSite);
        res.render('site');
    })
});


// // GET profile (COMPLETE? Need testing)
//     // returns all current user posts
//     // render to profile.ejs
// router.get('/profile/:name', (req, res) => {
//     // search user db to find One and return to foundUser
//     db.user.findOne().then(function(foundUser) {
//         // use foundUser to search Post using req.body.userId?
//         foundUser.getPost({
//             userId: req.body.userId
//         // then using selected userId, return all Post
//         }).then(function(allPost) {
//             // return allPost
//             console.log(allPost);
//             console.log(allPost.dataValues);
//             // render to profile.ejs
//             res.render('profile');
//         })
//     })
// });


// // GET post
//     // returns user to edit page from profile or post page
//     // find postId
//     // render to edit.ejs
// router.get('/post/:id', (req, res) => {
//     res.render('edit');
// });


// // POST post
//     // user submits post and/or edits on a post
//     // find user name && postId
//     // render to post.ejs
// router.post('/post/:id', (req, res) => {
//     res.render('post');
// });


// GET post 
    // user goes to form page to create a new post
    // render to create.ejs
router.get('/create', (req, res) => {
    res.render('create');
});


// export router
module.exports = router;