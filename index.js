let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

//Adding click event listener for every button
for(item of buttons){
    item.addEventListener('click', (event)=>{
        buttonText = event.target.innerText;
        //console.log(event.target);
        //console.log('Button :', buttonText);

        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'AC')
        {
            //Clearing the screenValue
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if(buttonText == 'DEL')
        {
            //Removing the last element from the screenValue
            screenValue = screenValue.substr(0, screenValue.length-1);
            screen.value = screenValue;
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}