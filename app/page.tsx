import {Alphabet, ContactUs, Hero, WebSeries} from "@/components";


export default function Home() {
  return (
      <>
      <Alphabet/>
    <main className="main">
     <div className="main__box">
        <section className="main__content">
            <Hero/>
            <WebSeries/>

        </section>

        <aside className="aside__left-bar">
            <ContactUs/>
        </aside>
    </div>
    </main>
      </>
  )
}
