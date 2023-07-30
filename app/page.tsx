import {Alphabet} from "@/components";

export default function Home() {
  return (
      <>
      <Alphabet/>

    <main className="main">
     <div className="main__box">
        <section className="main__content">
            <span>Main content</span>
        </section>

        <aside className="aside__left-bar">
            <span>left bar</span>
        </aside>
    </div>
    </main>
      </>
  )
}
