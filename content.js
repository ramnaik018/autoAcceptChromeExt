// content.js will take care of the live request being appearing the webpage where we
//loaded the ext.
window.addEventListener("load", () => {
  setTimeout(() => {
    let newHelpRequest = document.querySelector(
      ".chr-doubt-item-v2__btn--accept-request"
    );
    if (newHelpRequest) {
      let audio = new Audio(chrome.runtime.getURL("assets/scaler_alert.mp3"));
      audio.play();

      chrome.storage.sync.get("acceptRequestKey", (data) => {
        if (data.acceptRequestKey) {
          newHelpRequest.click();
          let modal = document.querySelector(
            ".chr-open-request-accept-modal__label"
          );
          if (modal) {
            //if modal is floated over request , we get the hold of slot option to click it aswell
            let slotButton = document.querySelector(
              ".chr-open-request-accept-modal__book-slot-btn"
            );
            if (slotButton) {
              slotButton.click();
            }
          }
        }
      });
    }
  }, 10000);
});
