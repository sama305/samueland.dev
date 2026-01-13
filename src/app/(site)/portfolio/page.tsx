import SamLink from "@/components/SamLink";

export default function Projects() {
  return (
    <div>
      <div>
      <article><h2>Work history</h2></article>
    
        <div className="content-cols projectEntry">
          <div>
            <div>
              <h3>Educational Networks, Inc.</h3>
              June 2025 &mdash; Present
            </div>
          </div>
          <article>
            <p>
              As a Software Engineer at Educational Networks, I help to maintain and improve a sophisticated content management system (CMS) in Java used by hundreds of schools across the country, utilizing parallelism and multithreading to ensure speedy and efficient products.
            </p>
          </article>
        </div>
        <div className="content-cols projectEntry">
          <div>
            <div>
              <h3>Watsco Ventures</h3>
              May 2023 &mdash; June 2025
            </div>
          </div>
          <article>
            <p>
              While interning as a Junior Software Developer at Watsco Ventures, I used various web frameworks such as Nuxt, Nest.js, and Vue to create software that helps HVAC contractors make more contracts, more efficiently.
            </p>
          </article>
        </div>
      </div>

      <article><h2>Notable projects</h2></article>
    
      <div>
        <div className="content-cols projectEntry">
          <div>
            <div>
              <h3>Librewrite.com</h3>
              Oct 2024 &mdash; Present
            </div>
            <div className="project-tools">
              <span>Made using...</span>
              <ul>
                <li><SamLink href="https://nextjs.org" target="_blank">Next.js</SamLink></li>
                <li><SamLink href="https://ui.shadcn.com" target="_blank">shadcn/ui</SamLink></li>
                <li><SamLink href="https://dexie.org" target="_blank">Dexie.js</SamLink></li>
              </ul>
            </div>
          </div>
          <article>
            <p>
              <SamLink className="social" href="https://librewrite.com" target="_blank">Librewrite.com</SamLink> is a free webapp for practicing creative writing. It facilitates the practice of <i>free writing</i>, a writing exercise where you write nonstop for a set amount of time, sometimes working from a prompt.
            </p>
            <p>
              Just as in free writing, you can write within timed, configurable rounds with optional prompts for a greater challenge. After the round, your written work is saved and be viewed, edited, or shared.
            </p>
            <p>
              Additionally, you can easily create/share custom rounds: presets where the settings/prompts are chosen beforehand for anyone who plays it. This feature was specifically designed with teachers in mind and makes sharing tailored exercises as easy as sending a link.
            </p>
          </article>
        </div>
        <div className="content-cols projectEntry">
          <div>
            <div>
              <h3>Arduvia</h3>
              May &mdash; Dec 2024
            </div>
            <div className="project-tools">
              <span>Made using...</span>
              <ul>
                <li><SamLink target="_blank" href="https://inertiajs.com">Inertia.js</SamLink></li>
                <li><SamLink target="_blank" href="https://laravel.com">Laravel</SamLink></li>
                <li><SamLink target="_blank" href="https://www.postgresql.com">PostgreSQL</SamLink></li>
                <li><SamLink target="_blank" href="https://leafletjs.com">Leaflet</SamLink></li>
                <li><SamLink target="_blank" href="https://www.openstreetmap.com">OpenStreetMap</SamLink></li>
              </ul>
            </div>
          </div>
          <article>
            <p>
              Originally created as a senior class project, <SamLink href="https://arduvia.com" target="_blank">Arduvia</SamLink> is a
              novel social-media "platform" which replaces
              feeds and algorithms with a literal map of the world.
            </p>
            <p>
              Users can create posts, which appear as colorful circles above the approximate location at the time the post was created. Posts can also be liked and commented on, and a post's visual "circle of influence" is determined by how many likes they have in relation to other posts.
            </p>
            <p>
              By replacing conventional algorithms with a more visual, far less linear way of finding trending posts, Arduvia connects users beyond the content of each post. This in turn creates a highly global, diverse community of engaged users.
            </p>
          </article>
        </div>
        <div className="content-cols projectEntry">
          <div>
            <div>
              <h3>Order-Tracker</h3>
              Feb &mdash; Apr 2024
            </div>
            <div className="project-tools">
              <span>Made using...</span>
              <ul>
                <li><SamLink target="_blank" href="https://angular.dev">Angular</SamLink></li>
                <li><SamLink target="_blank" href="https://primeng.com">PrimeNG</SamLink></li>
                <li><SamLink target="_blank" href="https://flask.palletsprojects.com">Flask</SamLink></li>
                <li><SamLink target="_blank" href="https://www.postgresql.com">PostgreSQL</SamLink></li>
              </ul>
            </div>
          </div>
          <article>
            <p>
              The aptly titled <SamLink className="social" href="https://github.com/danieltdang/Order-Tracker" target="_blank">Order-Tracker</SamLink> is a webapp intended for compiling orders placed through a variety of online shops (e.g. Shopify, Amazon) into a single, centralized location. It was created with three others as the COP4521 final project.
            </p>
            <p>
              Related emails are scraped for suitable order data, or the user can optionally enter the order info manually. Each order has one of many statuses, such as shipped, delivered, or even cancelled. A main dashboard intuitively presents general data about current and past orders.
            </p>
            <p>
              Finally, users can "pay" (as this was a school project, it was only implemented as a proof of concept) for a premium subscription which grants access to more useful metrics/order data and the ability to interact with some orders.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
