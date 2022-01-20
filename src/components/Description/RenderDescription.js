function RenderDescription({ data, descrIsLoading }) {
    if (descrIsLoading) {
        return (
            <h3 className="content">Loading content, please wait...</h3>
        )
    }
    descrIsLoading = false
    const style = {
        'lineHeight': '180%'
    }
    return (
        data.map((obj) => <div key="1" className="content title_text" style={style} dangerouslySetInnerHTML={{
            __html : obj.description
        }}></div>)
    )
}

export default RenderDescription