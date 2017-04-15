# para.js

This is the javascript for text animation.
It displays characters one by one.

文字を一文字づつ表示するjavascriptです。

## using
1.add ```<script type="text/javascript" src="./js/vwrite.js"></script>``` just before closing body tag.<br>
2.Then, add ```id="para"``` to div or p tag.<br>
3.replace the text inside of ```elements = [];``` in para.js.<br>
※Also, you can set the interval for animation by change the value of setInterval.<br>

1.```<script type="text/javascript" src="./js/vwrite.js"></script>```をbodyの閉じタグの直前に追加する。<br>
2.divかpタグに```id="para"``` をセットする。<br>
3.para.js内の```elements = [];```内のテキストを表示したい文字に一文字づつ置き換える。<br>
※同じくpara.js内のsetInterval内の値を変更することで、文字を表示するスピードを変更することができる。<br>


##note!
I just only check it on chrome(Ver 57.0.2987.133)、firefox(52.0.2) and safari(10.1) on macOS(10.12.4).
I haven't checked it other environment (eg. IE). I'm planing to do it for others now.
