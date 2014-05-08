/*
# UI Tool
#
# A draggable icon for add component into container
*/


(function() {
  var Mixins, UITool, _ref;

  Mixins = this.Mixins = (_ref = this.Mixins) != null ? _ref : {};

  UITool = {
    _onDragStart: function(event) {
      return event.dataTransfer.setData("ComponentType", this.componentType);
    },
    componentWillMount: function() {
      var _ref1, _ref2;

      this.icon = (_ref1 = this.icon) != null ? _ref1 : "http://placehold.it/50";
      return this.componentType = (_ref2 = this.componentType) != null ? _ref2 : null;
    },
    render: function() {
      return React.DOM.img({
        src: this.icon,
        draggable: true,
        onDragStart: this._onDragStart
      });
    }
  };

  Mixins.UITool = UITool;

}).call(this);
