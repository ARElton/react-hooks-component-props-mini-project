import Article from './Article'

function emojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕️" : "🍱"
}
 
function ArticleList({ posts }) {
    const articles = posts.map((post) => (
        <Article 
          key={ post.id }
          title={ post.ttile }
          date={ post.date }
          preview={ post.preview }
          minutes={ post.minutes }
        />
    ))
    return <main>{ articles }</main>
}

export default ArticleList;