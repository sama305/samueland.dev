import LibraryPage from "@/components/LibraryPage"
import SamLink from "@/components/SamLink"

export default function Coding() {
  return (
    <LibraryPage title="Software" subtitle="This website!">
      <article>
        <p><strong>Software</strong> is a combination of programs, data, and instructions which collectively tell a computer's hardware what to do. I make software at my <SamLink href="https://www.educationalnetworks.net/">job</SamLink> and in my <SamLink href="https://github.com/sama305">free time</SamLink>. For example, I made <SamLink href="/library/software/librewrite">librewrite.com</SamLink> and this site, among other things.</p>

        <h2>Languages I use</h2>

        <h3>JavaScript</h3>
        
        <p>I know many languages, but TypeScript I know best. I grew up with JavaScript and it was natural once I discovered TypeScript to commit myself totally to it; additionally, my internship during college had me coding TypeScript through Vue and later Nuxt.</p>
        <p>What can I say about this language that hasn't already been said? It is good enough at what it does, easy enough to write, and widespread enough to make it a no-brainer language to choose when making applications on the web.</p>

        <h3>C and C++</h3>
        
        <p>I like JavaScript, but I've always thought it was not a beautiful language. It was a means to an end and allowed me to accomplish my goals, but it abstracted many of the most beautiful parts of programming languages. Conversely, C (and to a lesser extent C++) provoked my curiosity more than any other language and yet I produced nothing with it besides college assignments.</p>
        <p>What C taught me was the beauty and simplicity of programming at its core: how, when a few rules and symbols are put together, you have a computer program. It showed me how close I could get to the wires of a computer without ever once opening it up. It showed me truth, and for that I am forever thankful.</p>

        <h3>Lua</h3>
        
        <p>If there was a language I would use to teach non-programmers how to code, I would use Lua. This makes sense given that its predecessors were intended to be <SamLink href="https://en.wikipedia.org/wiki/Lua#History:~:text=Because%20many%20potential%20users%20of%20the%20language%20were%20not%20professional%20programmers%2C%20the%20language%20should%20avoid%20cryptic%20syntax%20and%20semantics">used by petroleum engineers</SamLink> who had no time to appreciate the beauty of programming; they needed results, and they needed them <em>fast</em>.</p>
        <p>I first came across Lua when I played Roblox as a child, but I was too young to grasp it and let it pass by. Later, when I started using <SamLink href="/library/games/videogames/pico8">PICO-8</SamLink>, I started to learn the language. I was impressed by its simplicity and by how fun it was to use.</p>
        <p>Anybody could hammer out simple programs in no time and the syntax remained (for me, at least) quite beautiful and memorable. I still use it when I want to explore an idea or code something in PICO-8.</p>

        <h3>Java</h3>
        
        <p>Though I have experiences with Java that date back to my earliest years, I never really dived deeply into it until my current job. Now that I am coding Java every day, I can feel myself starting to form opinions on it. In some ways my views on it are similar to JavaScript (the shared syntax, of course) but also in some ways my thoughts are informed by Intellij and AI, since that's what I most closely associate with Java.</p>
        <p>Sometimes, when coding Java, I stand back from my code and appreciate the language's commitment to OOP. It can get tedious, of course, but this commitment forces me to think about what I am writing more than most languages.</p>
        <p>It is also the first language which I am using for multi-threaded software, so it is necessarily bound to come with all kinds of baggage.</p>

        <h3>Rust</h3>
        
        <p>I don't have much experience with Rust, but the experience I do have I treasure. I've only made toy projects with it, but sometimes I go and look at these toy projects and marvel at the elegant syntax and the fantastic chains and pattern matching which pepper my terminal.</p>
        <p>And it of course for this same reason why I don't use Rust often: it is a foreign language of which I am A1 speaker. Those few words I <em>do</em> know I treasure, but most are just sounds to me. I'd love to try it out more, but I get nervous at the idea of committing to a project entirely in Rust, so for now, I won't bite.</p>
      </article>
    </LibraryPage>
  )  
}
