import { EventEmitter } from 'events';

import dispatcher from '../Dispatch/dispatcher';

class ItemStore extends EventEmitter{
  constructor(){
    super();
    this.items = [
      {
        id: 145647660228,
        idx: 0,
        name: "Ice Cream",
        complete: false
      },
      {
        id: 145456888,
        idx: 1,
        name: "Burrito",
        complete: true
      }
    ]
  }

  addItem(name){
    const id = Date.now();
    let idx = this.items.length + 1;
    this.items.unshift({
      id,
      idx,
      name,
      complete: false
    });
    this.emit('change');
  }

  removeItem(idx){
    this.items.splice(idx, 1);
    this.emit('change');
  }

  getAll(){
    return this.items;
  }

  handleActions(action){
    switch(action.type){
      case "ADD_ITEM":{
        this.addItem(action.name);
      }break;

      case "REMOVE_ITEM": {
        this.removeItem(action.idx);
      }break;

      case "GOT_ITEMS": {
        this.items = action.items;
        this.emit('change');
      }
    }
  }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;