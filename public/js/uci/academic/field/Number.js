Ext.define('UCI.academic.field.Number', {
	extend			: 'Ext.form.field.Number',
    minValue		: 0,
    maxValue		: 10,
    allowDecimals	: true,
    decimalPrecision: 2,
    step 			: 0.01
})