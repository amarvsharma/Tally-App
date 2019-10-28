import createDataContext from "./createDataContext";
import TallyApi from "../api/TallyApi";

/*
explanation about this file is half way down
 */

const classReducer = (state, action) => {
    switch(action.type){
        case 'add_class':
            console.log('class added: ' + action.payload.className)
            return [...state, {
                className: action.payload.className,
                id: Math.floor(Math.random() * 99999)
            }];

        case 'delete_class':
            return state.filter((oneClass) => oneClass.id !== action.payload.id);

        case 'get_classes':
            let s = [];
            const arr = action.payload.classes;
            for (let i = 0; i < arr.length; i++){
                s.push({className: arr[i].name, id: arr[i].id})
            }
            console.log(s);
            return s;
        default:
            return state;
    }
};
/*
function addClass, deleteClass and getClasses (below)
 - called from other files in order to mutate/access class data
 - only getClasses is fully complete
 - once getClasses is called, it will ask the database for a list of classes with a certain teacher id
 - teacherId is currently hardcoded
 - it will then update the state object of 'classes' by calling the reducer (above) using dispatch

 */
const addClass = (dispatch) => {
    return (className, callback) => {
        dispatch({type: 'add_class', payload: {className: className}})
    }
};

const deleteClass = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_class', payload: {id: id}})
    }
};

const getClasses = (dispatch) => {
    return async (token) => {
        //console.log('getClasses called');
        try {
            console.log("classContext Token: " +  token);
            const response = await TallyApi.get('/teacher/106774837170387011873/classes', { headers: { Authorization: token } });
            //console.log(response.data);
            dispatch({type: 'get_classes', payload: {classes: response.data}});
        } catch (err) {
            console.log(err.message);
        }
    };
};
/*

 */
export const {Provider, Context} = createDataContext(classReducer,
    {addClass, deleteClass, getClasses},
    [
        {className: 'AP BIO', id: 12345},
        {className: 'AP U.S. History', id: 12346},
        {className: 'AP World History', id: 12375}
    ]);