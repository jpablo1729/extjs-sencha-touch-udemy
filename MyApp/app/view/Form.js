Ext.create('Ext.tab.Panel', {
  fullscreen: true,
  tabBarPosition: 'bottom',
  items: [{
    title: 'Form',
    iconCls: 'compose',
    xtype: 'formpanel',
    standardSubmit: true,
    submitOnAction: true,
    url: 'forms.php',
    items: [{
      xtype: 'fieldset',
      title: 'Account data',
      //instructions: 'Give you yours personal data',
      items: [{
        xtype: 'emailfield',
        label: 'Email',
        name: 'email',
        required: true
      }, {
        xtype: 'passwordfield',
        label: 'Password',
        name: 'password',
        required: true,
        placeHolder: 'Enter a strong password'
      }, {
        xtype: 'passwordfield',
        label: 'Confirm your password',
        name: 'confirmPassword',
        required: true
      }, {
        xtype: 'textareafield',
        name: 'details',
        label: 'Details',
        maxRows: 5,
        placeHolder: 'Enter a short introduction',
        maxLength: 120
      }, {
        xtype: 'urlfield',
        label: 'Blogs',
        name: 'blogurl'
      }, {
        xtype: 'togglefield',
        name: 'enableNotification',
        label: 'Notification',
        value: 1
      }]
    }, {
      xtype: 'fieldset',
      title: 'Personal data',
      items: [{
        xtype: 'textfield',
        name: 'firstname',
        label: 'First name',
        autoCapitalize: true,
        clearIcon: false,
        labelAlign: 'left',
        maxLength: 15,
        placeHolder: 'Enter first name'
      }, {
        xtype: 'textfield',
        name: 'lastname',
        label: 'Last name',
        autoCapitalize: true,
        clearIcon: false,
        labelAlign: 'left',
        maxLength: 15,
        placeHolder: 'Enter last name'
      }, {
        xtype: 'textfield',
        name: 'Fullname',
        label: 'Full name',
        hidden: true
      }, {
        xtype: 'selectfield',
        name: 'gender',
        label: 'Gender',
        placeHolder: 'Gender...',
        autoSelect: false,
        displayField: 'showField',
        valueField: 'value',
        options: [{
          text: 'Male',
          value: 'M',
          showField: 'Men'
        }, {
          text: 'Woman',
          value: 'W',
          showField: 'Woman'
        }, {
          text: 'Diversity',
          value: 'D',
          showField: 'Diversity'
        }]
      }]
    }, {
      xtype: 'fieldset',
      title: 'Job Experience',
      items: [{
        xtype: 'datepickerfield',
        name: 'dateofjoing',
        label: 'Joining date',
        value: new Date(),
        dateFormat: 'F / d / Y'
      }, {
        xtype: 'numberfield',
        name: 'salary',
        label: 'Salary',
        minValue: 1800,
        maxValue: 5000,
        stepValue: 100
      }, {
        xtype: 'spinnerfield',
        label: 'Expense',
        name: 'expense',
        maxValue: 50000,
        minValue: 5000,
        stepValue: 1000,
        defaultValue: 40000,
        cycle: true,
        groupButtons: false
      }, {
        xtype: 'sliderfield',
        label: 'Past Increment',
        name: 'pastIncrement',
        value: [10, 50],
        minValue: 0,
        maxValue: 100
      }, {
        xtype: 'sliderfield',
        label: 'Increment Desired',
        name: 'expectedIncrement',
        value: 50,
        minValue: 0,
        maxValue: 100
      }, {
        xtype: 'checkboxfield',
        name: 'isConfirmed',
        label: 'Is confirmed',
        checked: 1
      }]
    }, {
      xtype: 'fieldset',
      items: [{
        xtype: 'radiofield',
        name: 'color',
        label: 'Red/Green',
        value: 'redgreen',
        checked: 1
      }, {
        xtype: 'radiofield',
        name: 'color',
        label: 'Black/White',
        value: 'blackwhite',
        checked: 1
      }, {
        xtype: 'filefield',
        name: 'foto',
        label: 'Your picture',
        accept: 'image/jpeg, image/png',
        multiple: true
      }]
    }, {
      xtype: 'container',
      layout: 'hbox',
      defaults: {
        margin: 5
      },
      items: [{
        xtype: 'button',
        text: 'Reset',
        ui: 'action',
        handler: function() {
          this.up('formpanel').reset();
        }
      }, {
        xtype: 'button',
        text: 'Submit',
        ui: 'confirm',
        handler: function() {
          this.up('formpanel').submit();
        }
      }]
    }]
  }]
});
