var fs = require("fs");
var path = require("path");
var _=require("underscore");
var markdown = require("markdown-pdf");

// arrays for containing content from directories
var web_tjenester = [];
var titles = {
  web_tjenester : {
    dir : "web_tjenester",
    title: "02267 Software-udvikling af Webtjenester E16"
  },
  Linux_server : {
    dir : "linux_62501",
    title : "62501 Linux server og netværk E16"
  }
}

// function to get content of folders as arrays.
function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){

        var name = dir + '/' + files[i];
        var cdir = name.replace(__dirname, '').split("/")[1];

        if (name != path.resolve(__dirname, cdir, "pics") && name.split(".")[1] === "md") {
          if (fs.statSync(name).isDirectory()){
              getFiles(name, files_);
          } else {
              files_.push(name);
          }
        }
    }
    return files_;
}

// initialiser arrays for hvert fag.

_.forEach(titles, function(book) {
  console.log(book);
  var file = getFiles(path.resolve(__dirname, book.dir));
  console.log(file)
  markdown().concat.from(file).to(path.resolve("./dist/", book.title));
});

//web_tjenester = getFiles(path.resolve(__dirname, titles.web_tjenester.dir));
// create the pdfs
//markdown().concat.from(web_tjenester).to(titles.web_tjenester.title);
