TrelloClone.Views.BoardForm = Backbone.View.extend({
  className: "board-form",
  tagName: "form",
  initialize: function() {
  },

  template: JST["boards/form"],

  events: {
    "click button": "save"
  },


  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    return this;
  },

  save: function(event) {
    event.preventDefault();
    var attrs = this.$el.find("#board-title").serializeJSON();
    this.model.save(attrs, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate("#" + this.model.id, { trigger: true });
      }.bind(this),
      error: function() {
        alert("you suck");
      }
    });
  }
})
