const { render } = require('ejs')
const express = require('express')
const db = require('../models')
const router = express.Router()

// (COMPLETE)
router.get('/about', (req, res) => {
    res.render('about')
});


// GET region (COMPLETE)
router.get('/region/:regionName', (req, res) => {
    let selectedRegion = req.params.regionName
    let capitalizedRegion = selectedRegion.charAt(0).toUpperCase()+selectedRegion.slice(1)
    if (capitalizedRegion === "Northamerica" || capitalizedRegion === "Southamerica") {
        capitalizedRegion = capitalizedRegion.replace("america", " America")
    }
        db.post.findAll({
            where: {
                regionName: capitalizedRegion
            }
        }).then(function(foundPosts){
            res.render('region', {posts: foundPosts})
    })
})


// GET city  (COMPLETE)
router.get('/city/:id', (req, res) => {
    let selectedCity = req.params.id
    db.location.findOne({
        where: {
            id: selectedCity
        }
    }).then(function(foundCity) {
        db.post.findAll({
            where: {
                locationId: foundCity.dataValues.id
            }
        }).then(function(allCityPosts) {
            res.render('city', {city: foundCity, posts: allCityPosts})
        })
    })
})


// GET site (COMPLETE)
router.get('/site/:id', (req, res) => {
    let currentSite = req.params.id
    db.site.findOne({
        where: {
            locationId: currentSite
        }
    }).then(function(foundSite) {
        db.post.findAll({
            where: {
                siteId: foundSite.dataValues.id
            }
        }).then(function(allSitePosts) {
            db.location.findOne({
                where: {
                    id: allSitePosts[0].dataValues.locationId
                }
            }).then(function(foundLocation) {
                res.render('site', {site: foundSite, posts: allSitePosts, location: foundLocation})
            })
        })
    })
})


// GET profile (COMPLETE? Need testing)
router.get('/profile/:username', async (req, res) => {
    const foundUser = req.user
    const allPosts = await db.post.findAll({
        where: {
            userId: foundUser.dataValues.id
        }
    })
    console.log('!!!!!!!!!!', allPosts)
    res.render('profile', {posts: allPosts});
})


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
        res.render('post/:id', {post: foundPost})
    })
})


// GET new (COMPLETE)
router.get('/new', (req, res) => {
    res.render('new')
})
    

// POST new  (COMPLETE)
router.post('/new', async (req, res) => {
    try {
        const foundUser = req.user
        const newPost = await db.post.create({
            userId: foundUser.id,
            cityName: req.body.cityName,
            countryName: req.body.countryName,
            regionName: req.body.regionName,
            siteName: req.body.siteName,
            date: req.body.date,
            content: req.body.content,
            type: req.body.type
        })
        res.redirect(`profile/${foundUser.username}`)
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
})


// EDIT post
router.get('/post/:id/edit', (req, res) => {
    db.post.findByPk(req.params.id)
    .then(function(foundPost){
        console.log(foundPost)
        res.render('edit', {post: foundPost})
    })
})

router.put('/post/:id/edit', (req, res) => {
    db.post.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(function(updatedPost) {
        res.redirect(`/profile/${req.user.username}`)
    })
})


//DELETE post
router.delete('/post/:id', (req, res) => {
    db.post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(deletedPost) {
        res.redirect(`/profile/${req.user.username}`)
    })
})

// export router
module.exports = router;