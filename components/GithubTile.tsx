import { siteConfig } from '@/data/content';
import { GithubIcon } from './Icons';

// Full-width banner that sits below the projects grid.
export default function GithubTile() {
  return (
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="ac-card flex flex-col items-center gap-3 text-center transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:justify-between sm:text-left"
      style={{
        background:
          'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-terminal) 100%)',
      }}
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <GithubIcon className="shrink-0 text-accent-teal opacity-80" size={28} />
        <div>
          <h3 className="font-display text-base font-semibold text-text-primary">
            More on GitHub
          </h3>
          <p className="font-body text-[13px] leading-relaxed text-text-secondary">
            Coursework, lab repos, automation scripts, and works-in-progress.
          </p>
        </div>
      </div>
      <span className="shrink-0 font-mono text-[12px] text-accent-teal">
        github.com/osakhra →
      </span>
    </a>
  );
}
