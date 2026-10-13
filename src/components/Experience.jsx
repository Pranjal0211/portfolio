import { jobs } from '../data.js';
import SectionHead from './SectionHead.jsx';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHead num="02" eyebrow="Experience" title="Where I've worked," emphasis="and what I left behind." />
        <div className="jobs">
          {jobs.map((job) => (
            <Reveal as="article" className="job" key={`${job.company}-${job.role}`}>
              <div className="job__stat">
                <span className="job__num">{job.stat}</span>
                <span className="job__numlabel">{job.statLabel}</span>
              </div>
              <div className="job__body">
                <p className="eyebrow">{job.when}</p>
                <h3 className="job__role">
                  {job.role} <span>at {job.company}</span>
                </h3>
                <ul className="job__list">
                  {job.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
