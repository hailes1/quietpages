<template>
  <section class="about" :class="themeClass">
    <div class="about-grid">

      <!-- EXPERIENCE -->
      <div class="about-section about-section--experience">
        <p class="about-label">EXPERIENCE</p>
        <div class="about-entry-list">
          <div v-for="item in experiences" :key="item.id" class="about-entry">
            <p class="about-entry-range">{{ item.range }}</p>
            <p class="about-entry-title">↳ {{ item.title }} at {{ item.company }}</p>
          </div>
        </div>
      </div>

      <!-- EDUCATION -->
      <div class="about-section about-section--education">
        <p class="about-label">EDUCATION</p>
        <div class="about-entry-list">
          <div v-for="item in education" :key="item.id" class="about-entry">
            <p class="about-entry-range">{{ item.range }}</p>
            <p class="about-entry-title">↳ {{ item.degree }} at {{ item.school }}</p>
          </div>
        </div>
      </div>

      <!-- languages -->
      <div class="about-section about-section--languages">
        <p class="about-label">languages</p>
        <ul class="about-list">
          <li v-for="skill in languages" :key="skill">+ {{ skill }}</li>
        </ul>
      </div>

      <!-- TOOLS -->
      <div class="about-section about-section--tools">
        <p class="about-label">TOOLS</p>
        <ul class="about-list">
          <li v-for="tool in tools" :key="tool">+ {{ tool }}</li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div class="about-section about-section--contact">
        <p class="about-label">CONTACT</p>
        <ul class="about-list about-list--contact">
          <li v-for="c in contact" :key="c.href">
            <a :href="c.href" target="_blank" rel="noopener noreferrer">↳ {{ c.label }}</a>
          </li>
        </ul>
      </div>

      <!-- CURRENT MEDIA ROTATION -->
      <div class="about-section about-section--media">
        <p class="about-label">CURRENT MEDIA ROTATION</p>

        <p class="about-media-type">MUSIC</p>
        <ul class="about-list">
          <li v-for="track in media.music" :key="track">↳ {{ track }}</li>
        </ul>

        <p class="about-media-type">PODCASTS</p>
        <ul class="about-list">
          <li v-for="pod in media.podcasts" :key="pod">↳ {{ pod }}</li>
        </ul>

        <p class="about-media-type">TELEVISION</p>
        <ul class="about-list">
          <li v-for="show in media.television" :key="show">↳ {{ show }}</li>
        </ul>
      </div>

      <!-- PLAYLIST -->
      <div class="about-section about-section--playlist">
        <p class="about-label">MY HEADS-DOWN PLAYLIST</p>
        <div class="about-playlist">
          <div v-for="(track, i) in playlist" :key="track.title" class="about-playlist-row">
            <span class="about-playlist-num">{{ i + 1 }}</span>
            <div class="about-playlist-art" :style="{ background: track.color }"></div>
            <div class="about-playlist-meta">
              <span class="about-playlist-title">{{ track.title }}</span>
              <span class="about-playlist-artist"> · {{ track.artist }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperimentAbout',
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      experiences: [
        { id: 1, range: 'JANUARY 2025 - PRESENT', title: 'Software Engineer', company: 'Morningstar Inc. ' },
        { id: 2, range: 'JUNE 2022 - DECEMBER 2024', title: 'Associate Software Engineer', company: 'Morningstar Inc.' },
        { id: 3, range: 'FEBRUARY 2022 - MAY 2022', title: 'Research Assistant', company: 'St. Olaf College' },
        { id: 4, range: 'MAY 2017 - MAY 2018', title: 'SI Leader - Teaching Assistant', company: 'St. Olaf College' },
        { id: 5, range: 'JUNE 2020 - AUGUST 2020', title: 'Research Assistant', company: 'St. Olaf College' },
      ],
      education: [
        { id: 1, range: '2018 - 2022', degree: 'BA| Computer Science and Mathematics', school: 'St. Olaf College' },
        { id: 2, range: '2025 - PRESENT', degree: 'MS| Software Engineering', school: 'DePaul University'},
      ],
      languages: [
        'Python',
        'C++',
        'C',
        'Java - Spring Boot',
        'JavaScript - Vue.js',
        'R',
        'Mathematica',
      ],
      tools: ['Figma', 'Docker', 'Git', 'PostgreSQL', 'Harness', 'AWS', 'MongoDB', 'Jenkins', 'SonarQube', 'Splunk', 'Jira'],
      contact: [
        { label: 'Dag.Haileslassie@gmail.com', href: 'mailto:dag.haileslassie@gmail.com' },
        { label: 'LINKEDIN.COM/IN/DAGMAWEAHAILESLASSIE', href: 'https://www.linkedin.com/in/dagmawe-amare-haileslassie-498b67175/' },
      ],
      media: {
        music: ['No One Noticed by The Marias', 'Love Songs by Claire', 'Coincidence by Sabrina Carpenter'],
        podcasts: ['Las Culturistas', 'There Are No Girls On The Internet'],
        television: ['Pls recommend!'],
      },
      playlist: [
        { title: 'Bridge', artist: 'Marc Rebillet', color: '#6b7c5e' },
        { title: 'Space Gangster', artist: 'Woo Park', color: '#4a6b6b' },
        { title: 'Workflow', artist: 'Sharon Lee', color: '#8c6b4a' },
      ],
    }
  },
  computed: {
    themeClass() {
      return this.isSwitchOn ? 'light' : ''
    },
  },
}
</script>

