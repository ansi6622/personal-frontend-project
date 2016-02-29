import dispatcher from "../Dispatch/dispatcher";

export function addItem(name){
  dispatcher.dispatch({
    type: 'ADD_ITEM',
    name
  })
}
export function removeItem(idx){
  dispatcher.dispatch({
    type: 'REMOVE_ITEM',
    idx
  })
}
export function reloadItems(){
  dispatcher.dispatch({type: "FETCH_ITEMS"});
  setTimeout(() =>{
    dispatcher.dispatch({type: "GOT_ITEMS", items: [
      {
        id: 14330228,
        idx: 0,
        name: "Chicken",
        complete: false
      },
      {
        id: 1456588888,
        idx: 1,
        name: "Fingers",
        complete: false
      }
    ]});
  }, 1000);
}