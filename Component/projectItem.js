import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.propsonDelete(id);
  }
  render() {
    return (
      <div className="App">

      <li className="ProjectItem">
      <strong>{this.props.project.type}</strong>: {this.props.project.actor}
      <a href={"#" + this.props.project.id} onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
    </li>


    </div>
  );
}
}


export default ProjectItem;
