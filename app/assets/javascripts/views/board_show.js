TrelloClone.Views.BoardShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync change", this.render)
  },

  template: JST["boards/show"],

  events: {
    "click .delete-board": "destroy"
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    return this;
  },

  destroy: function(event) {
    alert("hi");
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
        Backbone.history.navigate("", {trigger: true})
      }.bind(this)
    })
  }
})
