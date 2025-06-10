import aifraud from "../assets/images/dataimages/aifraud.webp";
import phishing from "../assets/images/dataimages/phishing.png";
import cryptoscam from "../assets/images/dataimages/cryptoscam.jpg";
import identitytheft from "../assets/images/dataimages/identitytheft.avif";
import ransomwareAttack from "../assets/images/dataimages/Malwareandransomware.jpg";
import dataBreach from "../assets/images/dataimages/databreach.avif";
import smishingScam from "../assets/images/dataimages/smishingscam.jpg";

export interface NewsArticle {
  slug: string;
  type: "featured" | "carousel" | "recent" | "older";
  image: string;
  title: string;
  description: string;
  fullContent: string;
  date: string;
}

export const newsArticlesData: NewsArticle[] = [
  {
    slug: "ai-voice-scams",
    type: "featured",
    image: aifraud,
    title: "ALERT: Sophisticated AI-Powered Voice Scams on the Rise",
    description:
      "Fraudsters are now using advanced AI to clone voices, mimicking family members or officials to trick victims. Learn how to differentiate real voices from AI-generated fakes and what steps to take if you receive such a call. This new threat requires heightened awareness and immediate action.",
    fullContent: `
      <h2>The Alarming Rise of AI Voice Cloning in Fraud</h2>
      <p>The landscape of cybercrime is constantly evolving, and one of the most unsettling new frontiers is the use of Artificial Intelligence (AI) to clone voices. Fraudsters are leveraging sophisticated AI tools to mimic the voices of loved ones, colleagues, or even trusted officials, creating highly convincing scams that are incredibly difficult to detect.</p>

      <h3>How AI Voice Scams Work</h3>
      <p>These scams typically start with a phone call. The perpetrator uses AI to generate speech that sounds eerily similar to someone you know – perhaps a child, a parent, or a close friend. They might claim to be in a dire emergency, such as an accident, an arrest, or stranded in a foreign country, demanding immediate financial assistance.</p>
      <p>The AI can be trained on very short audio clips (even just a few seconds found online from social media posts or voicemail messages) to create a synthetic voice. This technology makes it possible for scammers to personalize their attacks, preying on emotional vulnerabilities.</p>

      <h3>Key Indicators of an AI Voice Scam:</h3>
      <ul>
        <li><strong>Urgency and Pressure:</strong> The caller demands immediate action and discourages verification.</li>
        <li><strong>Requests for Money or Personal Info:</strong> They ask for wire transfers, gift cards, cryptocurrency, or sensitive personal details.</li>
        <li><strong>Unusual Circumstances:</strong> The story seems out of character or highly improbable for the person they claim to be.</li>
        <li><strong>Difficulty Reaching Them:</strong> They claim their phone is broken, or they can't call back.</li>
        <li><strong>Emotional Manipulation:</strong> The scammer uses emotionally charged language to bypass your logical thinking.</li>
      </ul>

      <h3>Protecting Yourself:</h3>
      <ol>
        <li><strong>Verify Independently:</strong> If you receive a suspicious call claiming to be a loved one in distress, try to contact them directly on a known number.</li>
        <li><strong>Establish a Safe Word:</strong> Create a 'safe word' or phrase with family members that you can use to verify identity in an emergency.</li>
        <li><strong>Ask Verification Questions:</strong> Ask a question only the real person would know the answer to (e.g., "What was the name of our first pet?").</li>
        <li><strong>Hang Up:</strong> If something feels off, simply hang up and call the person back yourself.</li>
        <li><strong>Never Send Funds Blindly:</strong> Do not wire money, send gift cards, or provide cryptocurrency based on an urgent request over the phone without independent verification.</li>
        <li><strong>Report the Scam:</strong> If you believe you've been targeted, report it to local law enforcement and relevant authorities.</li>
      </ol>

      <p>Staying vigilant and informed is your best defense against these evolving threats. Share this information with your family and friends to help them stay safe too.</p>
    `,
    date: "June 5, 2025",
  },
  {
    slug: "ecommerce-phishing",
    type: "carousel",
    image: phishing,
    title: "New Phishing Wave Targets E-Commerce Shoppers",
    description:
      "Online shoppers are facing a surge in deceptive phishing emails designed to steal payment information during seasonal sales. These sophisticated emails mimic popular retailers.",
    fullContent: `
      <h2>E-Commerce Phishing: A Growing Threat to Online Shoppers</h2>
      <p>With seasonal sales and the increasing reliance on online shopping, cybercriminals are ramping up their efforts to defraud consumers through highly convincing phishing attacks. These scams are specifically designed to exploit the trust users place in their favorite e-commerce platforms.</p>

      <h3>Tactics Used in E-Commerce Phishing</h3>
      <ul>
        <li><strong>Fake Order Confirmations:</strong> Emails that look like legitimate order confirmations, but contain malicious links to "track your package" or "resolve an issue."</li>
        <li><strong>Impersonating Customer Support:</strong> Messages claiming there's a problem with your payment or delivery, urging you to update your details on a fake website.</li>
        <li><strong>"Limited Time Offer" Scams:</strong> Deceptive ads or emails for incredibly low prices on popular items, leading to fake online stores.</li>
        <li><strong>Payment Method Verification:</strong> Requests to re-enter credit card or banking information due to a "security issue."</li>
      </ul>

      <h3>How to Spot E-Commerce Phishing</h3>
      <p>Always scrutinize the sender's email address. Look for subtle misspellings or unusual domains. Be wary of generic greetings instead of your name. Hover over links without clicking to see the actual URL – it should match the retailer's official domain. Furthermore, legitimate companies rarely ask for sensitive information directly via email.</p>

      <h3>Staying Safe While Shopping Online</h3>
      <ol>
        <li><strong>Type URLs Directly:</strong> Instead of clicking links in emails, go directly to the retailer's official website by typing the URL into your browser.</li>
        <li><strong>Use Strong, Unique Passwords:</strong> Especially for your shopping accounts. Consider using a password manager.</li>
        <li><strong>Enable Two-Factor Authentication (2FA):</strong> For any e-commerce site that offers it.</li>
        <li><strong>Monitor Bank Statements:</strong> Regularly check your credit card and bank statements for unauthorized transactions.</li>
        <li><strong>Use Credit Cards for Purchases:</strong> Credit cards generally offer better fraud protection than debit cards.</li>
        <li><strong>Be Skeptical of Deals:</strong> If a deal seems too good to be true, it probably is.</li>
      </ol>
      <p>By adopting these cautious habits, you can significantly reduce your risk of falling victim to e-commerce phishing scams and enjoy a safer online shopping experience.</p>
    `,
    date: "June 4, 2025",
  },
  {
    slug: "crypto-scams",
    type: "carousel",
    image: cryptoscam,
    title: "Cryptocurrency Investment Scams See Record Highs",
    description:
      "The allure of quick profits is leading many into fraudulent crypto schemes. Understand the red flags before investing, including unregistered platforms.",
    fullContent: `
      <h2>The Volatile World of Crypto and the Rise of Scams</h2>
      <p>The cryptocurrency market, while offering exciting opportunities, has also become a fertile ground for sophisticated investment scams. The decentralized and often unregulated nature of digital assets makes it challenging for new investors to distinguish legitimate opportunities from fraudulent schemes.</p>

      <h3>Common Cryptocurrency Scams:</h3>
      <ul>
        <li><strong>Fake Investment Platforms:</strong> Websites or apps that mimic legitimate trading platforms, promising incredibly high returns but disappearing with your funds.</li>
        <li><strong>Rug Pulls:</strong> Developers of a new cryptocurrency project suddenly abandon it, selling off all their holdings and leaving investors with worthless tokens.</li>
        <li><strong>Pump-and-Dump Schemes:</strong> Scammers artificially inflate the price of a low-value cryptocurrency through false hype, then sell their own holdings for a profit, leaving others with heavy losses.</li>
        <li><strong>Romance Scams (Pig Butchering):</strong> Fraudsters build emotional connections with victims over time, eventually convincing them to invest in fake crypto platforms.</li>
        <li><strong>Phony Exchanges/Wallets:</strong> Sites designed to steal your credentials or private keys when you try to connect your wallet or create an account.</li>
      </ul>

      <h3>Red Flags to Watch For:</h3>
      <p>Be extremely wary of any investment promising guaranteed high returns with little to no risk. Scammers often use pressure tactics, urging immediate investment. Unsolicited messages, vague whitepapers, and unregistered platforms are also significant red flags. Always verify the legitimacy of any platform or project.</p>

      <h3>Protecting Your Crypto Investments:</h3>
      <ol>
        <li><strong>Do Thorough Research:</strong> Before investing, research the project, its team, and its technology extensively. Look for credible whitepapers and active communities.</li>
        <li><strong>Verify Platforms:</strong> Only use well-established and regulated cryptocurrency exchanges and wallets.</li>
        <li><strong>Enable 2FA:</strong> Always use two-factor authentication on all your crypto accounts.</li>
        <li><strong>Beware of Unsolicited Offers:</strong> Be highly skeptical of DMs, emails, or calls offering exclusive crypto deals.</li>
        <li><strong>Never Share Private Keys:</strong> Your private keys are the access to your funds; never share them with anyone.</li>
        <li><strong>Start Small:</strong> If you're new to crypto, start with small, manageable investments you can afford to lose.</li>
        <li><strong>Consult an Expert:</strong> Consider speaking with a reputable financial advisor who understands cryptocurrency.</li>
      </ol>
      <p>The crypto market is highly volatile. Understanding the risks and recognizing scams are crucial steps towards protecting your assets.</p>
    `,
    date: "May 30, 2025",
  },
  {
    slug: "digital-footprint",
    type: "carousel",
    image: identitytheft,
    title: "Identity Theft: Protecting Your Digital Footprint",
    description:
      "Practical tips on securing your personal data online to minimize the risk of identity theft in an increasingly digital world. Learn about privacy settings and strong passwords.",
    fullContent: `
      <h2>Safeguarding Your Digital Footprint from Identity Theft</h2>
      <p>In our interconnected world, every online interaction contributes to your digital footprint – the trail of data you leave behind. This footprint, while convenient, also creates opportunities for identity thieves. Protecting it is paramount to minimizing your risk of fraud.</p>

      <h3>What is a Digital Footprint?</h3>
      <p>Your digital footprint includes everything from your social media posts and online shopping history to your search queries and app usage. It's the unique data trail you create as you navigate the internet.</p>

      <h3>How Your Digital Footprint is Exploited:</h3>
      <ul>
        <li><strong>Data Breaches:</strong> Hackers steal data from companies you've interacted with.</li>
        <li><strong>Phishing:</strong> Scammers trick you into revealing personal information.</li>
        <li><strong>Social Engineering:</strong> Fraudsters use publicly available information to build trust and manipulate you.</li>
        <li><strong>Malware:</strong> Malicious software steals data directly from your devices.</li>
      </ul>

      <h3>Practical Steps to Protect Your Digital Footprint:</h3>
      <ol>
        <li><strong>Strong, Unique Passwords:</strong> Use a complex, different password for every online account. A password manager can help.</li>
        <li><strong>Enable Two-Factor Authentication (2FA):</strong> Add an extra layer of security to your accounts.</li>
        <li><strong>Review Privacy Settings:</strong> Regularly check and adjust privacy settings on social media, apps, and browsers. Limit what information is public.</li>
        <li><strong>Be Mindful of Sharing:</strong> Think twice before posting personal details like your birth date, address, or travel plans.</li>
        <li><strong>Secure Your Devices:</strong> Use antivirus software, firewalls, and keep your operating system and apps updated.</li>
        <li><strong>Public Wi-Fi Caution:</strong> Avoid conducting sensitive transactions (banking, shopping) on unsecured public Wi-Fi networks.</li>
        <li><strong>Shred Sensitive Documents:</strong> Don't just throw away mail or documents containing personal information.</li>
        <li><strong>Monitor Financial Accounts & Credit Reports:</strong> Regularly check for suspicious activity.</li>
        <li><strong>Delete Unused Accounts:</strong> If you no longer use an online service, close the account to reduce your exposure.</li>
      </ol>
      <p>Managing your digital footprint is an ongoing process. By being proactive and vigilant, you can significantly reduce your vulnerability to identity theft.</p>
    `,
    date: "May 28, 2025",
  },
  {
    slug: "ransomware-threats",
    type: "recent",
    image: ransomwareAttack,
    title: "Ransomware Attacks: What Businesses Need to Know",
    description:
      "The latest report shows a sharp increase in ransomware attacks targeting small and medium-sized businesses. Learn about prevention and recovery strategies.",
    fullContent: `
      <h2>Ransomware: A Major Threat to Businesses</h2>
      <p>Ransomware continues to be one of the most debilitating cyber threats facing organizations of all sizes. These malicious software programs encrypt your data, making it inaccessible, and demand a ransom (usually in cryptocurrency) for its release. The impact can be severe, ranging from significant financial losses to complete operational shutdowns.</p>

      <h3>How Ransomware Spreads:</h3>
      <ul>
        <li><strong>Phishing Emails:</strong> Often through malicious attachments or links in deceptive emails.</li>
        <li><strong>Exploiting Vulnerabilities:</strong> Through unpatched software or operating system weaknesses.</li>
        <li><strong>Remote Desktop Protocol (RDP) Abuse:</strong> Gaining access through poorly secured RDP connections.</li>
        <li><strong>Drive-by Downloads:</strong> Unwittingly downloading malware by visiting compromised websites.</li>
      </ul>

      <h3>Key Prevention Strategies for Businesses:</h3>
      <ol>
        <li><strong>Robust Backup Strategy:</strong> Implement regular, isolated, and tested backups of all critical data. Ensure backups are stored offline or in a secure cloud environment separate from your main network.</li>
        <li><strong>Employee Training:</strong> Conduct regular cybersecurity awareness training, focusing on recognizing phishing attempts and safe Browse habits.</li>
        <li><strong>Patch Management:</strong> Keep all operating systems, software, and applications updated with the latest security patches.</li>
        <li><strong>Endpoint Security:</strong> Deploy advanced endpoint detection and response (EDR) solutions and next-gen antivirus software.</li>
        <li><strong>Network Segmentation:</strong> Divide your network into smaller segments to limit the spread of ransomware if an intrusion occurs.</li>
        <li><strong>Multi-Factor Authentication (MFA):</strong> Implement MFA for all remote access and sensitive internal systems.</li>
        <li><strong>Incident Response Plan:</strong> Develop and regularly test a comprehensive incident response plan to guide actions during and after an attack.</li>
      </ol>

      <h3>What to Do During an Attack:</h3>
      <p>If you suspect a ransomware attack, immediately disconnect infected devices from the network. Do not pay the ransom, as there's no guarantee of data recovery, and it incentivizes further attacks. Contact cybersecurity professionals and report the incident to relevant authorities.</p>
      <p>Proactive preparation is key to mitigating the risks posed by ransomware and ensuring business continuity.</p>
    `,
    date: "May 25, 2025",
  },
  {
    slug: "data-breach-impact",
    type: "recent",
    image: dataBreach,
    title: "Understanding the Long-Term Impact of Data Breaches",
    description:
      "A data breach can have lasting consequences beyond immediate financial loss. Learn about credit monitoring, identity theft, and reputational damage.",
    fullContent: `
      <h2>The Lingering Shadows: Long-Term Impacts of Data Breaches</h2>
      <p>While the immediate aftermath of a data breach involves frantic password changes and credit freezes, the long-term consequences can be far more insidious and challenging to manage. Understanding these lingering impacts is crucial for victims and organizations alike.</p>

      <h3>Beyond the Immediate:</h3>
      <ul>
        <li><strong>Identity Theft:</strong> Stolen personal information can be used months or even years later to open fraudulent accounts, file fake tax returns, or commit other crimes.</li>
        <li><strong>Financial Loss:</strong> This can extend beyond unauthorized credit card charges to encompass lost income, legal fees, and costs associated with recovering from identity theft.</li>
        <li><strong>Reputational Damage:</strong> Individuals may experience a diminished reputation if their sensitive data (e.g., embarrassing emails) is exposed. For businesses, a breach can severely damage customer trust and brand loyalty.</li>
        <li><strong>Emotional Distress:</strong> Victims often experience anxiety, fear, and frustration as they grapple with the uncertainty of what might happen with their stolen data.</li>
        <li><strong>Higher Premiums:</strong> In some cases, identity theft victims might face higher insurance premiums or difficulty obtaining credit.</li>
        <li><strong>Phishing and Scams:</strong> Stolen data is often used by criminals to craft more convincing phishing emails or social engineering scams targeted at the victim.</li>
      </ul>

      <h3>Mitigating Long-Term Risk:</h3>
      <ol>
        <li><strong>Continuous Monitoring:</strong> Enroll in credit monitoring and identity theft protection services. Regularly review your credit reports and financial statements.</li>
        <li><strong>Be Vigilant:</strong> Remain suspicious of unsolicited communications, especially those referencing the breached company or your data.</li>
        <li><strong>Strong Security Habits:</strong> Continue to use unique, complex passwords and enable two-factor authentication on all accounts.</li>
        <li><strong>Information Hygiene:</strong> Be cautious about what personal information you share online.</li>
        <li><strong>Stay Informed:</strong> Keep abreast of major data breaches and take recommended actions if your data is involved.</li>
      </ol>
      <p>The battle against data breach consequences is often a marathon, not a sprint. Proactive vigilance and sustained security practices are essential for long-term recovery and protection.</p>
    `,
    date: "May 20, 2025",
  },
  {
    slug: "smishing-surge",
    type: "older",
    image: smishingScam,
    title: "Smishing Scams Surge: Text Message Fraud on the Rise",
    description:
      "Fraudsters are increasingly using SMS (text messages) to trick individuals into clicking malicious links or revealing personal information. Learn to identify and avoid these 'smishing' attacks.",
    fullContent: `
      <h2>The Sneaky Threat of Smishing: Text Message Fraud</h2>
      <p>While phishing via email is widely known, its text message counterpart, "smishing," is rapidly gaining traction among fraudsters. Smishing scams leverage the ubiquity of smartphones and the immediate nature of text messages to trick victims into clicking malicious links, downloading malware, or divulging sensitive personal information.</p>

      <h3>How Smishing Works:</h3>
      <p>Scammers send text messages that appear to be from legitimate organizations like banks, delivery services, government agencies, or even friends. These messages often create a sense of urgency or curiosity, prompting you to click a link or call a number. Once you click, you might be led to a fake website designed to steal your login credentials, or malware could be downloaded to your device.</p>

      <h3>Common Smishing Impersonations:</h3>
      <ul>
        <li><strong>Banks:</strong> Alerts about "suspicious activity" on your account, urging you to verify details.</li>
        <li><strong>Delivery Services:</strong> Notifications about a "package delivery issue" with a link to reschedule.</li>
        <li><strong>Government Agencies:</strong> Messages about tax refunds, fines, or overdue bills.</li>
        <li><strong>Retailers:</strong> Fake discount codes or order confirmations.</li>
      </ul>

      <h3>Spotting a Smishing Scam:</h3>
      <ul>
        <li><strong>Unsolicited Messages:</strong> Receiving a text about something you didn't expect.</li>
        <li><strong>Suspicious Links:</strong> URLs that don't match the official website or look shortened/garbled.</li>
        <li><strong>Urgent Language:</strong> Messages designed to make you act without thinking, e.g., "account locked," "immediate action required."</li>
        <li><strong>Requests for Personal Info:</strong> Asking for passwords, PINs, or credit card numbers directly in the text or on a linked page.</li>
        <li><strong>Grammar/Spelling Errors:</strong> Though improving, some scams still contain noticeable mistakes.</li>
      </ul>

      <h3>Protecting Yourself from Smishing:</h3>
      <ol>
        <li><strong>Don't Click Links:</strong> Never click on links in suspicious text messages. If you think it might be legitimate, go directly to the organization's official website or app.</li>
        <li><strong>Verify Sender:</strong> If the message claims to be from your bank or a company, contact them directly using a verified phone number (from their official website, not the text).</li>
        <li><strong>Block Numbers:</strong> Block any suspicious numbers that send you smishing attempts.</li>
        <li><strong>Report Smishing:</strong> Forward suspicious texts to 7726 (SPAM) to report them to your mobile carrier.</li>
        <li><strong>Be Wary of Short Codes:</strong> Some legitimate companies use short codes, but scammers can spoof these. Always verify.</li>
        <li><strong>Update Device Software:</strong> Keep your phone's operating system and security apps updated.</li>
      </ol>
      <p>Treat unsolicited text messages with the same skepticism you would treat suspicious emails. Your vigilance is your first line of defense.</p>
    `,
    date: "May 15, 2025",
  },
];
