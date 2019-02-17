let countryData = [ //{
  //name: 'Japan',
  //capital: 'Tokyo',
  //continent: 'as'
  //},
  {
    name: 'Cameroon',
    capital: 'Yaounde',
    continent: 'af'
  }, {
    name: 'Germany',
    capital: 'Berlin',
    continent: 'eu'
  }, {
    name: 'Canada',
    capital: 'Ottawa',
    continent: 'na'
  }, {
    name: 'Colombia',
    capital: 'Bogotá',
    continent: 'sa'
  }, {
    name: 'Australia',
    capital: 'Camberra',
    continent: 'au'
  }, {
    name: 'Antartica',
    capital: 'Antartica',
    continent: 'an'
  }
];

let countryStore = Ext.create('Ext.data.Store', {
  fields: [{
    name: 'name',
    type: 'String'
  }, {
    name: 'capital',
    type: 'String'
  }, {
    name: 'continent',
    type: 'String'
  }],
  data: countryData
});

let filter = function(newValue) {
  countryStore.clearFilter();

  return countryStore.filterBy(function(record, id) {
    if ((newValue.getValue() === 'al') || (record.get('continent') ===
        newValue.getValue())) {
      return true;
    } else {
      return false;
    }
  });
};

let countryTpl = new Ext.Template(
  '<div style = "background: #aaddff;padding:10px;margin:1px;border-style:dotted;border-width:1px;"> <b>{capital}</b> is capital of <b>{name}</b> </div>'
);
Ext.create('Ext.DataView', {
  fullscreen: true,
  store: countryStore,
  itemTpl: countryTpl,
  emptyText: 'Oops, No country for the selected continent!',
  items: [{
    xtype: 'toolbar',
    height: 40,
    docked: 'top',
    items: [{
      xtype: 'selectfield',
      label: 'Continent',
      labelWidth: 80,
      width: 260,
      value: 'al',
      options: [{
        text: 'Asia',
        value: 'as'
      }, {
        text: 'Africa',
        value: 'af'
      }, {
        text: 'Europe',
        value: 'eu'
      }, {
        text: 'North America',
        value: 'na'
      }, {
        text: 'South America',
        value: 'sa'
      }, {
        text: 'Australia',
        value: 'au'
      }, {
        text: 'Antartica',
        value: 'an'
      }, {
        text: 'All',
        value: 'al'
      }],
      listeners: {
        change: function(newValue, oldValue, eOpts) {
          filter(newValue);
        }
      }
    }, {
      xtype: 'spacer'
    }, {
      xtype: 'button',
      text: 'Add',
      iconCls: 'add',
      handler: function() {
        countryStore.add({
          name: 'China',
          capital: 'Beijing',
          continent: 'as'
        })
      }
    }]
  }]
});
