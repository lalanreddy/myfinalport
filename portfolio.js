const name = document.getElementById('Fullname');
const email = document.getElementById('email');
const number = document.getElementById('mobile');
const message = document.getElementById('msg');
const submit = document.getElementById('submit');
function clicked()
{
    const key = name.value;
    const value = email.value;
    const num = number.value;
    const msg= message.value;
    console.log(key);
    console.log(value);
    console.log(num);
    console.log(msg);
if(key && value)
{
    localStorage.setItem(key,value);
}
window.location.href("C:/Users/pleas/Desktop/finalportfolio/success.html");
};