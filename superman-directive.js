var supermanCtrl = function() {
  this.message = 'I am here to save the day.';
};

var supermanDirective = function() {
  return {
    scope: {
      message: '='
    },
    template: '<h1>{{ smCtrl.message }}</h1>',
    controller: supermanCtrl,
    controllerAs: 'smCtrl',
    bindToController: true
  };
};
