// we will get hold of buttons in our popup.html and add event listeners to it.
document.getElementById("startBtn").addEventListener("click",()=>{

    const refreshTime=parseInt(document.getElementById("refreshTime").value);
    console.log("refresh clicked with time :"+refreshTime);
    if(refreshTime&&refreshTime>0){
        chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
            chrome.runtime.sendMessage({
                command:"refreshStart",
                time:refreshTime,
                tabId:tabs[0].id
            });
        });
    }
});


document.getElementById("stopBtn").addEventListener("click",()=>{
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        chrome.runtime.sendMessage({
            command:"refreshStop",
            tabId:tabs[0].id
        });
    });
});


document.addEventListener("DOMContentLoaded",()=>{
    let checkBoxRef=document.getElementById("autoAssignCheckbox");

    chrome.storage.sync.get("acceptRequestKey",(data)=>{
        checkBoxRef.checked=data.acceptRequestKey || false;
    });

    checkBoxRef.addEventListener("changed",()=>{
        chrome.storage.sync.set({acceptRequestKey:checkBoxRef.checked});
    });
});
