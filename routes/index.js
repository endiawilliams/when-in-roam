const { render } = require('ejs')
const express = require('express')
const db = require('../models')
const router = express.Router()

// (COMPLETE)
router.get('/about', (req, res) => {
    res.render('about')
});


// GET region (COMPLETE)
router.get('/region/:name', (req, res) => {
    let currentRegion = req.params.name
    let selectedRegion = currentRegion.charAt(0).toUpperCase()+currentRegion.slice(1)

    if (selectedRegion === "Northamerica" || selectedRegion === "Southamerica") {
        selectedRegion = selectedRegion.replace("america", " America")
    } 

    db.location.findAll({
        where: {
            region: selectedRegion
        },
        order: [
            ['country', 'ASC']
        ]
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
            console.log(foundRegion)
            res.render('region', {region: foundRegion, posts: allRegionPosts})
        })
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
router.get('/profile/:name', (req, res) => {
    db.user.findOne({
        where: {
            name: req.params.name //don't need this. 
        }
    }).then(function(foundUser) {
        db.post.findAll({
            where: {
                userId: foundUser.dataValues.id
            },
            include: [db.location, db.site]
        }).then(function(allPosts) {
            let locationIds =[]
            for (let i = 0; i < allPosts.length; i++) {
                locationIds.push(allPosts[i].dataValues.locationId)
            }
            db.location.findAll({
                where: {
                    id: locationIds
                }
            }).then(function(foundLocations) {
                let siteIds = []
                for (let i = 0; i < allPosts.length; i++) {
                    siteIds.push(allPosts[i].dataValues.siteId)
                }
                db.site.findAll({
                    where: {
                        id: siteIds
                    }
                }).then(function(foundSites) {
                    console.log(foundLocations)
                    res.render('profile', {user: foundUser, posts: allPosts, locations: foundLocations, sites:foundSites});
                })
            }) 
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
        res.render('post/:id', {post: foundPost})
    })
})


// GET new (COMPLETE)
router.get('/new', (req, res) => {
    db.user.findOne( {
        where: {
            name: req.user.name
        }
    }).then(function(foundUser){
        res.render('new', {user: foundUser})
    })
})
    

// POST new  (COMPLETE)
router.post('/new', async (req, res) => {
    try {
        const foundUser = await db.user.findOne({
            where: {
                name: req.user.name
            }
        })
        const newLocationPost = await db.location.findOrCreate({
            where: {
                country: req.body.country, 
                city: req.body.city
            }
        })
        const newSitePost = await db.site.findOrCreate({
            where: {
                type: req.body.type,
                name: req.body.name
            }
        })
        const newPost = await db.post.create({
            userId: foundUser.id,
            locationId: newLocationPost[0].dataValues.id,
            siteId: newSitePost[0].dataValues.id,
            date: req.body.date,
            content: req.body.content,
            type: req.body.type
        })
        res.redirect(`profile/${foundUser.name}`)
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
})


//DELETE post
router.delete('/profile/:name', (req, res) => {
    db.post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(deletedPost) {
        res.redirect('/profile/:name')
    })
})

router.put('/edit/:id', (req, res) => {
    db.post.update({
        where: {
            id: req.params.id
        }
    }).then(function(updatedPost) {
        res.redirect('/profile/:name')
    })
})


// export router
module.exports = router;