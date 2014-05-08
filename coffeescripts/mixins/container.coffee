###
# Container
#
# Implement for drop component into it and display it
###

Mixins = @Mixins = @Mixins ? {}
Components = @Components = @Components ? {}

Container = {
  _defaultRender: ->
    @childComponents

  _onDragOver: (event) ->
    event.preventDefault()
    event.stopPropagation()

    @state.style["box-shadow"] = "inset 0 0 0 3px red"
    @setState @state

  _onDragLeave: (event) ->
    @state.style["box-shadow"] = "none"
    @setState @state

  _onDrop: (event) ->
    @_onDragLeave()

    componentToAdd = event.dataTransfer.getData("ComponentType")
    @childComponents.push Components[componentToAdd](key: Date.now().toString(32)) if componentToAdd and Components[componentToAdd]

    event.stopPropagation()

  componentWillMount: ->
    @childComponents = []

    # Check default style state
    @setState({style: {background: "white"}}) unless @state and @state.style

  render: ->
    @componentRender = @componentRender ? @_defaultRender
    React.DOM.div {
      onDragOver: @_onDragOver
      onDragLeave: @_onDragLeave
      onDrop: @_onDrop
      className: "component-container"
      style: @state.style
    }, @componentRender()
}

Mixins.Container = Container
