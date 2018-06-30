angular.module('video-player')
.service('youTube', function(query, callback){
  // TODO
  $http({
  method: 'GET',
  url: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    query: query,
    maxResults: "5",
    key: window.YOUTUBE_API_KEY,
    videoEmbeddable: true
  }
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log('success, you got data')
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
        console.log('fail, try again')

  });
  
});
