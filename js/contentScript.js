chrome.storage.sync.get('state', ({ state }) => {
  state ? setFullScreen() : removeFullScreen()
})

function setFullScreen() {
  let MaterialView = document.querySelector(
    '.MaterialView.MaterialView-type--video'
  )
  let MaterialViewVideoItem = document.querySelector('.MaterialView-video-item')
  let VideoPlayer = document.querySelector('.VideoPlayer > div')
  let Header = document.querySelector('.Header-v2.Header-v2-content')
  let Syllabus = document.querySelector('.Syllabus')
  let Video = document.querySelector('.VideoPlayer video')
  let MaterialViewContent = document.querySelector('.MaterialView-content')

  Video.addEventListener('playing', () => {
    Header.style.display = 'none'
    Syllabus.style.display = 'none'

    MaterialView.style.display = 'block'
    MaterialView.style.paddingLeft = '0'

    VideoPlayer.style.zIndex = '999'
    VideoPlayer.style.height = '95vh'

    if (window.innerWidth < 1440) {
      MaterialViewVideoItem.style.maxWidth = '100vw'
    }

    MaterialViewContent.style.margin = '12% auto'
  })
}

function removeFullScreen() {
  let MaterialView = document.querySelector(
    '.MaterialView.MaterialView-type--video'
  )
  let MaterialViewVideoItem = document.querySelector('.MaterialView-video-item')
  let VideoPlayer = document.querySelector('.VideoPlayer > div')
  let Header = document.querySelector('.Header-v2.Header-v2-content')
  let Syllabus = document.querySelector('.Syllabus')
  let MaterialViewContent = document.querySelector('.MaterialView-content')

  MaterialView.style.paddingLeft = '32px'

  VideoPlayer.style.zIndex = null

  if (window.innerWidth >= 1440) {
    MaterialView.style.display = 'flex'
    VideoPlayer.style.height = '759.375px'
  }

  if (window.innerWidth < 1440) {
    MaterialView.style.display = 'grid'
    VideoPlayer.style.height = '0'
    MaterialViewVideoItem.style.minHeight = 'auto'
  }

  Header.style.display = 'grid'
  Syllabus.style.display = 'block'
  MaterialViewContent.style.margin = '0 auto'
}

window.addEventListener('resize', () => {
  let MaterialView = document.querySelector(
    '.MaterialView.MaterialView-type--video'
  )
  let MaterialViewVideoItem = document.querySelector('.MaterialView-video-item')
  let VideoPlayer = document.querySelector('.VideoPlayer > div')
  let Header = document.querySelector('.Header-v2.Header-v2-content')
  let Syllabus = document.querySelector('.Syllabus')
  let MaterialViewContent = document.querySelector('.MaterialView-content')

  chrome.storage.sync.get('state', ({ state }) => {
    if (state) {
      Header.style.display = 'none'
      Syllabus.style.display = 'none'

      MaterialView.style.display = 'block'
      MaterialView.style.paddingLeft = '0'

      VideoPlayer.style.zIndex = '999'
      VideoPlayer.style.height = '95vh'

      if (window.innerWidth < 1440) {
        MaterialViewVideoItem.style.maxWidth = '100vw'
      }

      MaterialViewContent.style.margin = '0 auto'
    }
  })
})

window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.keyCode == 13) {
    chrome.storage.sync.get('state', ({ state }) => {
      if (state) {
        removeFullScreen()
      } else {
        let MaterialView = document.querySelector(
          '.MaterialView.MaterialView-type--video'
        )
        let MaterialViewVideoItem = document.querySelector(
          '.MaterialView-video-item'
        )
        let VideoPlayer = document.querySelector('.VideoPlayer > div')
        let Header = document.querySelector('.Header-v2.Header-v2-content')
        let Syllabus = document.querySelector('.Syllabus')
        let MaterialViewContent = document.querySelector(
          '.MaterialView-content'
        )

        Header.style.display = 'none'
        Syllabus.style.display = 'none'

        MaterialView.style.display = 'block'
        MaterialView.style.paddingLeft = '0'

        VideoPlayer.style.zIndex = '999'
        VideoPlayer.style.height = '95vh'

        if (window.innerWidth < 1440) {
          MaterialViewVideoItem.style.maxWidth = '100vw'
        }

        MaterialViewContent.style.margin = '12% auto'
      }

      let newState = !state
      chrome.storage.sync.set({ state: newState })
    })
  }
})
