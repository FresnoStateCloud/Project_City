AFRAME.registerComponent('cursor-listener', {
    tick: function (e) {
        var crossHair = document.querySelector('#crossHair');
        crossHair.addEventListener('fusing', function (evt) {
            console.log("Fusing...");
        })
    }
});