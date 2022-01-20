import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetDescription from "./components/Description/GetDescription";
import NavBar from "./components/General/NavBar";
import RenderDescription from "./components/Description/RenderDescription";
import GetProjects from "./components/Projects/GetProjects";
import GetSkills from "./components/Skills/GetSkills";
import RenderProjects from "./components/Projects/RenderProjects";
import RenderSkills from "./components/Skills/RenderSkills";

function App() {
  const [description, setDescription] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [descrIsLoading, setDescrIsLoading] = useState(true)
  const [projectsIsLoading, setProjectsIsLoading] = useState(true)
  const [skillsIsLoading, setSkillsIsLoading] = useState(true)
  const addDescription = data => {
    setDescription(data);
  }
  const addProjects = data => {
    setProjects(data);
  }
  const addSkills = data => {
    setSkills(data);
  }
  
  useEffect(() => GetDescription({ addDescription, setDescrIsLoading }), [])
  useEffect(() => GetProjects({ addProjects, setProjectsIsLoading }), [])
  useEffect(() => GetSkills({ addSkills, setSkillsIsLoading }), [])

  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/about' element={<RenderDescription data={description} descrIsLoading={descrIsLoading} />} />
          <Route path='/projects' element={<RenderProjects data={projects} projectsIsLoading={projectsIsLoading} />} />
          <Route path='/skills' element={<RenderSkills data={skills} skillsIsLoading={skillsIsLoading} />} />
          <Route path='/*' element={<RenderDescription data={description} descrIsLoading={descrIsLoading} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
