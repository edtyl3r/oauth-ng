'use strict';

var storageService = angular.module('oauth.storage', ['LocalForageModule']);

storageService.factory('Storage', ['$rootScope', '$localForage', function($rootScope, $localForage){

  var service = {
  };

  /**
   * Deletes the item from storage,
   * Returns the item's previous value
   */
  service.delete = function (name) {
    var stored = this.get(name);
    $localForage.removeItem(name)
    return stored;
  };

  /**
   * Returns the item from storage
   */
  service.get = function (name) {
    $localForage.getItem(name).then(function(data) {
           return data;
       });
  };

  /**
   * Sets the item in storage to the value specified
   * Returns the item's value
   */
  service.set = function (name, value) {
    $localForage.setItem(name, value).then(function() {
      return $localForage.getItem(name);
    });
  };

  /**
   * Change the storage service being used
   */
  service.use = function (storage) {
    if (storage === 'indexDB') {
      $localForage.setDriver($localForage.INDEXEDDB);
    }
    if (storage === 'localStorage') {
      $localForage.setDriver($localForage.LOCALSTORAGE);
    }
    if (storage === 'webSQL') {
      $localForage.setDriver($localForage.WEBSQL);
    }
  };

  return service;
}]);
