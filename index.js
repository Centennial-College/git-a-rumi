const app=require('express')()
const port=3000

/**
 * Returns a random item from the list that you supply.
 * 
 * @param {Array<T>} list The list that you wish to get the random item from.
 * @returns {T} Random item in list
 */
function randomItemFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


/**
 * Gets a list of rumi quotes.
 *
 * @returns {Array<string>}
 */
function rumiQuotes() {
    return require('../rumi').Quotes;
}


app.get('/',(req,res)=>{
	console.log('GET /')
	res.send('Hi from Rumi')
})

app.get('/quote',(req,res)=>{
	console.log('GET /quote');
	res.send(randomItemFrom(rumiQuotes()));
})

app.listen(port,()=>console.log(`git-a-rumi app is listening on port ${port}`))
