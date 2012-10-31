/*
 * File: app/controller/Business.js
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

Ext.define('CityBars.controller.Business', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            dataList: '#dataList',
            listCard: '#listCard',
            mainNav: 'mainnav',
            detailCard: 'detailpanel'
        },

        control: {
            "#dataList": {
                itemtap: 'onListItemTap'
            },
            "detailpanel button[text='Call']": {
                tap: 'onCallButtonTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        var me = this,
            map,
            lat,
            long,
            loc,
            marker,
            info, details;

        if (record) {

            details = Ext.create('CityBars.view.DetailPanel', {
                title: 'Details'
            });

            // set the map
            map = details.child('#detailMap');
            lat = record.get('latitude');
            lon = record.get('longitude');

            map.setMapOptions({
                zoom: 18
            });

            map.setMapCenter({
                latitude: lat,
                longitude: lon
            });

            // set the info
            info = details.child('#contact').child('#info');
            info.child('#photo').setData(record.data);
            info.child('#data').setData(record.data);

            me.getMainNav().push(details);
        }
    },

    onCallButtonTap: function(button, e, options) {
        alert('call tap');
    },

    getLocation: function(callback) {
        console.log('getLoc');
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                // give a warning for error
            });
        }
    },

    getBusinesses: function(location, callback) {
        // NOTE ABOUT YELP KEY
        // You must use your own yelp key, available by registering (for free) with Yelp:
        // http://www.yelp.com/developers/getting_started/api_overview
        // (in this app, we use the Review Search API v1.0)
        var store = Ext.data.StoreManager.lookup('BusinessStore'),
            yelpKey = '', // enter your yelp key here
            url = 'http://api.yelp.com/business_review_search' +
            '?ywsid=' + yelpKey +
            '&term=Bars' +
            '&lat=' + location.coords.latitude +
            '&long=' + location.coords.longitude;
        store.getProxy().setUrl(url);
        store.load(function() {
            callback(store);
        });
    },

    launch: function() {
        // Help me.
        var me = this;

        Ext.Viewport.setMasked({ message: 'Loading...' });
        // get the location, then...
        me.getLocation(function (location) {

            // then use Yelp to get the businesses
            me.getBusinesses(location, function (store) {

                // then bind data to list and show it
                me.getDataList().setStore(store);

                Ext.Viewport.setMasked(false);
            });
        });
    }

});