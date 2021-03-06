const router = require('express').Router()
const {Category, Post, User, Comments} = require('../db/models')
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer')
const secrets = require('../../secrets')
const path = require('path')


router.get('/', async (req, res, next) =>{
    try {
        const posts = await Post.findAll({
            include: [{model: User}]
        })
        res.json(posts)
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) =>{
    try {
        const id = req.params.id
        const post = await Post.findOne({
            where: {
                id: id
            },
            include: [{model: Comments}, {model: User}]
        })
        res.json(post)
    } catch(err){
        next(err)
    }
})

router.get('/user/:id', async (req, res, next) =>{
    try {
        const id = req.params.id
        const post = await Post.findAll({
            where: {
                userId: id
            }
        })
        res.json(post)
    } catch(err){
        next(err)
    }
})

router.put('/:id', async (req, res, next) =>{
    try {
        const [rowsUpdated, updatedPost] = await Post.update(
            req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            }
        )
        res.json({message: 'Updated Post Successfully', post: updatedPost})
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next) =>{
    await Post.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({message: 'Successfully deleted Post'})
})

// multer and cloudinary handling

cloudinary.config({
    cloud_name: secrets.cloud_name,
    api_key: secrets.api_key,
    api_secret: secrets.api_secret
})

let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    params: function(req, file, cb) {
        let type = null
        let splitter = file.originalname.split('.')[1]
        if (splitter === 'jpg') {
            type = 'image'
        } else if (splitter === 'mov') {
            type = 'video'
        }
        cb(undefined, {
            resource_type: type,
            folder: 'geostories',
            filename: file.originalname,
            allowedFormats: ['jpg', 'mov']
        })
    }

});

let parser = multer({
    storage,
})


router.post('/media', parser.any(), async (req, res, next) => {
    let mediaUrl = req.files[0].url
    try {
        res.send({ mediaUrl })
    } catch(err){
        console.error('reached error')
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let type = null
        if (req.body.mediaLink.indexOf('jpg') !== -1) {
            type = 'image'
          } else if (req.body.mediaLink.indexOf('mov')) {
            type = 'video'
          }
        const newPost = await Post.create({
            title: req.body.title,
            text: req.body.text,
            longitude: req.body.longitude.toFixed(8),
            latitude: req.body.latitude.toFixed(8),
            mediaLink: req.body.mediaLink,
            mediaType: type,
            userId: req.body.userId
        })
        res.json({message: 'New Post created Successfully', post: newPost})
    } catch(err){
        console.error('reached error')
        next(err)
    }
})








module.exports = router