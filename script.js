// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%// Your JS goes here

// STARTING WITH RED

for (let i = 0; i < 5; i++ ) {

for (let i = 0; i < 9; i++) {

var div = document.createElement('div');
var body = document.getElementsByTagName('body')[0];

div.style.float = 'left';
div.style.paddingBottom = '11.1%';
div.style.width = '11.1%';

  div.style.backgroundColor = 'rgb(' + Math.floor((Math.random()*256)) + ',' + Math.floor((Math.random()*256)) + ',' + Math.floor((Math.random()*256)) + ')';
body.prepend(div);
}

// STARTING WITH BLACK
for (let i = 0; i < 9; i++) {

var div = document.createElement('div');
var body = document.getElementsByTagName('body')[0];

div.style.float = 'left';
div.style.paddingBottom = '11.1%';
div.style.width = '11.1%';


  div.style.backgroundColor = 'rgb(' + Math.floor((Math.random()*256)) + ', ' + Math.floor((Math.random()*256)) + ', ' + Math.floor((Math.random()*256)) + ')';
body.prepend(div);
}

}
