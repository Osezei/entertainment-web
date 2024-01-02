import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";
import Card from "@/components/Card";

export default function Home() {
  const activePage = "home";
  const { searchTerm, movie_list } = useGlobalContext();

  return (
    <Layout activePage={activePage}>
      <section className="">
        <p className="capitalize mt-[24px] mb-[24px] md:mt-[35px] md:mb-[25px] lg:mb-[38px] md:leading-[-0.5px] text-[20px] md:text-[32px] font-light">
          {activePage === "home" ? "Recommended for you" : null}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4 lg:gap-x-10 gap-y-[16px] md:gap-y-[76px] lg:gap-y-8">
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
              return <Card key={movie.id} {...movie} />;
            })}
        </div>
      </section>
    </Layout>
  );
}
