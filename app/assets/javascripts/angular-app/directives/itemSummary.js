var ItemSummary = {
  bindings: {
    name: '=',
    category: '=',
    id: '='
  },
  controllerAs: 'ctrl',
  controller: function (InventoryService) {
    this.removeFromInventory = function (id) {
      InventoryService.removeFromInventory(id);
    };
  },
  template: [ 
    '<div class="item-summary">',
      '<a ui-sref="home.story.item({id: ctrl.id})">',
        '<h4>{{ ctrl.name }}</h4>',
      '</a>',
      '<p><em>{{ ctrl.category }}</em></p>',
      '<button ng-click="ctrl.removeFromInventory(ctrl.id)">Remove</button>',
    '</div>'
  ].join('')
};

angular
  .module('app')
  .component('itemSummary', ItemSummary);