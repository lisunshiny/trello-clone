TrelloClone.Collections.Cards = Backbone.Collection.extend({
  comparator: "ord",
  initialize: function(opts) {
    this.list = opts.list
  }
})
