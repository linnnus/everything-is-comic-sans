let injectCSS = true;

// listen for when first installed
chrome.runtime.onInstalled.addListener(() => {
  updateBadge(injectCSS); // update badge
});

// listen for page load
chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active && injectCSS) {
      chrome.tabs.insertCSS(tab.id, { // inject css
        file: "styles.css"
      });
  }
});

// listen for when icon clicked
chrome.browserAction.onClicked.addListener( tab =>{
  injectCSS = !injectCSS; // toggle on/off
  updateBadge(injectCSS); // update badge
  chrome.tabs.reload(tab.id); //reload tab
});

function updateBadge(injectCSS){
  let text;
  let color;

  //find bagde text and color
  if (injectCSS) { // if true/on
    text = {text: "on"}
    color = {color: "#6ff76f"}
  } else {
    text = {text: "off"}
    color = {color: "#f76f6f"}
  }

  //send
  chrome.browserAction.setBadgeText(text);
  chrome.browserAction.setBadgeBackgroundColor(color);
}
