import LibraryPage from "@/components/LibraryPage"
import SamLink from "@/components/SamLink"

export default function Health() {
  return (
    <LibraryPage title="Health" subtitle="It's the most important thing!">
      <article>
        <p>My <strong>health</strong> is something I&#x27;ve been trying to take more seriously in recent years. Thankfully, I&#x27;ve only had a handful of scares related to it, and most of them were freak incidences not tied to any long term conditions.</p>
        <p>I have asthma, but it really only appears during seasons of pollen and sometimes when I do cardio like running. In recent months (as of March 2026), in order to improve my asthma, general health, and to improve my muscles, I&#x27;ve begun <SamLink href="/library/health/exercise">working out</SamLink> regularly. I had short stints in college, but this seems to be the first time I am working out consistently and enjoying it enough to go even when it&#x27;s the last thing I want to do.</p>
        <p>I try to eat healthy too, but I&#x27;m not much of a cook and forget to look at the nutrition facts for the things I eat. All I can say for food is that I&#x27;m trying to eat a lot of it while balancing my consumption of fruits, vegetables, and protein.</p>
    </article>
    </LibraryPage>
  )  
}
