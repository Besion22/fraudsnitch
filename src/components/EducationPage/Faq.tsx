import React, { useState } from 'react';
import '../../assets/styles/faq.less';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is phishing and how can I recognize it?",
    answer: "Phishing is a cybercrime where scammers attempt to trick individuals into revealing sensitive information (like passwords, credit card numbers, or bank account details) by disguising themselves as trustworthy entities in electronic communication. You can recognize it by looking for suspicious sender addresses, generic greetings, urgent or threatening language, requests for personal information, and links that don't match the legitimate website's URL.",
  },
  {
    question: "How can I protect my personal information online?",
    answer: "To protect your personal information online, always use strong, unique passwords for different accounts, enable two-factor authentication (2FA) wherever possible, be cautious about sharing personal details on social media, review privacy settings, use a reputable VPN on public Wi-Fi, and keep your software updated.",
  },
  {
    question: "What should I do if I suspect I've been scammed or fallen victim to fraud?",
    answer: "If you suspect you've been scammed, immediately stop all communication with the scammer. Report the incident to your bank or financial institution if money or financial information was involved. Change compromised passwords, notify relevant authorities (like the police or cybersecurity agencies), and consider freezing your credit to prevent identity theft.",
  },
  {
    question: "Are all 'too good to be true' offers scams?",
    answer: "While not every incredible offer is a scam, most 'too good to be true' offers are indeed fraudulent. Scammers often use the promise of quick wealth, exclusive deals, or unbelievable opportunities to lure victims. Always be skeptical of unsolicited offers, especially those that pressure you into quick decisions or ask for upfront payments for promised returns.",
  },
  {
    question: "How can I create and manage strong passwords?",
    answer: "Create strong passwords by using a combination of uppercase and lowercase letters, numbers, and symbols. They should be at least 12-16 characters long and unique for each account. Use a reputable password manager to securely generate, store, and manage your passwords, so you only need to remember one master password.",
  },
  {
    question: "What is ransomware and how can I prevent it?",
    answer: "Ransomware is a type of malicious software that encrypts your files or locks your computer, then demands a ransom (usually in cryptocurrency) for their release. Prevent it by regularly backing up your data, being cautious about clicking suspicious links or opening attachments, using robust antivirus software, and keeping your operating system and applications updated.",
  },
  {
    question: "Is it safe to use public Wi-Fi for sensitive transactions?",
    answer: "No, it is generally not safe to use public Wi-Fi for sensitive transactions like online banking or shopping. Public Wi-Fi networks are often unsecured, making it easy for cybercriminals to intercept your data. If you must use public Wi-Fi, use a Virtual Private Network (VPN) to encrypt your internet traffic.",
  },
  {
    question: "What is identity theft and how can I protect myself?",
    answer: "Identity theft occurs when someone uses your personal identifying information, like your name, Social Security number, or credit card number, without your permission, to commit fraud or other crimes. Protect yourself by shredding sensitive documents, monitoring your credit reports, being cautious with personal information requests, and securing your mail.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-title">
          Frequently Asked <span className="highlight">Questions</span>
        </h1>
        <p className="faq-subtitle">
          Find answers to common questions about online cyber fraud and how to stay safe.
        </p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
