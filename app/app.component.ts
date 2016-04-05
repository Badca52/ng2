import {Component} from 'angular2/core';
import {NewsComponent} from './components/news/news.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/views/home/index.html',
    directives: [NewsComponent]
})
export class AppComponent { }
