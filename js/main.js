



//-- Sending Messages
const messagelog = $("#message-log");

function sendUserMessage(msg) {
    let textHolder = $("<div></div>");
    textHolder.attr("class", "text-bubble user")
    textHolder.html(msg);
    messagelog.append(textHolder);
}

//-- Sending Messages Events

const sendbtn = $("#send-btn");
const inputbox = $("#message-input");

sendbtn.on("click", function() {
    
    let text = inputbox.val();
    inputbox.val("");
    if (text) {
        sendUserMessage(text);
        saveMessageToFirebase({
            message: text,
            sender: "user",
            time: Date.now()
        })
    }

})

// Posting Pictures
const picInput = $("#pic-input");

picInput.change(function() {

    if (picInput.files && picInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            console.log(e.target.result);
            messagelog.append($('<img>').attr('src', e.target.result));
        }

        reader.readAsDataURL(picInput.files[0]);
    }
});



//- Receiving Messages
function postBotMessage(msg) {
    let textHolder = $("<div></div>");
    textHolder.attr("class", "text-bubble bot")
    textHolder.html(msg);
    messagelog.prepend(textHolder);
}


//- Initializing App
function init() {
    // window.navigator.vibrate(200);
    getAllMessagesFromFirebase(messagelog);
}
init();