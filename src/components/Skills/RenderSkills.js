function RenderSkills({ data, skillsIsLoading }) {
    const page_descr =  <p className="title_text">
    Here you will see the skills I have developed throughout my career as a programmer.
    </p>
    if (skillsIsLoading) {
        return (
            <div className="content">
                {page_descr}
                <h3 className="content">Loading content, please wait...</h3>
            </div>
        )
    } else {
        const projects = data.map((obj) => 
        <div className="accordion-item" key={data.indexOf(obj)}>
            <h3 className="accordion-header" id={'header' + data.indexOf(obj)}>
                <button className="accordion-button collapsed title_text" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + data.indexOf(obj)} aria-expanded="false" aria-controls="collapse{{ curr_project.id }}">
                    {obj.skill_name}
                </button>
            </h3>
            <div id={'collapse' + data.indexOf(obj)} className="accordion-collapse collapse" aria-labelledby={'heading' + data.indexOf(obj)} data-bs-parent="#project">
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html : obj.skill_description }} />
            </div>
        </div>
            )
        return (
            <div className="content">
                {page_descr}
                <div className="accordion" id="project">
                    {projects}
                </div>
            </div>
        )
    }
}

export default RenderSkills