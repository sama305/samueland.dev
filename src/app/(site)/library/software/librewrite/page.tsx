import H2 from "@/components/H2";
import H3 from "@/components/H3";

import LibraryPage from "@/components/LibraryPage";
import SamLink from "@/components/SamLink";

export default function LibreWrite() {
  return (
    <LibraryPage title="Librewrite.com" subtitle='A free, free writing practice tool.'>
      <article>
        <p>
            <SamLink href="https://librewrite.com"><strong>Librewrite.com</strong></SamLink> is a website I made in late 2024 as a way to practice <SamLink href="/library/writing#:~:text=countless%20times%20before.-,Free%20writing,-Free%20writing%20is">free writing</SamLink> without the bloat of conventional writing tools and with tailored features (such as timed rounds and prompts) built in.
        </p>
        <H2>A brief history</H2>
        <p>The idea to make a website for practicing writing using this method came to me during my <em>Introduction to Literature</em> class in my senior year of college. One day, the teacher asked everyone to pull out a blank sheet of paper. Then, she began to write a word on the white board. We were then instructed to continually write without stopping while incorporating this word.</p>
        <p>Gradually, over the course of perhaps 5 or 10 minutes, more words were added to the board; all of which needed to be incorporated somehow into our works. By the time the session ended, everybody had written 2 or 3 pages of original, creative writing. Most of it was probably gibberish, of course, but it was <em>done</em>.</p>
        <p>Just as a runner jogs for a warm up, writers too must write gibberish in order to get themselves in the groove of it; once you&#x27;ve warmed up, your writing becomes far more comfortable and creative.</p>
        <H3>Work begins</H3>
        <p>Sometime in October, I actually had begun working on the first version of the site. I was scrambling to complete it between classes since I wanted to show my teacher before the end of the semester, and thankfully I was able to do so.</p>
        <p>I was encouraged by her input and she indicated she may even use it to administer future free writing sessions (unfortunately, we didn&#x27;t have another for the rest of the semester, so this never came to be).</p>
        <p>She also told me to send it to the Dean of Arts and Sciences, which I did. I eventually heard back from the dean&#x27;s office, who thought what I made was neat, but nothing really came of it.</p>
        <p>Still, I was undeterred and kept working on it, even if it was only for myself; the satisfaction of working on a passion project you truly enjoy cannot be understated.</p>
        <H3>Version 2.0</H3>
        <p>The early versions of librewrite.com were clunky, but they worked. After taking a short break to focus on classes and my upcoming graduation, I dived back into the project and did an entire visual overhaul.</p>
        <p>To accomplish this, I used the component library <SamLink href="https://ui.shadcn.com/">shadcn/ui</SamLink>. It improved the look and feel of the website very much, and allowed me to focus on adding more features.</p>
        <p>During this time, I overhauled the way works are saved and added custom rounds, which allow you to basically share the settings/prompts you use with others (this was intended to be used by teachers, but it can be used by anybody, of course).</p>
        <p>I was incredibly proud of the site at this point, but due to my lack of marketing it at all, it got no traction. For the time being, besides being my own writing practice tool, it really only acted as a résumé booster and a way to practice Next.js/React.</p>
        <p>This is the <em>current version</em> of the site; while I think there is still room for improvement and potential for new features, I am incredibly proud of how it came out and proud of myself for <em>actually finishing something</em> for once.</p>
        <H2>The stack</H2>
        <p>This app was incredibly simple to prototype: all I had at the start was a timer which could be set and reset and a text box. I could&#x27;ve probably made it all with plain HTML and some JavaScript.</p>
        <p>I&#x27;m more comfortable with <SamLink href="https://nextjs.org">Next.js</SamLink>, however, and wanted to bring my idea to life more than I wanted to create a highly efficient website. So I went ahead and initialized a new Next.js project and got to work.</p>
        <H3>Local storage</H3>
        <p>I knew from the jump I didn&#x27;t want to worry about storing works on a database, having to store user data, and forcing users to make accounts. The point was not to be a highly synchronized webapp with personalization—the point was to be a website which let you practice writing without forcing you to care about what you&#x27;ve written.</p>
        <p>This is the most important distinction between writing something on Google Docs or Microsoft Word and writing on librewrite.com: with the former group, <em>there is the implicit assumption that everything you write should be saved</em>; not so with the latter.</p>
        <p>In librewrite.com, your works are saved, but only locally on your browser. The works should have low value; they are for practice after all. If you <em>really</em> like something you wrote and want to go back to it, you have that option. But to add infrastructure to support individual user accounts and long term storage for each work would be (I think) a mistake.</p>
        <p>As such, I interfaced with local storage using <SamLink href="https://dexie.org/">Dexie.js</SamLink> to store user settings and written works in a small, efficient format. The library provided all the functionality I needed and I don&#x27;t foresee any needs for the site that can&#x27;t be fulfilled by it.</p>
      </article>
    </LibraryPage>
  )
}
