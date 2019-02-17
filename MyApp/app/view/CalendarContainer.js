Ext.create('Ext.Container', {
  fullscreen: true,
  border: 3,
  scrollable: true,
  style: {
    borderColor: 'blue',
    borderStyle: 'solid'
  },
  items: [{
    html: 'Simple <b>HTML</b> formatted text'
  }, {
    xtype: 'textfield',
    label: 'First name',
    labelAlign: 'top',
    name: 'firstname'
  }, {
    xtype: 'container',
    layout: 'hbox',
    defaults: {
      xtype: 'button',
      margin: 3
    },
    items: [{
      text: 'Reset',
      ui: 'action'
    }, {
      text: 'Save',
      ui: 'confirm'
    }]
  }]
});
