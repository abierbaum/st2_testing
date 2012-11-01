/*
 * File: generated/store/TestPeople.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('p5_common.store.TestPeople', {
   extend: 'Ext.data.Store',

   requires: [
      'p5_common.model.Person'
   ],

   config: {
      data: [
         {
            name: 'Todd',
            age: 10
         },
         {
            name: 'Fred',
            age: 20
         },
         {
            name: 'Ben',
            age: 32
         }
      ],
      model: 'p5_common.model.Person',
      storeId: 'TestPeople'
   }
});