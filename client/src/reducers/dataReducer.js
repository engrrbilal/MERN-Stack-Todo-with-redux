let dataReducerDefaultState = {
    todos:[1],
    todo:[]
}

export default (state=dataReducerDefaultState,action)=>{
    switch(action.type){
            case 'ADD-TODO':
            return({
                ...state,
                // todos:todos.concat(action.data)
                todos:state.todos.concat(action.todo)

            })
            case 'GET-ALL-TODOS':
            return({
                ...state,
                todos:action.todos
            })
            case 'GET-TODO-WITH-ID':
            return({
                ...state,
                todos:action.todos
            })
            case 'UPDATE-TODO':
            return({
                ...state,
                todo:action.todo
            })
            case 'DELETE-TODO-WITH-ID':
            return({
                ...state,
                todo:action.todo
            })
            default:
            return state;    
    }
}