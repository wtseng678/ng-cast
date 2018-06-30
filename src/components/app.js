angular.module('video-player')

  .component('app', {
    // TODO
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.searchService = youTube;
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];        
      }
      this.selectVideo = (video) => {
        this.currentVideo = video;
      }
      this.click = (input) => {
        var that = this;
        youTube.search(input, function(data) {
          that.videos = data;
          that.currentVideo = data[0];
        });
      };
      youTube.search('javascript tutorial', this.searchResults);
    }
  });
