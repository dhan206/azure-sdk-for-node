/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ServiceDiagnosticSettingsCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the Create or Update service configuration.
 *
 * @member {string} [storageAccountId] the resource id of the storage account.
 * 
 * @member {string} [serviceBusRuleId] the id of the service bus rule.
 * 
 * @member {array} [metrics] the list of metrics.
 * 
 * @member {array} [logs] the list of logs.
 * 
 * @member {string} [workspaceId] the OMS workspace Id.
 * 
 */
function ServiceDiagnosticSettingsCreateOrUpdateParameters() {
}

/**
 * Defines the metadata of ServiceDiagnosticSettingsCreateOrUpdateParameters
 *
 * @returns {object} metadata of ServiceDiagnosticSettingsCreateOrUpdateParameters
 *
 */
ServiceDiagnosticSettingsCreateOrUpdateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceDiagnosticSettingsCreateOrUpdateParameters',
    type: {
      name: 'Composite',
      className: 'ServiceDiagnosticSettingsCreateOrUpdateParameters',
      modelProperties: {
        storageAccountId: {
          required: false,
          serializedName: 'properties.storageAccountId',
          type: {
            name: 'String'
          }
        },
        serviceBusRuleId: {
          required: false,
          serializedName: 'properties.serviceBusRuleId',
          type: {
            name: 'String'
          }
        },
        metrics: {
          required: false,
          serializedName: 'properties.metrics',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'MetricSettingsElementType',
                type: {
                  name: 'Composite',
                  className: 'MetricSettings'
                }
            }
          }
        },
        logs: {
          required: false,
          serializedName: 'properties.logs',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'LogSettingsElementType',
                type: {
                  name: 'Composite',
                  className: 'LogSettings'
                }
            }
          }
        },
        workspaceId: {
          required: false,
          serializedName: 'properties.workspaceId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ServiceDiagnosticSettingsCreateOrUpdateParameters;