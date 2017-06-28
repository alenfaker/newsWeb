define(["jquery"],function($){
   return {
       changePasword: function(accout,password,updatapwd,callback) {
           this.ajax("updatapwd","get",{accout:accout,password:password,updatapwd:updatapwd},callback)
       },
       ajax: function (url,type,params,callback) {
           $.ajax({
               url: "http://127.0.0.1/:9090/api/"+url,
               type: type,
               data: params,
               success: function(data) {
                callback && callback(data);
               }
           })
       }
   }
});