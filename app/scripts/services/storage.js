'use strict';

var storageService = angular.module('oauth.storage', ['ngCookies']);

storageService.factory('Storage', ['$rootScope', '$cookies', function ($rootScope, $cookies) {

    var service = {};

  /**
   * Deletes the item from storage,
   * Returns the item's previous value
   */
  service.delete = function (name) {
      var stored = this.get(name);
      $cookies.remove('oauthng-' + name);
      return stored;
  };

  /**
   * Returns the item from storage
   */
  service.get = function (name) {
      return $cookies.getObject('oauthng-' + name);
  };

  /**
   * Sets the item in storage to the value specified
   * Returns the item's value
   */
  service.set = function (name, value) {
      $cookies.putObject('oauthng-' + name, value);
      return this.get(name);
  };

  /**
   * Change the storage service being used
   */
  service.use = function () {
  };

  return service;
}]);