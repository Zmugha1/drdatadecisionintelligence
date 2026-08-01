import { useEffect } from 'react';
import { BOOKING_URL } from '@/lib/sitePaths';
import {
  Calendar,
  Download,
  Globe,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

const VCF_PATH = '/dr-zubia-mughal.vcf';
const WEBSITE_URL = 'https://drdatadecisionintelligence.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/zubia-m-947b3578';
const PHONE_HREF = 'tel:+14145447777';
const EMAIL_HREF = 'mailto:zubiam@drdatadecisionintelligence.com';

const actions = [
  {
    label: 'Save Contact',
    href: VCF_PATH,
    download: 'dr-zubia-mughal.vcf',
    icon: Download,
    className: 'bg-coral text-white hover:bg-coral/90',
  },
  {
    label: 'Book a Call',
    href: BOOKING_URL,
    external: true,
    icon: Calendar,
    className: 'bg-teal text-white hover:bg-teal/90',
  },
  {
    label: 'Call',
    href: PHONE_HREF,
    icon: Phone,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'Email',
    href: EMAIL_HREF,
    icon: Mail,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'Website',
    href: WEBSITE_URL,
    external: true,
    icon: Globe,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    external: true,
    icon: Linkedin,
    className: 'border-2 border-teal bg-white text-navy hover:bg-teal/5',
  },
] as const;

const Card = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream px-4 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        <img
          src="/dr-zubia-mughal-edd.png"
          alt="Dr. Zubia Mughal, Ed.D."
          className="mb-6 h-36 w-36 rounded-full border-4 border-white object-cover object-top shadow-card sm:h-40 sm:w-40"
        />

        <h1 className="mb-2 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
          Dr. Zubia Mughal, Ed.D.
        </h1>

        <p className="mb-4 text-center text-base text-navy/70 sm:text-lg">
          Founder, Dr. Data Decision Intelligence
        </p>

        <p className="mb-8 text-center text-sm font-semibold text-teal sm:text-base">
          Private AI. Own your AI. Don&apos;t rent it.
        </p>

        <div className="mb-10 flex flex-col items-center gap-2">
          <img
            src="/mascot-hero.png"
            alt="Dr. Data mascot"
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />
          <p className="font-display text-sm font-semibold text-navy/80 sm:text-base">
            Make $$$ with your data
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            const external = 'external' in action && action.external;
            const download = 'download' in action ? action.download : undefined;

            return (
              <a
                key={action.label}
                href={action.href}
                download={download}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-display text-lg font-semibold transition-colors ${action.className}`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {action.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
