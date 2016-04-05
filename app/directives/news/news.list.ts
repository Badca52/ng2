import {Directive, Input} from 'angular2/core';
import {TemplateRef, ViewContainerRef} from 'angular2/core';
import {Article} from '../../business/news/article';

@Directive({
    selector: '[newsList]'
})
export class NewsListDirective {
    articles: Array<Article>;
    
    private _templateRef: TemplateRef;
    private _viewContainer: ViewContainerRef;
    
    constructor() {
        
    }
    
    @Input() set newsList(a: Array<Article>) {
        this.articles = a;
        this._viewContainer.createEmbeddedView(this._templateRef);
    }  
}

