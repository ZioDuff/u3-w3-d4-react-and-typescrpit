export interface Articles {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     string[];
    events:       string[];
}

export interface SingleArticle {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     string[];
    events:       string[];
}
