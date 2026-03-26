import PageShell from '@/components/PageShell';
import { ArrowRight, Calendar, Compass, Brain, Eye, UserCheck, Target, Quote, CheckCircle, AlertCircle } from 'lucide-react';

const BlogPostCoachingCompass = () => {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">Coaching</span>
            <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Pattern Recognition</span>
            <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">Decision Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 font-display leading-tight">
            Why Your Next High-Performing Client Will Not Come From Hustle
          </h1>

          <p className="text-xl text-navy/70 mb-4 leading-relaxed">
            How one 30-year coaching veteran stopped drowning in sticky notes and started trusting her gut again.
          </p>

          <div className="flex items-center gap-4 text-sm text-navy/50 mb-12">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
            <span>•</span>
            <span>By Dr. Zubia Mughal, Ed.D.</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Key Takeaway Box */}
          <div className="bg-teal/10 rounded-2xl p-6 border border-teal/30 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">The Bottom Line</h3>
                <p className="text-navy/70">
                  AI does not replace coaches. It becomes your external brain, remembering patterns so you can focus on intuition. The best coaches use AI for filing. They keep the coaching for themselves.
                </p>
              </div>
            </div>
          </div>

          {/* The 6 AM Panic */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-coral" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                The 6 AM Panic
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-navy/70">
              <p className="mb-4">
                Margaret Chen has been coaching financial advisors for 32 years. She has seen three recessions, the dot-com crash, and the rise of robo-advisors. She has trained over 400 professionals. She can read a prospect's hesitation in the first three minutes of a conversation.
              </p>

              <p className="mb-4">
                But last Tuesday at 6 AM, she sat at her kitchen table with 23 active prospects, four different CRM spreadsheets, and a creeping sense that she was forgetting someone important.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-navy rounded-2xl p-8 my-8">
              <Quote className="w-8 h-8 text-teal mb-4" />
              <p className="text-white text-xl leading-relaxed mb-4">
                "I used to know exactly where everyone was. Now I lie awake wondering if I'm chasing the wrong people."
              </p>
              <p className="text-white/50">— Margaret Chen, 32-year coaching veteran</p>
            </div>

            <div className="bg-coral/10 rounded-xl p-6 border-l-4 border-coral">
              <p className="text-navy/80 font-medium">
                Margaret is not losing her edge. She is losing her external brain.
              </p>
            </div>
          </div>

          {/* What AI Actually Is */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                What AI Actually Is
              </h2>
            </div>

            <p className="text-navy/70 mb-6">
              When coaches hear "AI," they picture HAL 9000 or creepy deepfakes. They imagine a black box making decisions about their clients behind closed doors.
            </p>

            {/* Simple Definition Box */}
            <div className="bg-navy rounded-2xl p-8 mb-8">
              <h3 className="text-teal font-semibold text-lg mb-3">Here is what AI actually is:</h3>
              <p className="text-white text-2xl font-display leading-relaxed">
                Pattern recognition software that remembers more than you can.
              </p>
              <p className="text-white/60 mt-4">
                That is it. Nothing more.
              </p>
            </div>

            <p className="text-navy/70 mb-6">
              The AI everyone fears is essentially a sophisticated filing system that notices things:
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#e0e0e0]">
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-navy/70">
                  Prospects who score high on "execution readiness" convert <strong className="text-navy">80% of the time</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#e0e0e0]">
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-navy/70">
                  Prospects who talk commitment but score low on execution convert only <strong className="text-navy">15% of the time</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#e0e0e0]">
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-navy/70">
                  "Overthinkers" tend to stall exactly <strong className="text-navy">21 days</strong> into the exploration phase
                </p>
              </div>
            </div>

            <div className="bg-teal/10 rounded-xl p-6 border border-teal/30">
              <p className="text-navy/80">
                <strong className="text-teal">This is not intelligence.</strong> It is memory. Perfect, tireless, pattern-matching memory.
              </p>
            </div>
          </div>

          {/* The Black Box Myth */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                The Black Box Myth
              </h2>
            </div>

            {/* Comparison Box */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-coral/5 rounded-2xl p-6 border border-coral/20">
                <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-coral" />
                </div>
                <h4 className="text-coral font-semibold mb-2">A Black Box Says:</h4>
                <p className="text-navy/70 text-sm">
                  "Trust me, I am right. I will not show you my work."
                </p>
              </div>
              <div className="bg-teal/5 rounded-2xl p-6 border border-teal/20">
                <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-teal" />
                </div>
                <h4 className="text-teal font-semibold mb-2">Good Coaching Tech Says:</h4>
                <p className="text-navy/70 text-sm">
                  "Here is what I noticed. Here is why. You decide."
                </p>
              </div>
            </div>

            <p className="text-navy/70 mb-6">
              When Margaret opens her Coaching Compass, she does not see a robot telling her what to do. She sees her own data, organized:
            </p>

            {/* Example Dashboard */}
            <div className="bg-navy rounded-2xl p-6 mb-8">
              <h4 className="text-white/60 text-sm mb-4">Example Prospect Profile</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Sarah Johnson</span>
                  <span className="text-teal">Exploration Phase, Day 23</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-white/50 text-sm">Identity Score</span>
                    <p className="text-teal font-semibold">4.2/5 (Green)</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-sm">Commitment Score</span>
                    <p className="text-yellow-400 font-semibold">3.1/5 (Yellow)</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-sm">Financial Score</span>
                    <p className="text-coral font-semibold">2.4/5 (Red)</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-sm">Execution Score</span>
                    <p className="text-yellow-400 font-semibold">3.0/5 (Yellow)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/80 text-sm">
                  <strong className="text-teal">Recommendation:</strong> Based on 12 similar prospects, when Financial Readiness is Red and days exceed 21, the successful move is to PAUSE for two weeks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#e0e0e0]">
              <p className="text-navy/70">
                Margaret can see exactly why the recommendation exists. It is not mysterious. <strong>It is her own history, organized.</strong>
              </p>
            </div>
          </div>

          {/* Human in the Loop */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                Why Robots Make Terrible Coaches
              </h2>
            </div>

            <div className="bg-navy rounded-2xl p-8 mb-8">
              <h3 className="text-coral font-semibold mb-4">The Dirty Secret:</h3>
              <p className="text-white text-xl leading-relaxed">
                AI is terrible at the actual coaching.
              </p>
            </div>

            <p className="text-navy/70 mb-6">
              AI excels at pattern recognition, but coaching requires human judgment. You notice when a prospect's voice cracks when they mention their spouse. You catch the shift from "what if I fail" to "what if I succeed" in email tone. You decide when your gut feeling guides the next move.
            </p>

            {/* What AI Can Do */}
            <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0] mb-8">
              <h3 className="font-semibold text-navy mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal" />
                What AI Can Do:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                  <span className="text-navy/70">Remember you have 23 active prospects so you do not forget #17</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                  <span className="text-navy/70">Alert you when someone has been in "Exploration" for 23 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                  <span className="text-navy/70">Group your "Quiet Deciders" so you can batch your strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
                  <span className="text-navy/70">Calculate that Red "Execution" scores convert only 15% of the time</span>
                </li>
              </ul>
            </div>

            {/* Quote */}
            <div className="bg-teal/10 rounded-2xl p-8 border border-teal/30">
              <Quote className="w-8 h-8 text-teal mb-4" />
              <p className="text-navy text-lg leading-relaxed mb-4">
                "I thought this would make me feel replaceable. Instead, I feel like I have a really good assistant who never sleeps, never forgets, and never pretends to know my clients better than I do."
              </p>
              <p className="text-navy/50">— Margaret Chen</p>
            </div>
          </div>

          {/* The Compass Metaphor */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                <Compass className="w-6 h-6 text-navy" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                The Compass Metaphor
              </h2>
            </div>

            <div className="bg-navy rounded-2xl p-8 mb-8">
              <p className="text-white text-lg leading-relaxed mb-4">
                A compass does not choose your destination. It does not walk the path for you. It certainly does not claim to know the terrain better than you do.
              </p>
              <p className="text-teal text-xl font-display">
                A compass just tells you: "Based on where you said you want to go, you are drifting east. Adjust if you want to reach your goal."
              </p>
            </div>

            <p className="text-navy/70">
              You can ignore the compass. You can decide east is actually a better route. You can throw it away and navigate by the stars, like you have done for decades.
            </p>

            <div className="bg-coral/10 rounded-xl p-6 border-l-4 border-coral mt-6">
              <p className="text-navy/80">
                But if you are trying to guide 23 people up the mountain simultaneously? You will move faster with more confidence if you are not constantly second-guessing your own sense of direction.
              </p>
            </div>
          </div>

          {/* What This Means */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-coral" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                What This Means for Your Practice
              </h2>
            </div>

            <p className="text-navy/70 mb-6">
              If you have more than 15 active prospects, you have a memory problem. Not because you are getting old. Because you are human.
            </p>

            {/* The Real Question */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-navy/5 rounded-xl p-6">
                <p className="text-navy/50 text-sm mb-2">The wrong question:</p>
                <p className="text-navy/70">
                  "Will AI replace coaches?"
                </p>
              </div>
              <div className="bg-teal/10 rounded-xl p-6 border border-teal/30">
                <p className="text-teal text-sm mb-2">The right question:</p>
                <p className="text-navy font-medium">
                  "Will you let AI handle the filing so you can focus on the transformation?"
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0]">
              <h3 className="font-semibold text-navy mb-4">Margaret's Results</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal font-display mb-1">4</p>
                  <p className="text-navy/60 text-sm">New clients last month (most in a quarter)</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal font-display mb-1">Less</p>
                  <p className="text-navy/60 text-sm">Time on admin, more time listening</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal font-display mb-1">Clients</p>
                  <p className="text-navy/60 text-sm">Noticed she "remembered their journey"</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-navy rounded-3xl p-8 lg:p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-teal/20 flex items-center justify-center mx-auto mb-6">
              <Compass className="w-8 h-8 text-teal" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              Ready to Meet Your Compass?
            </h2>

            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              If you are proud of your intuition but tired of lying awake wondering if you forgot to follow up with someone.
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal" /> No tech jargon
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal" /> No black boxes
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal" /> Just conversation
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/zubiaml4l/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-navy px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-teal/90 transition-colors"
              >
                Book a 20-Minute Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/?page=survey"
                className="inline-flex items-center gap-2 text-white hover:text-teal transition-colors"
              >
                Take the Data Assessment <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="text-white/50 text-sm mt-8">
              The best coaches are not being replaced by AI. They are finally getting the support staff they deserve.
            </p>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-2xl p-8 border border-[#e0e0e0] mt-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                ZM
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">About the Author</h4>
                <p className="text-navy/70 text-sm leading-relaxed">
                  Dr. Zubia Mughal helps career ownership coaches externalize their expertise into decision-support systems. No robots replacing humans. Just really good filing cabinets that learn your style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default BlogPostCoachingCompass;
