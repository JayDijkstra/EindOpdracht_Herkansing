/**
 * Created by Jay on 3-7-14.
 */

//Collectie voor welke grootte er gekozen moeten worden.
site.collections.SizeCollection = Backbone.Collection.extend({
    model: site.models.Ingredient,
    url: "js/Sizes.json"
});