import React from 'react';

export default function Reader({ title, children }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}