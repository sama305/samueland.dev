import { DownloadIcon } from "lucide-react";

export default function About() {
  return (
    <div className="content">
      <div className="left">
        <p>
          Hello. My name is Samuel Morgan Anderson, and I'm a computer science professional living in Miami, Florida,
          where I currently intern at <a href="https://www.watscoventures.com/">Watsco Ventures LLC</a>. I've also lived
          in
          Tallahassee, Florida, where I received a
          Bachelor of Science in Computer Science from Florida State University in 2025.
        </p>
        <p>
          My experience with computer science goes all the way back to my childhood; since then, I've worked with on solo projects, small group projects, and even with teams at large companies. Yet no matter the situation, I always focus on the ultimate goal: delivering high quality, polished software.
        </p>
        <p>
          Besides computer science, my interests include reading, writing, playing guitar and piano, listening to tons of music, and making small games.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <div className="linkbox">
            <a href="mailto:andersonhenderson45@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/samuel-anderson-611488176/">LinkedIn</a>
            <a href="https://github.com/sama305">GitHub</a>
          </div>
          <div className="linkbox">
            <span style={{display: 'flex', gap: '0.25rem'}}><DownloadIcon /><a href="">Download my portfolio</a></span>
          </div>
        </div>
      </div>
      <div>
        <img style={{ width: '20rem' }} src="me.png" />
      </div>
    </div>
  );
}
