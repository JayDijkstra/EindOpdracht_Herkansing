//Nieuwe View aanmaken voor Ingredient.
site.views.Ingredient = Backbone.View.extend({

    tagName: 'p',

    events: {
        "click p": "ingredientClicked"   //Event uitvoeren als er op p wordt geklikt (binnen ingredientView)
    },

    initialize: function(getInfo){
        //Maak van het Template de ingredientTemplate! Kan ook ingeladen worden via ( underscore ._template!!! En dan worden geappend met render functie!
        //ik heb voor deze methode gekozen omdat ik dit persoonlijk overzichtelijker vind!
        this.ingredientTemplate = getInfo.ingredientTemplate;
        console.log("Pizza Ingredienten View is mooi geladen!");

        this.loadIngredients(); //Laad de functie
    },

    render: function(model){
        model.each(function(ingredient){
          var ingredientView = new site.views.Ingredient({model: ingredient});

            this.$el.append(ingredientView.render().el);
        })
    },

    //Door middel van het data-atribuut met de waarde ingredient kan er specifiek een instantie worden gekozen.
    //Data-attribuut wordt in de HTML gedefinieerd!
    ingredientClicked: function(e){
        var chosenIngredient = $(e.currentTarget).data('ingredient'); //Event waarde van het HUIDIGE element ophalen.
        var chosenprice = $(e.currentTarget).data('price');

        //Trigger wordt gebruikt om gekozen info door te geven aan andere Views. Kan weer opgehaald worden met .on!
        site.events.trigger("chosenIngredient", {ingredient: chosenIngredient});
        site.events.trigger("chosenPrice", {price: chosenprice});
        console.log(chosenIngredient);



    },

    //Alle ingredienten inladen (Async)
    loadIngredients: function(){
        this.collection.fetch({
            success: _.bind(this.loadIngredientSuccessHandler, this),
            error: _.bind(this.loadIngredientErrorHandler, this)
        });
    },

    //Voor elke waarde in het JSON bestand (door middel van Call) de naam en soort tonen.
    //De beschrijving moet naar Recepten View worden geschreven!
    //Dit kan via Render methode gaan maar aangezien in de main.js de parameters zijn mee gegeven loop
    //ik liever door de JSON file heen.

    loadIngredientSuccessHandler: function(collection, response, options){
      for (var i= 0; i < response.length; i++){
          templates = {
              ingrName: response[i]['name'], //Haal naam uit JSON op
              ingrSort: response[i]['sort'], // Haal soort uit JSON op
              ingrDescription: response[i]['description'], //Haal Beschrijving uit JSON op
              ingrPrice: response[i]['price'] //Haal Prijs op!
          };



          //Maak voor onze Ingredienten een template aan en append die aan het huidige element ($el).
          var template = _.template(this.ingredientTemplate.html(), templates, this);
          this.$el.append(template);
      }
    },



    //Fouthandler... Mocht het fout gaan met het bestand!
    loadIngredientErrorHandler: function(collection, response, options){
        console.log("Er is iets fout gegaan met het JSON bestand")
    }
});