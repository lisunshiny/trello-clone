TrelloClone.Views.CardShow = Backbone.View.extend({
  tagName: "li",
  className: "card-item",

  initialize: function() {
    this.listenTo(this.model, "sync change", this.render)
  },

  template: JST["cards/card"],

  events: {
    "click .delete-card": "destroy"
  },

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    return this;
  },

  destroy: function(event) {
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
        Backbone.history.loadURL();
      }.bind(this)
    })
  }

})
