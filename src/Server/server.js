const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJleHAiOjE3MjA2MzYyMjd9.Ksy9rpGNOZtFjCMu-7HJjUbX8dAp7oNFQ74lyrb56zo";

const corsOptions = {
    origin: "*",
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
    optionsSuccessStatus: 200
};

const userFilePath = path.join(__dirname, 'src', 'Server', 'users.json');
const productsFilePath = path.join(__dirname, 'products.json');

const readUsers = () => {
    try {
        const data = fs.readFileSync(userFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users file:', error);
        throw error;
    }
};

const writeUsers = (users) => {
    try {
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing users file:', error);
        throw error;
    }
};

// Миддлвары
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

// Роуты
app.post("/server/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const users = readUsers();
        const userExist = users.find(user => user.email === email);
        if (userExist) {
            return res.status(400).json({ message: "This user already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = { name, email, password: hashPassword };
        users.push(newUser);
        writeUsers(users);
        res.status(201).json({ message: "User successfully registered" });
    } catch (error) {
        res.status(500).send("Error processing registration");
    }
});

app.get("/server", (req, res) => {
    fs.readFile(productsFilePath, (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            res.status(500).send("Error reading products file");
        } else {
            try {
                const products = JSON.parse(data);
                res.json(products);
            } catch (error) {
                console.error('Error parsing products file:', error);
                res.status(500).send("Error parsing products file");
            }
        }
    });
});

app.get("/images/:filename", (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, "images", filename)
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "image/png"
    })
    res.sendFile(filepath);
});

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept")
    next()
})

app.post("/server", (req, res) => {
    const newProduct = req.body;
    fs.readFile(productsFilePath, (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            res.status(500).send("Error reading products file");
        } else {
            try {
                const products = JSON.parse(data);
                newProduct.id = products.length ? products[products.length - 1].id : 1;
                products.push(newProduct);
                fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), err => {
                    if (err) {
                        console.error('Error writing to products file:', err);
                        res.status(500).send("Error writing to products file");
                    } else {
                        res.status(201).send(newProduct);
                    }
                });
            } catch (error) {
                console.error('Error parsing products file:', error);
                res.status(500).send("Error parsing products file");
            }
        }
    });
});

app.post("/server/filter", (req, res) => {
    const { categories } = req.body;
    console.log('Received categories for filtering:', categories);
    fs.readFile(productsFilePath, (err, data) => {
        if (err) {
            console.error('Error reading products file:', err);
            res.status(500).send("Error reading products file");
        } else {
            try {
                const products = JSON.parse(data);
                console.log('Products data:', products);
                const filteredProducts = products.filter(product => categories.includes(product.category));
                console.log('Filtered products:', filteredProducts);
                res.json(filteredProducts);
            } catch (error) {
                console.error('Error parsing products file:', error);
                res.status(500).send("Error parsing products file");
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
