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

const models = require('./index');

/**
 * Definition of the automation account type.
 *
 * @extends models['TrackedResource']
 */
class AutomationAccount extends models['TrackedResource'] {
  /**
   * Create a AutomationAccount.
   * @member {object} [sku] Gets or sets the SKU of account.
   * @member {string} [sku.name] Gets or sets the SKU name of the account.
   * Possible values include: 'Free', 'Basic'
   * @member {string} [sku.family] Gets or sets the SKU family.
   * @member {number} [sku.capacity] Gets or sets the SKU capacity.
   * @member {string} [lastModifiedBy] Gets or sets the last modified by.
   * @member {string} [state] Gets status of account. Possible values include:
   * 'Ok', 'Unavailable', 'Suspended'
   * @member {date} [creationTime] Gets the creation time.
   * @member {date} [lastModifiedTime] Gets the last modified time.
   * @member {string} [description] Gets or sets the description.
   * @member {string} [etag] Gets or sets the etag of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AutomationAccount
   *
   * @returns {object} metadata of AutomationAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutomationAccount',
      type: {
        name: 'Composite',
        className: 'AutomationAccount',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'properties.sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          lastModifiedBy: {
            required: false,
            serializedName: 'properties.lastModifiedBy',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AutomationAccount;