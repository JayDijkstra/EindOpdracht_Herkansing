//Dit is de uiteindelijk View waarin de gekozen ingredienten de Bereidingwijze laten zien!
site.views.RecipeView = Backbone.View.extend({

    //Initialize Functie uitvoeren!
    initialize: function(properties){
       this.recipeTemplate = properties.recipeTemplate;

       //Triggers uit andere Views ophalen
       site.events.on("chosenIngredient", this.chosenIngredient, this);

    },


    //Gekozen Ingredient via Parameter ophalen en in ingredient te stoppen.
    chosenIngredient: function(data){
        this.ingredient = data.ingredient;
        this.price = data.ingredient.price;
        this.checkIfChosen();
    },


    //Als er een Ingredient Wordt Gekozen
    checkIfChosen: function(){
            this.collection.fetch({
                success: _.bind(this.loadIngredientSuccessHandler, this),
                error: _.bind(this.loadIngredientErrorHandler, this)
            })

    },


    loadIngredientSuccessHandler: function(collection, response, options){
        templates = {
            ingredient: this.ingredient,
            price: this.price,
            description: this.description
        };


         var template = _.template(this.recipeTemplate.html(),templates, this);
         this.$el.append(template);

    },

    //Fouthandler... Mocht het fout gaan met het bestand!
    loadIngredientErrorHandler: function(collection, response, options){
     console.log("Er is iets fout gegaan met het JSON bestand")
    }



});