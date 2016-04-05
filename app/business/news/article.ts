export class Article{
    id: Number;
    title: String;
    story: String;
    timestamp: Date;
    
    constructor(a_id :Number,a_title:String,a_story:String,a_timestamp:Date){
        this.id = a_id;
        this.title = a_title;
        this.story = a_story;
        this.timestamp = a_timestamp;
    }
}
