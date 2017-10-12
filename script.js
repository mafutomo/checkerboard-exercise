// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%// Your JS goes here

// STARTING WITH DODGER BLUE

for (let i = 0; i < 5; i++) {

  for (let i = 0; i < 9; i++) {

    var div = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];

    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    div.style.width = '11.1%';
    body.prepend(div);

    if (i % 2 === 0) {
      div.style.backgroundColor = 'rgb(30, 144, 255)'; //dodgerblue
    } else {
      div.style.backgroundColor = 'rgb(106, 90, 205)'; //slate blue
    }

  }

  // STARTING WITH BLACK
  for (let i = 0; i < 9; i++) {

    var div = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];

    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    div.style.width = '11.1%';
    body.prepend(div);

    if (i % 2 === 0) {
      div.style.backgroundColor = 'rgb(106, 90, 205)';
    } else {
      div.style.backgroundColor = 'rgb(30, 144, 255)';
    }
  }

}
