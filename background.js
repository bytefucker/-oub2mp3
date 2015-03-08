$( window ).load(function(){

$(".coubDescription").append($('<input type="button" id="btnAudio" class="myButton" value="mp3">'));


$("#btnAudio").click(function() {
    var divs = $(".data");
    for (i = 0; i < divs.length; i++) {
        var original = (divs[i].innerHTML);
    }
    // removing tags
    var str = original.replace(/<\/?[^>]+>/gi, '');
    var obj = JSON.parse(str);
    var url = (obj['file_versions']['mobile']['audio_url']);
    var name = (obj['title']);
    window.open(url, '_blank');
    });
});