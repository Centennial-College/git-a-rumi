const app=require('express')()
const port=3000

app.get('/',(req,res)=>{
	console.log('GET /')
	res.send('Hi from Rumi')
})

app.get('/quote',(req,res)=>{
	console.log('GET /quote')
	res.send('Insert random rumi quote here somehow....')
})

app.listen(port,()=>console.log(`git-a-rumi app is listening on port ${port}`))
