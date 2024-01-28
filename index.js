const chatlog = document.getElementById("chat-log"),
userinput = document.getElementById("user-input"),
sendbutton = document.getElementById("send-btn"),
buttonIcon = document.getElementById("button-icon"),
info = document.querySelector(".info");


sendbutton.addEventListener("click" , sendMessage);
userinput.addEventListener("keydown",(event)=>{
    if(event.key === 'Enter'){
       sendMessage;
    }
});

function sendMessage(){
    const message = userinput.ariaValueMax.trimStart();

    if(message == " "){
        return;
    }else if(message == "developper"){
        userinput.value = " ";
        appendMessage("user" , message);
        setTimeout(() => {
            appendMessage("bot" , "This Source Coded By ")

        })

    }
}