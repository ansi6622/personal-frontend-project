import dispatcher from "../Dispatch/dispatcher";

export function addItem(name, type, count){
  dispatcher.dispatch({
    title: 'ADD_ITEM',
    name,
    type,
    count
  })
}
export function removeItem(idx){
  dispatcher.dispatch({
    title: 'REMOVE_ITEM',
    idx
  })
}
export function reloadItems(){
  dispatcher.dispatch({title: "FETCH_ITEMS"});
  setTimeout(() =>{
    dispatcher.dispatch({title: "GOT_ITEMS", items: [
      {
        id: 145647660228,
        idx: 0,
        name: "Ice Cream",
        type: "Vanilla",
        count: 9,
        complete: false
      },
      {
        id: 145456888,
        idx: 1,
        name: "Coffee Cups",
        type: "16oz",
        count: 299,
        complete: true
      },
      {
        id: 14549888,
        idx: 3,
        name: "Coffee Cups",
        type: "8oz",
        count: 149,
        complete: true
      }
    ]});
  }, 500);
}