TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync add", this.render)
  },
  template: JST["boards/index"],

  events: {

  },


  render: function() {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);

    return this;
  }
})
