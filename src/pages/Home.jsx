import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import CommunityStudy from '../components/CommunityStudy';
import Blog from '../components/Blog';
import Notes from '../components/Notes';
// import Apps from '../components/Apps';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />
            <CommunityStudy />
            <Blog limit={6} />
            <Notes />
            {/* <Apps /> */}
        </>
    );
};

export default Home;
