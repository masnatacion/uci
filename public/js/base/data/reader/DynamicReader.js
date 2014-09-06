/**
 * @class Ext.ux.data.DynamicReader
 * @extends Ext.data.reader.Json
 * <p>Dynamic reader, allow to get working grid with auto generated columns and without setting a model in store</p>
 */

/**
 * floatOrString data type provide proper sorting in grid for string and float
 * if you don't now what data type of that two whould be in column
 */
Ext.apply(Ext.data.Types, {
    FLOATORSTRING: {
        convert: function(v, n) {
            v = Ext.isNumeric(v) ? Number(v) : v;
            return v;
        },
        sortType: function(v) {
            v = Ext.isNumeric(v) ? Number(v) : v;
            return v;
        },
        type: 'textfield'
    }
})

Ext.define('Base.data.reader.DynamicReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.dynamicReader',
    alternateClassName: 'Base.data.reader.DynamicReader',


    readRecords: function(json) {
        
        var me      = this;
        var data    = json.data;

        data.metaData = me.proxy._reconfig(json);

        return this.callParent([data]);
    }
});