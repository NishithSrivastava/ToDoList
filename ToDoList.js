
var x = 1;
$('.btn').click(function () {
    var txt = $('#ip1').val();
    //alert(txt);
    result = "<div class = 'results"+x+"'><li>"+ txt + "</li></div> <br>";
    $('.results').append(result);
    txt = "";
    $('#ip1').val("");
    })