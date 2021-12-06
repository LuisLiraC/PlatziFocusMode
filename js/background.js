let state = false

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ state })
})