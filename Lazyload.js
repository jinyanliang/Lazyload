class Lazyload {
  constructor(scrollWrap) {
    this.scrollWrap = scrollWrap
  }
  init() {
    let imgs = document.querySelectorAll('img[data-src]')
    let bh = window.innerHeight
    const loadImg = () => {
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].getBoundingClientRect().top < bh) {
          imgs[i].src = imgs[i].dataset.src
        }
      }
    }
    this.scrollWrap.addEventListener('scroll', loadImg)
    window.addEventListener('resize', function() {
      bh = window.innerHeight
      loadImg()
    })
    loadImg()
  }
}
export default Lazyload
