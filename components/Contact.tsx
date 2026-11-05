"use client";

import { useState, type FormEvent } from "react";
import { brand, contactIntro, form } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { btnPrimary, surface } from "@/lib/styles";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Fields = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const empty: Fields = { name: "", email: "", company: "", budget: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const { t } = useLang();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof Fields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) nextErrors.name = t(form.errors.name);
    if (!emailPattern.test(fields.email.trim())) nextErrors.email = t(form.errors.email);
    if (fields.message.trim().length < 20) nextErrors.message = t(form.errors.message);

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    setFields(empty);
  };

  return (
    <Section id="contact" eyebrow={contactIntro.eyebrow} title={contactIntro.title} lede={contactIntro.lede}>
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className={`${surface} p-7 sm:p-8`}>
            {status === "sent" ? (
              <div className="flex h-full flex-col items-start justify-center gap-4 py-10">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-glow-400/40 bg-glow-500/10 text-glow-400">
                  <Icon name="check" className="size-6" />
                </span>
                <p className="font-display text-xl font-semibold text-mist-100">
                  {t(form.success)}
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-sm text-neon-300 underline underline-offset-4"
                >
                  {brand.email}
                </a>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs text-mist-500 hover:text-mist-200"
                >
                  {t({ fa: "ارسال پیام دیگر", en: "Send another message" })}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  className="sm:col-span-1"
                  label={t(form.name)}
                  error={errors.name}
                  value={fields.name}
                  onChange={update("name")}
                  autoComplete="name"
                />
                <Field
                  id="email"
                  className="sm:col-span-1"
                  label={t(form.email)}
                  error={errors.email}
                  value={fields.email}
                  onChange={update("email")}
                  type="email"
                  dir="ltr"
                  autoComplete="email"
                />
                <Field
                  id="company"
                  className="sm:col-span-2"
                  label={t(form.company)}
                  value={fields.company}
                  onChange={update("company")}
                  autoComplete="organization"
                />

                <div className="sm:col-span-2">
                  <label htmlFor="budget" className="block text-xs font-medium text-mist-400">
                    {t(form.budget)}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={fields.budget}
                    onChange={(event) => update("budget")(event.target.value)}
                    className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-ink-850/80 px-4 py-3 text-sm text-mist-200 outline-none transition focus:border-neon-400/60"
                  >
                    <option value="">{t({ fa: "انتخاب کنید", en: "Choose one" })}</option>
                    {form.budgets.map((option) => (
                      <option key={option.fa} value={option.fa}>
                        {t(option)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-medium text-mist-400">
                    {t(form.message)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={fields.message}
                    onChange={(event) => update("message")(event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    className={`mt-2 w-full resize-y rounded-xl border bg-ink-850/80 px-4 py-3 text-sm leading-7 text-mist-100 outline-none transition placeholder:text-mist-500/60 focus:border-neon-400/60 ${
                      errors.message ? "border-ember-400/70" : "border-white/10"
                    }`}
                  />
                  {errors.message ? (
                    <p className="mt-2 text-xs text-ember-400">{errors.message}</p>
                  ) : null}
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                  <button type="submit" className={btnPrimary} disabled={status === "sending"}>
                    {status === "sending" ? t(form.sending) : t(form.submit)}
                  </button>
                  <span className="text-xs text-mist-500">
                    {t({
                      fa: "پاسخ کمتر از یک روز کاری",
                      en: "Reply within one business day",
                    })}
                  </span>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex h-full flex-col gap-6">
            <div className={`${surface} p-7`}>
              <h3 className="font-display text-base font-semibold text-mist-100">
                {t({ fa: "راه‌های مستقیم", en: "Direct lines" })}
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <ContactLine icon="mail" value={brand.email} href={`mailto:${brand.email}`} ltr />
                <ContactLine icon="phone" value={brand.phone} href={`tel:${brand.phone.replace(/\s/g, "")}`} ltr />
                <ContactLine icon="pin" value={t(brand.address)} />
              </ul>
            </div>

            <div className={`${surface} p-7`}>
              <h3 className="font-display text-base font-semibold text-mist-100">
                {t({ fa: "بعد از ارسال چه می‌شود", en: "What happens next" })}
              </h3>
              <ol className="mt-5 space-y-5">
                {[
                  {
                    fa: "بررسی پیام و تطبیق با تخصص تیم",
                    en: "We read it and match it against the right squad",
                  },
                  {
                    fa: "جلسه‌ی ۴۵ دقیقه‌ای، بدون هزینه",
                    en: "A free 45-minute call, no pitch deck",
                  },
                  {
                    fa: "نقشه‌ی کار و برآورد مکتوب در ۳ روز",
                    en: "A written plan and estimate within 3 days",
                  },
                ].map((step, index) => (
                  <li key={step.fa} className="flex gap-4 text-[13px] leading-6 text-mist-300">
                    <span className="num grid size-7 shrink-0 place-items-center rounded-full border border-neon-400/30 text-xs text-neon-300">
                      {index + 1}
                    </span>
                    {t(step)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  className = "",
  dir,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  autoComplete?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs font-medium text-mist-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        dir={dir}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-2 w-full rounded-xl border bg-ink-850/80 px-4 py-3 text-sm text-mist-100 outline-none transition placeholder:text-mist-500/60 focus:border-neon-400/60 ${
          error ? "border-ember-400/70" : "border-white/10"
        }`}
      />
      {error ? <p className="mt-2 text-xs text-ember-400">{error}</p> : null}
    </div>
  );
}

function ContactLine({
  icon,
  value,
  href,
  ltr,
}: {
  icon: string;
  value: string;
  href?: string;
  ltr?: boolean;
}) {
  const content = (
    <span className={`flex items-center gap-3 text-mist-300 ${ltr ? "" : "leading-6"}`}>
      <Icon name={icon} className="size-4 shrink-0 text-neon-300" />
      <span dir={ltr ? "ltr" : undefined} className="min-w-0 break-words">
        {value}
      </span>
    </span>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="transition hover:text-mist-100">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
