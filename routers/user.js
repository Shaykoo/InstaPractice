const express = require('express')
const User = require('../models/user')

const router = new express.Router()


router.get('/home',(req, res)=>{
    res.render('home')
})

router.get('', (req, res)=>{
    res.redirect('/home')
})

router.post('/home', async (req, res)=>{
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user) // only work when the above statement gets fulfilled
})

module.exports = router
