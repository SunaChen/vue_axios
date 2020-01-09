
const TODOS_KEYS ='todos_key'
export default {

  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEYS, JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEYS) || '[]')
  }


}

