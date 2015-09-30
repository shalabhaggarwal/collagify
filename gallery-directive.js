var galleryCtrl = function($scope) {
  this.images;
  
  this.getImages();

  document.body.addEventListener("imageDeleted", function (event) {
    this.images.push(event.detail.imageDeleted);
    $scope.$apply();
  }.bind(this));
};


galleryCtrl.prototype.getImages = function() {
  this.images = [
    'images/wildlife-adventure-holidays.jpg',
    'images/wildlife_nature_06.jpg',
    'images/WildlifePhotography-11.jpg'
  ];
};


var galleryDirective = function() {
  return {
    scope: {
      images: '='
    },
    templateUrl: 'gallery.html',
    controller: galleryCtrl,
    controllerAs: 'glCtrl',
    bindToController: true
  };
};
