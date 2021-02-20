import React, { useState, useEffect } from 'react';
import api from '../src/services/api'

import './App.css'

import Header from './components/header';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });;
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'dany'
        })

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project =>
                    <li key={project.id}>
                        {project.title}
                    </li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>
                Adicionar Projeto
            </button>
        </>
    )
}

export default App;