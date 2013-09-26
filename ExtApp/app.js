Ext.require('Ext.container.Viewport');
Ext.application({
	name:'ExtApp',
	appFolder:'app',
        controllers:['User'],
	launch:function(){
	Ext.create('Ext.container.Viewport',{
		layout:'border',
              
		items:[
		{
        region: 'north',
        html: '<h1 class="x-panel-header">Test Page</h1>',
        border: false,
        margins: '0 0 5 0'
    }, {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 150
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }, {
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150
    },
		{
			region: 'center',
			xtype:'userlist',
			
		}
              
		]
		});
	}
});

/*
Ext.define('My.sample.Person',{
	        name:'Unknown',
	        constructor: function(name)
	        {
				if(name)
				this.name=name;
				return this;
				},
			eat:function(foodType)
			{
				alert(this.name+" Is Eating : "+foodType);
			    return this;
			}
			});
			
			var alka=Ext.create('My.sample.Person','Alka');
			alka.eat("Apple");
*/
