/**
 * Created by Jay on 3-7-14.
 */

// Maak een nieuwe collectie en erf waarde over van de Backbone Collection.
site.collections.IngredientCollection = Backbone.Collection.extend({
    model: site.models.Ingredient,
    url: "js/Ingredients.json"
});