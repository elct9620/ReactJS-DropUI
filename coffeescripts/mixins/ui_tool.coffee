###
# UI Tool
#
# A draggable icon for add component into container
###

Mixins = @Mixins = @Mixins ? {}

UITool = {
  _onDragStart: (event) ->
    event.dataTransfer.setData "ComponentType", @componentType

  componentWillMount: ->
    @icon = @icon ? "http://placehold.it/50"
    @componentType = @componentType ? null

  render: ->
    React.DOM.img {
      src: @icon
      draggable: true
      onDragStart: @_onDragStart
    }
}

Mixins.UITool = UITool
