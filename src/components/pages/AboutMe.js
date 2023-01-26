import React from 'react';
import ProfilePic from '../../assets/images/profile-pic.jpg';

export default function AboutMe() {
  return (
    <section className="card">
      <div className="card-image">
        <figure className="image">
          <img src={ ProfilePic } alt="Profile of Myself" ></img>
        </figure>
      </div>

      <div className="card-content">
        <article className="content">
          <p>Hello. My name is Justin Pauldo. I am a web developer. While I have a background in backend development, I have decided to pivot so that I can explore something new. I am a creative thinker with the ability to express complex ideas in an articulate and concise manner. I am eager to learn and contribute in a meaningful way. Thank you for taking the to visit my site.</p>
        </article>
      </div>
    </section>
  );
}
