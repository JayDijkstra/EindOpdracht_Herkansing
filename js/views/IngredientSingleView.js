site.views.Ingredient = Backbone.View.extend({
    tagName: 'li',

    // Manier om template op te halen!
    template: template('ingredientTemplate'),

    initialize: function(){

        //Wanneer change wordt gekozen (change is een backbone event)
        this.model.on('change', this.render, this);

        //Wanneer destroy wordt gekozen (backbone event)
        this.model.on('destroy', this.remove, this);
    },


    events: {
        'click .edit': 'editIngredient', //Events als er op de classe .edit wordt geklikt
        'click .delete': 'destroy'// Events als er op de classe .destroy wordt geklikt.

    },

    //Functie Edit
    editIngredient: function(){
        var newIngredient = prompt('Geef de nieuwe naam van het Ingredient', this.model.get('name'));
        if (! newIngredient ) return;

        this.model.set('name', newIngredient, {validate:true});
    },


    destroy: function(){
        this.model.destroy();
    },

    remove: function(){
        this.$el.remove();
    },

    render: function(){
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    }
});