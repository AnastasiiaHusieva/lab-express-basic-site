const express = require("express")
const hbs = require("hbs")
const app = express()
const port = 3000


app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.get('/home', (req, res) => {
    res.render ('home')
})

app.get('/about', (req, res) => {

    let person = {
        name: 'Name',
        lastname: 'LastName',
        age: '12',
    }
    res.render ('about', data)
})


app.get('*', (req, res)=>{
    res.send ("404 error")
})

app.listen (port, () =>{
    console.log(`app running on port ${port}`)
})