
var firstname=createlabel("label","for","firstname","first Name");
var b1=linebreak("br");
var inputfirstname=inputefield("input","type","firstname","id","first Name");
var b2=linebreak("br");
var lastname=createlabel("label","for","lastname","last Name");
var b3=linebreak("br");
var inputlastname=inputefield("input","type","lastname","id","last Name");
var b4=linebreak("br");
var email=createlabel("label","for","email","Email");
var b5=linebreak("br");
var inputemail=inputefield("input","type","email","id","Email");
var b6=linebreak("br");
var phonenumber=createlabel("label","for","phonenumber","phone Number");
var b7=linebreak("br");
var inputphonenumber=inputefield("input","type","phonenumber","id","phone Number");
var b8=linebreak("br");
var button=createlabel("button","for","button","click Me");
var linebreak=document.createElement("br");
document.body.append(firstname,b1,inputfirstname,b2,lastname,b3,inputlastname,b4,email,b5,inputemail,b6,phonenumber,b7,inputphonenumber,b8,button);


function createlabel(conname,filename,filevalue,content){
        var element=document.createElement(conname);
        element. setAttribute(filename,filevalue);
    element.innerHTML=content;
        return element;
    
    
    }
    function inputefield(conname,filename,filevalue,filename1,filevalue1){
        var input=document.createElement(conname);
        input.setAttribute(filename,filevalue);
        input.setAttribute(filename1,filevalue1);
        return input
    }
    function linebreak(breaker){
        var b1=document.createElement(breaker);
        return b1;
    }