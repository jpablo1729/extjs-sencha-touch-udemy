Ext.define('MyApp.view.Details', {
  extend: 'Ext.Panel',
  xtype: 'details',
  config: {
    title: 'Details',
    layout: 'fit',
    scrollable: true,
    styleHtmlContent: true,
    styleHtmlCls: 'details',
    tpl: '<h1><b>{title}</b></h1> <h3>{published}</h3> <h3>{content}</3>'
  }

});
