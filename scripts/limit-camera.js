AFRAME.registerComponent('camera-listener', {
    tick: function () {
      var cameraEl = this.el.sceneEl.camera.el;
      var cameraPosition = cameraEl.getAttribute('position');
      var x = cameraPosition.x;
      var z = cameraPosition.z;
  
        // Check if camera is outside the boundaries
        if (x < -35) {
            x = -35;
        } else if (x > 35) {
            x = 35;
        }
        if (z < -35) {
            z = -35;
        } else if (z > 35) {
            z = 35;
        }
        // Update the camera's position within the boundaries
        cameraEl.setAttribute('position', { x: x, y: cameraPosition.y, z: z });
    }
  });