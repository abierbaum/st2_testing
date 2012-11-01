/*
 * File: app.js
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

Ext.Loader.setConfig({
   enabled: true
});

Ext.application({
   views: [
      'p5_common.BaseView1',
      'BaseView2'
   ],
   appFolder: 'generated',
   name: 'p5_common',

   launch: function() {
      console.log('launching');
      Ext.create('p5_common.view.p5_common.BaseView1', {fullscreen: true});
   }

});