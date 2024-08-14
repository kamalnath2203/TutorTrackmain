import React from 'react';
import './Home.css'; 
import foodImage from '../assets/TutorTrackhomeimage.png';
import SliderComponent from './SliderComponent';

const Home = () => {
    return (
        <div>
           
            <div className="home-container">
                <div className="content">
                    {/* <h1>Say goodbye to </h1> */}
                    <h1>Say hello to future of Learning.</h1>
                    <p>Tutors straight to your home.</p>
                </div>
                <div className="image">
                    <img src={foodImage} alt="Tutor" /> 
                </div>
            </div>
            <SliderComponent />
            <div className="new-content">
                <div className="new-image-container">
                    {/* <img src={CookingImage} alt="Cooking at Home" className="cooking-image" /> */}
                </div>
                <div className="new-text-container">
                    <h1>We provide proper education with futuristic education model.</h1>
                    <p>
                    Our teaching skills are exceptional, combining years of experience, a passion for education, and personalized attention to ensure each student excels.
                    </p>
                </div>
                <div className="pagination">
                    <span className="page-number">1/2</span>
                </div>
                <div className="next-button">
                    {/* <button className="play-button">&#9654;</button> HTML entity for play icon */}
                </div>
            </div>
            <div className="new-content">
                <div className="new-image-container">
                    {/* <img src={PreOrderImage} alt="Pre-order Food" className="preorder-image" /> */}
                </div>
                <div className="new-text-container">
                    <h1>Regiter now and avail more offers!!!</h1>
                    <p>
                    We know you're busy—plan ahead and book your tutoring sessions in advance. We'll ensure a skilled tutor arrives on time, ready to help when you need it most.
                    </p>
                </div>
                <div className="pagination">
                    <span className="page-number">2/2</span>
                </div>
                <div className="next-button">
                    {/* <button className="play-button">&#9654;</button> HTML entity for play icon */}
                </div>
            </div>
        </div>
    );
};

export default Home;
