export default function Projects() {
  return (
    <div>
      <div className="content projectEntry">
        <div>
          <div>
            <h3><a className="social" href="https://librewrite.com" target="_blank">Librewrite.com</a></h3>
            Oct 2024 &mdash; Present
          </div>
          <div>
            <span>Made using...</span>
            <ul>
              <li><a href="https://nextjs.org" target="_blank">Next.js</a></li>
              <li><a href="https://ui.shadcn.com" target="_blank">shadcn/ui</a></li>
              <li><a href="https://dexie.org" target="_blank">Dexie.js</a></li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>
            <a className="social" href="https://librewrite.com" target="_blank">Librewrite.com</a> is a free webapp for practicing creative writing. It facilitates the exercise of <i>free writing</i>, a method of practicing writing where you write nonstop for a set amount of time, sometimes working from a prompt.
          </p>
          <p>
            I initially discovered free writing in my LIT2000 class, and immediately wanted to continue the practice at home. However, I noticed there was a lack of websites which could administer free writing sessions, and since I didn't want to ask a friend to stand shouting out prompts for me, I began work on my own tool: Librewrite.com.
          </p>
          <p>
            Pieces are written within timed rounds, with optional prompts for a greater challenge. Additionally, you can easily create/share custom rounds, which are rounds where the settings/prompts are chosen beforehand and can't be changed by anyone who plays it. This feature was specifically designed with teachers in mind, and makes sharing tailored configurations as easy as sending a link.
          </p>
        </div>
      </div>
      <div className="content projectEntry">
        <div>
          <div>
            <h3><a className="social" href="https://arduvia.com" target="_blank">Arduvia</a></h3>
            May &mdash; Dec 2024
          </div>
          <div>
            <span>Made using...</span>
            <ul>
              <li><a target="_blank" href="https://inertiajs.com">Inertia.js</a> + <a target="_blank" href="https://laravel.com">Laravel</a></li>
              <li><a target="_blank" href="https://www.postgresql.com">PostgreSQL</a></li>
              <li><a target="_blank" href="https://leafletjs.com">Leaflet</a> + <a target="_blank" href="https://www.openstreetmap.com">OpenStreetMap</a></li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>
            Originally created as a senior class project, <a href="https://arduvia.com" target="_blank">Arduvia</a> is a
            novel social-media "platform" which replaces
            feeds and algorithms with a literal map of the world.
          </p>
          <p>
            Users can create posts, which appear as colorful circles above the approximate location at the time the post was created. Posts can also be liked and commented on, and a post's visual "circle of influence" is determined by how many likes they have in relation to other posts.
          </p>
          <p>
            By replacing conventional algorithms with a more visual, far less linear way of finding trending posts, Arduvia connects users beyond the content of each post. This in turn creates a highly global, diverse community of engaged users.
          </p>
        </div>
      </div>
      <div className="content projectEntry">
        <div>
          <div>
            <h3><a className="social" href="https://github.com/danieltdang/Order-Tracker" target="_blank">Order-Tracker</a></h3>
            Feb &mdash; Apr 2024
          </div>
          <div>
            <span>Made using...</span>
            <ul>
              <li><a target="_blank" href="https://angular.dev">Angular</a></li>
              <li><a target="_blank" href="https://primeng.com">PrimeNG</a></li>
              <li><a target="_blank" href="https://flask.palletsprojects.com">Flask</a></li>
              <li><a target="_blank" href="https://www.postgresql.com">PostgreSQL</a></li>
            </ul>
          </div>
        </div>
        <div className="right">
          <p>
            The aptly titled <a className="social" href="https://github.com/danieltdang/Order-Tracker" target="_blank">Order-Tracker</a> is a webapp intended for compiling orders placed through a variety of online shops (e.g. Shopify, Amazon) into a single, centralized location. It was created with three others as the COP4521 final project. 
          </p>
          <p>
            Related emails are scraped for suitable order data, or the user can optionally enter the order info manually. Each order has one of many statuses, such as shipped, delivered, or even cancelled. A main dashboard intuitively presents general data about current and past orders.
          </p>
          <p>
            Finally, users can "pay" (as this was a school project, it was only implemented as a proof of concept) for a premium subscription which grants access to more useful metrics/order data and the ability to interact with some orders.
          </p>
        </div>
      </div>
    </div>
  )
}
