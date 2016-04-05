import {Component} from 'angular2/core';
import {Article} from '../../business/news/article';


@Component({
    selector:'news',
    templateUrl:'./app/views/news/index.html'
})
export class NewsComponent {
    articles: Array<Article>;
    
    // constructor(listOfArticles: Array<Article>){
    //     this.articles = listOfArticles;
    // }
    
    constructor(){
        this.articles = new Array(new Article(1,'Story 1','This is my first story.', new Date()),new Article(2,'Story 2','This is my first story.', new Date()),new Article(3,'Story 3','This is my first story.', new Date()));
    }
}