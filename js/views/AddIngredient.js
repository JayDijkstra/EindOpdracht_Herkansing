site.views.AddIngredient = Backbone.View.extend({
    el: '#addIngredient',

    //Submit Event om Ingredienten toe te voegen!
    events: {
        'submit': 'submit'
    },

    //Initialize om te kijken of de Add View is toegevoegd!
    initialize: function(properties){
        console.log("AddIngredient Is succesvol geladen");
        this.ingredientTemplate = properties.ingredientTemplate;

    },

    render: function(){

    },
    //Submit Event Aanroepen om eigen Ingredient toe te voegen!
    submit: function(e) {
        alert("Klik!")
//        this.loadIngredientList();

        e.preventDefault();
        var newIngredient = $(e.currentTarget).find('#voegToe').val();
        var ingredient = new site.models.Ingredient({name: newIngredient});
        this.model.add(ingredient);
        this.render();
    },



    loadIngredientList: function(){
      this.model.fetch({
          success: _.bind(this.loadIngredientSuccessHandler, this),
          error: _.bind(this.loadIngredientErrorHandler, this),
          data: {
              name: 'Test',
              sort: 'Dubbel Test'
          }
      })
    },

    loadIngredientSuccessHandler: function(collection, response, options){
       console.log("Add Ingredient Doet het!");
    },

    loadIngredientErrorHandler: function(collection, response, options){
        console.log("Ingredienten kunnen nu niet toegevoegd worden!");
    }

});