Ext.create('Ext.Container', {
  fullscreen: true,
  padding: 10,
  defaults: {
    xtype: 'button'
  },
  items: [{
    text: 'Home',
    iconCls: 'home'
  }, {
    text: 'Compose',
    iconCls: 'compose'
  }, {
    text: 'Delete',
    iconCls: 'delete'
  }]
});
