Ext.define('MyApp.view.Home', {
  extend: 'Ext.Panel',
  xtype: 'Home',

  config: {
    title: 'Home',
    iconCls: 'home',

    layout: 'fit',
    scrollable: true,
    styleHtmlContent: true,
    styleHtmlCls: 'homepage',
    html: ['<h1>Welcome to First App</h1>',
      '<hr>',
      '<p>This is you first sencha touch app</p>'
    ].join(""),
    items: [{
      xtype: 'titlebar',
      title: 'Home Page',
      docked: 'top'
    }]
  }
});
