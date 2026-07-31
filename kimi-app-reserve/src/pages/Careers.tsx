import { useState, type FormEvent } from 'react';
import PageShell from '@/components/PageShell';
import { supabase } from '@/lib/supabase';

const FALLBACK_EMAIL = 'zubiaml4l@gmail.com';

const ROLES = ['AI Developer', 'DevOps Developer'] as const;
type Role = (typeof ROLES)[number];

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const roles = [
  {
    name: 'AI Developer' as Role,
    description:
      'Build and ship AI-powered applications. Design, develop, and integrate machine learning and large language model features into production software, from model integration to user-facing functionality.',
    skills: 'Python, JavaScript/TypeScript, LLM and API integration, machine learning fundamentals, prompt engineering, REST APIs, Git.',
    education: "Bachelor's in Computer Science, Data Science, or equivalent experience.",
    accent: 'teal' as const,
  },
  {
    name: 'DevOps Developer' as Role,
    description:
      'Build and maintain the pipelines that ship software reliably. Automate build, test, and release workflows, manage deployments and infrastructure, and keep delivery fast and repeatable.',
    skills: 'CI/CD (GitHub Actions or similar), scripting (Bash, PowerShell), containerization (Docker), cloud infrastructure, build and release automation, Git.',
    education: "Bachelor's in Computer Science, Software Engineering, or equivalent experience.",
    accent: 'coral' as const,
  },
];

const accentStyles = {
  teal: {
    border: 'border-teal',
    text: 'text-teal',
  },
  coral: {
    border: 'border-coral',
    text: 'text-coral',
  },
};

const inputClassName =
  'w-full rounded-lg border border-navy/20 bg-cream/50 px-4 py-3 text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60';

export default function Careers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role | ''>('');
  const [resumeLink, setResumeLink] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedResumeLink = resumeLink.trim();

    if (!trimmedName) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!trimmedEmail || !looksLikeEmail(trimmedEmail)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!role) {
      setValidationError('Please select a role.');
      return;
    }
    if (!trimmedResumeLink) {
      setValidationError('Please add a link to your resume or LinkedIn.');
      return;
    }

    setFormStatus('submitting');

    const leadId = crypto.randomUUID();

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      name: trimmedName,
      email: trimmedEmail,
      source: 'careers_page',
      card_id: 'careers_application',
      notes: trimmedResumeLink,
      stage: 'shared',
    });

    if (leadError) {
      setFormStatus('error');
      return;
    }

    await supabase.from('events').insert({
      lead_id: leadId,
      type: 'form_submitted',
      source: 'careers_page',
      card_id: 'careers_application',
      payload: {
        role,
        resume_link: trimmedResumeLink,
        applicant_name: trimmedName,
      },
    });

    setName('');
    setEmail('');
    setRole('');
    setResumeLink('');
    setFormStatus('success');
  };

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">
            Build private AI with Dr. Data.
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-navy/80">
            We build AI applications that run on our clients&apos; own machines. If you like shipping real software that
            respects people&apos;s data, we want to meet you.
          </p>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {roles.map((job) => {
              const styles = accentStyles[job.accent];
              return (
                <div
                  key={job.name}
                  className={`relative overflow-hidden rounded-xl border-l-4 ${styles.border} bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8`}
                >
                  <h2 className="mb-3 font-display text-xl font-bold text-navy sm:text-2xl">{job.name}</h2>
                  <p className="mb-4 text-base leading-relaxed text-navy/80">{job.description}</p>
                  <p className="mb-2 text-sm text-navy/80">
                    <span className={`font-semibold ${styles.text}`}>Skills: </span>
                    {job.skills}
                  </p>
                  <p className="text-sm text-navy/80">
                    <span className={`font-semibold ${styles.text}`}>Education: </span>
                    {job.education}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl border border-navy/10 bg-white/90 p-8 shadow-card backdrop-blur-sm sm:p-10">
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-navy sm:text-3xl">Apply</h2>

            {formStatus === 'success' ? (
              <p className="text-center font-medium text-teal">Thanks for applying. We&apos;ll be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError ? (
                  <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">{validationError}</p>
                ) : null}
                {formStatus === 'error' ? (
                  <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-navy/80">
                    Something went wrong. Email me directly at{' '}
                    <a href={`mailto:${FALLBACK_EMAIL}`} className="font-medium text-teal hover:underline">
                      {FALLBACK_EMAIL}
                    </a>
                    .
                  </p>
                ) : null}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  disabled={formStatus === 'submitting'}
                  className={inputClassName}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  disabled={formStatus === 'submitting'}
                  className={inputClassName}
                />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as Role | '')}
                  disabled={formStatus === 'submitting'}
                  className={inputClassName}
                >
                  <option value="">Role applying for</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                  placeholder="Link to your resume or LinkedIn"
                  disabled={formStatus === 'submitting'}
                  className={inputClassName}
                />
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full rounded-lg bg-coral px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-coral/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
