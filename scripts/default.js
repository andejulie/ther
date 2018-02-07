$(document).ready(function() {
    $('#btnAdd').on('click', addNumbers)
});

//function addNumbers() {
//    var x = document.getElementById('x').value;
//    var y = document.getElementById('y').value;
//    var result = document.getElementById('result');
//    var xmlhttp = new XMLHttpRequest();
//    xmlhttp.onreadystatechange = function () {
//        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//            var jsonObject = JSON.parse(xmlhttp.response);
//            result.innerHTML = jsonObject.result;
//       }
//    }

function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    alert(x);
    var data = { "x": x, "y": y};
    $.getJSON('/addition', data, function (data) {
        $('#result').html(data.result);
    });
//    xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y , true);
//    xmlhttp.send();
}