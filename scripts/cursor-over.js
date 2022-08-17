AFRAME.registerComponent('scale-on-mouseenter', {
  schema: {
    to: { default: '0.35 0.35 0.35', type: 'vec3' }
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener('mouseenter', function () {
      el.object3D.scale.copy(data.to);
    });
  }
});
