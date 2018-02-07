class App extends Base{
  constructor(){
    super();
    this.clickEvents();
    //this.navigation();
  }
  navigation(){
    // get the current url
    let url = location.pathname;
    // change menu link active
    $('.nav-btn-group a').removeClass('active');
    $(`.nav-btn-group a[href="${url}"]`).addClass('active')

    if (url == '/') {
      currentTab = 'allList';
      list.renderList(currentTab);
    }
    if (url == '/personal') {
      currentTab = 'personalList';
      list.renderList(currentTab);
    }
    if (url == '/work') {
      currentTab = 'workList';
      list.renderList(currentTab);
    }
    if (url == '/family') {
      currentTab = 'familyList';
      list.renderList(currentTab);
    }
    if (url == '/hobbies') {
      currentTab = 'hobbiesList';
      list.renderList(currentTab);
    }
    if (url == '/done') {
      currentTab = 'doneList';
      list.renderList(currentTab);
    }
  }

  clickEvents(){
    let that = this;
    //Add item
    $(document).on("click", '#btn-add-allTasks', function() {
      item.addItem(currentTab);
    });
    //Navigation
    $(document).on('click','a.nav-btn',function(e){
      //Create a push state preventDefault
      let href = $(this).attr('href');
      history.pushState(null, null, href);
      //Call the change page function
      that.navigation();
      //Stop the browers from starting a page reload
      e.preventDefault();
    });

    //Move item to Done list
    $(document).on("click", '.btn-done', function() {
      let index = $(this).data('index')/1;
      item.done(index, currentTab);
    });
    //Remove item
    $(document).on("click", '.btn-delete', function() {
      let index = $(this).data('index')/1;
      if($(this).hasClass('doneList')){
        item.deleteDone(index, currentTab);
      }
      else{
        item.deleteItem(index, currentTab);
      }
    });
    //Move Up
    $(document).on("click", '.btn-up', function() {
      let index = $(this).data('index')/1;
      item.moveUp(index, currentTab);
    });
    //Move Down
    $(document).on("click", '.btn-down', function() {
      let index = $(this).data('index')/1;
      item.moveDown(index, currentTab);
    });
    //Move Top
    $(document).on("click", '.btn-top', function() {
      let index = $(this).data('index')/1;
      item.moveTop(index, currentTab);
    });
    //Move Bottom
    $(document).on("click", '.btn-bottom', function() {
      let index = $(this).data('index')/1;
      item.moveBottom(index, currentTab);
    });
    //Undo
    $(document).on("click", '.btn-undo', function() {
      let index = $(this).data('index')/1;
      item.undo(index, currentTab);
    });
  }
}
