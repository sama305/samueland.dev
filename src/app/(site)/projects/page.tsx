export default function Projects() {
  return (
    <div>
      <div className="content" style={{ gap: '0'}}>
        <div style={{ width: '13rem', marginBottom: '1.5rem' }} >
          <h3><a style={{ fontWeight: 'bold'}} className="social" href="https://librewrite.com" target="_blank">Librewrite.com</a></h3>
          Oct 2024 &mdash; Present
        </div>
        <div className="right">
          <p>
            <a className="social" href="https://librewrite.com" target="_blank">Librewrite.com</a> is a free webapp intended for practicing creative writing. It facilitates the exercise of <i>free writing</i>, which is, according to <a href="https://en.wikipedia.org/wiki/Free_writing">Wikipedia</a>, "a prewriting technique practiced in academic environments, in which a person writes continuously for a set period of time with limited concern for rhetoric, conventions, and mechanics, sometimes working from a specific prompt provided by a teacher."
          </p>
          <p>
            I initially discovered free writing in my LIT2000 class, and immediately wanted to continue the practice at home. However, I noticed there was a lack of websites which could administer free writing sessions, and since I didn't want to ask a friend to stand shouting out prompts for me, I began work on my own tool: Librewrite.com.
          </p>
        </div>
      </div>
      <div className="content" style={{ gap: '0' }}>
        <div style={{ width: '13rem', marginBottom: '1.5rem' }}>
          <h3><a style={{ fontWeight: 'bold'}} className="social" href="https://arduvia.com" target="_blank">Arduvia</a></h3>
          May &mdash; Dec 2024
        </div>
        <div className="right">
          <p>
            Originally created as a senior class project, <a className="social" href="https://arduvia.com" target="_blank">Arduvia</a> is a
            novel social-media "platform" which replaces
            feeds and algorithms with a literal map of the world.
          </p>
          <p>
            Users can create and comment on posts, which appear as colorful circles above the approximate location at
            the time the
            post was created. Posts can be liked, and a post's visual "circle of influence" is determined by how many
            likes they have in relation to other posts.
          </p>
        </div>
      </div>
    </div>
  )
}
