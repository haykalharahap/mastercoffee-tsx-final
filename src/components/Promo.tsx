import { useEffect, useState } from "react";

type Promo = {
  title: string;
  description: string;
  active: boolean;
};

const Promo = () => {
  const [promo, setPromo] = useState<Promo | null>(null);

  useEffect(() => {
    fetch("/data/promo.json")
      .then(res => res.json())
      .then(data => setPromo(data));
  }, []);

  if (!promo || !promo.active) return null;

  return (
    <section id="promo">
      <h2>{promo.title}</h2>
      <p>{promo.description}</p>
    </section>
  );
};

export default Promo;
