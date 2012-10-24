require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: '../examples/solar/js/libs/jquery.min',
    underscore: '../examples/solar/js/libs/underscore.min',
    backbone: '../examples/solar/js/libs/backbone',
    handlebars: '../examples/solar/js/libs/handlebars',
    text: '../examples/solar/js/libs/text',
    datagrid: '../src/views/datagrid',
    'views/header': '../src/views/header',
    'views/row': '../src/views/row',
    'views/cell': '../src/views/cell',
    'views/callback-cell': '../src/views/callback-cell',
    'views/pagination': '../src/views/pagination'
  },
  config: {
    hbs: {
      extension: 'hbs'
    }
  }
});

require([
  'backbone',
  'datagrid',
  'views/row',
  'views/cell',
  'views/callback-cell',
  'views/pagination'
], function(Backbone, Datagrid, Row, Cell, CallbackCell, Pagination) {
  window.Datagrid     = Datagrid;
  window.Row          = Row;
  window.Cell         = Cell;
  window.CallbackCell = CallbackCell;
  window.Pagination   = Pagination;

  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
});
