"use client";

import { useState } from "react";
import {
  portfolioFilters,
  portfolioIntro,
  projects,
  type Project,
} from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { chip, surface } from "@/lib/styles";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Portfolio() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? projects : projects.filter((item) => item.category === filter);

  return (
    <Section
      id="work"
      eyebrow={portfolioIntro.eyebrow}
      title={portfolioIntro.title}
      lede={portfolioIntro.lede}
      aside={
        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((option) => {
            const active = option.id === filter;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  active
                    ? "border-transparent brand-fill text-ink-950"
                    : "border-white/12 text-mist-400 hover:border-neon-400/50 hover:text-mist-100"
                }`}
              >
                {t(option.label)}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();

  return (
    <article className={`${surface} flex h-full flex-col overflow-hidden`}>
      <div
        className="relative h-36 shrink-0"
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.hue[0]}, ${project.hue[1]})`,
        }}
      >
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute inset-0 bg-ink-950/45" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <span
            className="font-display text-lg font-bold text-white drop-shadow"
          >
            {t(project.name)}
          </span>
          <span className="num rounded-full bg-ink-950/60 px-2.5 py-1 text-[11px] text-mist-200 backdrop-blur">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium tracking-wide text-mist-500 uppercase">
          {t(project.client)}
        </p>
        <p className="mt-3 text-sm leading-7 text-mist-300">{t(project.summary)}</p>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-4">
          <span className="num font-display text-xl font-bold text-gradient">
            {t(project.metric.value)}
          </span>
          <span className="text-[11px] leading-5 text-mist-400">
            {t(project.metric.label)}
          </span>
        </div>

        <details className="group mt-5 border-t border-white/5 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-mist-200 [&::-webkit-details-marker]:hidden">
            {t({ fa: "جزئیات پروژه", en: "Project details" })}
            <Icon
              name="arrow"
              className="size-4 rotate-90 text-mist-500 transition group-open:-rotate-90"
            />
          </summary>
          <dl className="mt-4 space-y-4 text-[13px] leading-6">
            {[
              { fa: "مسئله", en: "Problem" },
              { fa: "راه‌حل", en: "Approach" },
              { fa: "نتیجه", en: "Result" },
            ].map((row, i) => (
              <div key={row.fa}>
                <dt className="text-[11px] font-semibold tracking-wide text-neon-300 uppercase">
                  {t(row)}
                </dt>
                <dd className="mt-1 text-mist-400">
                  {t(
                    [project.challenge, project.solution, project.outcome][i],
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </details>

        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.map((name) => (
            <li key={name} className={chip}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
