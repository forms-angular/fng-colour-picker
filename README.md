# fng-colour-picker
Plugin for forms-angular that adds a colour picker (https://github.com/ruhley/angular-color-picker).

## Usage

    bower install fng-colour-picker

Add the following lines to your index.html (or equivalent) file.

    <link rel="stylesheet" href="bower_components/angular-color-picker/dist/angularjs-color-picker.min.css" />
    <link rel="stylesheet" href="bower_components/angular-color-picker/dist/themes/angularjs-color-picker-bootstrap.min.css" />
    <script src="bower_components/fng-colour-picker/fng-colour-picker.js"></script>
    <script src="bower_components/tinycolor/dist/tinycolor-min.js"></script>
    <script src="bower_components/angular-color-picker/dist/angularjs-color-picker.min.js"></script>
    
    <script src="bower_components/angular-ui-bootstrap-datetimepicker/datetimepicker.js"></script>

Add `fng.colourPicker` to the list of servies your Angular module depends on. 

In your Mongoose schemas you can set up fields like this:

    colour: {type: String, form:{directive: 'fng-colour-picker'}}, 

Options can be added to a fngColourPicker object within the form object.
A complete list of setting options can be found in the Settings section of [this page](https://github.com/ruhley/angular-color-picker).

For (my) convenience, the following defaults have been changed from https://github.com/zhaber/angular-js-bootstrap-datetimepicker:

    alpha: false,
    swatch-only: true

