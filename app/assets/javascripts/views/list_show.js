TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  tagName: "li",
  className: "list-item",


  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.model.cards(), "add", this.addSubviewCard);

    this.model.cards().each(this.addSubviewCard.bind(this));
  },

  template: JST["lists/list"],

  events: {
    "click .delete-list": "destroy"
  },

  addSubviewCard: function(card) {
    var cardView = new TrelloClone.Views.CardShow({
      model: card,
      collection: this.model.cards()
    })
    this.addSubview(".cards-container", cardView);
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  destroy: function(event) {
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
        Backbone.history.loadUrl();
      }.bind(this)
    })
  }

})
