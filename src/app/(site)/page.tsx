export default function About() {
  return (
    <div className="content">
      <div className="left">
        <p>
          Hello. My name is Samuel Morgan Anderson, and I'm a computer science professional living in Miami, Florida,
          where I currently intern at <a href="https://www.watscoventures.com/">Watsco Ventures LLC</a>. Currently, I am also enrolled at Florida State University where I am set to recieve a
          Bachelor of Science in Computer Science from Florida State University in May of 2025.
        </p>
        <p>
          My experience with computer science goes all the way back to my childhood; since then, I've worked with on solo projects, small group projects, and even with teams at large companies. Ultimately, my goal with all of these projects is always to deliver the highest quality software possible.
        </p>
        <p>
          Besides computer science, my interests include reading, writing, playing guitar and piano, studying Spanish, listening to lots of music, and making small games.
        </p>
        <div className="linkbox">
          <div>
            <a href="mailto:andersonhenderson45@gmail.com" target="_blank">Email</a>
            <a href="https://www.linkedin.com/in/samuel-anderson-611488176/" target="_blank">LinkedIn</a>
            <a href="https://github.com/sama305" target="_blank">GitHub</a>
          </div>
          <div>
            <span><a href="/samuel_morgan_anderson_resume.pdf" target="_blank">View my résumé</a></span>
          </div>
        </div>
      </div>
      <div>
        <img alt="Myself, framed bottom right, standing with my arms on my sides. In the distance the Hollywood sign can be seen." className="bioPic" src="/me.jpg" />
      </div>
    </div>
  );
}
