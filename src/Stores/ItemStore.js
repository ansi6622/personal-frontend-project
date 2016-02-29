import { EventEmitter } from 'events';

import dispatcher from '../Dispatch/dispatcher';

class ItemStore extends EventEmitter{
  constructor(){
    super();
    this.items = [
      {
        id: 145647660228,
        name: "Ice Cream",
        complete: false
      },
      {
        id: 145456888,
        name: "Burrito",
        complete: true
      }
    ]
  }

  addItem(name){
    const id = Date.now();
    this.items.push({
      id,
      name,
      complete: false
    });
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

      case "GOT_ITEMS": {
        this.items = action.items;
        this.emit('change');
      }
    }
  }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));

window.dispatcher = dispatcher;
window.itemStore = itemStore;


export default itemStore;