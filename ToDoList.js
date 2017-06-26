
var x = 1;
$('.btn').click(function () {
    var txt = $('#ip1').val();
    //alert(txt);
    result = "<div class = 'results"+x+"'>"+ txt + "</div> <br>";
    $('.results').prepend(result);
    txt = "";
    $('#ip1').val("");
    })