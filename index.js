const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipes");

app.set("view engine", "ejs");
app.use(express.static("public"));

// Uses external routes for recipes
app.use("/recipes", recipesRoutes);

//displays homepage
app.get("/", (req, res) => {
    res.render("index");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});