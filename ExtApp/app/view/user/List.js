/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('ExtApp.view.user.List',{
    extend:'Ext.grid.Panel',
    alias:'widget.userlist',
    title:'All Users',
    
    initComponent:function(){
        this.store={
            fields:['name','email'],
            data:[
                {name:'alka',email:'alka@gslab.com'},
                {name:'anisha',email:'anisha@gslab.com'},
                {name:'priti',email:'priti@gslab.com'}
            ]
        };
        this.columns=[
            {header:'Name',dataIndex:'name',flex:1},
            {header:'Email',dataIndex:'email',flex:1}
        ];
        this.callParent(arguments);
    }
})
    


