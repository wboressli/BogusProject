import React, { Component } from 'react';
import ProjectItem from "./ProjectItem"
import { observer } from 'mobx-react';

const Projects = observer(class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItem;
    if(this.props.proects){
      projectItem = this.props.projects.map(
        project => {
          return (
            <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.type} project={project} />
          );
        }
      );
    }
    return (
      <div className="App">
      <hr />
      {ProjectItem}
      </div>
    )

  }
})
export default Projects;
