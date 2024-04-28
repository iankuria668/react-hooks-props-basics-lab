import React from "react";
import user from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <ul>
        <li>
          <a href="https://github.com/liza">GitHub</a>
          </li>
        <li>
          <a href="https://www.linkedin.com/in/liza/">LinkedIn</a>
          </li>
      </ul>
    </div>
  );
}

export default About;