<style scoped lang="scss">
.about {
  --text-primary: #f4f4f4;
  --text-secondary: #a8b0b7;
  --text-tertiary: #7c8791;
  --text-link: #a8b0b7;
  --border-color: #393939;
  --type-mono: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Courier', monospace;
  --type-sans: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;

  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 48px 0 0;
}

.about.light {
  --text-primary: #161616;
  --text-secondary: #3e434b;
  --text-tertiary: #697077;
  --text-link: #3e434b;
  --border-color: #c6c6c6;
}

/* Full-width grid: 4 equal columns */
.about-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  width: 100%;
}

/* Grid placement */
.about-section--experience { grid-column: 1 / 3; grid-row: 1; }
.about-section--education   { grid-column: 3 / 5; grid-row: 1; }
.about-section--languages      { grid-column: 1 / 3; grid-row: 2; }
.about-section--tools       { grid-column: 3 / 5; grid-row: 2; }
.about-section--contact     { grid-column: 1 / 5; grid-row: 3; }
.about-section--media       { grid-column: 1 / 3; grid-row: 4; }
.about-section--playlist    { grid-column: 3 / 5; grid-row: 4; }

/* Each section cell */
.about-section {
  padding: 32px 40px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
}

.about-section--education,
.about-section--tools,
.about-section--contact,
.about-section--playlist {
  border-right: none;
}

/* Section label */
.about-label {
  margin: 0 0 20px;
  font-family: var(--type-mono);
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.3;
  color: var(--text-tertiary);
  text-transform: uppercase;
}

/* Entry rows (experience / education) */
.about-entry-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-entry-range {
  margin: 0 0 4px;
  font-family: var(--type-mono);
  font-size: 0.6875rem;
  line-height: 1.3;
  color: var(--text-tertiary);
}

.about-entry-title {
  margin: 0;
  font-family: var(--type-mono);
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--text-primary);
}

/* Generic lists (languages / tools / media) */
.about-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-family: var(--type-mono);
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--text-primary);
  }
}

.about-list--contact li a {
  color: var(--text-link);
  text-decoration: none;
  font-family: var(--type-mono);
  font-size: 0.75rem;

  &:hover {
    text-decoration: underline;
  }
}

/* Media sub-type labels */
.about-media-type {
  margin: 20px 0 8px;
  font-family: var(--type-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);

  &:first-of-type {
    margin-top: 0;
  }
}

/* Playlist */
.about-playlist {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.about-playlist-row {
  display: grid;
  grid-template-columns: 20px 40px 1fr;
  align-items: center;
  gap: 12px;
}

.about-playlist-num {
  font-family: var(--type-mono);
  font-size: 0.6875rem;
  color: var(--text-tertiary);
}

.about-playlist-art {
  width: 40px;
  height: 40px;
  border-radius: 2px;
}

.about-playlist-title {
  font-family: var(--type-sans);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-primary);
}

.about-playlist-artist {
  font-family: var(--type-mono);
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

/* Responsive: stack to 2 cols on tablet, 1 on mobile */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-section--experience { grid-column: 1 / 2; grid-row: 1; }
  .about-section--education   { grid-column: 2 / 3; grid-row: 1; }
  .about-section--languages      { grid-column: 1 / 2; grid-row: 2; }
  .about-section--tools       { grid-column: 2 / 3; grid-row: 2; }
  .about-section--contact     { grid-column: 1 / 3; grid-row: 3; }
  .about-section--media       { grid-column: 1 / 2; grid-row: 4; }
  .about-section--playlist    { grid-column: 2 / 3; grid-row: 4; }

  .about-section--education,
  .about-section--tools,
  .about-section--playlist {
    border-right: none;
  }

  .about-section--experience,
  .about-section--languages,
  .about-section--media {
    border-right: 1px solid var(--border-color);
  }
}

@media (max-width: 540px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-section {
    border-right: none;
    padding: 24px 22px;
  }

  .about-section--experience,
  .about-section--education,
  .about-section--languages,
  .about-section--tools,
  .about-section--contact,
  .about-section--media,
  .about-section--playlist {
    grid-column: 1;
    grid-row: auto;
  }
}
</style>
