// src/data/educationTopicsData.ts

// --- IMPORT YOUR IMAGES HERE ---
// Ensure these paths correctly point to your image files
import phishingImage from "../assets/images/dataimages/phishing.jpg";
import identityTheftImage from "../assets/images/dataimages/Identitytheft.jpg";
import creditcardfraud from "../assets/images/dataimages/Creditcardfraud.png";
import investmentfraud from "../assets/images/dataimages/investmentfraud.png";
import malwareandransomware from "../assets/images/dataimages/malwareandransomware.jpg";
import onlineshoppingscam from "../assets/images/dataimages/Onlineshoppingscams.avif";
import romancescams from "../assets/images/dataimages/Romancescams.jpeg";
import techsupportscams from "../assets/images/dataimages/Techsupportscams.webp";

// Add imports for any other images you might have

interface TopicContent {
  title: string;
  fullDescription: string;
  imageUrl: string; // This will now hold the imported URL
  keyTakeaways: string[];
  whatToLookFor?: string[];
  howToProtect?: string[];
  examples?: string[];
}

export const educationTopicsData: { [key: string]: TopicContent } = {
  phishing: {
    title: "Phishing Scams: Deep Dive",
    fullDescription:
      "Phishing is a deceptive cybercrime where attackers impersonate trustworthy entities to trick individuals into revealing sensitive information, such as login credentials, credit card numbers, or other personal data. These scams often come through email, text messages (smishing), or phone calls (vishing). The goal is to steal your information for financial gain or identity theft.",
    imageUrl: phishingImage, // Use the imported image variable
    keyTakeaways: [
      "Always verify sender identity.",
      "Never click suspicious links or attachments.",
      "Use 2FA and strong, unique passwords.",
    ],
    whatToLookFor: [
      "**Suspicious Sender:** Email addresses that don't match the company's official domain (e.g., `support@paypal-security.com` instead of `service@paypal.com`).",
      "**Generic Greetings:** Messages that start with 'Dear Customer' instead of your actual name, suggesting a bulk send.",
      "**Urgent or Threatening Language:** Phrases like 'Your account will be suspended!' or 'Immediate action required to avoid penalties!' designed to create panic.",
      "**Requests for Personal Info:** Asking for passwords, social security numbers, bank account details, or other sensitive data directly in an email or via an unverified link.",
      "**Mismatching Links:** Hover over links (don't click!) to see the actual URL. If it doesn't match the legitimate website, it's likely a scam.",
      "**Spelling and Grammar Errors:** Professional organizations rarely send out communications with numerous typos or grammatical mistakes.",
    ],
    howToProtect: [
      "**Verify Sender:** Always check the sender's email address. If unsure, contact the company directly using their official website or phone number (not the one from the suspicious email).",
      "**Don't Click Suspicious Links:** Never click on links in unsolicited emails or messages. Type the website URL directly into your browser.",
      "**Use Strong Passwords & 2FA:** Implement strong, unique passwords for all accounts and enable two-factor authentication (2FA) wherever possible.",
      "**Update Software:** Keep your operating system, web browser, and antivirus software up to date.",
      "**Educate Yourself:** Stay informed about common phishing tactics and regularly review security tips.",
    ],
    examples: [
      "An email claiming to be from your bank, asking you to 'verify your account details' via a provided link.",
      "A text message (smishing) from a 'shipping company' with a link to track a package you didn't order, requesting personal info.",
      "A fake invoice attachment from a 'utility company' that, when opened, installs malware.",
    ],
  },
  "identity-theft": {
    title: "Identity Theft: Deep Dive",
    fullDescription:
      "Identity theft occurs when someone uses your personal identifying information, such as your name, Social Security number, date of birth, or credit card details, without their permission, to commit fraud or other crimes. This can lead to significant financial and personal distress.",
    imageUrl: identityTheftImage, // Use the imported image variable
    keyTakeaways: [
      "Regularly monitor financial statements and credit reports.",
      "Shred sensitive documents before discarding.",
      "Be highly selective about sharing personal info.",
    ],
    whatToLookFor: [
      "**Unexplained Charges/Withdrawals:** Seeing transactions on your bank or credit card statements that you didn't make.",
      "**Missing Mail:** Your financial statements or bills suddenly stop arriving.",
      "**Debt Collection Calls:** Receiving calls or notices about debts you don't owe.",
      "**Denied Credit/Loans:** Being denied for credit, loans, or even employment for no clear reason, indicating a damaged credit history.",
      "**Unrecognized Medical Bills:** Receiving medical bills for services you never received.",
      "**IRS/Tax Fraud Notices:** Getting notices from the IRS about multiple tax returns filed in your name, or a return filed by someone else.",
    ],
    howToProtect: [
      "**Monitor Financial Accounts:** Regularly check your bank and credit card statements for suspicious activity.",
      "**Check Credit Reports:** Get your free annual credit report from Equifax, Experian, and TransUnion via AnnualCreditReport.com.",
      "**Shred Documents:** Safely shred sensitive documents like old bills, bank statements, and junk mail with personal info.",
      "**Secure Personal Information:** Be very careful about sharing your SSN, date of birth, or other sensitive data online or over the phone unless you initiated the contact and verified the recipient.",
      "**Protect Your Mail:** Use a locked mailbox or a P.O. Box. Pick up mail promptly.",
      "**Use Strong, Unique Passwords:** Use complex, different passwords for all online accounts and enable 2FA.",
      "**Secure Your Devices:** Use antivirus software, firewalls, and keep all software updated to protect against malware that could steal info.",
    ],
    examples: [
      "Someone opens new credit card accounts or takes out loans in your name.",
      "A fraudster files a tax return using your SSN to claim a refund.",
      "Your identity is used to obtain government benefits or medical services.",
      "A criminal uses your stolen information to open new utility accounts or get a job.",
    ],
  },
  "investment-fraud": {
    title: "Investment Fraud: Deep Dive",
    fullDescription:
      "Investment fraud involves deceptive practices that entice investors to make purchases or sales on the basis of false information, often promising high returns with little to no risk. These schemes can be complex and are designed to steal your money.",
    imageUrl: investmentfraud, // Use the imported image variable
    keyTakeaways: [
      "Beware of guaranteed high returns with no risk.",
      "Always research and verify investment opportunities.",
      "Never be pressured into quick decisions.",
    ],
    whatToLookFor: [
      "**Guaranteed High Returns:** Any investment promising exceptionally high returns with guaranteed little or no risk is a major red flag.",
      "**Pressure to Act Quickly:** Scammers often create urgency, pushing you to invest immediately without time for proper research.",
      "**Unlicensed Sellers:** The person offering the investment isn't licensed or registered with financial regulatory bodies (e.g., SEC, FINRA).",
      "**Complex or Secretive Strategies:** The investment strategy is explained in overly complex terms or is presented as proprietary and secret, making it hard to understand.",
      "**Unsolicited Offers:** Receiving unexpected calls, emails, or social media messages promoting investment opportunities.",
      "**No Written Information:** Refusal or inability to provide official prospectuses, financial statements, or other verifiable written documentation.",
    ],
    howToProtect: [
      "**Do Your Research:** Always research the investment opportunity and the person/company offering it. Check their registration and disciplinary history with regulators.",
      "**Be Skeptical of Guarantees:** Understand that all investments carry some risk. High returns usually mean high risk.",
      "**Don't Be Pressured:** Take your time to make investment decisions. Consult a trusted, independent financial advisor.",
      "**Verify Credentials:** Confirm that the investment professional is licensed and registered.",
      "**Get Everything in Writing:** Insist on getting all details of the investment in writing and review them carefully.",
      "**Beware of 'Exclusive' Deals:** If you're told it's a secret or only for a select few, be highly suspicious.",
    ],
    examples: [
      "**Ponzi Scheme:** New investors' money is used to pay returns to earlier investors, rather than from actual profits.",
      "**Pump-and-Dump:** Scammers artificially inflate the price of a low-value stock through false statements, then sell their own shares at the peak.",
      "**Fake Cryptocurrency Schemes:** Promising huge returns on newly minted or obscure cryptocurrencies that are actually worthless.",
      "**Real Estate Scams:** Investing in properties that don't exist or have inflated valuations.",
    ],
  },
  "malware-ransomware": {
    title: "Malware & Ransomware: Deep Dive",
    fullDescription:
      "Malware (malicious software) is a broad term for any software designed to harm or exploit a computer system. Ransomware is a specific type of malware that encrypts your files or locks your system and demands a ransom (usually in cryptocurrency) for their release.",
    imageUrl: malwareandransomware, // Use the imported image variable
    keyTakeaways: [
      "Keep all software updated, especially antivirus.",
      "Back up your data regularly to external storage.",
      "Be cautious of suspicious downloads and links.",
    ],
    whatToLookFor: [
      "**Slow Performance:** Your computer or device suddenly runs very slowly.",
      "**Pop-up Ads:** Excessive, unwanted pop-up advertisements, even when you're not Browse.",
      "**Unfamiliar Programs:** New toolbars, homepages, or applications appearing that you didn't install.",
      "**Browser Redirections:** Your web browser redirects you to unfamiliar websites.",
      "**Encrypted Files/Lock Screens:** For ransomware, you'll see a message demanding payment and find your files inaccessible.",
    ],
    howToProtect: [
      "**Use Antivirus/Anti-Malware Software:** Install reputable security software and keep it updated.",
      "**Keep Software Updated:** Regularly update your operating system, web browser, and all applications. Updates often include critical security patches.",
      "**Be Wary of Downloads:** Only download software or files from trusted sources. Be cautious of email attachments or links.",
      "**Use a Firewall:** Enable your operating system's firewall.",
      "**Backup Your Data:** Regularly back up your important files to an external drive or cloud storage. This is crucial for ransomware recovery.",
      "**Be Skeptical of Pop-ups:** Don't click on suspicious pop-up messages, especially those claiming your computer is infected.",
    ],
    examples: [
      "**Viruses:** Attach themselves to legitimate programs and spread when the program is executed.",
      "**Worms:** Self-replicating malware that spreads across networks.",
      "**Trojans:** Disguise themselves as legitimate software to gain access to your system.",
      "**Adware:** Displays unwanted advertisements.",
      "**Spyware:** Secretly monitors and collects your information.",
      "**Ransomware Attacks:** WannaCry, NotPetya, Ryuk.",
    ],
  },
  "credit-card-fraud": {
    title: "Credit Card Fraud: Deep Dive",
    fullDescription:
      "Credit card fraud involves the unauthorized use of your credit card or credit card information to make purchases or transactions. This can happen through various methods, both online and offline.",
    imageUrl: creditcardfraud, // Use the imported image variable
    keyTakeaways: [
      "Monitor statements and transaction alerts diligently.",
      "Only shop on secure websites with HTTPS.",
      "Report lost/stolen cards immediately.",
    ],
    whatToLookFor: [
      "**Unfamiliar Charges:** Transactions on your statement you don't recognize, even small ones.",
      "**Card Denials:** Your legitimate card being declined even though you know you have funds/credit.",
      "**Missing Card:** Your physical card is lost or stolen.",
      "**Calls from Creditors:** Receiving calls about purchases you didn't make.",
      "**Data Breach Notifications:** Being informed by a company that their systems were breached, potentially exposing your card data.",
    ],
    howToProtect: [
      "**Monitor Statements:** Review your credit card statements frequently and thoroughly.",
      "**Set Up Alerts:** Enable transaction alerts from your bank/card issuer to be notified of purchases.",
      "**Shop Securely Online:** Only shop on reputable websites (look for 'https://' and a padlock icon). Avoid public Wi-Fi for sensitive transactions.",
      "**Protect Your Card:** Don't let your card out of sight when making purchases. Never write down your PIN.",
      "**Be Wary of Skimmers:** Check ATMs, gas pumps, and POS terminals for suspicious attachments.",
      "**Shred Old Cards/Statements:** Securely dispose of old credit cards and statements.",
      "**Report Lost/Stolen Cards Immediately:** Contact your bank as soon as you notice your card is missing.",
    ],
    examples: [
      "**Skimming:** Devices illegally installed on card readers to steal data.",
      "**Phishing:** Tricking you into giving up card details via fake websites or emails.",
      "**Card Not Present (CNP) Fraud:** Using stolen card numbers for online or phone purchases without the physical card.",
      "**Account Takeover:** Fraudsters gain access to your online banking or card account and change details or make transactions.",
    ],
  },
  "online-shopping-scams": {
    title: "Online Shopping Scams: Deep Dive",
    fullDescription:
      "Online shopping scams trick consumers into paying for goods or services that are never delivered, are significantly misrepresented, or are counterfeit. These scams often leverage fake websites, social media ads, or enticingly low prices.",
    imageUrl: onlineshoppingscam, // Use the imported image variable
    keyTakeaways: [
      "Verify seller and website legitimacy.",
      "Use secure payment methods with buyer protection.",
      "Be skeptical of 'too good to be true' deals.",
    ],
    whatToLookFor: [
      "**Too-Good-To-Be-True Prices:** Prices that are significantly lower than market value, especially for popular or high-demand items.",
      "**New/Unusual Websites:** Unfamiliar websites with generic domain names (e.g., ending in .xyz or .club) or unprofessional design.",
      "**Lack of Contact Information:** No phone number, physical address, or only a generic email address for customer service.",
      "**Limited Payment Options:** Only offering insecure payment methods like wire transfers, cryptocurrency, or gift cards (which are untraceable).",
      "**Fake Reviews:** An abundance of generic, overly positive reviews, or no reviews at all.",
      "**Pressure to Buy Immediately:** Creating a false sense of urgency (e.g., 'only 1 left at this price').",
    ],
    howToProtect: [
      "**Verify the Seller:** Research the seller and website. Check reviews from independent sources (e.g., Trustpilot).",
      "**Check Website Security:** Look for 'https://' in the URL and a padlock icon in your browser, indicating a secure connection.",
      "**Use Secure Payment Methods:** Pay with credit cards or secure payment services like PayPal, which offer buyer protection.",
      "**Beware of Social Media Ads:** Be extra cautious with deals promoted solely on social media, especially from unknown pages.",
      "**Read Return/Refund Policies:** Understand the store's policies before purchasing.",
      "**Keep Records:** Save order confirmations, tracking numbers, and any communication with the seller.",
    ],
    examples: [
      "**Non-Delivery Scams:** You pay for an item, but it never arrives.",
      "**Counterfeit Goods:** You receive an item, but it's a cheap, fake imitation of what was advertised.",
      "**Phony Websites:** Websites designed to look like legitimate retailers to steal your payment information.",
      "**Subscription Traps:** Signing up for a 'free trial' that automatically enrolls you in an expensive, hard-to-cancel subscription.",
    ],
  },
  "romance-scams": {
    title: "Romance Scams: Deep Dive",
    fullDescription:
      "Romance scams, also known as 'catfishing,' involve fraudsters creating fake online identities to gain a victim's affection and trust. Once an emotional connection is established, the scammer manipulates the victim into sending money, gifts, or personal information.",
    imageUrl: romancescams, // Use the imported image variable
    keyTakeaways: [
      "Be wary of quick professions of love online.",
      "Never send money or personal info to someone you haven't met.",
      "Verify identities and listen to trusted friends/family.",
    ],
    whatToLookFor: [
      "**Quick to Profess Love:** The scammer expresses strong emotions very quickly, often within weeks, without having met in person.",
      "**Avoids Meeting in Person:** Always has an excuse for why they can't meet, visit, or even video chat (e.g., 'working overseas,' 'sick relative').",
      "**Requests Money:** Begins asking for money for emergencies (medical bills, travel expenses, visa issues, business failures, family crises).",
      "**Exotic Professions:** Often claims to be in the military, an oil rig worker, a doctor with an international aid organization, or another profession that explains their inability to meet.",
      "**Poor Grammar/Spelling:** Despite claiming to be well-educated, their messages often contain significant errors.",
      "**Isolation Tactics:** Tries to isolate the victim from friends and family who might suspect the scam.",
    ],
    howToProtect: [
      "**Be Skeptical of Online Relationships:** Be wary of anyone who professes love quickly, especially if you haven't met in person.",
      "**Verify Identity:** Do a reverse image search of their profile picture. Ask to video chat. If they refuse, be suspicious.",
      "**Never Send Money:** Absolutely never send money, gift cards, or provide financial details to someone you've only met online.",
      "**Protect Personal Information:** Be cautious about how much personal information you share online.",
      "**Talk to Others:** Discuss your new relationship with friends and family. A fresh perspective can help spot red flags.",
      "**Trust Your Gut:** If something feels off, it probably is.",
    ],
    examples: [
      "The scammer needs money for 'emergency surgery' for a child they suddenly mentioned.",
      "They need money for 'travel expenses' to come visit you, but never arrive.",
      "They claim they're stuck overseas and need money to 'clear customs' or 'pay taxes' to release a large sum of money or inheritance.",
      "They ask you to open a bank account to 'help' them move money, making you an unwitting money mule.",
    ],
  },
  "tech-support-scams": {
    title: "Tech Support Scams: Deep Dive",
    fullDescription:
      "Tech support scams involves fraudsters impersonating legitimate technical support representatives to trick victims into paying for unnecessary 'services' to fix non-existent computer problems, or to gain remote access to their devices to steal information.",
    imageUrl: techsupportscams, // Use the imported image variable
    keyTakeaways: [
      "Legitimate tech support won't call you unsolicited.",
      "Never grant remote access or pay with gift cards.",
      "Always verify company contact info independently.",
    ],
    whatToLookFor: [
      "**Unsolicited Contact:** Receiving a pop-up warning, cold call, or email you didn't initiate, claiming there's a serious problem with your computer.",
      "**Alarmist Messages:** Pop-ups or calls with urgent warnings about viruses, malware, or critical system errors.",
      "**Pressure to Act Immediately:** Commanding you to call a specific number or click a link 'now' to prevent further damage.",
      "**Requests for Remote Access:** Asking you to grant them remote access to your computer.",
      "**Requests for Payment via Unusual Methods:** Insisting on payment via gift cards, wire transfers, or cryptocurrency, which are hard to trace.",
      "**Misleading Company Names:** Claiming to be from well-known companies like Microsoft, Apple, or Google, but the contact method is suspicious.",
    ],
    howToProtect: [
      "**Don't Trust Unsolicited Contact:** Legitimate tech companies will not cold-call you or send unsolicited pop-ups with warnings.",
      "**Hang Up/Close Pop-ups:** If you receive such a call or pop-up, hang up immediately or close the browser window. If closing is difficult, use Task Manager (Ctrl+Shift+Esc on Windows) or Force Quit (Cmd+Option+Esc on Mac).",
      "**Verify Legitimacy:** If you're concerned, contact the company directly using the *official* phone number from their website or your product documentation, not a number provided by the scammer.",
      "**Never Grant Remote Access:** Do not allow anyone unsolicited remote access to your computer.",
      "**Never Pay with Gift Cards/Wire Transfers:** These are signs of a scam. Legitimate companies accept standard payment methods.",
      "**Use Reputable Antivirus:** Keep your security software updated to detect and block threats.",
    ],
    examples: [
      "A pop-up appears on your screen claiming your computer is infected with a virus and instructing you to call a 'toll-free' number.",
      "You receive a phone call from someone claiming to be from Microsoft support, who then tries to convince you to download 'diagnostic software' (which is malware).",
      "An email with a fake invoice from a 'tech support' company, hoping you'll call them to dispute the charge.",
    ],
  },
};
