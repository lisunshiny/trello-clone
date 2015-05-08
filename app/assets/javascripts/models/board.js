TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  parse: function(json) {
    if (json.lists) {
      this.lists().set(json.lists, { parse: true });
      delete json.lists;
    }

    return json;
  },

  lists: function() {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists({
        board: this
      });
    }
    return this._lists;
  }
})
