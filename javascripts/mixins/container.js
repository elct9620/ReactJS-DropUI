/*
# Container
#
# Implement for drop component into it and display it
*/


(function() {
  var Components, Container, Mixins, _ref, _ref1;

  Mixins = this.Mixins = (_ref = this.Mixins) != null ? _ref : {};

  Components = this.Components = (_ref1 = this.Components) != null ? _ref1 : {};

  Container = {
    _defaultRender: function() {
      return this.childComponents;
    },
    _onDragOver: function(event) {
      event.preventDefault();
      event.stopPropagation();
      this.state.style["box-shadow"] = "inset 0 0 0 3px red";
      return this.setState(this.state);
    },
    _onDragLeave: function(event) {
      this.state.style["box-shadow"] = "none";
      return this.setState(this.state);
    },
    _onDrop: function(event) {
      var componentToAdd;

      this._onDragLeave();
      componentToAdd = event.dataTransfer.getData("ComponentType");
      if (componentToAdd && Components[componentToAdd]) {
        this.childComponents.push(Components[componentToAdd]({
          key: Date.now().toString(32)
        }));
      }
      return event.stopPropagation();
    },
    componentWillMount: function() {
      this.childComponents = [];
      if (!(this.state && this.state.style)) {
        return this.setState({
          style: {
            background: "white"
          }
        });
      }
    },
    render: function() {
      var _ref2;

      this.componentRender = (_ref2 = this.componentRender) != null ? _ref2 : this._defaultRender;
      return React.DOM.div({
        onDragOver: this._onDragOver,
        onDragLeave: this._onDragLeave,
        onDrop: this._onDrop,
        className: "component-container",
        style: this.state.style
      }, this.componentRender());
    }
  };

  Mixins.Container = Container;

}).call(this);
