import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3fc310bbb0044d928a0422c620b1b021', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
