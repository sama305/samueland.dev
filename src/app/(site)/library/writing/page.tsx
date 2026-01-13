import LibraryPage from "@/components/LibraryPage";
import Link from "next/link";

export default function Writing() {
  return (
    <LibraryPage title="Writing" subtitle="A pillar of self-expression.">
      <article>
        <p>I think <strong>writing</strong> is for everyone and that everyone should be a writer. Not necessarily as a profession (though, if you can, you should), but as a part of your lifestyle.</p>
        <p>As human beings, we use our brains all day, every day; naturally, we often get inundated with difficult thoughts or complex ideas and need some way to deal with them. Writing gives you the super power of being able to record these thoughts and work through them spatially, rather than just in your head.</p>
        <h2>Practices</h2>
        <p>Once you get good at writing, not only do your ideas become more understandable to you and others, but you can begin to play with it and create art. Much writing (such as <Link href="/library/writing/poetry">poetry</Link> and songwriting) still conveys complex ideas while also providing artistic value. It can sometimes be more fun to work your problems out in a <i>song</i> than an <i>essay</i>.</p>
        <p>Many times, in fact perhaps most of the time, our ideas don't fit into an abstract fiction or a broader narrative; in these cases (e.g. <Link href="/blog">blog posts</Link>), the writing still has artistic value. Even though the form is different, the outcome can be the same: many essays and even some blogs have stayed with me in much the same way a great novel does, e.g. Joan Didion and <Link href="https://ciechanow.ski">ciechanow.ski</Link>.</p>
        <p>Their artistic and literary value may not come from flowery language or vivid imagery (though it certainly can), but from educational value or the way it changes your mind on a topic or how it may illuminate a facet of something which you had missed countless times before.</p>
        <h3>Free writing</h3>
        <p><b>Free writing</b> is a method of writing exercise whereby the practitioner writes for a certain amount of time without stopping. This means you may just have to write whatever comes to your head: what you had for breakfast, what you read yesterday, how you feel about the weather. There are no rules besides <i>keep writing</i>.</p>
        <p>Often (especially in classroom settings), one or more prompts are also provided, which you are supposed to integrate into your piece. This adds another layer of difficulty, where you can't stop writing and must write about something specific.</p>
        <p>I first discovered free writing in an introductory literature class, and I it so helpful that I decided to make a small free writing web app called <Link href="https://librewrite.com">Librewrite</Link>. It gives you all the tools you need to practice writing while also being completely free to use. Additionally, your pieces are stored locally, so you can write <i>as much as you want</i>.</p>
      </article>
    </LibraryPage>
  )
}
