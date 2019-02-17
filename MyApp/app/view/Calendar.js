Ext.create('Ext.Container', {
  fullscreen: true,
  items: [{
    xtype: 'container',
    layout: 'card',
    itemId: 'callendarView',
    defaults: {
      xtype: 'container'
    },
    items: [{
      html: 'Day view'
    }, {
      html: 'Week view'
    }, {
      html: 'Month view'
    }]
  }, {
    xtype: 'toolbar',
    docked: 'top',
    height: 30,
    layout: {
      type: 'hbox',
      pack: 'justify'
    },
    items: [{
      text: 'Reset',
      iconCls: 'refresh',
      handler: function() {
        let segmentedButton = Ext.ComponentQuery.query(
          '#segmentedButtonID')[0];
        segmentedButton.setPressedButtons([]);
      }
    }, {
      xtype: 'segmentedbutton',
      itemId: 'segmentedButtonID',
      allowMultiple: true,
      items: [{
        text: 'Day',
        pressed: true
      }, {
        text: 'Week'
      }, {
        text: 'Month'
      }],
      listeners: {
        toggle: function(container, button, pressed) {
          alert("User toggled the '" + button.getText() +
            "' button: " + (pressed ? 'on' : 'off'));
        }
      }
    }]
  }]
});
