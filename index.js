// code was modiifed from the week 5 todo list codes
// chocolate chip cookies sources from here: https://www.youtube.com/watch?v=e1xCU9ydG-A
// banaa bread sourced from here: https://preppykitchen.com/banana-bread/
// cheesecake sourced from here: https://bakerbynature.com/ultimate-chocolate-cheesecake/

// AI was used to help with a bit of the css in aligning the buttons on the homepage properly, and sorting out the files for the code into seperate areas


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