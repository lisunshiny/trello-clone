TrelloClone.Views.BoardForm = Backbone.View.extend({
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
    var attrs = this.$el.serializeJSON();
    debugger;
  }
})
