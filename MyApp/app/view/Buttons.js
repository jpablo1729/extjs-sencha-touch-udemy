Ext.create('Ext.Container', {
  fullscreen: true,
  height: 65,
  layout: {
    type: 'hbox',
    pack: 'middle',
    align: 'middle'
  },
  defaults: {
    xtype: 'button',
    margin: 3,
    iconAlign: 'top'
  },
  items: [{
    ui: 'back',
    text: '<'
  }, {
    text: 'Home',
    iconCls: 'home',
    itemId: 'homebutton',
    badgeText: 0,
    handler: function() {
      this.setBadgeText('');
    }
  }, {
    text: 'Compose',
    iconCls: 'compose',
    ui: 'action',
    handler: function() {
      let homeButton = Ext.ComponentQuery.query('#homebutton')[0],
        badgeText = homeButton.getBadgeText();
      if (Ext.isDefined(badgeText) && badgeText.toString().length > 0) {
        homeButton.setBadgeText(parseInt(badgeText) + 1);
      } else {
        homeButton.setBadgeText(1);
      }
    }
  }, {
    text: 'Delete',
    iconCls: 'delete',
    ui: 'decline'
  }, {
    ui: 'forward',
    text: '>'
  }]
});
