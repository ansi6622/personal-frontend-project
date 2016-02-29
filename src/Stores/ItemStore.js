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
        type: "Vanilla",
        count: 10,
        complete: false
      },
      {
        id: 145456888,
        idx: 1,
        name: "Coffee Cups",
        type: "16oz",
        count: 200,
        complete: true
      },
      {
        id: 14549888,
        idx: 3,
        name: "Coffee Cups",
        type: "8oz",
        count: 150,
        complete: true
      }
    ]
  }

  addItem(name, type, count){
    const id = Date.now();
    let idx = this.items.length + 1;
    this.items.unshift({
      id,
      idx,
      name,
      type,
      count,
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
    switch(action.title){
      case "ADD_ITEM":{
        this.addItem(action.name, action.type, action.count);
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