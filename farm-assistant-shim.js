'use strict';

// Node need to require yaml.js
// Add package.json

var RED = require("./red/red.js");
var events = require("./red/runtime/events");
var request = require('request');
var YAML = require('yamljs');
var hapassword;

console.log("hello world");
events.on("nodes-started",function() {
  console.log("All nodes have started");
  console.log(RED.settings.get('haConfig'));
  var nativeObject = YAML.load(RED.settings.get('haConfig'));
  console.log(nativeObject.http.api_password);
  hapassword = nativeObject.http.api_password;
});

