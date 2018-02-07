class Item extends Base{
  constructor(title, description, date, category, status){
    super();
    this.title = title;
    this.description = description;
    this.date = date;
    this.category = category;
    this.status = status;
  }
  addItem(currentTab){
    items.push(new Item(
      $('#title').val(),
      $('#description').val(),
      $('#date').val(),
      $('#category').val(),
      status = 'NotDone'
    ));
    $('#title').val('');
    $('#description').val('');
    $('#date').val('');
    list.renderList(currentTab);
  }
  deleteItem(index, currentTab){
    items.splice(index, 1);
    list.renderList(currentTab);
  }
  done(index, currentTab){
    let movingItem = items[index];
    items[index].status = 'Done';
    items.splice(index, 1);
    done.push(movingItem);
    list.renderList(currentTab);
  }
  deleteDone(index, currentTab){
    done.splice(index, 1);
    list.renderList(currentTab);
  }
  moveUp(index, currentTab){
    if( index > 0 ) {
      let movingItem = items[index];
      items[index] = items[index - 1];
      items[index - 1] = movingItem;
    }
    list.renderList(currentTab);
  }
  moveDown(index, currentTab){
    if( index < items.length ) {
      let movingItem = items[index];
      items[index] = items[index + 1];
      items[index + 1] = movingItem;
    }
    list.renderList(currentTab);
  }
  moveTop(index, currentTab){
    let movingItem = items[index];
    items.splice(index, 1);
    items.unshift(movingItem);
    list.renderList(currentTab);
  }
  moveBottom(index, currentTab){
    let movingItem = items[index];
    items.splice(index, 1);
    items.push(movingItem);
    list.renderList(currentTab);
  }
  undo(index, currentTab){
    let movingItem = done[index];
    done[index].status = 'NotDone';
    done.splice(index, 1);
    items.push(movingItem);
    list.renderList(currentTab);
  }
}
