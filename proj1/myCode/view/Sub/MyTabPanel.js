/*
 * File: myCode/view/Sub/MyTabPanel.js
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

Ext.define('p5.view.Sub.MyTabPanel', {
   extend: 'Ext.tab.Panel',

   requires: [
      'p5.view.MyContainer'
   ],

   config: {
      ui: 'light',
      items: [
         {
            xtype: 'mycontainer',
            title: 'First'
         },
         {
            xtype: 'container',
            title: 'Second'
         },
         {
            xtype: 'container',
            title: 'Third'
         }
      ]
   }

});