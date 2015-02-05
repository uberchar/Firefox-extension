var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
  label: "Save Files",

  context: contextMenu.URLContext("http://exhentai.org/g/*"),
  contentScriptFile: [self.data.url("fnct.js"), self.data.url("jquery.js")],
  onMessage: function (selectionText) {
    console.log(selectionText);
  }
});