import dispatcher from "../Dispatch/dispatcher";
import $ from 'jquery';

export function loadItems(items){
  $.ajax({
    url: '/items',
    dataType: 'json',
    method: 'GET',
    success: (data) => {
      items = data;
      dispatcher.dispatch({pass:'LOAD_ITEMS', items});
    }
  });
}
export function addItem(title, type, qty){
  dispatcher.dispatch({
    pass: 'ADD_ITEM',
    title,
    type,
    qty
  })
}
export function removeItem(idx){
  dispatcher.dispatch({
    pass: 'REMOVE_ITEM',
    idx
  })
}
