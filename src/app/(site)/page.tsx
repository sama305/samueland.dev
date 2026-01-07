export default function About() {
  return (
    <div className="content-cols">
      <article>
        <p>
          Hi, I'm Sam. I'm a software engineer living in Miami, Florida, where I currently work at <a href="https://www.educationalnetworks.net/">Educational Networks, Inc</a>.
          In May 2025, I graduated <i>magna cum laude</i> from Florida State University with a Bachelor of Science in Computer Science.
        </p>
        <p>
          I have professional experience developing full-stack web apps in the Java and Java/Typescript ecosystems. Specifically, I have extensive experience with <a href="https://nextjs.org/">Next.js</a>/<a href="https://react.dev/">React</a> and <a href="https://nuxt.com/">Nuxt</a>/<a href="https://vuejs.org/">Vue</a> as well as <a href="https://tomcat.apache.org/">Apache Tomcat</a> and <a href="https://jakarta.ee/specifications/pages/">Jakarta Pages</a>. Outside of work, I have lots of experience in C, Rust, Lua, and Python.
        </p>
        <p>
          For me, this isn't just work: it's a craft. As a craftsman, it's my aim to create software which is <i>sustainable</i>, <i>reliable</i> and of the <i>highest possible quality</i>.
        </p>
      </article>
      <div className="bio-media">
        <img alt="Myself, framed bottom right, standing with my arms on my sides. In the distance the Hollywood sign can be seen." className="bioPic" src="/me.jpg" />
      </div>
    </div>
  );
}
