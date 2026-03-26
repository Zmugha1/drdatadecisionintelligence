import { useState } from 'react';
import PageShell from '@/components/PageShell';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Decision Intelligence?',
      answer:
        'Decision Intelligence is the discipline of turning data into better decisions at scale. It combines data science, behavioral science, and management science to help organizations make consistently better choices—faster and with more confidence.',
    },
    {
      question: 'How long does a typical engagement take?',
      answer:
        "Engagements vary based on scope. A Data Strategy & AI Readiness Assessment typically takes 4-6 weeks, while a full Predictive Decision Intelligence implementation can take 10-14 weeks. We'll provide a clear timeline during our discovery call.",
    },
    {
      question: 'Do you work with small businesses?',
      answer:
        'Absolutely! We work with organizations of all sizes, from 5-person teams to enterprise companies. Our approach scales to meet you where you are.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have deep experience in professional services, healthcare, manufacturing, and technology. Our decision intelligence frameworks are adaptable to any industry with data-driven decision-making needs.',
    },
    {
      question: 'How do you ensure data privacy?',
      answer:
        'Data privacy is built into everything we do. We never share your data with third-party AI providers, and we design systems with privacy by default. All work is governed by strict confidentiality agreements.',
    },
    {
      question: 'What makes Dr. Data different from other AI consultants?',
      answer:
        'We focus on decision-ready systems, not just models. Our approach bridges the gap between technical AI capabilities and real business outcomes. Plus, Dr. Mughal brings both academic rigor and practical enterprise experience.',
    },
  ];

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-center font-display text-4xl font-bold text-navy sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mb-12 text-center text-lg leading-relaxed text-navy/70">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, feel free to
            reach out.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white/90 shadow-card backdrop-blur-sm transition-all duration-300 hover:shadow-card-hover"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-teal/5"
                >
                  <span className="pr-4 font-semibold text-navy">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-teal" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-teal" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="border-t border-navy/10 px-6 pb-6 pt-0">
                    <p className="leading-relaxed text-navy/75">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default FAQ;
