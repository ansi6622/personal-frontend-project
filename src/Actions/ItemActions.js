import dispatcher from '../Dispatch/dispatcher';
import $ from 'jquery';

import {
  LOAD_ITEMS,
  REMOVE_ITEM,
  INSERT_ITEM
} from '../Constant/constants'

export function loadItems(items){
  $.ajax({
    url: '/get-items',
    dataType: 'json',
    method: 'GET',
    success: (data) => {
      items = data;
      dispatcher.dispatch({
        source: LOAD_ITEMS,
        items
      });
    }
  });
}
//export function insertItem(items) {
//  $.ajax({
//    url: '/insert-item',
//    dataType: 'json',
//    method: 'POST',
//    success: (data) => {
//      items = data;
//      console.log('ItemActions insertData data: ', id, data);
//      dispatcher.dispatch({
//        source: INSERT_ITEM,
//        items
//      });
//    }
//  })
//}
export function removeItem(idx){
  dispatcher.dispatch({
    source: REMOVE_ITEM,
    idx
  })
}
