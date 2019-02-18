Ext.define('MyApp.view.PostContainer', {
  extend: 'Ext.NavigationView',
  xtype: 'PostContainer',
  config: {
    title: 'My Post',
    iconCls: 'maps',
    items: [{
      xtype: 'Places'
    }]
  }
});
