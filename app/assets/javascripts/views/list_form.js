TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST["lists/form"],

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
    var attrs = this.$el.find(".list-form").serializeJSON();
    this.model.save(attrs, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate("#" + this.collection.board.id, { trigger: true });
      }.bind(this),
      error: function() {
        alert("you suck");
      }
    });
  }
})
