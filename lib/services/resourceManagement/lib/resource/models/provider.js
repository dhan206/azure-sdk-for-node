/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Provider class.
 * @constructor
 * Resource provider information.
 * @member {string} [id] Gets or sets the provider id.
 * 
 * @member {string} [namespace] Gets or sets the namespace of the provider.
 * 
 * @member {string} [registrationState] Gets or sets the registration state of
 * the provider.
 * 
 * @member {array} [resourceTypes] Gets or sets the collection of provider
 * resource types.
 * 
 */
function Provider() {
}

/**
 * Defines the metadata of Provider
 *
 * @returns {object} metadata of Provider
 *
 */
Provider.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Provider',
    type: {
      name: 'Composite',
      className: 'Provider',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        namespace: {
          required: false,
          serializedName: 'namespace',
          type: {
            name: 'String'
          }
        },
        registrationState: {
          required: false,
          serializedName: 'registrationState',
          type: {
            name: 'String'
          }
        },
        resourceTypes: {
          required: false,
          serializedName: 'resourceTypes',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ProviderResourceTypeElementType',
                type: {
                  name: 'Composite',
                  className: 'ProviderResourceType'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = Provider;