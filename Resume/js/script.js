

function changeToUpper(){
    document.getElementById("str_input").value = 
    document.getElementById("str_input").value.toUpperCase();
}

function dateCount() {
    let start = new Date(); //today
    let end = new Date(document.getElementById("date_str").value);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    document.getElementById("output").innerHTML="Countdown : " +
    daysDifference.toFixed(0);
}
function showFlag(flag) {
    document.getElementById("flag_div").innerHTML = '<img src="flag/' + flag + '.jpg" width="200">';
}