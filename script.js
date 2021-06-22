AFRAME.registerComponent("coop", {
  update: function (olddata) {
    console.log(olddata);
    console.log(this.el.object3D.scale);
    console.log(this.el.object3D.position);
    console.log(this.el.object3D.rotation);
  },
  tick: function (time, timeDelta) {},
});
