// The loader pulls in all the necessary js files for the app in one place

function app_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

app_load([
  // library code
  "vendor/backbone/underscore.js",
	"vendor/backbone/backbone.js",
	"vendor/backbone/backbone.couch.js"
])