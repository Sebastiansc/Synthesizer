import { createStore } from 'redux';
import reducer from '../reducers/root_reducer';


const configStore = () => createStore(reducer, {});
export default configStore;
