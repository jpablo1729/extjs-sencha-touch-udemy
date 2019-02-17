Ext.create('Ext.Container', {
  fullscreen: true,
  layout: 'vbox',
  defaults: {
    height: 40
  },
  items: [{
    xtype: 'toolbar',
    title: 'My Toolbar',
    docked: 'top',
    layout: {
      type: 'hbox',
      pack: 'justify'
    },
    items: [{
      text: 'Back',
      ui: 'back'
    }, {
      text: 'Forward',
      ui: 'forward'
    }]
  }, {
    xtype: 'toolbar',
    docked: 'bottom',
    items: [{
      text: 'Home',
      iconCls: 'home'
    }, {
      text: 'Back',
      iconCls: 'arrow_left'
    }, {
      text: 'Next',
      iconCls: 'arrow_right'
    }]
  }, {
    html: 'This is a text',
    flex: 1
  }]
});
