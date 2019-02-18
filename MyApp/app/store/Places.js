Ext.define('MyApp.store.Places', {
  extend: 'Ext.data.Store',
  config: {
    model: 'MyApp.model.Place',
    autoLoad: 'true',
    /*data: [{
        title: 'post1',
        published: '01/01/2016',
        content: 'Content1',
      }, {
        title: 'post2',
        published: '01/02/2016',
        content: 'Content2',
      }, {
        title: 'post1',
        published: '01/02/2016',
        content: 'Content3',
      }]*/
    proxy: {
      type: 'ajax',
      url: 'https://www.googleapis.com/blogger/v3/blogs/8134832484637756724/posts?key=AIzaSyCGA-Q-VJxAcs_9BIB7oGr0w8FktaNdL8Y',
      reader: {
        type: 'json',
        rootProperty: 'items'
      }
    }
  }
});
