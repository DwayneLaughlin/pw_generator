var letterList = 'aAbBCcdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';

var numberList = '1234567890';

var specialList = "!@#$%^&*()[]{}~`";

var numLength = document.getElementById("numLength");
var numberCheck = document.getElementById("numberCheck");
var specialCheck = document.getElementById("specialCheck");
var passButton = document.getElementById("passButton");
var passResult = document.getElementById("passResult");
 var copyButton = document.getElementById("copyButton");


passButton.addEventListener("click",function() {
    var checkIn = letterList;
    if (numberCheck.checked === true){
        checkIn += numberList
    };
    if (specialCheck.checked === true){
        checkIn += specialList
    };
    passResult.value = passwordGen(numLength.value,checkIn)
});

function passwordGen (strLength, charactersIncluded){
    var passwordz = " ";
    for (i = 0; i < strLength; i++){
        passwordz += charactersIncluded.charAt(Math.floor(Math.random() * charactersIncluded.length));
    }
    return passwordz;
};

copyButton.addEventListener("click", function(){
        passResult.select();
        document.execCommand("copy");
})



    



