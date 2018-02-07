class List extends Base{
  constructor(items){
    super();
    this.items = items;
  }

  renderList(list){
    let index = 0;
    let listItems = 0;
    $('.main-list').empty();
    if (list == 'allList') {
      for (let item of items) {
        if (item.status == 'NotDone') {
          $('.main-list').append(
          this.htmlList(item.title, item.description, item.date, item.category, list, index));
          listItems++;
        }
        index++;
      }
      this.renderButtons(listItems);
    }
    else if (list == 'personalList') {
      for (let item of items) {
        if (item.category == 'Personal') {
          $('.main-list').append(
          this.htmlList(item.title, item.description, item.date, item.category, list, index));
          listItems++;
        }
        index++;
      }
      this.renderButtons(listItems);
    }
    else if (list == 'workList') {
      for (let item of items) {
        if (item.category == 'Work') {
          $('.main-list').append(
          this.htmlList(item.title, item.description, item.date, item.category, list, index));
          listItems++;
        }
        index++;
      }
      this.renderButtons(listItems);
    }
    else if (list == 'familyList') {
      for (let item of items) {
        if (item.category == 'Family') {
          $('.main-list').append(
          this.htmlList(item.title, item.description, item.date, item.category, list, index));
          listItems++;
        }
        index++;
      }
      this.renderButtons(listItems);
    }
    else if (list == 'hobbiesList') {
      for (let item of items) {
        if (item.category == 'Hobbies') {
          $('.main-list').append(
          this.htmlList(item.title, item.description, item.date, item.category, list, index));
          listItems++;
        }
        index++;
      }
      this.renderButtons(listItems);
    }
    else if (list == 'doneList') {
      for (let item of done) {
        if (item.status == 'Done') {
          $('.main-list').append(
          this.htmlList(item.title, item.description, item.date, item.category, list, index));
          $('.btnGroupToDo .btn-group').addClass('d-none');
          $('.btnGroupDone .btn-group').removeClass('d-none');
        }
        index++;
      }
    }
    this.updateToDo();
    this.updateDone();
  }

  renderButtons(listItems){
    if (listItems > 1) {
      $('.list-todo:first-child .btn-up').addClass('d-none');
      $('.list-todo:first-child .btn-top').addClass('d-none');
      $('.list-todo:last-child .btn-down').addClass('d-none');
      $('.list-todo:last-child .btn-bottom').addClass('d-none');
    }
    else{
      $('.list-todo .btn-edit').addClass('d-none');
    }
  }
  
  updateToDo(){
    JSON._save('items.json', items);
  }
  updateDone(){
    JSON._save('done.json', done);
  }
}
