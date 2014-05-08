###
# Main APP
###

Components = @Components = @Components ? {}

phoneContainer = document.querySelector "#phone-container"
toolbox = document.querySelector "#component-view"

React.renderComponent Components.Phone(), phoneContainer
React.renderComponent Components.UIButtonTool(), toolbox
