// content.js

// Function to check if the play button exists
function checkPlayButton() {
  const skipButton = document.querySelector('.ytp-skip-ad-button');
  if (skipButton) {
    console.log("Skip button found!");
    skipButton.click();
  }
  else{
    console.log("Skip button NOT found!");
  }
  /*const sponsoredButton = document.querySelector('.ad-simple-attributed-string');
  const muteButton = document.querySelector('.ytp-mute-button');
  if (sponsoredButton) {
    muteButton.click();
  }*/
}

// Function to observe changes in the DOM
function observeDOM() {
  // Create a new observer instance linked to the callback function
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      // Check if nodes were added
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        checkPlayButton();
      }
    }
  });

  // Start observing the document body for changes in child elements and subtree
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Initialize the observer when the content script loads
observeDOM()