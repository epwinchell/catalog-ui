/**
 * Insights HSDM API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InsightsHsdmApi);
  }
}(this, function(expect, InsightsHsdmApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InsightsHsdmApi.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    describe('addProvider', function() {
      it('should call addProvider successfully', function(done) {
        //uncomment below and update the code to test addProvider
        //instance.addProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addToOrder', function() {
      it('should call addToOrder successfully', function(done) {
        //uncomment below and update the code to test addToOrder
        //instance.addToOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogItems', function() {
      it('should call catalogItems successfully', function(done) {
        //uncomment below and update the code to test catalogItems
        //instance.catalogItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogParameters', function() {
      it('should call catalogParameters successfully', function(done) {
        //uncomment below and update the code to test catalogParameters
        //instance.catalogParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchCatalogItemWithProvider', function() {
      it('should call fetchCatalogItemWithProvider successfully', function(done) {
        //uncomment below and update the code to test fetchCatalogItemWithProvider
        //instance.fetchCatalogItemWithProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchCatalogItemWithProviderAndCatalogID', function() {
      it('should call fetchCatalogItemWithProviderAndCatalogID successfully', function(done) {
        //uncomment below and update the code to test fetchCatalogItemWithProviderAndCatalogID
        //instance.fetchCatalogItemWithProviderAndCatalogID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrderItem', function() {
      it('should call listOrderItem successfully', function(done) {
        //uncomment below and update the code to test listOrderItem
        //instance.listOrderItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrderItems', function() {
      it('should call listOrderItems successfully', function(done) {
        //uncomment below and update the code to test listOrderItems
        //instance.listOrderItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrders', function() {
      it('should call listOrders successfully', function(done) {
        //uncomment below and update the code to test listOrders
        //instance.listOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProgressMessages', function() {
      it('should call listProgressMessages successfully', function(done) {
        //uncomment below and update the code to test listProgressMessages
        //instance.listProgressMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProviders', function() {
      it('should call listProviders successfully', function(done) {
        //uncomment below and update the code to test listProviders
        //instance.listProviders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newOrder', function() {
      it('should call newOrder successfully', function(done) {
        //uncomment below and update the code to test newOrder
        //instance.newOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitOrder', function() {
      it('should call submitOrder successfully', function(done) {
        //uncomment below and update the code to test submitOrder
        //instance.submitOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
