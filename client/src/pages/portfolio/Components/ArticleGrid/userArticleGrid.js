import React from 'react';
import IndividualArticle from './articleBox';
import Grid from '@material-ui/core/Grid';


class userArticleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : this.props.count,
            articleData: this.props.articles,
            titles : [],
            desc : [],
            images : []
        }
    }

    render() {
        // var allUserArticles = [];
        // for(let i = 0; i < this.state.count; i++)
        // {
        //     allUserArticles.push(   {
        //                                 image : this.state.images[i],
        //                                 title : this.state.titles[i], 
        //                                 description : this.state.desc[i]
        //                             } 
        //                         );
        // }

        var indArticles = this.state.articleData.map(item => <IndividualArticle image={item.articleImages} title={item.articleTitle} description={item.articleContent.slice(0, 120) + "..."} />);
        
        
        return (
            <div className="articles">
                {indArticles}
            </div>
        );
    }
}


export default userArticleGrid