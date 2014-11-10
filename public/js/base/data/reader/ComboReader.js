Ext.define('Base.data.reader.ComboReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.comboReader',
    alternateClassName: 'Base.data.reader.ComboReader',
    type		: 'json',
    root		: 'results',
    totalProperty	: 'total',
    successProperty     : 'success',

    readRecords: function(json) {
        
        var me      = this;
        var data    = json.data || [];

        if(data)
            data = json;

        consol.log(json)

        data.metaData = { fields: json, columns: json };


        return this.callParent([data]);
    }
});