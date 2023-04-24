import React from 'react';

const Portfolio = () => {
  return (
    <div className="container">
    <h1>Portfolio and <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h1>
    <h2>Projects I have worked on:</h2>
    <h3>JesterAi</h3>
    <p>JesterAi was the final project for my Advanced User Interface Design Class. We utilized the GPT-3 API to make an email writer. (Before it was cool).</p>
    <p>Stack used: React, JS, GPT-3</p>
    <h3>Letting Go</h3>
    <p>Letting Go was my final project for User Interface Design. It was a meditation app that had uploaded content (voiced by me) and then a quiz at the end of each section.</p>
    <p>Stack used: Flask, HTML, CSS</p>
    <h3>Risk Management with NLP</h3>
    <p>I used existing NLP models to analyze large data sets of Jira tickets to find unknown systemic issues within the organization. I wrote a lot of Python and learned a lot of math.</p>
    <p>Stack used: Python, pyLDAvis (thank you Ben Mabey)</p>
    <h3>Social Networks</h3>
    <p>I took a social networking class and we had to write a paper for our final project. I wrote it on comparing the rugby team and the rowing team via their social dynamics. I've linked to the dataset (rugby here, rowwing here) and the <a href="networks_paper.pdf" target="_blank" rel="noopener noreferrer">paper</a>. I learned that the rugby team at Columbia is a really diverse organization and that I much prefer Python to R.</p>
    <p>Stack used: R</p>

    <h2>Select courses I've taken and what I got out of them:</h2>
    <h3>Micro Economics with Lionel Nesta</h3>
    <p>Economics is really important for everyday life and learning basic economic concepts is very valuable to understand social dynamics, and that when teachers are nice students succeed more (Thanks Mr. Nesta for the office hours).</p>
    <h3>Lebanon: Between war, Liberation, and political reform with Aurelie Daher</h3>
    <p>Lebanon is an amazing and tragic country and life is complicated and politics is complicated. As a Jew with some distant family in Israel, this class made me better understand the nuances of being a human in a political world and just made me a better person in general.</p>
    <h3>Statistics</h3>
    <p>I learned pretty standard statistical concepts that have helped me out a lot more than I thought they would.</p>
    <h3>Computational Linear Algebra with Tony Dear</h3>
    <p>I learned that Tony is an awesome teacher and that Linear algebra is the basis of pretty much modern society. In more practical terms, I got really good at NumPy and got up to PCA and SVD.</p>
    <h3>Artificial Intelligence with Tony Dear</h3>
    <p>Was the hardest course I took at Columbia. I got better at NumPy and built a lot of basic AI models and learned a lot about the core principles of Artificial Intelligence.</p>
</div>
  );
}; 

export default Portfolio;
