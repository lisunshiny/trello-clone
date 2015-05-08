TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(opts) {
    this.$rootEl = opts.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "new": "create",
    ":id": "show"
  },

  index: function() {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    })

    this.$rootEl.html(view.render().$el);
  },

  create: function() {
    var model = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardForm({
      model: model,
      collection: this.collection
    });

    this.$rootEl.html(view.render().$el);
  },

  show: function(id) {
    var model = this.collection.getOrFetch(id);
  }


})
