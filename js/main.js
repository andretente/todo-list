//List arrays
let items = [];
let done = [];
let currentTab = 'allList';
let item = new Item();
let list = new List();
let app = new App();

JSON._load('done.json')
.then(function(data){
   done = data;
   app.navigation();
   //list.renderList('doneList');
});
JSON._load('items.json')
.then(function(data){
   items = data;
   app.navigation();
  //list.renderList('allList');
});


//Call changePage when click back and forward
window.addEventListener('popstate',app.navigation);
