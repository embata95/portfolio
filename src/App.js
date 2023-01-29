import React, { useEffect, useState } from "react";
import SetData from "./components/General/SetData";
import NavBar from "./components/General/NavBar";
import RenderDescription from "./components/Description/RenderDescription";
import RenderProjects from "./components/Projects/RenderProjects";
import RenderSkills from "./components/Skills/RenderSkills";
import BackToTop from "./components/General/scroll_top";
import Player from "./components/General/BackgroundAudio";

function App() {
  const [description, setDescription] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [descrIsLoading, setDescrIsLoading] = useState(true);
  const [projectsIsLoading, setProjectsIsLoading] = useState(true);
  const [skillsIsLoading, setSkillsIsLoading] = useState(true);
  
  useEffect(() => SetData({ tableName:"description", setData:setDescription, setDataIsLoading:setDescrIsLoading }), []);
  useEffect(() => SetData({ tableName:"projects", setData:setProjects, setDataIsLoading:setProjectsIsLoading }), []);
  useEffect(() => SetData({  tableName:"skills", setData:setSkills, setDataIsLoading:setSkillsIsLoading }), []);

  return (
    <>
      <NavBar />
      <BackToTop />
      <Player />
        <div>
          <div id="home" className="content">
            <RenderDescription data={description} descrIsLoading={descrIsLoading} />
          </div>
          <div id="projects" className="content">
            <RenderProjects data={projects} projectsIsLoading={projectsIsLoading} />
          </div>
          <div id="skills" className="content">
            <RenderSkills data={skills} skillsIsLoading={skillsIsLoading} />
          </div>
        </div>
    </>
  );
}

export default App;
