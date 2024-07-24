import {reRoute} from '../routing'
export default class StoreService {
    public handleLoginSubmit(): void {
        console.log('Submit button clicked!');
        reRoute('/store/products');
        
    }   
}