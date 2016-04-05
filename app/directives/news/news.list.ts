import {Directive, Input} from 'angular2/core';
import {TemplateRef, ViewContainerRef} from 'angular2/core';
import {Article} from '../../business/news/article';

@Directive({
    selector: '[article]'
})
export class NewsListDirective {
    article: Article;
    
    private _templateRef: TemplateRef;
    private _viewContainer: ViewContainerRef;
    
    constructor() {
        
    }
    
    @Input() set newsList(a: Article) {
        this.article = a;
        this._viewContainer.createEmbeddedView(this._templateRef);
    }  
}

