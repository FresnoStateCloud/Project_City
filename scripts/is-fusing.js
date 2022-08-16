AFRAME.registerComponent('cursor-listener', {
  init: function (evt) {
    this.el.addEventListener('click', function (evt) {
      console.log(evt.detail);
    });
  }
});
