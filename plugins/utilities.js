export default function ({ config }, inject) {
  const randNum = (min, max) => (Math.floor(Math.random() * (+max - +min)) + +min)
  const assetImage = (directory, min, max, format = 'png') => `/images/${directory}/${randNum(min, max)}.${format}`
  const applyCss = (imageUrl, self, identifier) => {
    const rule = `#card-${identifier}::before{
            background-image: url('${imageUrl}');
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            opacity: .15;
            top: 0;
            left: 150px;
        }`
    let style = document.getElementById(`fade-${identifier}`)
    if (!style) {
      style = document.createElement('style')
      style.setAttribute('lang', 'scss')
      style.id = `fade-${identifier}`
      style.toggleAttribute('scoped')
    }
    style.innerHTML = rule
    self.$el.appendChild(style)
  }
  const numberFormat = (num) => Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
  }).format(num)
  const range = (start, stop, step = 1) => {
    const allNumbers = [start, stop, step].every(Number.isFinite);
    if (!allNumbers) {
      throw new TypeError('range() expects only finite numbers as arguments.');
    }
    if (step <= 0) {
      throw new Error('step must be a number greater than 0.');
    }
    if (start > stop) {
      step = -step;
    }
    const length = Math.floor(Math.abs((stop - start) / step)) + 1;
    return Array.from(Array(length), (x, index) => start + index * step);
  }
  const urlify = (url, value) => {
    if(url.match('page=')){
        let tempUrl = url.split('page=')
        console.log(tempUrl)
        tempUrl[1].length > 1 ? tempUrl[1][0] = value : tempUrl[1] = value
        return {url:`${tempUrl[0]}page=${tempUrl[1]}`, value: value}
    } else if (url.match('search=')) {
        return {url:`${url}&page=${value}`, value: value}
    }
    return {url:`${url}?page=${value}`, value: value}
  }

  inject('randNum', randNum)
  inject('assetImage', assetImage)
  inject('applyCSS', applyCss)
  inject('numberFormat', numberFormat)
  inject('range', range)
  inject('urlify', urlify)
}
