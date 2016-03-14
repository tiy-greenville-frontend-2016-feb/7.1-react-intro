var $ = require('jquery');
var Backbone = require('backbone');


var IcecreamModel = Backbone.Model.extend({
  popularity: function(){
    return Math.floor(this.get("upVotes") / this.get("totalVotes") * 100);
  }
});

var IcecreamCollection = Backbone.Collection.extend({
  model: IcecreamModel,
  comparator: function(model){ return -model.popularity();}
});

module.exports = {"IcecreamCollection": IcecreamCollection};
