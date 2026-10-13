export default function SectionHead({ num, eyebrow, title, emphasis }) {
  return (
    <header className="section__head">
      <span className="section__num">{num}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section__title">
          {title}
          <br />
          <em>{emphasis}</em>
        </h2>
      </div>
    </header>
  );
}
