AFRAME.registerComponent("coop", {
  tick: function (time, timeDelta) {
    console.log(this.el.object3D.scale);
    console.log(this.el.object3D.position);
    console.log(this.el.object3D.rotation);
  },
});
