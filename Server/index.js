const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const productsList = require("./public/products.json");

app.get("/api/products", (req, res) => {
    res.status(200).json(productsList);
});

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const reqProduct = productsList.filter((product) => product.id == id
    );
    res.status(200).json(reqProduct);
});

const PORT = 3006;
app.listen(PORT, () => { console.log(`Server started at port ${PORT}`); })