TrelloClone.Collections.Lists = Backbone.Collection.extend({
  comparator: "ord",
  url: "/api/lists",
  model: TrelloClone.Models.List,

  initialize: function(opts) {
    this.board = opts.board
  }
})
