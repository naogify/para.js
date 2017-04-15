var elements =['吾','輩','は','猫','で','あ','る','。','名','前','は','ま','だ','な','い','。'];//you can edit the text in this array.
var para = document.getElementById('para');
var text = "";
var count = 0;

intervalID = setInterval(display_text, 200);//set the interval for text animation.

function display_text(){
  if (count == elements.length -1) {
    clearInterval(intervalID);
  }
  text = text + elements[count];
  para.textContent = text;
  count = count + 1;
}
