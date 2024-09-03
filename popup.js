"use strict";

console.log("Hello, world from YT extension popup!")

function setBadgeText(enabled) {
    const text = enabled ? "ON" : "OFF"
    void chrome.action.setBadgeText({text: text})
}

// Handle the ON/OFF switch
const checkbox = document.getElementById("enabled")
chrome.storage.sync.get("enabled", (data) => {
    checkbox.checked = !!data.enabled
    void setBadgeText(data.enabled)
})
checkbox.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
        void chrome.storage.sync.set({"enabled": event.target.checked})
        void setBadgeText(event.target.checked)
    }
})

// Handle the input field
const input = document.getElementById("item")
chrome.storage.sync.get("item", (data) => {
    input.value = data.item || ""
});
input.addEventListener("change", (event) => {
    console.log(event.target.value);
    if (event.target instanceof HTMLInputElement) {
        void chrome.storage.sync.set({"item": event.target.value})
    }
})

function checkButton() {
  // check if the sponsed text appears
  const elementsSponsored = document.getElementsByClassName("ytp-play-button");
  if (elementsSponsored.length > 0) {
    console.log('clicking play')

    elementMute.click();
    //clearInterval(interval);
  }
  else{
    console.log('not click')
  }
}

// Start checking for the button every 1 second
let interval = setInterval(checkButton, 1000);