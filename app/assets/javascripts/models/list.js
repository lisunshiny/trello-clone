TrelloClone.Models.List = Backbone.Model.extend({

  parse: function(json) {
    if (json.cards) {
      this.cards().set(json.cards);
      delete json.cards;
    }

    return json;
  },

  cards: function() {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards({
        list: this
      })
    }
    return this._cards
  }
})
