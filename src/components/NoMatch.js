import React from 'react';

const NoMatch = () => {
    const containerClassName = "container no-items-container"
    return (
        <section id='main'>
            <div className={containerClassName}>
            <p>Page not found</p>
            </div>
        
            
        </section>
    );
};

export default NoMatch;