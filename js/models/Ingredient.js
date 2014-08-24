/**
 * Created by Jay on 3-7-14.
 */
site.models.Ingredient = Backbone.Model.extend({

    //Standaard waarde voor een ingredient!
    defaults: {
        name: 'Ingredient',
        sort: 'an Ingredient!',
        "price": 0
    },


    //Als er een ingredient toegevoegd moet worden, valideren of de naam juist is.. Mag geen
    //null, leeg of alleen maar spaties zijn. (Werkt alleen in oude Backbone > nieuwe backbone vereist {validate:true}
    validate: function(attrs){
        if (!$.trim(attrs.name )){
            return "Geen goede naam!";
        }
    }
});