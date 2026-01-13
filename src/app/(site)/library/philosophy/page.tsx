import LibraryPage from "@/components/LibraryPage";
import { libraryBaseUrl } from "@/lib/navlists";
import SamLink from "@/components/SamLink";

export default function Philosophy() {
  return (
    <LibraryPage title="Philosophy" subtitle="Almost certainly pointless.">
      <article>
        <p><strong>Philosophy</strong> is a branch of study which deals with fundamental questions, like the <SamLink href={`${libraryBaseUrl}/philosophy/meaning`}>meaning</SamLink>, value, and reality of the universe. Unlike science, it doesn't try to answer the "how" but the "why"; branches of science can be thought as <i>empirically testable</i> sects of philosophy</p>
        <p>I like to think of philosophy as the art of expressing and debating subjective ideas and opinions. In this way really <i>anybody</i> is a kind of philosopher.</p>
      </article>
    </LibraryPage>
  )  
}
