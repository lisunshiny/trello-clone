TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(opts) {
    this.$rootEl = opts.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },

  routes: {
    "": "index"
  },

  index: function() {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    })

    this.$rootEl.html(view.render().$el);
  }

})
