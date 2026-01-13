import SamLink from "@/components/SamLink";

export default function About() {
  return (
    <div className="content-cols">
      <article>
        <p>
          Hi, I'm Sam. I'm a software engineer living in Miami, Florida, where I currently work at <SamLink href="https://www.educationalnetworks.net/">Educational Networks, Inc</SamLink>.
          In May 2025, I graduated <i>magna cum laude</i> from Florida State University with a Bachelor of Science in Computer Science.
        </p>
        <p>
          I have professional experience developing full-stack web apps in the Java and Java/Typescript ecosystems. Specifically, I have extensive experience with Next.js/React and Nuxt/Vue as well as Apache Tomcat and Jakarta Pages. Outside of work, I have lots of experience in C/C++, Lua, and Python.
        </p>
      </article>
      <div className="bio-media">
        <img alt="Myself, framed bottom right, standing with my arms on my sides. In the distance the Hollywood sign can be seen." className="bioPic" src="/me.jpg" />
      </div>
    </div>
  );
}
