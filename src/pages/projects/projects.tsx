import './projects.css';
import React from 'react';
import { Button } from 'antd';
import ProjectForm from '../../components/project-form/project-form';
import ProjectCard from '../../components/project-card/project-card';

const ProjectsPage = () => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  return (
    <div className="projects-page">
      <div className="projects-page-inner">
        <div className='new-project-btn'>
          <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
        </div>
      </div>
      <div className="projects-board">
        <ProjectCard
          color="red"
          projectName='project name here'
          description='This is a short description, this space should probably be enough.'
          totalTime='16hrs 45mins'
        />
        <ProjectCard
          color="yellow"
          projectName='yellow market'
          description='This is another short description'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="pink"
          projectName='idk pro'
          description='This is another short description'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="pink"
          projectName='idk pro'
          description='This is another short description'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="orange"
          projectName='frying nemo'
          description='This is a very long description, i am going to try to make it look good even though its desciption is too long'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="red"
          projectName='project name here'
          description='This is a short description, this space should probably be enough.'
          totalTime='16hrs 45mins'
        />
        <ProjectCard
          color="yellow"
          projectName='yellow market'
          description='This is another short description'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="yellow"
          projectName='yellow market'
          description='This is another short description'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="pink"
          projectName='idk pro'
          description='This is another short description'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="orange"
          projectName='frying nemo'
          description='This is a very long description, i am going to try to make it look good even though its desciption is too long'
          totalTime='2hrs 9mins'
        />
        <ProjectCard
          color="red"
          projectName='project name here'
          description='This is a short description, this space should probably be enough.'
          totalTime='16hrs 45mins'
        />
      </div>
      {/*list of projects here */}
      <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </div >
  )
}
export default ProjectsPage;