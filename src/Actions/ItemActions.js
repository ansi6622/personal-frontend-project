import dispatcher from '../Dispatch/dispatcher';
import ItemConstants from '../Constant/constants'
import $ from 'jquery';

export function loadItems(items){
  $.ajax({
    url: '/items',
    dataType: 'json',
    method: 'GET',
    success: (data) => {
      items = data;
      dispatcher.dispatch({
        pass: ItemConstants.LOAD_ITEMS,
        items
      });
    }
  });
}
//export function insertItem(title, type, qty) {
//  $.ajax({
//    url: '/insert-item',
//    dataType: 'json',
//    method: 'POST',
//    success: (data) => {
//      console.log('ItemActions insertData data: ', id, data);
//      dispatcher.dispatch({
//        pass: ItemConstants.INSERT_ITEM,
//        title,
//        type,
//        qty
//      });
//    }
//  })
//}
export function removeItem(idx){
  dispatcher.dispatch({
    pass: ItemConstants.REMOVE_ITEM,
    idx
  })
}
