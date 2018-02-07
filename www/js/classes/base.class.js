let objectMemory = [];

class Base {

  constructor(settings){
    // read defaults from the class and parent classes
    let proto = this;
    // get all defaults
    let defaults = this.allDefaults();
    // clean the settings from unwanted properties
    this.cleanSettings(defaults, settings);
    // move all defaults & settings properties
    // to this - the object being created
    Object.assign(this, defaults, settings);
    // if there is an init function call it
    if(typeof this.init == 'function'){
      this.init();
    }
  }
  // Return a html template
  // Will look for a method called
  // template + templateNo
  html(templateNo = ''){
    let method = 'template' + templateNo;
    if(!this[method]){ return; }
    let rendered = $(this[method]());
    // add an objectId
    rendered.attr('object-id', objectMemory.indexOf(this));
    // return rendered html
    return rendered.get(0).outerHTML;
  }

  defaults(){
    return {};
  }

  allDefaults(){
    // Go through parents classes ("prototypes")
    // to find all defaults
    let defaults = {}, proto = this;
    while (true){
      proto = Object.getPrototypeOf(proto);
      if(!proto.defaults){ break; }
      Object.assign(defaults,proto.defaults());
    }
    return defaults;
  }

  cleanSettings(defaults, settings){
    let defaultKeys = Object.keys(defaults);
    for(let key in settings){
      // if default does not include the property/key
      if(!defaultKeys.includes(key)){
        // then delete the property/key
        delete settings[key];
      }
    }
  }

  // A static method is common for the whole class
  // not a specific object/instance
  static fromJson(url, callback){
    // Dependent on jQuery!
    let construct = this;
    $.getJSON(url, function(arr){
      let newArr = [];
      for(let item of arr){
        newArr.push(new construct(item));
      }
      callback(newArr);
    });
  }
  // Render the result of calling html()
  // to the DOM
  render(selector,templateNo = ''){
    let rendered = this.html(templateNo);
    // if no selector see if we can find the
    // element in DOM and rerender it
    if(!selector){
      let myId = objectMemory.indexOf(this);
      $(`[object-id=${myId}]`).replaceWith(rendered);
    }
    else {
      // render it to a specific selector
      $(selector).html(rendered);
    }
  }

}
