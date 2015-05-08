TrelloClone.Collections.Cards = Backbone.Collection.extend({
  comparator: "ord",
  model: TrelloClone.Models.Card,
  initialize: function(opts) {
    this.list = opts.list
  }
})
