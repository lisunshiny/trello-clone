TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.model.lists(), "add", this.addSubviewList);

    this.model.lists().each(this.addSubviewList.bind(this));

  },

  template: JST["boards/show"],

  events: {
    "click .delete-board": "destroy"
  },

  enableSortable: function() {
    var $cards = $(".cards-container");

    $cards.sortable({
      update: function(event, ui) {
        debugger;
      },


      appendTo: $(".cards-container"),
      connectWith: $(".cards-container"),


    });

  },

  addSubviewList: function(list) {
    if (list.id === undefined) {
      return;
    }
    var listView = new TrelloClone.Views.ListShow({
      model: list,
      collection: this.model.lists()
    });

    this.addSubview(".lists-container", listView);
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    this.attachSubviews();
    this.enableSortable();

    return this;
  },

  destroy: function(event) {
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
        Backbone.history.navigate("", {trigger: true})
      }.bind(this)
    })
  }
})
