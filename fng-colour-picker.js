(function () {
  'use strict';

  var uiBootstrapDateModule = angular.module('fng.colourPicker', ['color.picker']);

  uiBootstrapDateModule.controller('FngColourPickerCtrl', ['$scope', function ($scope) {
    $scope.options = { };
    $scope.showOptions = function() {
      console.log('Starting');
      console.log(JSON.stringify($scope.options,null,2));
    }
  }])
    .directive('fngColourPicker', ['$compile', '$filter', 'pluginHelper', 'formMarkupHelper', 'cssFrameworkService',
      function ($compile, $filter, pluginHelper, formMarkupHelper, cssFrameworkService) {
        return {
          restrict: 'E',
          replace: true,
          priority: 1,
          controller: 'FngColourPickerCtrl',
          link: function (scope, element, attrs) {
            var template;
            var processedAttr = pluginHelper.extractFromAttr(attrs, 'fngColourPicker');
            var overRiddenDefaults = {
              'alpha': false,
              'swatchOnly': true
            };
            scope.options = Object.assign({}, overRiddenDefaults, processedAttr.directiveOptions);
            console.log(JSON.stringify(scope.options,null,2));
            scope.showOptions();
            template = pluginHelper.buildInputMarkup(scope, attrs.model, processedAttr.info, processedAttr.options, false, false, function (buildingBlocks) {
              return '<color-picker options="options" ' + buildingBlocks.common + '></color-picker>';
            });
            element.replaceWith($compile(template)(scope));
          }
        };
      }]
    )
})();