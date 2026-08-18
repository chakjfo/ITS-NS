const reviewerTopics = [
  {
    title: "1. Defense in Depth",
    points: [
      "Know CIA, non-repudiation, threat, risk, vulnerability, least privilege, and attack surface.",
      "Physical security includes site security, computer security, removable media controls, and mantraps.",
      "Policy controls include administrative controls and technical controls.",
      "Attack types include malware, zero day, DoS, XSS, SQL injection, brute force, MITM, social engineering, keyloggers, and logic bombs.",
      "Backup types include full, incremental, and differential."
    ]
  },
  {
    title: "2. Operating System Security",
    points: [
      "Protection topics include service separation, hardening, patching, attack-surface reduction, UAC, secure DNS updates, and software restriction policies.",
      "Authentication includes MFA, password policy, remote access, Run As, sudo, local/domain groups, and Kerberos.",
      "Permission topics include file, folder, share, inheritance, ownership, delegation, and mixed group permissions.",
      "Auditing supports non-repudiation through audit policies and log review.",
      "Encryption includes file/folder encryption, drive encryption, TPM, VPN encryption, public/private keys, certificates, and BitLocker."
    ]
  },
  {
    title: "3. Network Device Security",
    points: [
      "Wireless security covers encryption strength, SSIDs, MAC filtering, and default out-of-box configuration.",
      "Protection devices include hardware/software firewalls, host/network firewalls, stateful/stateless inspection, IDS, IPS, SIEM, content filtering, and blacklisting/whitelisting.",
      "Isolation methods include routing, honeynet, DMZ, NAT/PAT, VPN, IPsec, air gaps, DirectAccess, and VLANs.",
      "Protocol security topics include tunneling, DNSSEC, sniffing, and well-known ports such as FTP, HTTP, HTTPS, DNS, RDP, Telnet, SSH, LDAP, LDAPS, SNMP, SMTP, IMAP, and SFTP."
    ]
  },
  {
    title: "4. Secure Computing",
    points: [
      "Email protection includes antispam, spoofing, phishing, pharming, client protection, and user training.",
      "Browser security includes browser settings, cache management, and private browsing.",
      "Anti-malware and antivirus tasks include installing, uninstalling, reinstalling, updating, remediation, scheduled scans, and alert investigation."
    ]
  },
  {
    title: "Exam Readiness",
    points: [
      "Candidates are expected to have hands-on experience with client operating systems, security apps, firewalls, devices, and network ports.",
      "The official objective-domain sheet recommends at least 150 hours of instruction or hands-on network security experience.",
      "Certiport-linked exam information lists 50 minutes, 35-50 questions, and a 700/1000 cut score."
    ]
  },
  {
    title: "Study Strategy",
    points: [
      "Use the reviewer for concepts, then take a 50-item randomized questionnaire.",
      "Read every explanation, especially for missed answers.",
      "Retake until your score is consistently above the passing level, not just once by luck."
    ]
  }
];

