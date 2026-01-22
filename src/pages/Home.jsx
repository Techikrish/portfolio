import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Notes from '../components/Notes';
// import Apps from '../components/Apps';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Blog limit={3} />
            <Notes />
            {/* <Apps /> */}
        </>
    );
};

export default Home;
