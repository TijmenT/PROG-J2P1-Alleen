if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["T", "Tr", "Tra", "Tran", "Trans", "Transf", "Transfo", "Transfor", "Transform", "Transforme", "Transformer", "Transformers", "Transformers C", "Transformers Co", "Transformers Com", "Transformers Comm", "Transformers Commu", "Transformers Commun", "Transformers Communi", "Transformers Communit", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community", "Transformers Community" , "Transformers Communit", "Transformers Communi", "Transformers Commun", "Transformers Commu" , "Transformers Comm" , "Transformers Com" , "Transformers Co" , "Transformers C" ,"Transformers", "Transformer" ,"Transforme" , "Transform", "Transfor" , "Transfo" , "Transf" , "Trans" , "Tran" ,"Tra", "Tr", "T"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}