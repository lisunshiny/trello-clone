TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards/",
  model: TrelloClone.Models.Board,

  getOrFetch: function(id) {
    var model = this.get(id);

    if (!model) {
      model = new TrelloClone.Models.Board({ id: id })
    }

    model.fetch();
    this.add(model, {merge: true});

    return model;
  }
})
