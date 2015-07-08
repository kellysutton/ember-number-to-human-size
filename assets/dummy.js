/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-number-to-human-size/tests/modules/ember-number-to-human-size/helpers/number-to-human-size.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-number-to-human-size/helpers');
  test('modules/ember-number-to-human-size/helpers/number-to-human-size.js should pass jshint', function () {
    ok(true, 'modules/ember-number-to-human-size/helpers/number-to-human-size.js should pass jshint.');
  });

});
define('dummy/helpers/number-to-human-size', ['exports', 'ember-number-to-human-size/helpers/number-to-human-size'], function (exports, number_to_human_size) {

	'use strict';



	exports.default = number_to_human_size.default;
	exports.numberToHumanSize = number_to_human_size.numberToHumanSize;

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember.js");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n1 byte: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n1000 bytes: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n1024 bytes: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n1024 bytes in SI: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n1000 * 1000 bytes: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n1024 * 1024 bytes: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n1024 * 1024 bytes in SI: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
        var morph1 = dom.createMorphAt(fragment,5,5,contextualElement);
        var morph2 = dom.createMorphAt(fragment,8,8,contextualElement);
        var morph3 = dom.createMorphAt(fragment,11,11,contextualElement);
        var morph4 = dom.createMorphAt(fragment,14,14,contextualElement);
        var morph5 = dom.createMorphAt(fragment,17,17,contextualElement);
        var morph6 = dom.createMorphAt(fragment,20,20,contextualElement);
        var morph7 = dom.createMorphAt(fragment,23,23,contextualElement);
        var morph8 = dom.createMorphAt(fragment,26,26,contextualElement);
        var morph9 = dom.createMorphAt(fragment,29,29,contextualElement);
        var morph10 = dom.createMorphAt(fragment,32,32,contextualElement);
        inline(env, morph0, context, "number-to-human-size", [1], {});
        inline(env, morph1, context, "number-to-human-size", [1000], {});
        inline(env, morph2, context, "number-to-human-size", [1024, false, 3], {});
        inline(env, morph3, context, "number-to-human-size", [1024, true], {});
        inline(env, morph4, context, "number-to-human-size", [1000000], {});
        inline(env, morph5, context, "number-to-human-size", [1048576, false, 3], {});
        inline(env, morph6, context, "number-to-human-size", [1048576, true], {});
        inline(env, morph7, context, "number-to-human-size", [1024, false, 0], {});
        inline(env, morph8, context, "number-to-human-size", [1024, false, 1], {});
        inline(env, morph9, context, "number-to-human-size", [1024, false, 2], {});
        inline(env, morph10, context, "number-to-human-size", [1024, false, 3], {});
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/helpers/number-to-human-size-test', ['dummy/helpers/number-to-human-size', 'qunit'], function (number_to_human_size, qunit) {

  'use strict';

  qunit.module('Unit | Helper | number to human size');

  qunit.test('it works', function (assert) {
    var result = number_to_human_size.numberToHumanSize([42]);
    assert.equal(result, '42 B');
  });

  qunit.test('is displays KB', function (assert) {
    var result = number_to_human_size.numberToHumanSize([1024, false, 3]);
    assert.equal(result, '1.024 kB');
  });

  qunit.test('it displays 1000 bytes in kB', function (assert) {
    var result = number_to_human_size.numberToHumanSize([1000]);
    assert.equal(result, '1 kB');
  });

  qunit.test('it displays in KiB', function (assert) {
    var result = number_to_human_size.numberToHumanSize([1024, true]);
    assert.equal(result, '1 KiB');
  });

  qunit.test('it displays megabytes', function (assert) {
    var result = number_to_human_size.numberToHumanSize([1024 * 1024, false, 3]);
    assert.equal(result, '1.049 MB');
  });

  qunit.test('it displays 1000 * 1000 bytes in MB', function (assert) {
    var result = number_to_human_size.numberToHumanSize([1000 * 1000]);
    assert.equal(result, '1 MB');
  });

  qunit.test('is displays SI units', function (assert) {
    var result = number_to_human_size.numberToHumanSize([1024 * 1024, true]);
    assert.equal(result, '1 MiB');
  });

});
define('dummy/tests/unit/helpers/number-to-human-size-test.jshint', function () {

  'use strict';

  module('JSHint - unit/helpers');
  test('unit/helpers/number-to-human-size-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/number-to-human-size-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-number-to-human-size","version":"0.1.0.86dedf29"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map