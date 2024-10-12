function Card ({quote, citation, children}) {
    return (
        <div className="card">
            <blockquote>"{quote}"</blockquote>
            <i>- {citation}</i>
            {children}
        </div>
    )
}

export default Card