const express = require('express')
const router = express.Router()
const Robot = require('../model/robot')


router.get('/', async(req,res) => {
	try{
		const robots = await Robot.find()
		res.json(robots)
	}catch(err){
		res.send('Error ' + err)
	}
})

router.get('/:id', async(req,res) => {
	try{
		const robots = await Robot.findById(req.params.id)
		res.json(robots)
	}catch(err){
		res.send('Error ' + err)
	}
})


router.post('/', async(req,res) => {
	
	const robot = new Robot({
		name: req.body.name,
		tech: req.body.tech,
		sub: req.body.sub
	})

	try{
		const r1 = await robot.save()
		res.json(r1)
	}catch (err){
		res.send('Error' + err)
	}
})

router.patch('/:id',async(req,res)=> {
    try{
        const robot = await Robot.findById(req.params.id) 
        robot.sub = req.body.sub
        const r1 = await robot.save()
        res.json(r1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async(req,res) => {
	try{
		const robot = await Robot.findById(req.params.id)
		const r1 = await robot.remove()
		res.json(r1)
	}catch(err){
		res.send('Error' + err)
	}
})






module.exports = router