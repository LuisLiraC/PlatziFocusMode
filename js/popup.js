let switchButton = document.querySelector('#switch')

chrome.storage.sync.get('state', ({ state }) => {
  if (state) {
    switchButton.checked = true
  } else {
    switchButton.checked = false
  }
})

switchButton.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.storage.sync.get('state', ({ state }) => {
    if (state) {
      switchButton.checked = false
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeFullScreen
      })
    } else {
      switchButton.checked = true
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setFullScreen
      })
    }
    let newState = !state
    chrome.storage.sync.set({ state: newState })
  })
})

function setFullScreen() {
  let MaterialView = document.querySelector(
    '.MaterialView.MaterialView-type--video'
  )
  let MaterialViewVideoItem = document.querySelector('.MaterialView-video-item')
  let VideoPlayer = document.querySelector('.VideoPlayer > div')
  let Header = document.querySelector('.Header-v2.Header-v2-content')
  let Syllabus = document.querySelector('.Syllabus')

  Header.style.display = 'none'
  Syllabus.style.display = 'none'

  MaterialView.style.display = 'block'
  MaterialView.style.paddingLeft = '0'

  VideoPlayer.style.zIndex = '999'
  VideoPlayer.style.height = '95vh'

  if (window.innerWidth < 1440) {
    MaterialViewVideoItem.style.maxWidth = "100vw" 
  }
}

function removeFullScreen() {
  let MaterialView = document.querySelector(
    '.MaterialView.MaterialView-type--video'
  )
  let MaterialViewVideoItem = document.querySelector('.MaterialView-video-item')
  let VideoPlayer = document.querySelector('.VideoPlayer > div')
  let Header = document.querySelector('.Header-v2.Header-v2-content')
  let Syllabus = document.querySelector('.Syllabus')

  MaterialView.style.display = 'grid'
  MaterialView.style.paddingLeft = '32px'

  VideoPlayer.style.zIndex = null

  if (window.innerWidth >= 1440) {
    VideoPlayer.style.height = '759.375px'
  }

  if (window.innerWidth < 1440) {
    VideoPlayer.style.height = '0'
    MaterialViewVideoItem.style.minHeight = 'auto'
  }

  Header.style.display = 'grid'
  Syllabus.style.display = 'block'
}
