(function () {
  'use strict';

  var fngColourPickerModule = angular.module('fng.colourPicker', ['color.picker']);

  fngColourPickerModule.controller('FngColourPickerCtrl', ['$scope', function ($scope) {
    $scope.options = {};
  }])
    .directive('fngColourPicker', ['$compile', 'PluginHelperService',
      function ($compile, PluginHelperService) {
        return {
          restrict: 'E',
          replace: true,
          priority: 1,
          controller: 'FngColourPickerCtrl',
          link: function (scope, element, attrs) {
            var template;
            var processedAttr = PluginHelperService.extractFromAttr(attrs, 'fngColourPicker');
            var overriddenDefaults = {
              'alpha': false,
              'swatchOnly': true,
              'placeholder': 'Select colour'
            };
            scope.options = Object.assign({}, overriddenDefaults, processedAttr.directiveOptions);
            template = PluginHelperService.buildInputMarkup(
              scope,
              attrs,
              {
                processedAttr
              },
              function (buildingBlocks) {
                return '<color-picker options="options" ' + buildingBlocks.common + '></color-picker>';
              }
            );
            element.replaceWith($compile(template)(scope));
          }
        };
      }]
    )
})();