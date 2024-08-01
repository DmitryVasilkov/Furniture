const express = require("express")

const userFilePath = './src/Server/users.json'

console.log(userFilePath)

const bcrypt = require("bcrypt")

const jsonwebtoken = require("jsonwebtoken")

const cors = require("cors")

const path = require("path")

const bodyParser = require("body-parser")

const fs = require("fs")

const { request } = require("http")

const app = express()

const PORT = process.env.PORT || 3000

const SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJleHAiOjE3MjA2MzYyMjd9.Ksy9rpGNOZtFjCMu-7HJjUbX8dAp7oNFQ74lyrb56zo"

const corsOptions = {
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200
}

const readUsers = () => {
    const data = fs.readFileSync(userFilePath)
    return JSON.parse(data)
}

const writeUsers = (users) => {
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2))
}

app.post("/server/register", async(req, res) => {
    const {name, email, password} = req.body 
    const users = readUsers()
    const userExist = users.find(user => user.email === email)
    if(userExist){
        return res.status(400).json({message:"This user is already exist"})
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = {name, email, password: hashPassword}
    users.push(newUser)
    writeUsers(users)
    res.status(201).json({message: "This user is successfully registerd"})
})

app.use(cors(corsOptions))

app.options("*", cors())

app.use(bodyParser.json())

app.use("/images", express.static(path.join(__dirname, "public/images")))

app.get("/server", (req, res) => {
    fs.readFile("products.json", (err, data) => {
        if(err){
            res.status(500).send("Error reading products file")
        } else{
            res.json(JSON.parse(data))
        }
    })
})

app.post("/server", (req, res) => {
    const newProduct = req.body
    fs.readFile("products.json", (err, data) => {
        if(err){
            res.status(500).send("Error reading products file")
        } else{
            const products = JSON.parse(data)
            newProduct.id = products.length ? products[products.length -1].id + 1 : 1 
            products.push(newProduct)
            fs.writeFile("products.json", JSON.stringify(products, null, 2), err => {
                if(err){
                    res.status(500).send("error wrong file")
                } else{
                    res.status(201).send(newProduct)
                }
            })
        }
    })
})

app.post("/server", (req, res) => {
    const categories = req.body.categories
    fs.readFile("products.json", (err, data) => {
        if(err){
            res.status(500).send("Error reading products file")
        }else{
            const products = JSON.parse(data)
            const filteredProducts = products.filter(product => categories.includes(product.category))
            res.json(filteredProducts)
        }
    })
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

