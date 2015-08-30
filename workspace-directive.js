var workspaceCtrl = function() {
  this.images = [];
};


workspaceCtrl.prototype.dropImage = function(event, ui) {
  debugger;
};

var workspaceDirective = function() {
  return {
    scope: {
      images: '='
    },
    templateUrl: 'workspace.html',
    controller: workspaceCtrl,
    controllerAs: 'wsCtrl',
    bindToController: true
  };
};
