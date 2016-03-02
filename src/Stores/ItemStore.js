import { EventEmitter } from 'events';
import dispatcher from '../Dispatch/dispatcher';

class ItemStore extends EventEmitter{
  constructor(){
    super();
    this.items = []
  }
  loadItems(items){
    this.items = items;
    this.emit('change');
    console.log('item store loadItems: ', this.items);
  }
  addItem(title, type, qty){
    const id = Date.now();
    let idx = this.items.length + 1;
    this.items.unshift({
      id,
      idx,
      title,
      type,
      qty,
      complete: false
    });
    this.emit('change');
  }
  removeItem(idx){
    this.items.splice(idx, 1);
    this.emit('change');
  }
  getAll(){
    console.log('item store getAll: ', this.items);
    return this.items;
  }
  handleActions(action){
    switch(action.pass){

      case 'LOAD_ITEMS':{
        this.loadItems(action.items);
        console.log('item store handleActions loadItems: ', this.items)
      }break;

      case "ADD_ITEM":{
        this.addItem(action.title, action.type, action.qty);
      }break;

      case "REMOVE_ITEM": {
        this.removeItem(action.idx);
      }
    }
  }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;