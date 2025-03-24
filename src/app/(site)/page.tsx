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
          My fondness for computer science comes from a lifelong hobby of learning new things. Many years ago, I
          taught myself how to code, and though my interests have
          changed over the years, I
          have never
          stopped coding and I don't think I ever will.
        </p>
        <p>
          Besides coding, some of my hobbies include reading and writing, playing guitar and piano, listening to tons of
          music, and making games.
        </p>
        <div className="linkbox">
          <a className="social">LinkedIn</a>
          <a className="social">GitHub</a>
        </div>
      </div>
      <div className="right">
        <img style={{ width: '20rem' }} src="me.png" />
      </div>
    </div>
  );
}
