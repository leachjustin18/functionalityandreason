// Helper method
const debounce = function (func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Ripple effect start
const showRipple = function (e) {
  let pos, ripple, rippler, size, style, x, y;
  ripple = this;
  rippler = document.createElement('span');
  size = ripple.offsetWidth;
  pos = ripple.getBoundingClientRect();
  x = e.pageX - pos.left - size / 2;
  y = e.pageY - pos.top - size / 2;
  style =
    'top:' +
    y +
    'px; left: ' +
    x +
    'px; height: ' +
    size +
    'px; width: ' +
    size +
    'px;';
  ripple.rippleContainer.appendChild(rippler);
  return rippler.setAttribute('style', style);
};

const cleanUp = function () {
  while (this.rippleContainer.firstChild) {
    this.rippleContainer.removeChild(this.rippleContainer.firstChild);
  }
};

const ripples = document.querySelectorAll('[ripple]');

for (let i = 0, len = ripples.length; i < len; i++) {
  ripple = ripples[i];
  rippleContainer = document.createElement('div');
  rippleContainer.className = 'ripple--container';
  ripple.addEventListener('mousedown', showRipple);
  ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
  ripple.rippleContainer = rippleContainer;
  ripple.appendChild(rippleContainer);
}

// Ripple effect end
