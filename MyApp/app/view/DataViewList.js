let countryData = [{
  name: 'Japan',
  capital: 'Tokyo',
  continent: 'as'
}, {
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
}];

let map = Ext.create('Ext.util.HashMap');
map.add('as', 'Asia');
map.add('af', 'Africa');
map.add('eu', 'Europe');
map.add('na', 'North America');
map.add('sa', 'South America');
map.add('au', 'Australia');
map.add('an', 'Antartica');

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
  data: countryData,
  sorters: 'name',
  grouper: {
    groupFn: function(record) {
      let contientCode = record.get('continent');
      return map.get(contientCode);
    }
  }
});

let countryTpl = new Ext.Template(
  '<div style = "background: #aaddff;padding:10px;margin:1px;border-style:dotted;border-width:1px;"> <b>{capital}</b> is capital of <b>{name}</b> </div>'
);

Ext.create('Ext.dataview.List', {
  fullscreen: true,
  store: countryStore,
  itemTpl: countryTpl,
  emptyText: 'Oops, No country for the selected continent!',
  grouped: true,
  onItemDisclosure: true,
  striped: true,
  indexBar: {
    letters: ['A', 'E', 'N', 'S']
  },
  plugins: [{
    xclass: 'Ext.plugin.PullRefresh'
  }, {
    xclass: 'Ext.plugin.ListPaging',
    autoPaging: true
  }],
  listeners: {
    disclose: function(scope, record, target, index, e, eOpts) {
      Ext.Msg.alert('Disclose Details', 'You want to see details of : ' +
        record.get('name'), Ext.emptyFn);
    }
  }
});
