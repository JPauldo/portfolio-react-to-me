import React from 'react';
import Project from '../Project';
import DepartmentBuilder from '../../assets/images/dept-builder-screenshot.PNG';
import EverybodyTalks from '../../assets/images/everybody-talks-screenshot.PNG';
import GottaQuizEmAll from '../../assets/images/gotta-quiz-em-all-demo.gif';
import MyCoworkersAndMe from '../../assets/images/my-coworkers-and-me-preview.gif';
import Tempo from '../../assets/images/tempo-screenshot.png'
import WordOfMyLife from '../../assets/images/word-of-my-life-demo.gif'

export default function Portfolio() {
  const projects = [
    {
      id: 5,
      name: "Word of My Life",
      src: WordOfMyLife,
      alt: "An Animated Demonstration of Word of My Life",
      links: {
        github: "https://github.com/JPauldo/word-of-the-day-project",
        site: "https://jpauldo.github.io/word-of-the-day-project/"
      }
    },
    {
      id: 10,
      name: "Tempo",
      src: Tempo,
      alt: "The Profile of a Test User for Tempo",
      links: {
        github: "https://github.com/JPauldo/tempo",
        site: "https://desolate-castle-93204.herokuapp.com/"
      }
    },
    {
      id: 15,
      name: "Gotta Quiz 'Em All",
      src: GottaQuizEmAll,
      alt: "An Animated Demonstration of Gotta Quiz 'Em All",
      links: {
        github: "https://github.com/JPauldo/gotta-quiz-em-all",
        site: "https://jpauldo.github.io/gotta-quiz-em-all/"
      }
    },
    {
      id: 20,
      name: "My Coworkers & Me",
      src: MyCoworkersAndMe,
      alt: "An Animated Demonstration of ",
      links: {
        github: "https://github.com/JPauldo/my-coworkers-and-me",
        site: "https://github.com/JPauldo/my-coworkers-and-me#installation"
      }
    },
    {
      id: 25,
      name: "Department Builder",
      src: DepartmentBuilder,
      alt: "The Beginning of ",
      links: {
        github: "https://github.com/JPauldo/dept-builder",
        site: "https://github.com/JPauldo/dept-builder#installation"
      }
    },
    {
      id: 30,
      name: "Everybody Talks",
      src: EverybodyTalks,
      alt: "A List of API Endpoints for ",
      links: {
        github: "https://github.com/JPauldo/everybody-talks",
        site: "https://github.com/JPauldo/everybody-talks#installation"
      }
    }
  ];

  return (
    <div className="project-grid">
      {projects.map((project) => {
        return <Project id={project.id} name={project.name} src={project.src} alt={project.alt} links={project.links} />;
      })}
    </div>
  );
}
