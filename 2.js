function ValidateEmail(inputText)
{
var mailformat = "@";
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("invalid email");
document.form1.text1.focus();
return false;
}
}

function ValidateUsername(inputText)
{
var mailformat = /^(?=.*[a-z]).{6,15}/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("invalid username");
document.form1.text1.focus();
return false;
}
}

function ValidatePassword(inputText)
{
var mailformat = /^(?=.*[A-Z])(?=.*\d).{8,30}/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("Invalid password");
document.form1.text1.focus();
return false;
}
}