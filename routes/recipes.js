//here's all the recipes, the link to different pages

const express = require("express");
const router = express.Router();

//Recipe information
const recipes = {
    recipe1: {
        title: "Banana Bread", content: ` <h3>Ingredients</h3>
    <ul>
        <li>1 3/4 cups all-purpose flour</li>
        <li>1 teaspoon baking soda</li>
        <li>1 teaspoon salt</li>
        <li>1/2 teaspoon ground cinnamon</li>
        <li>3/4 cup granulated sugar</li>
        <li>1/2 cup unsalted butter (rooom temperature)</li>
        <li>2 larges eggs</li>
        <li>3 very ripe bananas</li>
        <li>1 teaspoon vanilla</li>
    </ul>
    <h3>Optional Ingredients</h3>
    <ul>
        <li>1/2 teapsoon allspice</li>
        <li>1/4 teaspoon ground cloves</li>
        <li>1/4 teaspoon ground cardamon</li>
        <li>1/4 teaspoon nutmeg</li>
        <li>3/4 cup chocolate chips/chunks of choice <b>or</b> nuts of choice</li>
    </ul>

    <h3>Equipment</h3>
    <ul>
        <li>9x5" baking pan</li>
        <li>Medium mixing bowl</li>
        <li>Large mixing bowl</li>
        <li>Electric hand or stand mixer</li>
        <li>Wire cooling rack</li>
    </ul>

    <h3>Instructions</h3>
    <ol>
        <li>Preheat oven to 350F. Grease the 9x5" loaf pan with butter or baking spray.</li>
        <li>In the medium boal, whisk together flour, baking soda, salt, and cinnamon. To avoid clumps, you can sift all these ingredients.</li>
        <li>In the large mixing bowl, beat the sugar and butter together using your mixer, until light and fluffy.</li>
        <li>Beat in the eggs one at a time, stopping to scrape the sides of the bowl. Add in vanilla extract. Mash the bananas and add them in. Add in the dry ingredients from the medium bowl and hand fold it in so nothing gets over mixed.</li>
        <li>Pour the batter into the prepared loaf pan.</li>
        <li>Bake for about 50 to 60 minutes, or until a wooden pick can be inserted to come out clean. Let cool in pan for 20 minutes, then remove to finish cooling on wire rack.</li>
    </ol>

    <h3>Extra Tips</h3>
    <ul>
        <li>If you don't have overipe bananas, you can speeed up the process by laying bananas, unpealed, on a baking sheet and baking for 10 to 12 minutes at 350F. They come out brown and soft.</li>
        <li>Room temperature eggs mix together better.</li>
        <li>If you want the optional ingredients, mix in the spices with the dry ingredients. The chocolate or nuts are folded in at the end before your pour the batter into the loaf pan.</li>
    </ul>` },
    recipe2: {
        title: "Chocolate Cheesecake", content: `<h3>Ingredients</h3>
    <h4>For the Crust</h4>
    <ul>
        <li>1 and 1/2 cups Chocolate Wafer Crumbs</li>
        <li>1/4 cups unsalted butter, melted</li>
    </ul>

    <h4>For the Cheesecake</h4>
    <ul>
        <li>2 cups bittersweet chocolate, coarsely chopped</li>
        <li>1 and 1/2 pounds full-fat cream cheese, at room temperature</li>
        <li>1 cup granulated sugar</li>
        <li>1/4 cup light brown sugar, packed</li>
        <li>3 Tablespoons unsweetened natural cocoa powder</li>
        <li>4 large eggs plus 2 egg yolks, at room temperature</li>
        <li>3/4 cup heavy cream, at room temperature</li>
        <li>1 teaspoon vanilla extract</li>
    </ul>

    <h4>For the Chocolate Ganache</h4>
    <ul>
        <li>1 and 1/3 cups semi-sweet chocolate, finely chopped</li>
        <li>1 and 1/4 cups heavy cream</li>
        <li>1/4 cup unsalted butter, at room temperature, cut into cubes</li>
    </ul>


    <h3>Equipment</h3>
    <ul>
        <li>9 inch spring form pan</li>
        <li>medium mixing bowl</li>
        <li>medium sized pot</li>
        <li>heatproof bowl</li>
        <li>food processor, blender, or electric mixer</li>
        <li>large baking pan or roasting pan</li>
        <li>small sauce pan</li>
    </ul>

    <h3>Instructions</h3>
    <h4>For the Crust</h4>
    <ol>
        <li>Preheat oven to 325°F. Grease the bottom and sides of a 9-inch springform pan. Wrap the outside of the pan in layers of heavy duty aluminum foil. You’ll be placing this pan in a water bath, so be sure the pan has been wrapped from every angle.</li>
        <li>In a medium mixing bowl, combine the chocolate wafer crumbs and melted butter. Pat the mixture firmly into the bottom of the prepared pan. Bake the crust for 10 minutes. Set the pan on a wire rack and cool the crust completely. Leave the oven on.</li>
    </ol>

    <h4>For the Cheesecake</h4>
    <ol>
        <li>Fill a medium pot one-third full with water and bring it to a low simmer over medium heat.</li>
        <li>Place a heatproof bowl that will fit on top of the pan snugly, but will not touch the simmering water, on top of the pan. Reduce the heat to low and add the chopped chocolate into the bowl over the pot. Heat until the chocolate is completely melted, stirring occasionally with a silicon spatula. Remove the pot from the heat, leaving the bowl of chocolate over the hot water. Set aside until needed.</li>
        <li>If using an electric mixing, each step will take a bit longer, but the results will be the same. In the bowl of a food processor (or high-powered blender), pulse the cream cheese until completely smooth, scraping down the sides of the bowl as needed, about 2 minutes. Add in both sugars and cocoa powder and beat smooth. Add in the eggs, egg yolks, and heavy cream and mix until just combined, about 20 seconds. Fold in the chocolate. Finally add in the vanilla and pulse for another 20 seconds.</li>
        <li>Remove the bowl from the food processor (if using) and, using a rubber spatula, stir the filling several times to ensure it’s evenly blended.</li>
        <li>Scrape the filling over the partially baked crust in the prepared pan.</li>
        <li>Place the springform pan in a roasting pan or large baking pan. Place the roasting pan in the preheated oven and pour enough hot water into the pan to come 1-inch up the sides of the springform pan.</li>
        <li>Bake the cheesecake in the water bath for 1 hour and 10 minutes, or until the center of the cake is set but still slightly jiggly. The cake will set completely as it cools.</li>
        <li>Remove the cake from the water bath and  place the pan on a wire rack. Carefully loosen the foil, then immediately run the tip of a knife around the sides of the pan, to prevent the top from cracking. Cool completely (in the pan), then transfer cheesecake to the refrigerator to chill for at least 6 hours before removing from the pan and slicing.</li>
    </ol>

    <h4>For the Ganacahe (make after cheesecake has set in fridge for at least 6 hours)</h4>
    <ol>
        <li>Add chopped chocolate to a medium bowl; set aside.</li>
        <li>In a small saucepan over medium-heat, bring the cream to a low simmer. Pour half of the cream on top of the chocolate pieces and set aside for 1 minute. With a whisk, begin to incorporate the melted chocolate into the cream. Slowly add the remaining cream and continue carefully whisking until smooth and glossy.</li>
        <li>Add in the butter and use a spatula to stir until the butter is completely melted. The mixture will be dark and glossy. Set aside, at room temperature, until needed.</li>
        <li>Pour ganache over cooled cheesecake. Set aside until ganache is set, about 1 hour.</li>
        <li>To serve, slice the cheesecake with a thin-bladed sharp knife, wiping the knife clean between each cut.</li>
        <li>Store, loosely covered, in the refrigerator, for up to 5 days. </li>
    </ol>

    <h3>Tips</h3>
    <ul>
        <li>Making the cheesecake the night before it's needed saves a lot of waiting time.</li>
        <li>When using the waterbath, preheat oven first, then place your pan on it (empty) and then fill it with boiling water. Place the cheesecake (wrapped in foil in its pan) in the center.</li>
        <li>If you don't want to use a water bath, a pan of water in the rack underneath the cheesecake may work fine. You may still get cracks, but since the ganache covers it, it's alright.</li>
    </ul>` },
    recipe3: {
        title: "48 Hour Chocolate Chip Cookies",
        content: `<h3>Ingredients</h3>

    <h4>Toffee</h4>
    <ul>
        <li>1 stick unsalted butter</li>
        <li>1 cup light brown sugar</li>
        <li>1 teaspoon kosher salt</li>
    </ul>

    <h4>Brown Butter</h4>
    <ul>
        <li>2 sticks unsalted butter</li>
        <li>1-2 ice cubes</li>
    </ul>

    <h4>Cookie Dough</h4>
    <ul>
        <li>1/2 cup sugar</li>
        <li>1 1/2 cups dark brown sugar</li>
        <li>2 teaspoons espresso powder</li>
        <li>2 teaspoons kosher salt</li>
        <li>1/2 teaspoons baking sode</li>
        <li>2 eggs</li>
        <li>2 teaspoons good vanilla extract</li>
        <li>2 1/2 cups all purpose flour</li>
        <li>6oz chocolate, 70% cacao minimum</li>
        <li>Maldon sea salt</li>
    </ul>

    <h3>Equipment</h3>
    <ul>
        <li>medium sized pan</li>
        <li>small baking sheet</li>
        <li>large baking sheet</li>
        <li>large mixing bowl</li>
        <li>cutting board and knife</li>
        <li>large scoop</li>
    </ul>

    <h3>Instructions</h3>

    <h4>Toffee</h4>
    <ol>
        <li>Prepare by lining a small baking pan with parchment paper and making room in your freezer.</li>
        <li>Put the butter, brown sugar, and salt in a pan at medium heat. Mix/stir consistently or the mixture can seperate. </li>
        <li>Once toffee reaches 300F, its done. </li>
        <li>Pour toffee mixture on prepared baking sheet and stick in the freezer.</li>
    </ol>

    <h4>Part 1 of Dough</h4>
    <ol>
        <li>Mix together the brown and white sugar, salt, espresso powder, and baking soda.</li>
        <li>Set aside for now.</li>
    </ol>

    <h4>Brown Butter</h4>
    <ol>
        <li>Heat up pan on medium heat and chop up the 2 sticks of butter.</li>
        <li>Stir consistently, until the butter turns a golden brown and the smell starts to become sweeter.</li>
        <li>Remove from heat and place 1-2 ice cubes into the mixture and stir until melted.</li>
        <li>Pour brown butter into the sugar mixture and mix.</li>
    </ol>

    <h4>Part 2 of Dough</h4>
    <ol>
        <li>Mix in eggs and vanilla into the butter/sugar mixture.</li>
        <li>Add flour and fold into mixture. Be careful not to over mix. </li>
        <li>Chocolate can now be chopped up into desired sizes. At this time, the toffee should be hard enough to be taken out of the freezer and broken up. Putting it in a large ziploc and smashing it makes this step easier. Fold in both the toffee and the chocolate into the dough. </li>
        <li>With a large scoop, start making balls of dough and place them on a baking sheet with parchement paper. Don't worry about spacing at this point.</li>
        <li>Let balls of cookie dough sit covered with plastic wrap for 48 hours. This allows the flavors to really settle.</li>
        <li>After 48 hours, they are ready to be baked. Preheat oven to 300F, and place dough balls on a large baking sheet. About 6 to a large sheet should be fine. Bake for ~20 minutes.</li>
        <li>Top with Maldon seat salt. when hot out of the oven.</li>
        <li>After some resting, they're now ready to eat.</li>
    </ol>
` }
};

// Routes for each recipe
router.get("/:recipeId", (req, res) => {
    const recipe = recipes[req.params.recipeId];
    if (recipe) {
        res.render("recipe", { recipe });
    } else {
        res.status(404).send("Recipe Not Found");
    }
});

module.exports = router;
