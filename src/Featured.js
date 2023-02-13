const Featured = () => {
  return (
    <section className="featured">
      <article>
        <h3 className="title">Higher Savings</h3>
        <span className="underline"></span>
        <p className="content">
          Low running cost of Only <span className="bold">50</span> paise per
          KM./ leading to savings up to{" "}
          <span className="bold">Rs. 1,35,000</span> every year in fuel cost .
        </p>
      </article>
      <article>
        <h3 className="title">Advanced Technology</h3>
        <span className="underline"></span>
        <p className="content">
          Zero maintenance, lithium-ion battery with{" "}
          <span className="bold">3</span> years standard warranty & Minimum{" "}
          <span className="bold">5</span> year of life
        </p>
      </article>
      <article>
        <h3 className="title">Quick charging</h3>
        <span className="underline"></span>
        <p className="content">
          Charing the Shavak is as simple as charging a mobile phone. It takes
          just <span className="bold">4 to 5</span> hours to charge.
        </p>
      </article>
    </section>
  );
};

export default Featured;
