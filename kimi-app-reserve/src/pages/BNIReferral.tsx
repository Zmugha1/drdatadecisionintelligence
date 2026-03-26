import { useState } from 'react';
import PageShell from '@/components/PageShell';
import { Copy, Check, Users, Ear, MessageSquare, Shield, Server, FileCheck, DollarSign, ArrowRight, ArrowLeft } from 'lucide-react';

const BNIReferral = () => {
  const [showBack, setShowBack] = useState(false);
  const [copied, setCopied] = useState(false);

  const idealClients = [
    {
      icon: '⚖️',
      title: 'Law Firms & Accountants',
      description: 'Handling sensitive client files that must stay confidential',
    },
    {
      icon: '🏥',
      title: 'Medical & Health Spas',
      description: 'Dealing with strict privacy (HIPAA) requirements',
    },
    {
      icon: '💼',
      title: 'Consultants & Agencies',
      description: 'Overwhelmed by "Dark Data" (Zoom/Email silos)',
    },
  ];

  const triggers = [
    "I'm banning ChatGPT because I'm worried about client privacy.",
    "We have thousands of Zoom recordings that just sit there and rot.",
    "I need to prove to an auditor that our AI process is secure and traceable.",
    "Our data is scattered in five different places and nothing talks to each other.",
  ];

  const prescription = [
    { icon: Server, title: '100% Local', description: 'No data ever leaves the building' },
    { icon: FileCheck, title: 'Truth-Link Architecture', description: 'Every AI insight has a digital audit trail' },
    { icon: DollarSign, title: 'Fixed Cost', description: 'Own your hardware; stop paying per-user monthly SaaS fees' },
  ];

  const powerScript = `I have a friend, Dr. Data, who builds Private AI Vaults. Unlike ChatGPT, her systems stay in your office and off the cloud. She can turn those messy Zoom calls and emails into a growth dashboard without leaking your secrets. Can I introduce you via email?`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(powerScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-[#003366] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/20 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            BNI Referral Partner Resource
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Stop the AI Data Leak.
            <br />
            <span className="text-[#4ECDC4]">Own Your Intelligence.</span>
          </h1>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The Dr. Data "Private Hub" — Enterprise-Grade Security for Local Firms
          </p>
        </div>
      </section>

      {/* Card Flip Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowBack(false)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                !showBack
                  ? 'bg-[#4ECDC4] text-white shadow-lg'
                  : 'bg-white text-[#2C3E50] border border-[#2C3E50]/20 hover:border-[#4ECDC4]'
              }`}
            >
              <Users className="w-4 h-4" />
              Who & How
            </button>
            <button
              onClick={() => setShowBack(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                showBack
                  ? 'bg-[#4ECDC4] text-white shadow-lg'
                  : 'bg-white text-[#2C3E50] border border-[#2C3E50]/20 hover:border-[#4ECDC4]'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              What to Say
            </button>
          </div>

          {/* Card Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#2C3E50]/10 overflow-hidden">
            {!showBack ? (
              /* FRONT SIDE - WHO & HOW */
              <div className="p-8 sm:p-10">
                {/* WHO Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-xs text-[#4ECDC4] font-semibold uppercase tracking-wider">WHO am I looking for?</p>
                      <h2 className="text-xl font-bold text-[#2C3E50]">My Ideal Clients</h2>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {idealClients.map((client, index) => (
                      <div
                        key={index}
                        className="bg-[#FFFCF5] rounded-xl p-5 border border-[#2C3E50]/10 hover:border-[#4ECDC4] hover:shadow-md transition-all"
                      >
                        <div className="text-3xl mb-3">{client.icon}</div>
                        <h3 className="font-semibold text-[#2C3E50] mb-2">{client.title}</h3>
                        <p className="text-sm text-[#2C3E50]/60">{client.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm">
                    <span>💡</span>
                    <span className="font-medium">Team Size: 10–30 employees</span>
                  </div>
                </div>

                {/* HOW Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-xs text-[#E07A5F] font-semibold uppercase tracking-wider">HOW will you know they need me?</p>
                      <h2 className="text-xl font-bold text-[#2C3E50]">Listen for These Triggers</h2>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {triggers.map((trigger, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#FFF5F3] to-white rounded-xl border-l-4 border-[#E07A5F]"
                      >
                        <span className="text-2xl text-[#E07A5F] font-serif">"</span>
                        <p className="text-[#2C3E50] italic flex-1">{trigger}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setShowBack(true)}
                    className="inline-flex items-center gap-2 bg-[#2C3E50] hover:bg-[#003366] text-white font-semibold py-3 px-8 rounded-full transition-colors"
                  >
                    See What to Say
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* BACK SIDE - WHAT TO SAY */
              <div className="p-8 sm:p-10">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-[#4ECDC4] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">The "Power Script"</h2>
                  <p className="text-[#2C3E50]/60">What to say when making an introduction</p>
                </div>

                {/* Power Script Box */}
                <div className="relative bg-gradient-to-br from-[#FFFCF5] to-white rounded-2xl p-6 border-2 border-[#4ECDC4] mb-8">
                  <button
                    onClick={copyToClipboard}
                    className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-[#4ECDC4] text-white hover:bg-[#3dbdb5]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>

                  <div className="flex items-start gap-3">
                    <span className="text-4xl text-[#4ECDC4] font-serif leading-none">"</span>
                    <p className="text-lg text-[#2C3E50] leading-relaxed italic pr-16">
                      {powerScript}
                    </p>
                  </div>
                </div>

                {/* The Prescription */}
                <div className="mb-8">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#2C3E50] mb-4">
                    <span className="text-xl">🎯</span>
                    The Dr. Data Prescription
                  </h3>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {prescription.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#2C3E50] rounded-xl p-5 text-center"
                      >
                        <div className="w-10 h-10 bg-[#4ECDC4] rounded-lg flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-[#2C3E50] to-[#003366] rounded-2xl p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-1">Dr. Zubia Mughal</h4>
                  <p className="text-[#4ECDC4] text-sm mb-3">Decision Intelligence Expert</p>
                  <a
                    href="https://www.drdatadecisionintelligence.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white hover:text-[#4ECDC4] transition-colors mb-3"
                  >
                    www.drdatadecisionintelligence.com
                  </a>
                  <p className="text-white/60 text-sm italic">
                    "Treating your messy data so you can make healthy decisions."
                  </p>
                </div>

                {/* Back Button */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowBack(false)}
                    className="inline-flex items-center gap-2 text-[#2C3E50] hover:text-[#4ECDC4] font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Who & How
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-8">
            How to Use This Referral Card
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ear className="w-6 h-6 text-[#4ECDC4]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">1. Listen</h3>
              <p className="text-sm text-[#2C3E50]/60">
                Pay attention when someone mentions the trigger phrases
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-[#E07A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-[#E07A5F]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">2. Introduce</h3>
              <p className="text-sm text-[#2C3E50]/60">
                Use the Power Script to make a warm introduction
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-[#2C3E50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#2C3E50]" />
              </div>
              <h3 className="font-semibold text-[#2C3E50] mb-2">3. Connect</h3>
              <p className="text-sm text-[#2C3E50]/60">
                Offer to make an email introduction to Dr. Zubia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-white/60">Thank you for being a referral partner!</p>
          <a
            href="https://calendly.com/zubiaml4l/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3 font-semibold text-white transition-colors hover:bg-coral/90"
          >
            Book a Call with Dr. Data
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageShell>
  );
};

export default BNIReferral;
