import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";
import Card from "@/components/Card";

export default function Home() {
  const activePage = "home";
  const { searchTerm, movie_list } = useGlobalContext();

  return (
    <Layout activePage={activePage}>
      <section className="">
        <p className="capitalize mt-[35px] mb-[38px] leading-[-0.5px] text-[32px] font-light">
          {activePage === "home" ? "Recommended for you" : null}
        </p>

        <div className="grid grid-cols-4 gap-x-10 gap-y-8">
          {movie_list

            .filter((movie) => {
              if (searchTerm === "") {
                return movie;
              } else if (
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return movie;
              }
            })

            .map((movie) => {
              let imageSize = `/${movie.thumbnail.regular.small}`;
              //let imageSize = movie.thumbnail.regular.small;
              return <Card key={movie.id} {...movie} {...imageSize} />;
            })}
        </div>
      </section>
    </Layout>
  );
}
