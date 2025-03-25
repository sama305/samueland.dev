import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <div className="content" style={{ gap: '0'}}>
        <div style={{ width: '13rem', marginBottom: '1.5rem' }} >
          <h3><Link style={{ fontWeight: 'bold'}} className="social" href="https://librewrite.com">Librewrite.com</Link></h3>
          Oct 2024 &mdash; Present
        </div>
        <div className="right">
          <p>
            <Link className="social" href="https://librewrite.com">Librewrite.com</Link> is a free webapp intended for practicing creative writing. It facilitates the exercise of <i>free writing</i>, which is, according to <Link href="https://en.wikipedia.org/wiki/Free_writing">Wikipedia</Link>, "a prewriting technique practiced in academic environments, in which a person writes continuously for a set period of time with limited concern for rhetoric, conventions, and mechanics, sometimes working from a specific prompt provided by a teacher."
          </p>
          <p>
            Initially, I discovered free writing in my LIT2000 class, and immediately wanted to continue the practice at home. However, I noticed there was a lack of websites which could administer free writing sessions, and since I didn't want to ask a friend to stand shouting out prompts for me, I began work on my own tool: Librewrite.com.
          </p>
        </div>
      </div>
      <div className="content" style={{ gap: '0' }}>
        <div style={{ width: '13rem', marginBottom: '1.5rem' }}>
          <h3><Link style={{ fontWeight: 'bold'}} className="social" href="https://arduvia.com">Arduvia</Link></h3>
          May &mdash; Dec 2024
        </div>
        <div className="right">
          <p>
            Originally created as a senior class project, <Link className="social" href="https://arduvia.com">Arduvia</Link> is a
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
