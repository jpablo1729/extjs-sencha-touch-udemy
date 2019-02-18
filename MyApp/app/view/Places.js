Ext.define('MyApp.view.Places', {
  extend: 'Ext.Panel',
  xtype: 'Places',

  config: {
    title: 'My Post',
    layout: 'fit',
    items: [{
      xtype: 'list',
      store: 'Places',
      itemTpl: '<h1><b>{title:ellipsis(35)}</b></h1> <h3>{published:ellipsis(13)}</h3> <h3>{content:ellipsis(150)}</3>',
      itemCls: 'place-entry'
    }]
  },

});
