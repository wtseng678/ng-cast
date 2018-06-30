angular.module('video-player')
.service('youTube', function($http, $window){
  // TODO
  this.search = (query, callback) => {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 5,
      key: $window.YOUTUBE_API_KEY,
      videoEmbeddable: true
    }
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      // console.log(response)
      callback(response.data.items);
      console.log('success, you got data')
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
          console.log('fail, try again')

    });
  }
});
