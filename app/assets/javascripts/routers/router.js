TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(opts) {
    this.$rootEl = opts.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "new": "createBoard",
    ":id/lists/new":"createList",
    ":boardId/lists/:listId/cards/new": "createCard",
    ":id": "show"
  },

  index: function() {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    })

    this.$rootEl.html(view.render().$el);
  },

  createBoard: function() {
    var model = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardForm({
      model: model,
      collection: this.collection
    });

    this.$rootEl.html(view.render().$el);
  },

  show: function(id) {
    var model = this.collection.getOrFetch(id);
    var view1 = new TrelloClone.Views.BoardShow( {
      model: model,
      collection: this.collection
    })

    this.$rootEl.html(view1.render().$el);
  },

  createList: function(id) {
    var board = this.collection.getOrFetch(id);
    var collection = board.lists();

    var model = new TrelloClone.Models.List();

    var view = new TrelloClone.Views.ListForm({model: model, collection: collection });

    this.$rootEl.html(view.render().$el);
  },

  createCard: function(boardId, listId) {
    var board = this.collection.getOrFetch(boardId);
    var list = board.lists().get(listId);
    var collection = list.cards();

    var model = new TrelloClone.Models.Card();

    var view = new TrelloClone.Views.CardForm( {
      model: model,
      collection: collection
    });

    this.$rootEl.html(view.render().$el);
  }

})
