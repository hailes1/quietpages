<template>
  <section class="about" :class="themeClass">
    <div class="about-grid">
      <section class="about-section about-section--capabilities" aria-labelledby="about-capabilities-title">
        <h2 id="about-capabilities-title" class="about-label">Capabilities</h2>
        <div class="about-capability-grid">
          <div>
            <cv-breadcrumb class="about-sub-label">Languages & Platforms</cv-breadcrumb>
            <ul class="about-list">
              <li v-for="skill in languages" :key="skill">
                <span class="about-tile about-tile--square about-bullet" aria-hidden="true"></span>{{ skill }}
              </li>
            </ul>
          </div>

          <div>
            <cv-breadcrumb class="about-sub-label">Tools</cv-breadcrumb>
            <ul class="about-list">
              <li v-for="tool in tools" :key="tool">
                <span class="about-tile about-tile--square about-bullet" aria-hidden="true"></span>{{ tool }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="about-section about-section--media" aria-labelledby="about-media-title">
        <h2 id="about-media-title" class="about-label">Current media rotation</h2>

        <cv-breadcrumb class="about-media-type">Music</cv-breadcrumb>
        <ul class="about-list">
          <li v-for="track in media.music" :key="track">
            <span class="about-tile about-tile--square about-bullet" aria-hidden="true"></span>{{ track }}
          </li>
        </ul>

        <cv-breadcrumb class="about-media-type">Podcasts</cv-breadcrumb>
        <ul class="about-list">
          <li v-for="pod in media.podcasts" :key="pod">
            <span class="about-tile about-tile--square about-bullet" aria-hidden="true"></span>{{ pod }}
          </li>
        </ul>

        <cv-breadcrumb class="about-media-type">Television</cv-breadcrumb>
        <ul class="about-list">
          <li v-for="show in media.television" :key="show">
            <span class="about-tile about-tile--square about-bullet" aria-hidden="true"></span>{{ show }}
          </li>
        </ul>
      </section>

      <section class="about-section about-section--playlist" aria-labelledby="about-playlist-title">
        <h2 id="about-playlist-title" class="about-label">Heads-down playlist</h2>
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
      </section>
    </div>
  </section>
</template>

<script>
import { CvBreadcrumb } from '@carbon/vue'

export default {
  name: 'AboutSection',
  components: {
    CvBreadcrumb,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      languages: [
        'Python',
        'JavaScript / Vue.js',
        'Java / Spring Boot',
        'HTML / CSS',
        'PostgreSQL',
        'AWS (S3, SQS, SNS, CloudFront, CodeDeploy)',
      ],
      tools: ['Figma', 'Notion', 'Jira', 'Bitbucket', 'Miro', 'GitHub', 'Harness', 'Jenkins', 'Splunk', 'Google Analytics'],
      contact: [
        { label: 'dag.haileslassie@gmail.com', href: 'mailto:dag.haileslassie@gmail.com' },
        { label: 'github.com/hailes1', href: 'https://github.com/hailes1' },
        { label: 'linkedin.com/in/dagmawe-amare-haileslassie', href: 'https://www.linkedin.com/in/dagmawe-amare-haileslassie-498b67175/' },
      ],
      media: {
        music: ['No One Noticed by The Marias', 'Love Songs by Claire'],
        podcasts: ['Las Culturistas'],
        television: ['Severance'],
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
  methods: {
    tileWidth(type) {
      return type === 'square' ? '26px' : '58px'
    },
  },
}
</script>

<style scoped lang="scss">
.about {
  // Palette: grounded in the board-tiling motif from the Jacobsthal research —
  // a neutral "square" tone plus the red/green domino pair, on a sage-tinted
  // paper rather than a stock warm-cream background.
  --text-primary: #f0ede4;
  --text-secondary: #a7aca2;
  --text-tertiary: #74796f;
  --text-link: #d7cfae;
  --surface-subtle: rgba(240, 237, 228, 0.05);
  --border-color: #2b302b;
  --accent-square: #c9c2ac;
  --accent-red: #b1594a;
  --accent-green: #6a8a6a;

  --type-display: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  --type-body: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  --type-mono: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', monospace;

  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  min-height: 100vh;
  box-sizing: border-box;
  background: var(--bg);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 56px 0 0;
}

.about.light {
  --bg: #edefea;
  --text-primary: #171b16;
  --text-secondary: #454c42;
  --text-tertiary: #6b7266;
  --text-link: #3f4a37;
  --surface-subtle: rgba(23, 27, 22, 0.045);
  --border-color: #cdd0c4;
  --accent-square: #8a8262;
  --accent-red: #9c4a3c;
  --accent-green: #4c6b52;
}

/* ---------- Tiling motif ---------- */

.about-tile {
  display: inline-block;
  height: 22px;
  border-radius: 3px;
}

.about-tile--square {
  background: var(--accent-square);
}

.about-tile--red {
  background: var(--accent-red);
}

.about-tile--green {
  background: var(--accent-green);
}

.about-eyebrow-tile {
  width: 10px;
  height: 10px;
  margin-right: 8px;
  border-radius: 2px;
  vertical-align: middle;
}

.about-bullet {
  width: 6px;
  height: 6px;
  margin-right: 10px;
  border-radius: 1px;
  vertical-align: middle;
  opacity: 0.85;
}

/* ---------- Grid ---------- */

.about-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  border-top: 1px solid var(--border-color);
}

.about-section--contact { grid-column: 1 / 5; }
.about-section--experience { grid-column: 5 / 13; }
.about-section--education { grid-column: 1 / 5; }
.about-section--research { grid-column: 1 / 13; }
.about-section--capabilities { grid-column: 1 / 13; }
.about-section--media { grid-column: 1 / 7; }
.about-section--playlist { grid-column: 7 / 13; }

.about-section {
  padding: 28px 40px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
}

.about-section--contact,
.about-section--education,
.about-section--research,
.about-section--capabilities,
.about-section--playlist {
  border-right: none;
}

.about-label {
  margin: 0 0 18px;
  font-family: var(--type-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.3;
  color: var(--text-tertiary);
  text-transform: uppercase;
}

.about-location {
  margin: 14px 0 0;
  font-family: var(--type-mono);
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

/* ---------- Entries ---------- */

.about-entry-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-entry-list--compact {
  gap: 14px;
}

.about-entry-range {
  margin: 0 0 4px;
  font-family: var(--type-mono);
  font-size: 0.62rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.about-entry-title {
  margin: 0;
  font-family: var(--type-display);
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--text-primary);
}

.about-entry-impact {
  margin: 0.4rem 0 0;
  max-width: 42rem;
  font-family: var(--type-body);
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--text-secondary);
}

/* ---------- Research ---------- */

.about-research-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.about-research-entry {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 16px;
}

.about-research-marker {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
}

.about-research-title {
  margin: 0;
  font-family: var(--type-display);
  font-size: 0.96rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--text-primary);
}

.about-research-place {
  margin: 0.3rem 0 0;
  font-family: var(--type-mono);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
}

.about-research-description {
  margin: 0.6rem 0 0;
  max-width: 46rem;
  font-family: var(--type-body);
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* ---------- Capabilities ---------- */

.about-capability-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.about-sub-label {
  margin: 0 0 0.75rem;
  font-family: var(--type-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* ---------- Lists ---------- */

.about-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: center;
    font-family: var(--type-mono);
    font-size: 0.7rem;
    line-height: 1.5;
    color: var(--text-primary);
  }
}

.about-list--contact li a {
  color: var(--text-link);
  text-decoration: none;
  font-family: var(--type-mono);
  font-size: 0.72rem;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 2px;
    border-radius: 2px;
  }
}

/* ---------- Media / playlist ---------- */

.about-media-type {
  margin: 20px 0 8px;
  font-family: var(--type-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-tertiary);

  &:first-of-type {
    margin-top: 0;
  }
}

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
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.about-playlist-art {
  width: 40px;
  height: 40px;
  border-radius: 3px;
}

.about-playlist-title {
  font-family: var(--type-display);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-primary);
}

.about-playlist-artist {
  font-family: var(--type-mono);
  font-size: 0.68rem;
  color: var(--text-tertiary);
}

/* ---------- Responsive ---------- */

@media (max-width: 980px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-section--contact { grid-column: 1 / 3; grid-row: 1; }
  .about-section--experience { grid-column: 1 / 2; grid-row: 2; }
  .about-section--education { grid-column: 2 / 3; grid-row: 2; }
  .about-section--research { grid-column: 1 / 3; grid-row: 3; }
  .about-section--capabilities { grid-column: 1 / 3; grid-row: 4; }
  .about-section--media { grid-column: 1 / 2; grid-row: 5; }
  .about-section--playlist { grid-column: 2 / 3; grid-row: 5; }

  .about-section {
    padding: 28px;
  }

  .about-section--contact,
  .about-section--education,
  .about-section--research,
  .about-section--playlist,
  .about-section--capabilities {
    border-right: none;
  }

  .about-section--experience,
  .about-section--media {
    border-right: 1px solid var(--border-color);
  }
}

@media (max-width: 640px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-section {
    border-right: none;
    padding: 24px 20px;
  }

  .about-section--intro,
  .about-section--contact,
  .about-section--experience,
  .about-section--education,
  .about-section--research,
  .about-section--capabilities,
  .about-section--media,
  .about-section--playlist {
    grid-column: 1;
    grid-row: auto;
  }

  .about-research-entry {
    grid-template-columns: 1fr;
  }

  .about-research-marker {
    flex-direction: row;
  }

  .about-capability-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}
</style>
