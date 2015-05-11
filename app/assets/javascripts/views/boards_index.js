TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync add remove", this.render)
    this.addForm();

  },

  template: JST["boards/index"],

  events: {

  },

  addForm: function() {
    var formView = new TrelloClone.Views.BoardForm( {
      model: new TrelloClone.Models.Board(),
      collection: this.collection
    });
    this.addSubview("#new-board-form", formView);
  },


  render: function() {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);

    this.attachSubviews();

    return this;
  }
})
