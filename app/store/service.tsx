import {createPost} from '../routing'
export default class StoreService {
    public handleLoginSubmit(): void {
        console.log('Submit button clicked!');
        createPost('123');
        
    }   
}