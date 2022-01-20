import axios from 'axios';

function GetSkills({ addSkills, setSkillsIsLoading }) {
    let descr_url = `https://rashev-portfolio.herokuapp.com/skills-API/`
    axios.get(descr_url)
      .then(res => {
        addSkills(res.data);
        setSkillsIsLoading(false)
      })
}

export default GetSkills

