TrelloClone.Collections.Lists = Backbone.Collection.extend({
  comparator: "ord",
  url: "/api/lists",

  initialize: function(opts) {
    this.board = opts.board
  }
})
