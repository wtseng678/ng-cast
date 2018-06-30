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
      this.search = () => {
        this.click();
      }
      
      this.result = () => {
        
      }
      
      this.click = () => {
        console.log('test ')
      }
    },
    
    click: function() {
      
    }
  });
