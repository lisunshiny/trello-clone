TrelloClone.Views.ListShow = Backbone.View.extend({
  tagName: "li",
  className: "list-group-item list-item",


  initialize: function() {
    this.listenTo(this.model, "sync change", this.render)
  },

  template: JST["lists/list"],

  events: {
    "click .delete-list": "destroy"
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    return this;
  },

  destroy: function(event) {
    $(event.currentTarget).data("id")
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
        Backbone.history.loadURL();
      }.bind(this)
    })
  }

})
