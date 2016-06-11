function StorycardCard () {
  return {
    scope: {},
    bindToController: {
      title: '=',
      content: '=',
      children: '=',
      items: '=',
      id: '=',
      story: '='
    },
    controllerAs: 'ctrl',
    controller: function ($rootScope, Storycard, Item, InventoryService) {
      var ctrl = this;

      ctrl.addToInventory = function (itemId) { 
        InventoryService.addToInventory(itemId);
      };

      ctrl.changeStory = function (storyId) {
        $rootScope.$broadcast('changeStory', storyId);
      };   
    },
    template: [
      '<div class="storycard-card">',
        '<h3>{{ ctrl.title }}</h3>',
        '<p>{{ ctrl.content }}</p>',
        '<ul>',
          '<li ng-repeat="choice in ctrl.children">',
            '<h4 ng-click="ctrl.changeStory(choice.id)">{{ choice.title }}</h4>', 
          '</li>',
        '</ul>',
        '<h3 ng-if="ctrl.items.length > 0">Items:</h3>',
        '<ul>',
          '<li ng-repeat="item in ctrl.items">',
            '<h4>{{ item.name }}</h4>',
            '<button ng-click="ctrl.addToInventory(item.id)">Add to Inventory - {{ item.id }}</button>',
          '</li>',
        '</ul>',
      '</div>'
    ].join(''),
    restrict: 'E'
  };
}

angular
  .module('app')
  .directive('storycardCard', StorycardCard)