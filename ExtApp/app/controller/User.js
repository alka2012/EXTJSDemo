/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('ExtApp.controller.User',{
    extend:'Ext.app.Controller',
    views:['user.List',
           'user.Edit'],
    init:function(){
        this.control({
            'viewport > userlist':{
                itemdblclick: this.editUser
            },
            'useredit button[action=save]':{
                click:this.updateUser
            }
        });
    },
            editUser: function(grid,record){
              //var form=grid.down('form');
             
                var view = Ext.widget('useredit');
                //view.down
                view.down('form').loadRecord(record);
               
            },
                    
            updateUser:function(button){
        var win= button.up('window'),
                form=win.down('form'),record=form.getRecord(),values=form.getValues();
        record.set(values);
        win.close();
        
             //console.log('double click on Save button');
            }        
            
        
});
var myNewGrid= Ext.create('Ext.grid.Panel',{store:myStore,headers:myHeaders,title:'Results'});
myTabPannel.add(myNewGrid);
myTabnel.setActiveTab(myNewGrid);