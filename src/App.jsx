function App() {

    const title = 'Blog post'
    const body = 'This is my blog post'

    const comments = [
        {id:1, text: "comment one"},
        {id:2, text: "comment two"},
        {id:3, text: "comment three"}
    ]

    const loading = false
    const showComents = true

    if (loading) return <h1>Loading...</h1>

    const commentBlock = (
        <div className='comments'>
            {comments.map((comment, index) => {
                return <li key={comment.id}>{comment.text}</li>
            })}    
        </div>  
        )
    

    return (
    <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>

        {showComents && commentBlock}

        <p>{body.toUpperCase()}</p>

        
    </div>
    )
}

export default App;