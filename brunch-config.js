exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {	    
	"js/shell.js": /^(js\/shell)/,
	  "js/vendor.js": /^(vendor\/js)/,
	  "js/index.js": /^(js\/index)/,
      },
      
      order: {
        before: [
	  
        ]
      }
      
    },
    
    stylesheets: {
      joinTo: {
	"css/shell.css": "css/*.css" ,
	  "css/vendor.css": /^(vendor\/css)/,
	  "js/index.js": /^(js\/index)/,
      } /*,
	  order: {
	  after: ["css/app.css"] // concat app.css last
	  }*/
    },

    templates: {
      joinTo: {
	"js/shell.js": /^(js\/shell)/
      }
    }
  },
  
  hooks: {
    onCompile(generatedFiles, changedAssets) {
      
    },
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/assets/static". Files in this directory
    // will b e copied to `paths.public`, which is "priv/static" by default.
    assets: function(str){
      if(str.match(/^(templates)/)){
	return true;
      }else if(str.match(/^(assets)/)){
	return true;
      }else{
	return null;
      }
    }
  },

  paths: {
    // Dependencies and current project directories to watch
    watched: ["templates", "css", "js", "vendor", "assets"],
    // Where to compile files to
    public: "../../dist/search"
  },

  // Configure your plugins
    plugins: {

	babel: {

	    presets: ["@babel/preset-env"],
	    ignore: [/vendor/]
	},
	

	gzip: {
      paths: {
	javascript: 'js',
	stylesheet: 'css'
      },
      removeOriginalFiles: true,
      renameGzipFilesToOriginalFiles: false
    },
    
    autoReload: {
      enabled: {
        css: true,
        js: true,
        assets: true
      },
      host: "localhost",
      port: 5005,
      delay: 1
    }
  },
  
  modules: {

    definition: false,
    wrapper: function(path, data) {
      if(path.includes("js/websocket")){              
        return data;
      }else if(path.includes("js/worker_handler")){
        return data;
      }else{
          return `require.register("${path}", function(exports, require, module) {\n
                       ${data}});\n\n`
      }
    },
    
    autoRequire: {
      "js/shell.js": ["js/shell/shell"]
    }
  },

  npm: { 
    enabled: false 
  }
  
};
