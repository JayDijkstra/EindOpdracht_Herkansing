/**
 * Created by Jay on 2-7-14.
 */

(function () {
    site.init = function (){

        new site.models.Ingredient();
        var ingredientCollection = new site.collections.IngredientCollection();
        var sizeCollection = new site.collections.SizeCollection();

        new site.views.AddIngredient({el: "#addIngredient"});
        new site.views.Ingredient({el: "#ingredienten", ingredientTemplate : $("#ingredientsTemplate"), collection : ingredientCollection})
        new site.views.SizeView({el: "#size", sizeTemplate: $('#sizeTemplate'), collection: sizeCollection});
        new site.views.RecipeView({el: "#createPizza", recipeTemplate: $('#recipeTemplate'), collection: ingredientCollection})


    };

    site.$document.on('ready', site.init);
})();



