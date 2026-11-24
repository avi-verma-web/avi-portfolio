import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skillGroups = [
  { title: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'HTML', 'SCSS', 'CSS'] },
  { title: 'Backend & Data', skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Sequelize', 'REST APIs'] },
  { title: 'Cloud & Engineering', skills: ['AWS', 'S3', 'EC2', 'RDS', 'Git', 'Datadog', 'A/B Testing'] },
  { title: 'Applied AI', skills: ['LLM integrations', 'RAG', 'Embeddings', 'Vector search', 'MCP', 'AI agents', 'Prompt engineering'] },
];

const ProfileSections = () => (
  <>
    <section id="experience" className="profile-section">
      <Container>
        <p className="profile-eyebrow">CAREER</p>
        <h2 className="profile-heading">Experience</h2>
        <div className="profile-timeline">
          <article className="profile-timeline__item">
            <span className="profile-timeline__date">Aug 2022 — Present · Remote</span>
            <h3>Senior Engineer <span>· UnifyCX</span></h3>
            <p>Building and improving customer-facing web experiences across full-stack product workflows. Work includes registration and domain-purchase journeys, experimentation, observability and production engineering.</p>
            <div className="profile-tags"><span>Angular</span><span>TypeScript</span><span>Node.js</span><span>Datadog</span><span>A/B Testing</span></div>
          </article>
        </div>
      </Container>
    </section>

    <section id="skills" className="profile-section profile-section--muted">
      <Container>
        <p className="profile-eyebrow">TOOLKIT</p>
        <h2 className="profile-heading">Skills & Technologies</h2>
        <Row>
          {skillGroups.map((group) => (
            <Col md={6} key={group.title}>
              <article className="skill-card">
                <h3>{group.title}</h3>
                <div className="profile-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section id="recognition" className="profile-section">
      <Container>
        <p className="profile-eyebrow">RECOGNITION & LEARNING</p>
        <h2 className="profile-heading">Achievements & Credentials</h2>
        <Row>
          <Col md={6}>
            <article className="recognition-card">
              <span className="recognition-card__label">HONOR · 2025</span>
              <h3>Ace of Initiative</h3>
              <p>Newfold Digital · Initiative and Process Improvement (January–March 2025).</p>
            </article>
          </Col>
          <Col md={6}>
            <article className="recognition-card">
              <span className="recognition-card__label">CERTIFICATIONS</span>
              <h3>Technical learning</h3>
              <ul>
                <li>Introduction to Programming Using Python — Coding Ninjas (2021)</li>
                <li>JavaScript Certification — HackerRank</li>
                <li>React Certification — HackerRank</li>
                <li>Introduction to Generative AI — Google</li>
                <li>Develop an AI Agent with Microsoft Agent Framework — Microsoft</li>
              </ul>
            </article>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="education" className="profile-section profile-section--muted">
      <Container>
        <p className="profile-eyebrow">EDUCATION & RESEARCH</p>
        <h2 className="profile-heading">Education</h2>
        <div className="education-card">
          <div><span className="recognition-card__label">2017 — 2019</span><h3>ABV–Indian Institute of Information Technology and Management, Gwalior</h3><p>Postgraduate studies</p></div>
          <div className="education-card__publication"><span className="recognition-card__label">PUBLICATION · SPRINGER · 2019</span><h3>Radiation-hardened-by-design sense amplifier</h3><p>Research publication on a radiation-hardened-by-design sense amplifier for memory.</p></div>
        </div>
      </Container>
    </section>
  </>
);

export default ProfileSections;
