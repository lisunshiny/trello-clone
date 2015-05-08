TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  parse: function(json) {

    if (json.lists) {
      this.lists.set(json.lists);
      delete json.lists;
    }

    return json;
  },

  lists: function() {
    if (!this._lists) {
    }
  }
})
