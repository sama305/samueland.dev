export default function About() {
  return (
    <div className="content-cols">
      <article>
        <p>
          Hi, I'm Sam. I'm a 22 year-old computer science professional living in Miami, Florida, where I currently work at <a href="https://www.educationalnetworks.net/">Educational Networks, Inc</a>.
          In May 2025, I graduated magna cum laude from Florida State University with a Bachelor of Science in Computer Science.
        </p>
        <p>
          I have professional experience in full-stack web development, specifically with Java/Typescript-based frameworks such as <a href="https://nextjs.org/">Next.js</a> and <a href="https://www.educationalnetworks.net/">Nuxt</a>. Outside of work, I have lots of experience in C, Rust, Lua, and Python.
        </p>
        <p>
          For me, this isn't work: it's a craft. And as a craftsman, it's my aim to create software which is <i>sustainable</i>, <i>reliable</i> and of the <i>highest possible quality</i>.
        </p>
      </article>
      <div className="bio-media">
        <img alt="Myself, framed bottom right, standing with my arms on my sides. In the distance the Hollywood sign can be seen." className="bioPic" src="/me.jpg" />
      </div>
    </div>
  );
}
