angular.module('video-player')
  .component('videoList', {
    // TODO
    templateUrl: 'src/templates/videoList.html',
    bindings: {
      videos: '<',
      selectVideo: '<',
      onClick: '<'
    },
    controller: function() {
      this.onClick = () => {
        
      }
    },
    

  
    
  });
