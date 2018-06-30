angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    templateUrl: 'src/templates/videoListEntry.html',
    bindings: {
      video: '<',
      selectVideo: '<'
    },
    controller: function() {
      // console.log(this);
      // this.click = () => {
      //   console.log("videoListEntry click");
      // }
    },
    

  });
