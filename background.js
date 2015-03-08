$( window ).load(function (){

$(".coubDescription").append($('<input type="button" id="btnAudio" class="myButton" value="mp3">'));

$("#btnAudio").click(function() {
    var str = $('script[type="text/json"]').first().html();
    var obj = JSON.parse(str);
    var template = obj['audio_versions']['template'];
    var url = template.replace("%{version}", "high");
    window.open(url, '_blank');
    });
});