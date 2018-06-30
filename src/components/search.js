angular.module('video-player')

  .component('search', {
  // TODO
    templateUrl: 'src/templates/search.html',
    bindings: {
      search: '<',
      result: '<',
      click: '<'
    },
    
    controller: function() {
      this.input = '';
      console.log(this);
      this.service = {};


      
      
    },
    

 
  });
