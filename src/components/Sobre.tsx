import Card from "./Card";

const Sobre = () => {
  return (
    <section className="flex flex-col w-full h-full py-16 px-4 mx-auto text-center">
      <article className="flex flex-col md:flex-row justify-between w-full h-full gap-6">
        <Card>
          <h2 className="text-xl font-semibold">Depressão</h2>
          <p className="text-center">
            Apoio psicológico para momentos difíceis.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Ansiedade</h2>
          <p className="text-center">
            Apoio psicológico para momentos difíceis.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Estresse</h2>
          <p className="text-center">
            Apoio psicológico para momentos difíceis.
          </p>
        </Card>
      </article>
    </section>
  );
};
export default Sobre;
