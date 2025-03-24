export default function Projects() {
  return (
    <div>
      <div className="content">
        <div className="left">
          <h3><a style={{ fontWeight: 'bold'}} className="social" href="https://librewrite.com">Librewrite.com</a></h3>
          October 2024 &mdash; Present
        </div>
        <div className="right">
          <p>
            <a className="social" href="https://librewrite.com">Librewrite.com</a> is an free webapp intended to be used to
            practice creative writing. It facilitates free writing, a writing technique in which the writer writes for a
            period
            of time uninterrupted, optionally from a prompt.
          </p>
          <p>
            I created this after I discovered free writing in my LIT2000 className, but noticed a lack of available apps
            that could fill the void of a teacher. My hope is to make practicing creative writing
            more accessible to both students and teachers.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="left">
          <h3><a style={{ fontWeight: 'bold'}} className="social" href="https://arduvia.com">Arduvia</a></h3>
          May 2024 &mdash; December 2024
        </div>
        <div className="right">
          <p>
            Originally created as a senior class project, <a className="social" href="https://arduvia.com">Arduvia</a> is a
            novel social-media "platform" which replaces
            feeds and algorithms with a literal map of the world.
          </p>
          <p>
            Users can create and comment on posts, which appear as colorful circles above the approxiamate location at
            the time the
            post was created. Posts can be liked, and a post's visual "circle of influence" is determined by how many
            likes they have in relation to other posts.
          </p>
        </div>
      </div>
    </div>
  )
}
