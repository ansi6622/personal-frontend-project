import dispatcher from "../Dispatch/dispatcher";

export function addItem(name){
  dispatcher.dispatch({
    type: 'ADD_ITEM',
    name
  })
}
export function removeItem(id){
  dispatcher.dispatch({
    type: 'REMOVE_ITEM',
    id
  })
}
export function reloadItems(){
  dispatcher.dispatch({type: "FETCH_ITEMS"});
  setTimeout(() =>{
    dispatcher.dispatch({type: "GOT_ITEMS", items: [
      {
        id: 14330228,
        name: "Chicken",
        complete: false
      },
      {
        id: 1456588888,
        name: "Fingers",
        complete: false
      }
    ]});
  }, 1000);
}