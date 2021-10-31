import express from 'express'

const app = express()

app.get('/hello', (req, res) => {
    res.status(200).send('World!')
})

app.listen(3000, () => {
    console.log(`Listening on http://localhost:3000/hello.`);
})
