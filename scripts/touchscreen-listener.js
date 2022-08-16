AFRAME.registerComponent('touch-listener', {
  init: function () {
    var targetEl = this.el;

    //Create the touchstart event
    document
      .querySelector('a-scene')
      .addEventListener('touchstart', function () {
        //Emit this event to listen it from the teleport controls
        targetEl.emit('startouch');
      });

    //Create the touchend event
    document.querySelector('a-scene').addEventListener('touchend', function () {
      //Emit this event to listen it from the teleport controls
      targetEl.emit('clickend');
    });
  }
});
