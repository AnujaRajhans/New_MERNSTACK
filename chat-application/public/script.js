document.addEventListener("DOMContentLoaded",function() {
    const socket= io();
    const messageInput=document.getElementById('message_input');
    const sendButton=document.getElementById('send-button');
    const chatOutput=document.getElementById('chat_output');
    sendButton.addEventListener("click",sendMessage);
    socket.on('chat-message',function(data) {
        displayMessage(data);
    });
    function sendMessage(){
        const message=messageInput.value.trim();
        if(message!==''){
            socket.emit('chat-message',  {
                user:'you',
                message:message,
                server1:'AI',
                messageAI:serverFunction(message),
            });
            messageInput.value='';
        }
    }
   function serverFunction(message) {
        const keywords = ['price','camera','display','os','ram'];
        const messageWords=message.split(' ');
        let ans='';
        let keywordFound=false;
        for(let i=0;i<messageWords.length;i++)
            {
                const keywordIndex= keywords.indexOf(messageWords[i].toLowerCase());
                if(keywordIndex!==-1&& !keywordFound ){
                    ans=generateAnswer(keywords[keywordIndex])+' ';
                    keywordFound=true;

                }
                else if(! keywordFound){
                    ans+='ask a correct question';
                }
            }
            return ans.trim();
   };
        function generateAnswer(keyword){
            switch(keyword){
                case 'price':
                    return 'The price of the phone is 20000';
                case 'camera':
                    return 'The camera of the phone is 12MP';
                case 'display':
                    return 'The display of the phone is 6 inches';
                case 'os':
                    return 'The os of the phone is android';
                case 'ram':
                    return 'The ram of the phone is 4GB';
                default:
                    return 'ask a question';
            }
        }
        function displayMessage(data){
            const messageElement=document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML=`<p class="meta">${data.user} <span>${data.time}</span></p>
            <p class="text">
            ${data.message}
            </p>`;
            chatOutput.appendChild(messageElement);
            chatOutput.scrollTop=chatOutput.scrollHeight;
            const messageElement1=document.createElement('div');
            messageElement1.classList.add('message');
            messageElement1.innerHTML=`<p class="meta">${data.server1} <span>${data.time}</span></p>
            <p class="text">
            ${data.messageAI}
            </p>`;
            chatOutput.appendChild(messageElement1);
            chatOutput.scrollTop=chatOutput.scrollHeight;
        }
});