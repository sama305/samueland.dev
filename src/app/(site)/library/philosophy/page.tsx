import { DefaultPageParams } from "@/lib/types";
import LibraryPage from "../../../../../components/LibraryPage";

export default async function Philosophy({ searchParams }: DefaultPageParams) {
  const paramsMap = await searchParams

  return (
    <LibraryPage
      title="Philosophy"
      subtitle="Almost certainly pointless."
      paramsMap={paramsMap}
    >
      <article>
        <p><strong>Philosophy</strong> is a branch of study which deals with fundamental questions. Unlike science, it doesn't try to answer the "how" but the "why"; branches of science can be thought as <i>empirically testable</i> sects of philosophy</p>
        <h2>Meaning</h2>
        <p>In the past, when the question of the meaning of life has come up, I've always felt I was kidding myself. Given my age and lack of life experience, how could I possibly know?</p>
        <p>Not only that, even if I <i>thought</i> I knew what the meaning of life was, how could I be sure enough to declare it? As a result, I've given up trying to answer this question; there's no guarantee of a meaning, and if there is, there's no guarantee its knowable. And let's just say for a moment it is both real and knowable: is it even worth knowing? It's more trouble than its worth, in my opinion.</p>
        <p>Camus believed the universe was inherently meaningless; Hesse believed that the meaning of life was self-realization. Though these are conflicting ideas, I find myself grasping at both of them.</p>
        <p>Meaning isn't a simple enough question where one can fully submerge themselves into one bucket of thought; our own opinions and ideas are collages of those we find in the wild.</p>
      </article>
    </LibraryPage>
  )  
}
