let refreshTimesArray={};

// if we receive any message either its from startRefersh/stopRefresh
//we handle it here

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(message.command==="refreshStart"){
        const {time,tabId}=message;
        
        if(refreshTimesArray[tabId]){
            clearInterval(refreshTimesArray[tabId]);
        }
        //setInterval() method take one function and a time value ,where is runs that fuction for every time loop
        refreshTimesArray[tabId]=setInterval(()=>{
            chrome.tabs.reload(tabId);
        },time*1000);

    }else if(message.command==="refreshStop"){
        const {tabId}=message;
        if(refreshTimesArray[tabId]){
            clearInterval(refreshTimesArray[tabId]);// loop of refresh will be broken by this statement
            // That being said , clear interval will stop execution
            delete refreshTimesArray[tabId];// this will delete the entry point or object of Interval
        }
        
    }
});