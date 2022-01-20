import axios from 'axios';

function GetDescription({ addDescription, setDescrIsLoading }) {
    let descr_url = `https://rashev-portfolio.herokuapp.com/self-description-API/`
    axios.get(descr_url)
      .then(res => {
        addDescription(res.data);
        setDescrIsLoading(false)
      })
}

export default GetDescription;