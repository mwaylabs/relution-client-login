angular.module("relutionClientSecurity").run(["$templateCache", function($templateCache) {$templateCache.put("floating_labels.html","<form class=\"login-list\" name=\"loginform\" ng-submit=\"loginC.submit(loginform)\" novalidate>\n  <div class=\"list\">\n    <label class=\"item item-input item-floating-label\">\n      <span class=\"input-label\">{{\'Username\'|translate}}</span>\n      <input type=\"text\" placeholder=\"{{\'Username\'|translate}}\" name=\"username\"\n             ng-model=\"loginC.service.form.username.value\"\n             required>\n    </label>\n    <label class=\"item item-input item-floating-label\">\n      <span class=\"input-label\">{{\'Password\'|translate}}</span>\n      <input type=\"password\" name=\"password\" placeholder=\"{{\'Password\'|translate}}\"\n             ng-model=\"loginC.service.form.password.value\" required>\n    </label>\n  </div>\n  <div class=\"padding\">\n    <button class=\"button button-block button-dark\" ng-disabled=\"loginForm.$invalid\">{{\'LOGIN\'|translate}}</button>\n  </div>\n</form>\n");
$templateCache.put("inline_labels.html","<form class=\"login-list\" name=\"loginform\" ng-submit=\"loginC.submit(loginform)\" novalidate>\n  <div class=\"list\">\n    <label class=\"item item-input \">\n      <span class=\"input-label\">{{\'Username\'|translate}}</span>\n      <input type=\"text\" name=\"username\" ng-model=\"loginC.service.form.username.value\" required>\n    </label>\n    <label class=\"item item-input \">\n      <span class=\"input-label\">{{\'Password\'|translate}}</span>\n      <input type=\"password\" name=\"password\" ng-model=\"loginC.service.form.password.value\" required>\n    </label>\n  </div>\n  <div class=\"padding\">\n    <button class=\"button button-block button-dark\" ng-disabled=\"loginForm.$invalid\">{{\'LOGIN\'|translate}}</button>\n  </div>\n</form>\n");
$templateCache.put("input_icons.html","<form class=\"login-list\" name=\"loginform\" ng-submit=\"loginC.submit(loginform)\" novalidate>\n  <div class=\"list\">\n    <label class=\"item item-input \">\n      <i class=\"icon {{loginC.icons.username}}\"></i>\n      <input type=\"text\" name=\"username\" ng-model=\"loginC.service.form.username.value\" placeholder=\"{{\'Username\'|translate}}\" required>\n    </label>\n    <label class=\"item item-input \">\n      <i class=\"icon {{loginC.icons.password}}\"></i>\n      <input type=\"password\" name=\"password\" ng-model=\"loginC.service.form.password.value\" placeholder=\"{{\'Password\'|translate}}\" required>\n    </label>\n  </div>\n  <div class=\"padding\">\n    <button class=\"button button-block icon-left button-dark button-icon icon {{loginC.icons.login}}\" ng-disabled=\"loginForm.$invalid\">{{\'LOGIN\'|translate}}</button>\n  </div>\n</form>\n");
$templateCache.put("inset_labels.html","<form class=\"login-list\" name=\"loginform\" ng-submit=\"loginC.submit(loginform)\"\n      novalidate>\n  <div class=\"list list-inset\">\n    <label class=\"item item-input \">\n      <span class=\"input-label \">{{\'Username\'|translate}}</span>\n      <input  type=\"text\" name=\"username\" ng-model=\"loginC.service.form.username.value\"\n             required>\n    </label>\n    <label class=\"item item-input \">\n      <span class=\"input-label \">{{\'Password\'|translate}}</span>\n      <input  type=\"password\" name=\"password\"\n             ng-model=\"loginC.service.form.password.value\" required>\n    </label>\n  </div>\n  <div class=\"padding\">\n    <button class=\"button button-block button-dark\" ng-disabled=\"loginForm.$invalid\">{{\'LOGIN\'|translate}}</button>\n  </div>\n</form>\n");
$templateCache.put("placeholder_label.html","<form  class=\"login-list\" name=\"loginform\" ng-submit=\"loginC.submit(loginform)\"\n      novalidate>\n  <div class=\"list\">\n    <label class=\"item item-input \">\n      <input class=\"royal\" type=\"text\" placeholder=\"{{\'Username\'|translate}}\" name=\"username\" ng-model=\"loginC.service.form.username.value\"\n             required>\n    </label>\n    <label class=\"item item-input \">\n      <input class=\"royal\" type=\"password\" name=\"password\" placeholder=\"{{\'Password\'|translate}}\"\n             ng-model=\"loginC.service.form.password.value\" required>\n    </label>\n    <button class=\"button button-dark button-block\" ng-disabled=\"loginForm.$invalid\">\n      {{\'LOGIN\'|translate}}\n    </button>\n  </div>\n</form>\n\n");
$templateCache.put("stacked_label.html","<form  class=\"login-list\" name=\"loginform\" ng-submit=\"loginC.submit(loginform)\"\n      novalidate>\n  <div class=\"list\">\n    <label class=\"item item-input item-stacked-label\">\n      <span class=\"input-label balanced\">Username</span>\n      <input class=\"royal\" type=\"text\" placeholder=\"John\" name=\"username\" ng-model=\"loginC.service.form.username.value\"\n             required>\n    </label>\n    <label class=\"item item-input item-stacked-label\">\n      <span class=\"input-label balanced\">Password</span>\n      <input class=\"royal\" type=\"password\" name=\"password\" placeholder=\"Password\"\n             ng-model=\"loginC.service.form.password.value\" required>\n    </label>\n    <button class=\"button button-dark button-block\" ng-disabled=\"loginForm.$invalid\">\n      {{\'LOGIN\'|translate}}\n    </button>\n  </div>\n</form>\n");}]);