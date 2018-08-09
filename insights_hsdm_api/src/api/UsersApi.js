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


import ApiClient from "../ApiClient";
import CatalogItem from '../model/CatalogItem';
import CatalogParameter from '../model/CatalogParameter';
import Order from '../model/Order';
import OrderItem from '../model/OrderItem';
import ProgressMessage from '../model/ProgressMessage';
import Provider from '../model/Provider';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Temporary API to add a new provider
     * Returns the added provider object 
     * @param {module:model/Provider} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addProviderWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addProvider");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/providers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Temporary API to add a new provider
     * Returns the added provider object
     * @param {module:model/Provider} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addProvider(body) {
      return this.addProviderWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add a Catalog to the Order in Pending State
     * Add a catalog item to the order in Pending State 
     * @param {String} orderId The Order ID
     * @param {module:model/OrderItem} item 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addToOrderWithHttpInfo(orderId, item) {
      let postBody = item;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling addToOrder");
      }

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling addToOrder");
      }


      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/orders/{order_id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a Catalog to the Order in Pending State
     * Add a catalog item to the order in Pending State
     * @param {String} orderId The Order ID
     * @param {module:model/OrderItem} item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addToOrder(orderId, item) {
      return this.addToOrderWithHttpInfo(orderId, item)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get an individual item from a given order
     * Get an item associated with an order.
     * @param {String} orderId The Order ID
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderItem}
     */
    catalogItems() {
        return this.catalogItemsWithHttpInfo()
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

    /**
     * fetches catalog items from all providers
     * Fetch catalog item from all defined providers 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CatalogItem>} and HTTP response
     */
    catalogItemsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CatalogItem];

      return this.apiClient.callApi(
        '/catalog_items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an individual item from a given order
     * Get an item associated with an order.
     * @param {String} orderId The Order ID
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderItem}
     */
    catalogParameters(providerId, catalogId) {
        return this.catalogParametersWithHttpInfo(providerId, catalogId)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }

    /**
     * fetches catalog items from all providers
     * Fetch catalog item from all defined providers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CatalogItem>}
     */
    catalogParametersWithHttpInfo(providerId, catalogId) {
      let postBody = null;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling catalogParameters");
      }

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling catalogParameters");
      }


      let pathParams = {
        'provider_id': providerId,
        'catalog_id': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CatalogParameter];

      return this.apiClient.callApi(
        '/providers/{provider_id}/catalog_items/{catalog_id}/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts
      );
    }


    /**
     * Fetch all or a specific catalog item from a specific provider
     * By passing in the provider id you can fetch all the catalog items in the provider. You can limit to a specific catalog item by passing its id 
     * @param {String} providerId The Provider ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogId The Catalog ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CatalogItem>} and HTTP response
     */
    fetchCatalogItemWithProviderWithHttpInfo(providerId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling fetchCatalogItemWithProvider");
      }


      let pathParams = {
        'provider_id': providerId
      };
      let queryParams = {
        'catalog_id': opts['catalogId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CatalogItem];

      return this.apiClient.callApi(
        '/providers/{provider_id}/catalog_items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch all or a specific catalog item from a specific provider
     * By passing in the provider id you can fetch all the catalog items in the provider. You can limit to a specific catalog item by passing its id
     * @param {String} providerId The Provider ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogId The Catalog ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CatalogItem>}
     */

    /**
     * Fetches a specific catalog item for a provider
     * Fetch a catalog item by its ID and provider ID 
     * @param {String} providerId The Provider ID
     * @param {String} catalogId The Catalog ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CatalogItem>} and HTTP response
     */
    fetchCatalogItemWithProviderAndCatalogIDWithHttpInfo(providerId, catalogId) {
      let postBody = null;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling fetchCatalogItemWithProviderAndCatalogID");
      }

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling fetchCatalogItemWithProviderAndCatalogID");
      }


      let pathParams = {
        'provider_id': providerId,
        'catalog_id': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CatalogItem];

      return this.apiClient.callApi(
        '/providers/{provider_id}/catalog_items/{catalog_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetches a specific catalog item for a provider
     * Fetch a catalog item by its ID and provider ID
     * @param {String} providerId The Provider ID
     * @param {String} catalogId The Catalog ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CatalogItem>}
     */

    /**
     * Get an individual item from a given order
     * Get an item associated with an order. 
     * @param {String} orderId The Order ID
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderItem} and HTTP response
     */
    listOrderItemWithHttpInfo(orderId, orderItemId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling listOrderItem");
      }

      // verify the required parameter 'orderItemId' is set
      if (orderItemId === undefined || orderItemId === null) {
        throw new Error("Missing the required parameter 'orderItemId' when calling listOrderItem");
      }


      let pathParams = {
        'order_id': orderId,
        'order_item_id': orderItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderItem;

      return this.apiClient.callApi(
        '/orders/{order_id}/items/{order_item_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an individual item from a given order
     * Get an item associated with an order.
     * @param {String} orderId The Order ID
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderItem}
     */
    listOrderItem(orderId, orderItemId) {
      return this.listOrderItemWithHttpInfo(orderId, orderItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of items in a given order
     * Get a list of items associated with an order. 
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/OrderItem>} and HTTP response
     */
    listOrderItemsWithHttpInfo(orderId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling listOrderItems");
      }


      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [OrderItem];

      return this.apiClient.callApi(
        '/orders/{order_id}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of items in a given order
     * Get a list of items associated with an order.
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/OrderItem>}
     */
    listOrderItems(orderId) {
      return this.listOrderItemsWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of orders
     * Get a list of orders associated with the logged in user. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Order>} and HTTP response
     */
    listOrdersWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Order];

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of orders
     * Get a list of orders associated with the logged in user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Order>}
     */
    listOrders() {
      return this.listOrdersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of progress messages in an item
     * Get a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages 
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProgressMessage>} and HTTP response
     */
    listProgressMessagesWithHttpInfo(orderItemId) {
      let postBody = null;

      // verify the required parameter 'orderItemId' is set
      if (orderItemId === undefined || orderItemId === null) {
        throw new Error("Missing the required parameter 'orderItemId' when calling listProgressMessages");
      }


      let pathParams = {
        'order_item_id': orderItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProgressMessage];

      return this.apiClient.callApi(
        '/order_items/{order_item_id}/progress_messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of progress messages in an item
     * Get a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages
     * @param {String} orderItemId The Order Item ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProgressMessage>}
     */
    listProgressMessages(orderItemId) {
      return this.listProgressMessagesWithHttpInfo(orderItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Temporary API to list provider
     * Returns the array of provider object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Provider>} and HTTP response
     */
    listProvidersWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [Provider];

      return this.apiClient.callApi(
        '/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Temporary API to list provider
     * Returns the array of provider object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Provider>}
     */
    listProviders() {
      return this.listProvidersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new order
     * Create a new order. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    newOrderWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Order;

      return this.apiClient.callApi(
        '/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new order
     * Create a new order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    newOrder() {
      return this.newOrderWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }




    /**
     * Submit the given order
     * Returns an updated order object 
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    submitOrderWithHttpInfo(orderId) {
      let postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling submitOrder");
      }


      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['UserSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Order;

      return this.apiClient.callApi(
        '/orders/{order_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Submit the given order
     * Returns an updated order object
     * @param {String} orderId The Order ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    submitOrder(orderId) {
      return this.submitOrderWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
