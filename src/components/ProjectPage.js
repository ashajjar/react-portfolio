import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = (props) => (
    <div>
        <h2>Project I have Done ({props.match.params.id})</h2>
        <p>Project details here ..</p>
        <Link to="/portfolio">Back to projects list</Link>
    </div>
);

export default ProjectPage;