TrelloClone.Views.CardForm = Backbone.View.extend ({
  template: JST["cards/form"],

  events: {
    "click button": "save"
  },


  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    return this;
  },

  save: function(event) {
    event.preventDefault();
    var attrs = this.$el.find(".card-form").serializeJSON();
    this.model.save(attrs, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.loadUrl();
      }.bind(this),
      error: function() {
        alert("you suck");
      }
    });
  }
})
