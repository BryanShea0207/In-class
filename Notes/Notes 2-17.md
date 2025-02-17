# Node & npm
1. create Server folder
    * This will be the server side files there will be a Client as well
    * Windows is not case sensitive Server = server
    * Unix(linux / mac) is case sensitive Server != server
    * Git is not case sensitive 
    * JavaScript & Node is case Sensitive
        * make files case sensitive to keep things working as intended

node is a container for JavaScript outside of a browser
Node runs on V8 (JavaScript engine for Chromium)
Node is open source and there are branches
    Node has 2 competitors Deno & Bun. These are ports of Node with 99.9% compatibility with node and extra features
    This course will cover only Node

Express will be the MVC this class will be using
Flask and Jango for Python

### Javascript notes
/* */ for Comments
"" or '' for strings just need to be consistent 
console.log("") for printing
var, const & let
    const should almost always be used due to it being immutable
    let and var are very similar 
        var is not scoped for code block such as if statements and loop
        let is 
Start with :
    const http = require('http');

backtick (``) strings allow for inline JavaScript using ${} 
### Using Node
in VS code launch a terminal window and type
    node FILE_PATH

A 'Module system' is needed to insure the code in one file is available when you need it and not available when you don't

a good system is to make the data in a code file(module) local to that file
functions and variable you want to use need to be marked for export and the file using them must have inputs for the parts you need

there are 2 different ones with different purposes 
    
    * EX6 Module System 
    * Common JS

Client side code uses Typescript with EX6
Common JS and JS for the server side

### Modules and packages

Package has modules and files inside of it 
modules tend to be a single file

Http comes with node and has many functions to run the server
it is not often used directly and often is used through another library
### Regular vs arrow function
function fun(x,y) {
    code
}

(x,y) => {
    code
}

"this" keyword only works inside a regular function

const square = x => x * x;
this makes a function square that takes a parameter (x) and returns x*x 

### NPM
Node package Manager 
NPM is a for Profit org with some OPen source some closed source codes

CLI for node is owned by NPM owners 

YARN is a fork of NPM from Facebook
PNPM is another

the idea of a package manger is that every piece of software can be used by any other piece of software and generates a graph 
for each file there is a list of what it uses and a list of where it is uses 

pnpm init creates a package.json for your web app in the current directory
there will be multiple package.json one for server one for client
    server one goes into the root
    client goes into client folder
