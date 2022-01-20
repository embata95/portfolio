import axios from 'axios';

function GetProjects({ addProjects, setProjectsIsLoading }) {
    let descr_url = `https://rashev-portfolio.herokuapp.com/projects-API/`
    axios.get(descr_url)
      .then(res => {
        addProjects(res.data);
        setProjectsIsLoading(false)
      })
}

export default GetProjects