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

  Video.addEventListener('playing', () => {
    Header.style.display = 'none'
    Syllabus.style.display = 'none'

    MaterialView.style.display = 'block'
    MaterialView.style.paddingLeft = '0'

    VideoPlayer.style.zIndex = '999'
    VideoPlayer.style.height = '95vh'

    if (window.innerWidth < 1440) {
      MaterialViewVideoItem.style.maxWidth = "100vw"
    }
  })
}

window.addEventListener('resize', () => {
  let MaterialView = document.querySelector(
    '.MaterialView.MaterialView-type--video'
  )
  let MaterialViewVideoItem = document.querySelector('.MaterialView-video-item')
  let VideoPlayer = document.querySelector('.VideoPlayer > div')
  let Header = document.querySelector('.Header-v2.Header-v2-content')
  let Syllabus = document.querySelector('.Syllabus')

  chrome.storage.sync.get('state', ({ state }) => {
    if (state) {
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
  })
})

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
