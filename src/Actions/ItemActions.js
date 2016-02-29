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