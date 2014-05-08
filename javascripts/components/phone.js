/*
# Phone Component
#
# The base container for place objects
*/


(function() {
  var Components, Mixins, Phone, _ref, _ref1;

  Mixins = this.Mixins = (_ref = this.Mixins) != null ? _ref : {};

  Components = this.Components = (_ref1 = this.Components) != null ? _ref1 : {};

  Phone = React.createClass({
    displayName: "Phone",
    mixins: [Mixins.Container]
  });

  Components.Phone = Phone;

}).call(this);