const examQuestions = [
  { c: "1. Defense in Depth", q: "Which principle gives users only the access needed to perform their work?", a: "Principle of least privilege", o: ["Principle of least privilege", "Availability", "Port filtering", "Full backup"], e: "Least privilege is explicitly listed in the ITS Network Security objectives and reduces possible damage from misuse or compromise." },
  { c: "1. Defense in Depth", q: "Which security goal keeps data from being viewed by unauthorized users?", a: "Confidentiality", o: ["Confidentiality", "Availability", "Non-repudiation", "Delegation"], e: "Confidentiality protects information from unauthorized disclosure." },
  { c: "1. Defense in Depth", q: "Which security goal confirms data has not been improperly changed?", a: "Integrity", o: ["Integrity", "Availability", "Spoofing", "Routing"], e: "Integrity means data remains accurate, complete, and trustworthy." },
  { c: "1. Defense in Depth", q: "Which security goal is affected most by a denial-of-service attack?", a: "Availability", o: ["Availability", "Confidentiality", "Delegation", "Inheritance"], e: "DoS attacks target availability by making systems or services unreachable." },
  { c: "1. Defense in Depth", q: "Which term means assurance that someone cannot deny performing an action?", a: "Non-repudiation", o: ["Non-repudiation", "NAT", "DNSSEC", "SSID"], e: "Non-repudiation is supported by auditing, logs, and digital signatures." },
  { c: "1. Defense in Depth", q: "What is a vulnerability?", a: "A weakness that can be exploited", o: ["A weakness that can be exploited", "A guaranteed attack", "A backup schedule", "A trusted user"], e: "The objective domain distinguishes threat, risk, vulnerability, and attack surface." },
  { c: "1. Defense in Depth", q: "What is risk commonly based on?", a: "Likelihood and impact", o: ["Likelihood and impact", "Port and cable color", "Username and hostname", "Cache size and screen size"], e: "Risk estimates how likely harm is and how serious the impact would be." },
  { c: "1. Defense in Depth", q: "What is an attack surface?", a: "All possible points an attacker could target", o: ["All possible points an attacker could target", "Only the firewall brand", "Only encrypted files", "Only backup media"], e: "Reducing attack surface is a recurring ITS Network Security concept." },
  { c: "1. Defense in Depth", q: "Which is an administrative control?", a: "Security policy", o: ["Security policy", "Firewall rule", "Door lock", "Drive encryption"], e: "Administrative controls include policies, procedures, standards, and training." },
  { c: "1. Defense in Depth", q: "Which is a technical control?", a: "Antivirus software", o: ["Antivirus software", "A written policy", "A guard desk", "A training schedule"], e: "Technical controls are implemented through technology, such as antivirus, ACLs, encryption, and authentication systems." },
  { c: "1. Defense in Depth", q: "What is a mantrap?", a: "A controlled physical access area with two interlocking doors", o: ["A controlled physical access area with two interlocking doors", "A malware removal tool", "A wireless SSID", "A backup type"], e: "Mantraps are physical security controls in the official objective domain." },
  { c: "1. Defense in Depth", q: "Which attack injects malicious database commands through unsafe input?", a: "SQL injection", o: ["SQL injection", "Pharming", "NAT", "Kerberos"], e: "SQL injection is named directly in the ITS Network Security attack-types objective." },
  { c: "1. Defense in Depth", q: "Which attack runs malicious scripts in a victim's browser?", a: "Cross-site scripting", o: ["Cross-site scripting", "IPsec", "Differential backup", "MAC filtering"], e: "XSS is a web application attack listed in the objective domain." },
  { c: "1. Defense in Depth", q: "Which attack attempts many passwords until one works?", a: "Brute force attack", o: ["Brute force attack", "DNSSEC", "BitLocker", "Content filtering"], e: "Brute force attacks are repeated guessing attempts against passwords or keys." },
  { c: "1. Defense in Depth", q: "Which attack intercepts or alters communication between two parties?", a: "Man-in-the-middle", o: ["Man-in-the-middle", "Full backup", "gpresult", "SSID hiding"], e: "MITM and MITB are listed in the attack-types objective." },
  { c: "1. Defense in Depth", q: "Which malware hides privileged access and can conceal itself from normal tools?", a: "Rootkit", o: ["Rootkit", "Adware", "SSID", "Honeynet"], e: "Rootkits are malware designed to hide presence and maintain privileged control." },
  { c: "1. Defense in Depth", q: "Which malware encrypts or blocks access to data and demands payment?", a: "Ransomware", o: ["Ransomware", "Spyware", "Polymorphic virus", "Backdoor"], e: "Ransomware is explicitly listed in the exam objectives." },
  { c: "1. Defense in Depth", q: "Which malware changes its code to avoid signature detection?", a: "Polymorphic virus", o: ["Polymorphic virus", "Logic bomb", "Keylogger", "Adware"], e: "A polymorphic virus changes form while keeping its malicious behavior." },
  { c: "1. Defense in Depth", q: "Which malicious code is triggered by a condition or event?", a: "Logic bomb", o: ["Logic bomb", "Firewall", "DNSSEC", "Full backup"], e: "Logic bombs execute when a specified condition is met." },
  { c: "1. Defense in Depth", q: "Which backup copies all selected data each time?", a: "Full backup", o: ["Full backup", "Incremental backup", "Differential backup", "Audit backup"], e: "The official objectives list full, incremental, and differential backup types." },
  { c: "1. Defense in Depth", q: "Which backup copies changes since the last full backup?", a: "Differential backup", o: ["Differential backup", "Incremental backup", "Full backup", "NAT backup"], e: "Differential backups include all changes since the last full backup." },
  { c: "1. Defense in Depth", q: "Which backup copies changes since the last backup of any type?", a: "Incremental backup", o: ["Incremental backup", "Differential backup", "Full backup", "Image restore"], e: "Incremental backups are smaller but may require more restore steps." },

  { c: "2. Operating System Security", q: "What is system hardening?", a: "Reducing attack surface through secure configuration", o: ["Reducing attack surface through secure configuration", "Opening all services", "Disabling authentication", "Sharing administrator accounts"], e: "Hardening is named in the client and server protection objective." },
  { c: "2. Operating System Security", q: "Why should unused services be disabled?", a: "They increase the attack surface", o: ["They increase the attack surface", "They improve Kerberos", "They replace backups", "They clear browser cache"], e: "Separation of services and reducing attack surface are part of OS security." },
  { c: "2. Operating System Security", q: "Why is patch management important?", a: "It fixes known vulnerabilities", o: ["It fixes known vulnerabilities", "It disables all logs", "It replaces passwords", "It creates VLANs"], e: "Keeping operating systems and software updated is part of the objective domain." },
  { c: "2. Operating System Security", q: "What does UAC help prevent?", a: "Unauthorized or accidental privilege elevation", o: ["Unauthorized or accidental privilege elevation", "DNS record lookup", "Wireless roaming", "Full backup scheduling"], e: "User Account Control prompts before privileged Windows actions." },
  { c: "2. Operating System Security", q: "What does gpupdate do?", a: "Refreshes Group Policy settings", o: ["Refreshes Group Policy settings", "Shows DNS signatures", "Encrypts a drive", "Creates a honeynet"], e: "gpupdate is specifically listed in the objective domain." },
  { c: "2. Operating System Security", q: "What does gpresult show?", a: "Applied Group Policy settings", o: ["Applied Group Policy settings", "Open TCP ports only", "VPN encryption methods", "Browser cache files only"], e: "gpresult helps verify which Group Policy settings are applied." },
  { c: "2. Operating System Security", q: "Which authentication method uses something more than just a password?", a: "Multifactor authentication", o: ["Multifactor authentication", "Single shared login", "Anonymous access", "Open Wi-Fi"], e: "MFA is directly listed under user authentication." },
  { c: "2. Operating System Security", q: "What is Kerberos used for?", a: "Ticket-based network authentication", o: ["Ticket-based network authentication", "Drive encryption", "Port translation", "Browser private mode"], e: "Kerberos is an authentication protocol used in domain environments." },
  { c: "2. Operating System Security", q: "What do Run As and sudo allow?", a: "Running tasks with elevated or alternate credentials", o: ["Running tasks with elevated or alternate credentials", "Disabling file permissions", "Creating DNSSEC signatures", "Filtering email spam"], e: "The objective domain mentions using secondary sign-on for administrative tasks." },
  { c: "2. Operating System Security", q: "Which permission type controls access over a network share?", a: "Share permissions", o: ["Share permissions", "SSID permissions", "NAT permissions", "Browser cache permissions"], e: "The exam objectives include file, folder, and share permissions." },
  { c: "2. Operating System Security", q: "What is permission inheritance?", a: "Child items receiving permissions from a parent folder", o: ["Child items receiving permissions from a parent folder", "A router learning routes", "A firewall tracking sessions", "A browser deleting cache"], e: "Inheritance is an important file and folder permission concept." },
  { c: "2. Operating System Security", q: "What does taking ownership of a file allow?", a: "Changing permissions when authorized", o: ["Changing permissions when authorized", "Bypassing all auditing", "Creating a VPN", "Filtering websites"], e: "Ownership affects who can manage permissions on files and folders." },
  { c: "2. Operating System Security", q: "Why enable audit policies?", a: "To record security-relevant events", o: ["To record security-relevant events", "To assign DHCP addresses", "To hide user actions", "To change wireless channels"], e: "Auditing and log review facilitate non-repudiation." },
  { c: "2. Operating System Security", q: "Which item should be reviewed to investigate audited activity?", a: "Log files", o: ["Log files", "SSID broadcast", "Cable length", "NAT pool only"], e: "The objective domain includes reviewing log files and deciding what to audit." },
  { c: "2. Operating System Security", q: "What is BitLocker?", a: "A Microsoft drive encryption feature", o: ["A Microsoft drive encryption feature", "A firewall inspection mode", "An email protocol", "A honeynet service"], e: "BitLocker and drive encryption are listed under encryption knowledge." },
  { c: "2. Operating System Security", q: "What does TPM help protect?", a: "Cryptographic keys used for device security", o: ["Cryptographic keys used for device security", "DNS cache only", "Wireless signal strength", "Browser history"], e: "TPM is listed with drive encryption and secure computing hardware concepts." },
  { c: "2. Operating System Security", q: "Which key is shared publicly in asymmetric encryption?", a: "Public key", o: ["Public key", "Private key", "Password hash", "Local admin password"], e: "Public/private key concepts are part of the encryption objective." },
  { c: "2. Operating System Security", q: "What does a certificate help prove?", a: "A public key belongs to a subject", o: ["A public key belongs to a subject", "A switch has enough ports", "A browser cache is empty", "A backup is incremental"], e: "Certificate properties and services are listed in the encryption objective." },

  { c: "3. Network Device Security", q: "Which Wi-Fi security type is stronger than WEP?", a: "WPA2 or WPA3", o: ["WPA2 or WPA3", "Open Wi-Fi", "WEP", "Hidden SSID only"], e: "The objectives expect knowledge of wireless security types and encryption strength." },
  { c: "3. Network Device Security", q: "Why is WEP insecure?", a: "Its encryption can be cracked", o: ["Its encryption can be cracked", "It requires MFA", "It blocks DHCP", "It uses certificates only"], e: "WEP is an outdated weak wireless security method." },
  { c: "3. Network Device Security", q: "What does an SSID identify?", a: "A wireless network name", o: ["A wireless network name", "A firewall rule", "A VPN protocol", "A Windows group"], e: "SSID concepts are listed under wireless security." },
  { c: "3. Network Device Security", q: "What is MAC filtering in wireless security?", a: "Allowing or blocking devices based on MAC address", o: ["Allowing or blocking devices based on MAC address", "Encrypting files with BitLocker", "Signing DNS responses", "Running antivirus scans"], e: "MAC filtering is listed in the wireless security objective, though it should not be the only control." },
  { c: "3. Network Device Security", q: "Why change default out-of-box device configuration?", a: "Defaults are widely known and may be insecure", o: ["Defaults are widely known and may be insecure", "Defaults enable DNSSEC automatically", "Defaults create full backups", "Defaults remove all risk"], e: "Default configuration, or OOBE, is included in wireless device security." },
  { c: "3. Network Device Security", q: "What is the purpose of a firewall?", a: "Permit or deny traffic based on rules", o: ["Permit or deny traffic based on rules", "Store browser cache", "Create user passwords", "Perform full backups"], e: "Firewalls are a core network protection device in the objective domain." },
  { c: "3. Network Device Security", q: "What is a host firewall?", a: "A firewall running on an individual computer", o: ["A firewall running on an individual computer", "A firewall only at the internet edge", "A wireless SSID", "A DNS certificate"], e: "The objectives distinguish host and network firewalls." },
  { c: "3. Network Device Security", q: "What is a stateful firewall?", a: "A firewall that tracks connection state", o: ["A firewall that tracks connection state", "A firewall that ignores sessions", "A browser setting", "A file permission"], e: "Stateful vs. stateless firewall inspection is explicitly listed." },
  { c: "3. Network Device Security", q: "What does an IDS do?", a: "Detects suspicious activity and alerts", o: ["Detects suspicious activity and alerts", "Blocks every packet inline", "Assigns file permissions", "Encrypts a hard drive"], e: "IDS is a detection technology." },
  { c: "3. Network Device Security", q: "How is an IPS different from an IDS?", a: "An IPS can block traffic inline", o: ["An IPS can block traffic inline", "An IPS only stores backups", "An IPS replaces DNS", "An IPS disables auditing"], e: "IPS can prevent or block detected attacks." },
  { c: "3. Network Device Security", q: "What does a SIEM do?", a: "Collects and correlates security events", o: ["Collects and correlates security events", "Encrypts Wi-Fi traffic", "Creates local users", "Clears browser history"], e: "SIEM is listed as a network protection device concept." },
  { c: "3. Network Device Security", q: "What is content filtering?", a: "Allowing or blocking content by policy or category", o: ["Allowing or blocking content by policy or category", "Delegating file ownership", "Updating Group Policy", "Creating a private key"], e: "Content filtering is listed with blacklisting and whitelisting." },
  { c: "3. Network Device Security", q: "What is blacklisting?", a: "Blocking known bad or unwanted items", o: ["Blocking known bad or unwanted items", "Allowing only approved items", "Encrypting a drive", "Creating an SSID"], e: "Blacklisting blocks specified items, while whitelisting allows only approved items." },
  { c: "3. Network Device Security", q: "What is whitelisting?", a: "Allowing only approved items", o: ["Allowing only approved items", "Blocking only known bad items", "Disabling all filters", "Clearing all logs"], e: "Whitelisting is more restrictive because only approved items are allowed." },
  { c: "3. Network Device Security", q: "What is a DMZ?", a: "A perimeter network for public-facing services", o: ["A perimeter network for public-facing services", "A local password database", "A browser private window", "A removable drive"], e: "Perimeter networks and DMZs are listed as network isolation methods." },
  { c: "3. Network Device Security", q: "What is a honeynet?", a: "A decoy network used to observe attackers", o: ["A decoy network used to observe attackers", "A secure email filter", "A backup rotation", "A Kerberos ticket"], e: "Honeynet is part of network isolation methods in the objective domain." },
  { c: "3. Network Device Security", q: "What does NAT/PAT do?", a: "Translates private addresses to public addresses, often using ports", o: ["Translates private addresses to public addresses, often using ports", "Signs DNS records", "Audits file access", "Filters spam"], e: "NAT/PAT is listed under network isolation methods." },
  { c: "3. Network Device Security", q: "What is an air-gapped network?", a: "A network physically isolated from other networks", o: ["A network physically isolated from other networks", "A public guest Wi-Fi", "A browser cache", "A software firewall"], e: "Air gap networks are listed as an isolation method." },
  { c: "3. Network Device Security", q: "What does a VLAN provide?", a: "Logical network separation", o: ["Logical network separation", "Drive encryption", "Email anti-spam", "Password hashing"], e: "VLANs are listed as network isolation methods." },
  { c: "3. Network Device Security", q: "What does IPsec protect?", a: "IP network communications", o: ["IP network communications", "Browser cache only", "Local file ownership", "Wireless SSID names"], e: "IPsec is listed with VPN and tunneling concepts." },
  { c: "3. Network Device Security", q: "What is tunneling?", a: "Encapsulating one network protocol inside another", o: ["Encapsulating one network protocol inside another", "Deleting malware alerts", "Changing file permissions", "Updating antivirus only"], e: "Tunneling is a protocol security concept." },
  { c: "3. Network Device Security", q: "What does DNSSEC protect?", a: "Authenticity and integrity of DNS responses", o: ["Authenticity and integrity of DNS responses", "Wi-Fi signal power", "Local user groups", "Browser themes"], e: "DNSSEC is directly listed under protocol security concepts." },
  { c: "3. Network Device Security", q: "What is network sniffing?", a: "Capturing and inspecting network traffic", o: ["Capturing and inspecting network traffic", "Encrypting a USB drive", "Running gpupdate", "Changing a user password"], e: "Network sniffing is listed in the protocol security objective." },
  { c: "3. Network Device Security", q: "Which port is commonly used by HTTPS?", a: "443", o: ["443", "80", "22", "3389"], e: "Well-known ports are part of the ITS Network Security objectives." },
  { c: "3. Network Device Security", q: "Which port is commonly used by SSH?", a: "22", o: ["22", "23", "53", "389"], e: "SSH commonly uses TCP port 22." },
  { c: "3. Network Device Security", q: "Which port is commonly used by DNS?", a: "53", o: ["53", "25", "110", "636"], e: "DNS commonly uses port 53." },
  { c: "3. Network Device Security", q: "Which port is commonly used by RDP?", a: "3389", o: ["3389", "443", "161", "993"], e: "RDP commonly uses TCP port 3389." },
  { c: "3. Network Device Security", q: "Which protocol should replace Telnet for secure remote administration?", a: "SSH", o: ["SSH", "FTP", "HTTP", "SNMP"], e: "Telnet is insecure because it sends traffic in cleartext; SSH encrypts sessions." },
  { c: "3. Network Device Security", q: "Which port is commonly used by LDAP?", a: "389", o: ["389", "636", "445", "123"], e: "LDAP commonly uses port 389; LDAPS commonly uses 636." },
  { c: "3. Network Device Security", q: "Which port is commonly used by LDAPS?", a: "636", o: ["636", "389", "25", "80"], e: "LDAPS commonly uses port 636." },
  { c: "3. Network Device Security", q: "Which port is commonly used by SNMP?", a: "161", o: ["161", "162", "143", "3389"], e: "SNMP agents commonly use UDP port 161." },
  { c: "3. Network Device Security", q: "Which protocol is used for secure file transfer over SSH?", a: "SFTP", o: ["SFTP", "FTP", "HTTP", "SMTP"], e: "SFTP is listed among well-known protocols and provides secure file transfer through SSH." },

  { c: "4. Secure Computing", q: "Which attack uses fake messages to trick users into giving information?", a: "Phishing", o: ["Phishing", "DNSSEC", "BitLocker", "NAT"], e: "Email protection includes spoofing, phishing, and pharming." },
  { c: "4. Secure Computing", q: "What is email spoofing?", a: "Forging sender information to make email look trusted", o: ["Forging sender information to make email look trusted", "Encrypting a folder", "Creating a VLAN", "Refreshing Group Policy"], e: "Spoofing is listed under email protection." },
  { c: "4. Secure Computing", q: "What is pharming?", a: "Redirecting users to a fraudulent site", o: ["Redirecting users to a fraudulent site", "Creating a firewall rule", "Running a full backup", "Disabling UAC"], e: "Pharming can redirect users even when they try to visit a legitimate site." },
  { c: "4. Secure Computing", q: "What is antispam software designed to reduce?", a: "Unwanted or malicious email", o: ["Unwanted or malicious email", "Drive encryption", "Group Policy inheritance", "VLAN routing"], e: "Antispam is part of email protection." },
  { c: "4. Secure Computing", q: "Why is user training important for email security?", a: "Users can learn to recognize phishing and unsafe attachments", o: ["Users can learn to recognize phishing and unsafe attachments", "Users can bypass MFA", "Users can disable logs", "Users can remove encryption"], e: "User training is named directly in the secure computing objective." },
  { c: "4. Secure Computing", q: "What is private browsing mainly designed to reduce?", a: "Local browsing traces on the device", o: ["Local browsing traces on the device", "Network attacks on the server", "Need for antivirus", "Firewall inspection"], e: "Private browsing is a browser security setting, but it does not make a user anonymous to all parties." },
  { c: "4. Secure Computing", q: "Why manage browser cache?", a: "To reduce stored private data and stale content", o: ["To reduce stored private data and stale content", "To create Kerberos tickets", "To configure NAT", "To enable SNMP"], e: "Cache management is specifically listed under browser security." },
  { c: "4. Secure Computing", q: "Which task keeps antivirus able to detect newer threats?", a: "Updating antivirus definitions or software", o: ["Updating antivirus definitions or software", "Disabling scans", "Clearing all audit logs", "Opening Telnet"], e: "Installing, updating, scheduling scans, and investigating alerts are part of anti-malware objectives." },
  { c: "4. Secure Computing", q: "What should you do when anti-malware reports an alert?", a: "Investigate and remediate the alert", o: ["Investigate and remediate the alert", "Ignore it if the device still works", "Disable the scanner permanently", "Delete all backups"], e: "The objective domain includes remediation and investigating alerts." },
  { c: "4. Secure Computing", q: "Why schedule antivirus scans?", a: "To regularly check systems for malware", o: ["To regularly check systems for malware", "To sign DNS responses", "To refresh Group Policy", "To translate addresses"], e: "Scheduling scans is named in the anti-malware objective." }
];

