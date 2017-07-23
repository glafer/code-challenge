export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
    content
    tags
  }
}`;

export const ARTICLE_QUERY = (id) => (`{
  article(id: "${id}") {
    id
    author
    content
    published
    tags
    title
  }
}`);