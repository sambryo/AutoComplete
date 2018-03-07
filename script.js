function jsfunc1(sourceString){
    var myList = document.getElementById(sourceString);
    var sourceObj = eval(sourceString); // converting string to obj
    var obj = new sourceObj();
    var options = "";
    for (var i=0; i< obj.length; i++){
        options += "<option value =" + obj.list[i] + '" />';
    }

    myList.innerHTML = options;
}
