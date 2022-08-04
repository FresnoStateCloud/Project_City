AFRAME.registerComponent('scale-on-mouseleave', {
    schema: {
      to: {default: '0.3 0.3 0.3', type: 'vec3'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      this.el.addEventListener('mouseleave', function () {
        el.object3D.scale.copy(data.to);
      });
    }
  });