const activeQuestions = examQuestions;
const TAKE_SIZE = Math.min(50, activeQuestions.length);
let take = [];
let current = 0;
let score = 0;
let answered = false;
let missed = [];

const views = document.querySelectorAll(".view");
const tabs = document.querySelectorAll(".tab");
const reviewCards = document.getElementById("reviewCards");
const bankList = document.getElementById("bankList");
const categoryFilter = document.getElementById("categoryFilter");
const searchBank = document.getElementById("searchBank");
const questionText = document.getElementById("questionText");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextQuestion = document.getElementById("nextQuestion");
const results = document.getElementById("results");

document.getElementById("bankCount").textContent = `${activeQuestions.length} likely exam questions`;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setView(id) {
  views.forEach((view) => view.classList.toggle("active", view.id === id));
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === id));
}

function renderReviewer() {
  reviewCards.innerHTML = reviewerTopics.map((topic) => `
    <article class="review-card">
      <h3>${topic.title}</h3>
      <ul>${topic.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderCategories() {
  const categories = [...new Set(activeQuestions.map((item) => item.c))].sort();
  categoryFilter.innerHTML += categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderBank() {
  const category = categoryFilter.value;
  const term = searchBank.value.trim().toLowerCase();
  const filtered = activeQuestions.filter((item) => {
    const inCategory = category === "all" || item.c === category;
    const text = `${item.q} ${item.a} ${item.e} ${item.c}`.toLowerCase();
    return inCategory && (!term || text.includes(term));
  });

  bankList.innerHTML = filtered.map((item, index) => `
    <article class="bank-item">
      <span class="tag">${item.c}</span>
      <h3>${index + 1}. ${item.q}</h3>
      <p><strong>Answer:</strong> ${item.a}</p>
      <p>${item.e}</p>
    </article>
  `).join("") || `<p>No matching questions found.</p>`;
}

function startTake() {
  take = shuffle(activeQuestions).slice(0, TAKE_SIZE).map((item) => ({ ...item, choices: shuffle(item.o) }));
  current = 0;
  score = 0;
  missed = [];
  answered = false;
  results.hidden = true;
  setView("quiz");
  renderQuestion();
}

function updateStatus() {
  document.getElementById("currentNumber").textContent = take.length ? Math.min(current + 1, TAKE_SIZE) : 0;
  document.getElementById("score").textContent = score;
  document.getElementById("remaining").textContent = take.length ? Math.max(TAKE_SIZE - current - (answered ? 1 : 0), 0) : TAKE_SIZE;
  document.getElementById("quizState").textContent = take.length
    ? `Answering item ${Math.min(current + 1, TAKE_SIZE)} of ${TAKE_SIZE}.`
    : `Start a take to receive ${TAKE_SIZE} randomized questions from the likely exam bank.`;
  document.getElementById("progressBar").style.width = `${take.length ? (current / TAKE_SIZE) * 100 : 0}%`;
}

function renderQuestion() {
  updateStatus();
  feedback.hidden = true;
  nextQuestion.hidden = true;
  answered = false;
  results.hidden = true;

  const item = take[current];
  if (!item) {
    finishTake();
    return;
  }

  questionText.textContent = item.q;
  document.querySelector(".question-meta").textContent = `${item.c} | Item ${current + 1} of ${TAKE_SIZE}`;
  choices.innerHTML = item.choices.map((choice) => `
    <button class="choice" data-choice="${choice}">${choice}</button>
  `).join("");
}

function chooseAnswer(choiceButton) {
  if (answered) return;
  answered = true;
  const item = take[current];
  const selected = choiceButton.dataset.choice;
  const correct = selected === item.a;

  if (correct) score += 1;
  else missed.push(item);

  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = true;
    if (button.dataset.choice === item.a) button.classList.add("correct");
    if (button === choiceButton && !correct) button.classList.add("wrong");
  });

  feedback.hidden = false;
  feedback.innerHTML = `<strong>${correct ? "Correct." : "Not quite."}</strong> ${item.e}`;
  nextQuestion.hidden = false;
  document.getElementById("progressBar").style.width = `${((current + 1) / TAKE_SIZE) * 100}%`;
  updateStatus();
}

function finishTake() {
  questionText.textContent = "Take complete.";
  document.querySelector(".question-meta").textContent = "Results";
  choices.innerHTML = "";
  feedback.hidden = true;
  nextQuestion.hidden = true;
  document.getElementById("quizState").textContent = `Finished. You scored ${score} out of ${TAKE_SIZE}.`;
  document.getElementById("currentNumber").textContent = TAKE_SIZE;
  document.getElementById("remaining").textContent = 0;
  document.getElementById("progressBar").style.width = "100%";

  const percent = Math.round((score / TAKE_SIZE) * 100);
  const missedHtml = missed.slice(0, 10).map((item) => `<li><strong>${item.q}</strong><br>${item.e}</li>`).join("");
  results.hidden = false;
  results.innerHTML = `
    <h3>Your score: ${score}/${TAKE_SIZE} (${percent}%)</h3>
    <p>${percent >= 80 ? "Strong work. Review the missed items and take another randomized set." : "Keep going. Read the reviewer sections, then retake with a new randomized set."}</p>
    ${missed.length ? `<h3>First missed items to review</h3><ol>${missedHtml}</ol>` : "<p>No missed items in this take.</p>"}
  `;
}

tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
document.getElementById("startQuiz").addEventListener("click", startTake);
document.getElementById("restartQuiz").addEventListener("click", startTake);
document.getElementById("showReviewer").addEventListener("click", () => setView("reviewer"));
document.getElementById("showBank").addEventListener("click", () => setView("bank"));
choices.addEventListener("click", (event) => {
  const button = event.target.closest(".choice");
  if (button) chooseAnswer(button);
});
nextQuestion.addEventListener("click", () => {
  current += 1;
  renderQuestion();
});
categoryFilter.addEventListener("change", renderBank);
searchBank.addEventListener("input", renderBank);

renderReviewer();
renderCategories();
renderBank();
updateStatus();
