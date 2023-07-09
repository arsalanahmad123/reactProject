import PhotoGallery from "../assets/photo-grid.png";
export function Hero(props) {
  return (
    <section className={props.mode ? "heroDark hero" : "hero"}>
      <img src={PhotoGallery} alt="Photo Gallery" className="hero--image" />
      <h1 className={props.mode ? "heroDark hero--heading" : "hero--heading"}>
        Online Experiences
      </h1>
      <p className={props.mode ? "heroDark hero--text" : "hero--text"}>
        Unique activities we can do together, led by a one-of-a-kind hosts-all
        without leaving the home.
      </p>
    </section>
  );
}
