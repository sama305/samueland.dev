export default function About() {
  return (
    <div className="content">
      <div className="left">
        <p>
          Hi, I'm Sam. I'm a 22 year-old computer science professional living in Miami, Florida, where I currently intern at <a href="https://www.watscoventures.com/">Watsco Ventures LLC</a>.
          I'm also enrolled at Florida State University, where I'm set to recieve a Bachelor of Science in Computer Science from Florida State University in May of 2025.
        </p>
        <p>
          I have professional experience in high-level, full-stack web development, specifically with Java/Typescript-based frameworks. Without compromise, I always push myself to deliver software which is <i>sustainable</i>, <i>reliable</i> and of the <i>highest possible quality</i>.
        </p>
      </div>
      <div className="bioRight">
        <img alt="Myself, framed bottom right, standing with my arms on my sides. In the distance the Hollywood sign can be seen." className="bioPic" src="/me.jpg" />
        <div className="linkbox">
          <div>
            <a href="mailto:andersonhenderson45@gmail.com" target="_blank">Email me</a>
            <a href="https://www.linkedin.com/in/samuel-anderson-611488176/" target="_blank">LinkedIn</a>
            <a href="https://github.com/sama305" target="_blank">GitHub</a>
          </div>
          <div>
            <span><a href="/samuel_morgan_anderson_resume.pdf" target="_blank">View my résumé</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
