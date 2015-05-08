TrelloClone.Views.BoardShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync change", this.render)
  },

  template: JST["boards/show"],

  events: {

  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    return this;
  }
})
