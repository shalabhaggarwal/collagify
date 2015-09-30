var workspaceCtrl = function($scope) {
  this.droppedImages = [];

  this.canvas = new fabric.Canvas('workspaceCanvas', {
    hoverCursor: 'pointer'
  });

  var element = document.getElementById("workspaceCanvas");
  element.fabric = this.canvas;
  element.droppedImages = this.droppedImages;

  this.canvas.on({
    'object:moving': this.imageDragged,
  });

  document.onkeydown = this.onKeyDownHandler;
};


workspaceCtrl.prototype.onKeyDownHandler = function(event) {
  var element = document.getElementById("workspaceCanvas");
  var canvas = element.fabric;
  switch (event.keyCode) {
    case 46: // dele
    case 8: // backspace (Mac has only one key)
      event.preventDefault();
      var activeImage = canvas.getActiveObject();
      if (activeImage) {
        canvas.remove(activeImage);
      }
      element.droppedImages.splice(
        element.droppedImages.findIndex(function(image) {
          return image.split('/').pop() == activeImage.getSvgSrc().split('/').pop();
        }), 1
      );
      var imageDeletedEvent = new CustomEvent('imageDeleted', {
        detail: {
          imageDeleted: activeImage.getSvgSrc()
        }
      });
      document.body.dispatchEvent(imageDeletedEvent);
  }
};


workspaceCtrl.prototype.imageDragged = function (event) {
  event.target.bringToFront();
};


workspaceCtrl.prototype.dropImage = function(event, ui) {
  var droppedImage = ui.helper.context.currentSrc;
  fabric.Image.fromURL(droppedImage, function(oImg) {
    this.wsCtrl.canvas.add(oImg);
  }.bind(this));
};


workspaceCtrl.prototype.saveCollage = function() {
  this.canvas.deactivateAll().renderAll();
  window.open(this.canvas.toDataURL('png'));
};


var workspaceDirective = function() {
  return {
    scope: {},
    templateUrl: 'workspace.html',
    controller: workspaceCtrl,
    controllerAs: 'wsCtrl',
    bindToController: true
  };
};
