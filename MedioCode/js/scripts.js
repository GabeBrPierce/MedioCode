function animateBackGround(selector) {
    var colors = ["#990000" ,"#b45f06" ,"#bf9000" ,"#38761d" ,"#134f5c" ,"#1155cc" ,"#0b5394" ,"#351c75" ,"#741b47" ,"#85200c","#333"];
    for (var i = 0; i < colors.length; i++){
    selector.animate({backgroundColor: colors[i]});
    }
}
function repeat27(selector) {
    var Text;
    Text = selector.html();
    for (let index = 0; index <= 27; index++) {
        $(selector).append(Text);
    }
}

$(function(){
    $(".nav li a").hover(function () {
            animateBackGround($(this));
        }, function () {
            // out
        }
    );
    repeat27($(".repeat-27"));
});