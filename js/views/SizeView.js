site.views.SizeView = Backbone.View.extend({

    events: {
        "click p": "chooseSize"
    },

    initialize: function(getInfo){
        this.sizeTemplate = getInfo.sizeTemplate;
        console.log("Size View is mooi geladen!");
        this.getSizes();
    },

    //Als er een Grootte Wordt Gekozen
    chooseSize:function(e){
        var chosenSize = $(e.currentTarget).data('size');
        this.trigger(chosenSize);
        console.log(chosenSize);
    },

    //Volledige Lijst uit JSON bestand Halen
    getSizes: function(){
        this.collection.fetch({
            success: _.bind(this.successHandler, this),
            error: _.bind(this.errorHandler, this)
        });
    },

    //Als Async is gelukt waarde vullen met behulp van for-lus.
    successHandler: function(collection, response, options){
        for (var i= 0; i < response.length; i++){
            templates = {
                sizeName: response[i]['name'],
                sizeSort: response[i]['sort'],
                sizePrice: response[i]['price']
            };

            //Template inladen voor View!
            var template = _.template(this.sizeTemplate.html(), templates, this);
            this.$el.append(template);

        }
    },


    //Errorhandler als er iets fout is gegaan met Async.
    errorHandler: function(collection, response, options){
        console.log("Er is iets fout gegaan met het JSON bestand")
    }

});