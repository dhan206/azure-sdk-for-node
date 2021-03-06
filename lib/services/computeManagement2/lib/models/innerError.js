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

/**
 * Inner error details.
 *
 */
class InnerError {
  /**
   * Create a InnerError.
   * @member {string} [exceptiontype] The exception type.
   * @member {string} [errordetail] The internal error message or exception
   * dump.
   */
  constructor() {
  }

  /**
   * Defines the metadata of InnerError
   *
   * @returns {object} metadata of InnerError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InnerError',
      type: {
        name: 'Composite',
        className: 'InnerError',
        modelProperties: {
          exceptiontype: {
            required: false,
            serializedName: 'exceptiontype',
            type: {
              name: 'String'
            }
          },
          errordetail: {
            required: false,
            serializedName: 'errordetail',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InnerError;
