import { useEffect } from "react";
import Article from "../components/shared/Article"
import Collection from "../components/shared/Collection"

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="wrapper">
      <section className="mt-28 flex flex-col gap-12">
        <h1 className="text-5xl text-secondary-navy font-medium">Projects.</h1>
        <Collection />
      </section>

      <section className="mt-28 flex flex-col gap-12">
        <h1 className="text-5xl text-secondary-navy font-medium">Article.</h1>
        <Article />
      </section>
    </div>
  )
}

export default Project