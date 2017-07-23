import * as actionsTypes from './actionTypes'
import * as actions from './index'

describe('Articles actions', () => {
  it('should create an action for request articles', () => {
    let expectedAction = { type: actionsTypes.REQUEST_ARTICLES }
    expect(actions.requestArticles()).toEqual(expectedAction)
  });

  it('should create an action for receive articles', () => {
    let article = {
        author: 'author',
        excerpt: 'excerpt',
        id: 'id',
        title: 'title'
    }
    let articleList = {
        data: {
            articles: [ article, article ]
        }
    }
    let expectedAction = { type: actionsTypes.RECEIVE_ARTICLES, articles: articleList.data.articles }
    expect(actions.receiveArticles(articleList)).toEqual(expectedAction)
  })

  it('should create an action for request articles', () => {
    let articleId = 'id'
    let expectedAction = { type: actionsTypes.REQUEST_ARTICLES }
    expect(actions.requestArticles(articleId)).toEqual(expectedAction)
  });

  it('should create an action for receive single article', () => {
    let article = {
        data: {
            article: {
                author: 'author',
                content: 'content',
                id: 'id',
                title: 'title',
                tags: [ 'tag', 'tag' ],
                published: false
            }
        }
    }
    let expectedAction = { type: actionsTypes.RECEIVE_ARTICLE, article: article.data.article }
    expect(actions.receiveArticle(article)).toEqual(expectedAction)
  })

});