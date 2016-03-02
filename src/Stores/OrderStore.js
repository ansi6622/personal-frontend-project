import { EventEmitter } from 'events';

import dispatcher from '../Dispatch/dispatcher';

class ItemStore extends EventEmitter{
  constructor(){
    super();
    this.orders = []
  }
  loadOrders(){
    // TODO
  }
  handleOrderSubmit(){
    let orders = this.state.data;
    order.id = Date.now();
    let newOrders = orders.concat({orders});
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
      case 'LOAD_ITEMS':{
        this.loadItems(action.data)
      }break;

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