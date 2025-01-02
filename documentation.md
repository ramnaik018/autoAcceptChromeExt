first when ext is loaded, browser reads the manifest.json and undersands the structure of ext
Then if user click on ext icon , popup.html will start executing along with attached popup.css and popup.js
then content.js will interact with the DOM of webpage on which extention is being loaded and send/receive the messages from background.js
background scripts and content scripts use chrome APIs to perform tasks like opening tabs , storing data or modifying browser behaviours

POPUP.JS

first we will get lsiten to the click event on start button ,
then we parse the refresh time and design a custom message object having information about (message , tabId ,and entered refresh time) to send to other files.

Similar to startRefresh , we send custom object of two key value pairs having stop command and another being tab id.(Here we dont require time pair , coz we dont require that to stop loop)

Now to work with checkbox , we use chrome.storage.sync API to access the checkbox's value,

checkbox.checked will give us the current state of checkbox.

chrome.storage.sync.get() takes a key ("acceptRequest") and retives the corresponding data as an object (data) [this acceptRequest key will be defined by us while setting the value of checkbox using eventListener]
