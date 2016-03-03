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
    // TODO console.log('item store loadItems: ', this.items);
  }
  insertItem(){
    let idx = this.items.length + 1;
    this.items.unshift({
      idx,
      title,
      type,
      qty
    });
    console.log('ItemStore insertItem', items);
    this.emit('change');
  }
  removeItem(idx){
    this.items.splice(idx, 1);
    this.emit('change');
  }
  getAll(){
    // TODO console.log('item store getAll: ', this.items);
    return this.items;
  }
  handleActions(action){
    switch(action.pass){

      case 'LOAD_ITEMS':{
        this.loadItems(action.items);
        // TODO console.log('item store handleActions loadItems: ', this.items)
      }break;

      case 'INSERT_ITEMS':{
        this.insertItem(action.title, action.type, action.qty);
        console.log('item store handleActions insertItem: ', this.items)
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