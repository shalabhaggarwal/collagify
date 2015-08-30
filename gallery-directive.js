var galleryCtrl = function() {
  this.images;
  
  this.getImages();
};

galleryCtrl.prototype.getImages = function() {
  this.images = [
    'images/wildlife-adventure-holidays.jpg',
    'images/wildlife_nature_06.jpg',
    'images/wildlife_nature_06.jpg',
    'images/wildlife_nature_06.jpg',
    'images/wildlife_nature_06.jpg',
    'images/wildlife_nature_06.jpg',
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
