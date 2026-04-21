import { useState } from "react";
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";

const termsSections = [
  {
    title: "Eligibility",
    content: `The Service is not intended for users of a particular age group. By using the Service, you agree to be bound by these Terms.`,
  },
  {
    title: "Payments and Billing",
    content: `The Service is offered on a paid basis. You will be required to provide payment information, such as a credit/Debit card number, in order to use the Service. Payment will be charged once with access for a year to that particular course, depending on the subscription plan you choose.`,
  },
  {
    title: "Refund and Cancellation Policy",
    content: `If you purchase a particular course, you will not be entitled to a refund for any amounts that have already been charged.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `The Service and all materials included on it, such as text, images, and videos, are the property of the Telusko Edutech pvt. ltd or its licensors and are protected by copyright and trademark laws. You may not use these materials for any commercial purpose or reproduce, duplicate, copy, sell, or exploit any portion of the Service without the express written consent of the Telusko Edutech PVT. LTD.`,
  },
  {
    title: "User Conduct and Prohibited Uses",
    content: `You agree to use the Service only for lawful purposes and in compliance with all applicable laws. You may not use the Service to:

Harass, threaten, or defame any person or entity

Upload, post, or transmit any content that is illegal, obscene, or offensive

Promote or engage in any illegal activity

Attempt to hack or disrupt the Service or any other website or service.`,
  },
  {
    title: "Data Privacy and Security",
    content: `The Telusko Edutech PVT. LTD is committed to protecting the privacy and security of our users. Please refer to our Privacy Policy for more information on how we collect, use, and protect your personal information.`,
  },
  {
    title: "Disclaimer of Warranties",
    content: `The Service is provided on an ‘as is’ and ‘as available’ basis. The Telusko Edutech PVT. LTD has no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on it.`,
  },
  {
    title: "Limitation of Liability",
    content: `The Telusko Edutech PVT. LTD shall not be liable for any damages of any kind arising from the use of the Service, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.`,
  },
  {
    title: "Governing Law and Jurisdiction",
    content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the Edtech company based, without giving effect to any principles of conflicts of law.`,
  },
  {
    title: "Changes to the Terms",
    content: `The Telusko Edutech PVT. LTD reserves the right to modify these Terms at any time without prior notice. Your continued use of the Service after any such modifications have been made constitutes your acceptance of the new Terms.
    
    By using the Service, you acknowledge that you have read and understand these Terms and agree to be bound by them. If you have any questions or concerns, please contact customer support.

    Information Collection, Use, and Sharing
    
    We collect information from you when you register for an account, subscribe to our newsletter, fill out a form, or use our online coding platform. The information we collect may include your name, email address, and other contact information, as well as information about your use of our platform and progress in our coding courses.

    We use this information to personalise your experience, improve our platform, and communicate with you about our services and updates. We may also use this information to send you promotional materials, such as information about new courses or features on our platform.

    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent. This does not include trusted third parties who assist us in operating our platform, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety.
    `,
  },
  {
    title: "Data security",
    content: `We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data.`,
  },
  {
    title: "Cookies",
    content: `We use ‘cookies’ on this site. A cookie is a piece of data stored on a site visitor’s hard drive to help us improve your access to our site and identify repeat visitors to our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site.`,
  },
  {
    title: "Opting Out",
    content: `You can stop the collection of information by the Site easily by uninstalling the application or by not visiting our website. You may also opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address given on our website:

See what data we have about you, if any.

Change/correct any data we have about you.

Have us delete any data we have about you.

Express any concern you have about our use of your data.`,
  },
  {
    title: "Changes to this policy",
    content: `We may update this privacy policy to reflect changes to our information practices. If we make any material changes we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Site prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.`,
  },
];



function Terms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-10 flex flex-col font-DM-Sans gap-4 p-4 max-w-5xl mx-auto">
      <h1 className="text-[2rem] font-bold mb-4">Terms of Service</h1>
      <p>
        Welcome to our website and online learning platform “<b>Telusko Edutech PVT. LTD</b>”. By using the Service, you agree to be bound by the following terms and conditions. If you do not agree to these Terms, please do not use the Service.
      </p>

      <div className="mt-6 flex flex-col gap-2">
        {termsSections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
            <div
              className="p-4 cursor-pointer flex justify-between items-center bg-gray-50"
              onClick={() => toggleSection(index)}
            >
              <h2 className="font-semibold text-lg">{section.title}</h2>
              <motion.span
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                <ChevronRight />
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key={index}
                  initial={{
                    height : 0,
                    opacity : 0
                  }}
                  animate={{
                    height : '100%',
                    opacity : 1,
                    
                  }}
                  exit={{
                    height : 0,
                    opacity : 0
                  }}
                 transition={{
                    duration : .3,
                    ease : "easeInOut"
                  }}
                  
                  
                  className="overflow-hidden p-4 text-gray-700 whitespace-pre-line"
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terms;
