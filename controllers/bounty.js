const db = require('../models')
const router = require('express').Router()

// GET /bounties (index)

// GET /bounties/:id (show)

// POST /bounties (insert a new bounty)
router.post('/', (req, res)=>{
    db.Bounty.create(req.body)
    .then(createdBounty=>{
        res.status(201).json(createdBounty)
    })
    .catch(err=>{
        if(err.name==='ValidationError'){
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error!'})
        }
    })
})

// PUT /bounties/:id (update)

// DELETE /bounties/:id (destroy)

module.exports = router