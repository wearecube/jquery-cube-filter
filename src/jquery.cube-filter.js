(function ($, window, document, undefined) {
  'use strict';

  // undefined is used here as the undefined global variable in ECMAScript 3 is
  // mutable (ie. it can be changed by someone else). undefined isn't really being
  // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
  // can no longer be modified.

  // window and document are passed through as local variable rather than global
  // as this (slightly) quickens the resolution process and can be more efficiently
  // minified (especially when both are regularly referenced in your plugin).

  // Create the defaults once
  var pluginName = 'cubeFilter',
    defaults = {
      filterItemClass: 'filter-item',
      filterItemSelectedClass: 'selected',
      targetGroupSelector: '.filter-target-group',
      targetItemClass: 'filter-target-item',
      targetItemHiddenClass: 'hidden'
    };

  // The actual plugin constructor
  function Plugin (element, options) {
    this.element = element;
    // jQuery has an extend method which merges the contents of two or
    // more objects, storing the result in the first object. The first object
    // is generally empty as we don't want to alter the default options for
    // future instances of the plugin
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      // Register click events
      $(this.element).on('click', '.' + this.options.filterItemClass,
                         $.proxy(this._applyFilter, this));
    },
    _applyFilter: function (event) {
      var currentFilterItem = $(event.currentTarget),
        filterClass = currentFilterItem.find('a').attr('href'),
        targetGroup = $(this.options.targetGroupSelector);
      event.preventDefault();

      // Add class to selected filter item
      $(this.element).find('.' + this.options.filterItemClass)
        .removeClass(this.options.filterItemSelectedClass);
      currentFilterItem.addClass(this.options.filterItemSelectedClass);

      if (filterClass) {
        // Hide non-filtered target items
        targetGroup.find('.' + this.options.targetItemClass +
                        '.' + filterClass)
          .removeClass(this.options.targetItemHiddenClass);
        targetGroup.find('.' + this.options.targetItemClass +
                         ':not(.' + filterClass + ')')
          .addClass(this.options.targetItemHiddenClass);
      } else {
        // Show all target items, if no filter class given
        targetGroup.find('.' + this.options.targetItemClass)
          .removeClass(this.options.targetItemHiddenClass);
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);
