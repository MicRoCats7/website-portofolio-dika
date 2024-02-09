import Article from "../components/Article"
import Collection from "../components/Collection"

function Project() {
  return (
    <div className="wrapper">
      <section className="mt-28 flex flex-col gap-12">
        <h1 className="text-5xl text-secondary font-medium">Projects.</h1>
        <Collection />
      </section>

      <section className="mt-28 flex flex-col gap-12">
        <h1 className="text-5xl text-secondary font-medium">Article.</h1>
        <Article />
      </section>
    </div>
  )
}

export default Project