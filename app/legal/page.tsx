import type { Metadata } from 'next'
import EmailLink from '@/components/EmailLink'

export const metadata: Metadata = {
  title: 'Legal & Terms',
  description: 'Terms of service and legal information for Avnish Sinha web development services.',
}

export default function LegalPage() {
  return (
    <main className="pt-24 min-h-screen">
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-primary text-white px-4 py-1 mb-8 font-bold uppercase tracking-widest text-sm">
            Legal
          </div>
          <h1 className="text-5xl md:text-7xl font-800 uppercase tracking-tighter mb-16">
            Terms & Policies
          </h1>

          <div className="space-y-16">
            {/* Terms of Service */}
            <div>
              <h2 className="text-3xl font-800 uppercase tracking-tighter mb-6 text-primary">
                Terms of Service
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  By working with me, you agree to these straightforward terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Projects are delivered within 7 days of kickoff</li>
                  <li>Payment is 50% upfront, 50% on delivery</li>
                  <li>One round of revisions included</li>
                  <li>Additional revisions billed hourly</li>
                  <li>Source code ownership transfers upon full payment</li>
                </ul>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <h2 className="text-3xl font-800 uppercase tracking-tighter mb-6 text-primary">
                Refund Policy
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I stand behind my work. If I don&apos;t deliver within the agreed timeline, you get a full refund of your deposit.
                </p>
                <p>
                  Once the project is delivered and approved, all sales are final. No refunds after delivery.
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="text-3xl font-800 uppercase tracking-tighter mb-6 text-primary">
                Privacy Policy
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I respect your privacy. Here&apos;s what I do with your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact info used only for project communication</li>
                  <li>Project details kept confidential</li>
                  <li>No data sold to third parties. Ever.</li>
                  <li>Basic analytics to improve this site</li>
                  <li>You can request data deletion anytime</li>
                </ul>
              </div>
            </div>

            {/* Portfolio Rights */}
            <div>
              <h2 className="text-3xl font-800 uppercase tracking-tighter mb-6 text-primary">
                Portfolio Rights
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Unless you specifically request otherwise, I reserve the right to showcase your project in my portfolio and case studies.
                </p>
                <p>
                  If you need an NDA or want to keep the project confidential, just let me know before we start.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-3xl font-800 uppercase tracking-tighter mb-6 text-primary">
                Disclaimer
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I build websites. I don&apos;t guarantee specific business results, traffic numbers, or sales figures.
                </p>
                <p>
                  What I do guarantee: a fast, professional website delivered on time. The rest is up to your business.
                </p>
              </div>
            </div>

            {/* Contact for Legal */}
            <div className="border-2 border-primary p-10 mt-16">
              <h3 className="text-2xl font-800 uppercase tracking-tighter mb-4">
                Questions About These Terms?
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                If anything is unclear, just ask. I prefer straight talk over legal jargon.
              </p>
              <EmailLink
                className="inline-block bg-primary text-white px-8 py-4 font-bold uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all"
                copiedClassName="inline-block bg-white text-primary px-8 py-4 font-bold uppercase tracking-tighter border-2 border-primary transition-all"
                normalText="Email Me"
                copiedText="✓ Email Copied!"
                showIcon={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
