import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (!projects) {
      fetch('http://localhost:8000/api/projects/1')
        .then(res => res.json())
        .then(project => {
          setProjects(project);
        });
    }
  }, [projects]);

  return (
    <div className='app-wrapper'>
      <h1>Webapi Challenge Stretch</h1>
      {projects && (
        <div>
          <h2>{projects.name}</h2>
          <p>{projects.description}</p>
          <div className='actions-wrapper'>
            {projects.actions.map(action => {
              return (
                <div key={action.id} className='actions'>
                  <h4>{action.description}</h4>
                  <p>{action.notes}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
