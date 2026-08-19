const reviewerTopics = [
  {
    title: "1. Defense in Depth",
    sections: [
      {
        type: "Security principles",
        points: [
          { term: "Defense in depth", detail: "Uses multiple layers of security instead of relying on one control. If one layer fails, another layer can still reduce or stop the attack." },
          { term: "Confidentiality", detail: "Keeps information hidden from unauthorized people. It works through access control, encryption, and proper data handling." },
          { term: "Integrity", detail: "Keeps data accurate and unchanged unless an authorized change happens. Hashes, permissions, and audit trails help protect integrity." },
          { term: "Availability", detail: "Keeps systems and data usable when needed. Redundancy, backups, patching, and DoS protection support availability." },
          { term: "Non-repudiation", detail: "Provides proof that a user or system performed an action. Digital signatures and logs help prevent someone from denying what they did." },
          { term: "Least privilege", detail: "Gives users only the access needed for their job. If an account is misused, the damage is limited." },
          { term: "Attack surface", detail: "All possible places an attacker can target. Reducing unused services, open ports, and excessive permissions reduces the attack surface." }
        ]
      },
      {
        type: "Risk vocabulary",
        points: [
          { term: "Threat", detail: "A possible cause of harm, such as malware, a careless user, a power outage, or an attacker." },
          { term: "Vulnerability", detail: "A weakness that a threat can exploit, such as an unpatched system, weak password, or open management port." },
          { term: "Risk", detail: "The chance that a threat will exploit a vulnerability and cause harm. It is usually judged by likelihood and impact." }
        ]
      },
      {
        type: "Physical security",
        points: [
          { term: "Site security", detail: "Protects the building or room where systems are located using locks, guards, cameras, and access badges." },
          { term: "Computer/device security", detail: "Protects endpoints and equipment from theft, tampering, and unauthorized use." },
          { term: "Removable media control", detail: "Controls USB drives and external storage because they can leak data or introduce malware." },
          { term: "Mantrap", detail: "A controlled entrance with two interlocking doors. It slows entry and helps verify one person at a time." }
        ]
      },
      {
        type: "Policy controls",
        points: [
          { term: "Administrative controls", detail: "Rules and processes such as policies, procedures, standards, and user training." },
          { term: "Technical controls", detail: "Security enforced by technology, such as firewalls, encryption, antivirus, MFA, and access control lists." }
        ]
      },
      {
        type: "Attack types",
        points: [
          { term: "Malware", detail: "Malicious software designed to damage systems, steal data, spy on users, or gain unauthorized access." },
          { term: "Buffer overflow", detail: "An attack that sends more data than a program expects, possibly overwriting memory and causing crashes or code execution." },
          { term: "Virus", detail: "Malware that attaches to files or programs and spreads when the infected item runs." },
          { term: "Worm", detail: "Malware that can spread across systems or networks without needing a user to run an infected file." },
          { term: "Trojan horse", detail: "Malware disguised as useful or legitimate software so users install or run it." },
          { term: "Spyware", detail: "Malware that secretly monitors activity or collects information." },
          { term: "Backdoor", detail: "A hidden access method that bypasses normal authentication or security controls." },
          { term: "Zero day", detail: "An attack or vulnerability that is not yet publicly patched. Defenders may have little warning." },
          { term: "DoS", detail: "Denial of service makes a system unavailable by overwhelming it or abusing a weakness." },
          { term: "SQL injection", detail: "An attacker inserts database commands into input fields. Safe coding and parameterized queries help prevent it." },
          { term: "XSS", detail: "Cross-site scripting injects malicious scripts into web pages so they run in another user's browser." },
          { term: "Brute force", detail: "Repeated guessing of passwords or keys. Lockouts, MFA, and strong passwords reduce this risk." },
          { term: "Man-in-the-middle", detail: "The attacker intercepts or alters traffic between two parties. TLS, certificates, and VPNs help reduce the risk." },
          { term: "Man-in-the-browser", detail: "Malware inside a browser intercepts or changes web activity, often after the user has already authenticated." },
          { term: "Social engineering", detail: "Tricking people into revealing information or taking unsafe actions." },
          { term: "Adware", detail: "Software that displays unwanted advertisements. It can slow systems, track behavior, or install with other unwanted programs." },
          { term: "Rootkit", detail: "Malware that hides itself and may keep privileged access. It is dangerous because normal tools may not easily detect it." },
          { term: "Polymorphic virus", detail: "Malware that changes its code or appearance to avoid signature-based detection while keeping the same harmful purpose." },
          { term: "Keylogger", detail: "Malware or hardware that records keystrokes, often to steal passwords." },
          { term: "Logic bomb", detail: "Malicious code that activates when a condition is met, such as a date or event." }
        ]
      },
      {
        type: "Backup types",
        points: [
          { term: "Full backup", detail: "Copies all selected data. It is easiest to restore from but takes more time and storage." },
          { term: "Differential backup", detail: "Copies changes since the last full backup. Restore usually needs the full backup plus the latest differential." },
          { term: "Incremental backup", detail: "Copies changes since the last backup of any type. It saves space but may require several backup sets to restore." }
        ]
      }
    ]
  },
  {
    title: "2. Operating System Security",
    sections: [
      {
        type: "Protection and hardening",
        points: [
          { term: "Service separation", detail: "Runs services separately so one compromised service does not easily affect others." },
          { term: "System hardening", detail: "Configures systems securely by disabling unused features, limiting permissions, and applying secure baselines." },
          { term: "Patch management", detail: "Keeps software updated so known vulnerabilities are fixed before attackers exploit them." },
          { term: "Attack-surface reduction", detail: "Removes unnecessary ports, services, software, and permissions." },
          { term: "Group Policy", detail: "Windows centralized configuration system. gpupdate refreshes policies and gpresult shows applied policies." },
          { term: "User Account Control", detail: "Windows feature that prompts before elevated actions to reduce silent administrative changes." },
          { term: "Secure DNS updates", detail: "Allows only authorized systems to update DNS records, reducing spoofed or incorrect records." },
          { term: "Keeping client OS and software updated", detail: "Applies security fixes and feature updates so endpoints are less exposed to known vulnerabilities." },
          { term: "Encrypting offline folders", detail: "Protects locally cached offline files so copied or synchronized data is not readable without authorization." },
          { term: "Software restriction policies", detail: "Limit what programs can run, helping block unauthorized or malicious software." }
        ]
      },
      {
        type: "Authentication",
        points: [
          { term: "Multifactor authentication", detail: "Uses more than one factor, such as password plus phone approval, so stolen passwords are less useful." },
          { term: "Password policy", detail: "Sets rules for length, complexity, lockout, and reuse to reduce weak passwords." },
          { term: "Remote access authentication", detail: "Verifies users before allowing access from outside or remote networks." },
          { term: "Run As", detail: "Windows method to run a program using another account, often for admin tasks." },
          { term: "sudo", detail: "Linux/macOS command that allows permitted users to run specific commands with elevated privilege." },
          { term: "Local groups", detail: "Groups that control permissions on one computer." },
          { term: "Domain groups", detail: "Centralized groups used across domain-joined systems." },
          { term: "Kerberos", detail: "Ticket-based authentication protocol. Users receive tickets instead of sending passwords repeatedly." }
        ]
      },
      {
        type: "Permissions",
        points: [
          { term: "File permissions", detail: "Control who can read, write, modify, or execute a file." },
          { term: "Folder permissions", detail: "Control access to folders and often apply to files inside them." },
          { term: "Share permissions", detail: "Control access over a network share. They combine with file system permissions." },
          { term: "Inheritance", detail: "Child files or folders receive permissions from a parent folder unless inheritance is blocked." },
          { term: "Moving or copying files", detail: "Permissions can behave differently when files are moved or copied within the same disk or to another disk." },
          { term: "Ownership", detail: "The owner can usually change permissions, depending on system rules." },
          { term: "Delegation", detail: "Assigns limited administrative tasks to another user or group without giving full admin rights." },
          { term: "Mixed group permissions", detail: "When users belong to multiple groups, effective access depends on the combined permissions and denies." }
        ]
      },
      {
        type: "Auditing",
        points: [
          { term: "Audit policy", detail: "Defines which security events are recorded, such as logons, file access, or privilege use." },
          { term: "Log review", detail: "Checking recorded events to find suspicious activity, errors, or policy violations." },
          { term: "Event selection", detail: "Auditing too little misses attacks; auditing too much creates noise. Choose events that matter." },
          { term: "Recorded activity", detail: "Logs help prove what happened, when it happened, and which account was involved." }
        ]
      },
      {
        type: "Encryption",
        points: [
          { term: "File/folder encryption", detail: "Protects selected stored files or folders so unauthorized users cannot read them." },
          { term: "Drive encryption", detail: "Encrypts an entire disk or volume, protecting data if a device is lost or stolen." },
          { term: "BitLocker", detail: "Microsoft drive encryption feature commonly used with Windows." },
          { term: "TPM", detail: "Trusted Platform Module stores or protects cryptographic keys in hardware." },
          { term: "Secure communication processes", detail: "Protects messages and sessions such as email, texting, chat, and social media using appropriate secure methods." },
          { term: "VPN encryption", detail: "Protects traffic through an encrypted tunnel over an untrusted network." },
          { term: "Public/private keys", detail: "Asymmetric key pair where the public key can be shared and the private key must be protected." },
          { term: "Certificates", detail: "Bind a public key to an identity and help systems trust secure connections." }
        ]
      }
    ]
  },
  {
    title: "3. Network Device Security",
    sections: [
      {
        type: "Wireless security",
        points: [
          { term: "Encryption strength", detail: "WEP is weak and should be avoided. WPA2 or WPA3 provides stronger Wi-Fi protection." },
          { term: "SSID", detail: "The wireless network name clients see when connecting." },
          { term: "MAC filtering", detail: "Allows or blocks devices by hardware address. It adds control but can be bypassed, so do not rely on it alone." },
          { term: "Default settings", detail: "Out-of-box usernames, passwords, and SSIDs should be changed because attackers know common defaults." }
        ]
      },
      {
        type: "Protection devices",
        points: [
          { term: "Hardware firewall", detail: "A dedicated device that filters traffic between networks." },
          { term: "Software firewall", detail: "Firewall software running on a server, workstation, or virtual system." },
          { term: "Host firewall", detail: "Protects one endpoint by filtering inbound and outbound traffic." },
          { term: "Network firewall", detail: "Protects a network boundary or segment." },
          { term: "Stateful inspection", detail: "Tracks connection state and allows traffic that belongs to valid sessions." },
          { term: "Stateless inspection", detail: "Filters packets based only on rules, without remembering connection state." },
          { term: "Security baselines", detail: "Approved secure configuration standards used to compare and harden systems or devices." },
          { term: "IDS", detail: "Intrusion Detection System alerts when suspicious activity is found." },
          { term: "IPS", detail: "Intrusion Prevention System can block suspicious traffic inline." },
          { term: "SIEM", detail: "Security Information and Event Management collects and correlates logs for detection and investigation." }
        ]
      },
      {
        type: "Filtering controls",
        points: [
          { term: "Content filtering", detail: "Allows or blocks websites, files, or content based on category, risk, or policy." },
          { term: "Blacklisting", detail: "Blocks known bad or unwanted items while allowing others." },
          { term: "Whitelisting", detail: "Allows only approved items and blocks everything else by default." }
        ]
      },
      {
        type: "Network isolation",
        points: [
          { term: "Routing", detail: "Moves traffic between networks and can enforce separation through routes and access rules." },
          { term: "Honeynet", detail: "A decoy network used to observe attacker behavior without exposing real systems." },
          { term: "DMZ/perimeter network", detail: "A separate zone for public-facing services, isolated from the internal network." },
          { term: "NAT/PAT", detail: "Translates private IP addresses to public addresses. PAT lets many devices share one public IP using ports." },
          { term: "VPN", detail: "Creates an encrypted tunnel for remote users or site-to-site connections." },
          { term: "IPsec", detail: "Secures IP traffic with authentication and encryption." },
          { term: "Air gap", detail: "Physically separates a network from other networks for strong isolation." },
          { term: "DirectAccess", detail: "Microsoft remote access technology that connects managed clients to internal resources." },
          { term: "VLAN", detail: "Logically separates devices into different network segments." }
        ]
      },
      {
        type: "Protocol security",
        points: [
          { term: "Tunneling", detail: "Encapsulates one type of network traffic inside another, often to secure or transport it." },
          { term: "DNSSEC", detail: "Adds digital signatures to DNS data so clients can verify DNS responses were not altered." },
          { term: "Network sniffing", detail: "Capturing network traffic. It is useful for troubleshooting but dangerous if used to steal data." },
          { term: "SSH vs. Telnet", detail: "SSH encrypts remote administration. Telnet sends data in cleartext and should be avoided." },
          { term: "HTTPS vs. HTTP", detail: "HTTPS uses TLS to protect web traffic. HTTP does not encrypt data." }
        ]
      },
      {
        type: "Ports to memorize",
        points: [
          { term: "FTP 21", detail: "File Transfer Protocol. Traditional FTP is not encrypted." },
          { term: "SSH 22", detail: "Secure remote command-line administration." },
          { term: "Telnet 23", detail: "Insecure remote command-line access; replaced by SSH." },
          { term: "SMTP 25", detail: "Used for sending email between mail servers." },
          { term: "DNS 53", detail: "Resolves domain names to IP addresses." },
          { term: "HTTP 80", detail: "Unencrypted web traffic." },
          { term: "IMAP 143", detail: "Email retrieval protocol used by mail clients to access messages on a mail server." },
          { term: "HTTPS 443", detail: "Encrypted web traffic using TLS." },
          { term: "LDAP 389", detail: "Directory access protocol without TLS by default." },
          { term: "LDAPS 636", detail: "LDAP protected with TLS." },
          { term: "SNMP 161", detail: "Network monitoring and management protocol." },
          { term: "RDP 3389", detail: "Microsoft Remote Desktop Protocol." }
        ]
      }
    ]
  },
  {
    title: "4. Secure Computing",
    sections: [
      {
        type: "Email protection",
        points: [
          { term: "Antispam", detail: "Filters unwanted or suspicious email before it reaches users." },
          { term: "Spoofing", detail: "Fakes sender information to make a message look trusted." },
          { term: "Phishing", detail: "Tricks users into giving information, opening links, or downloading malware." },
          { term: "Pharming", detail: "Redirects users to fake websites, often through DNS or host-file manipulation." },
          { term: "Email client protection", detail: "Uses filtering, attachment scanning, link checks, and safe settings to reduce email threats." },
          { term: "User training", detail: "Teaches users to recognize suspicious messages, links, attachments, and requests." }
        ]
      },
      {
        type: "Browser security",
        points: [
          { term: "Security settings", detail: "Browser controls for pop-ups, downloads, cookies, permissions, and unsafe content." },
          { term: "Cache management", detail: "Clearing stored pages, cookies, and temporary data can reduce exposed private information on shared devices." },
          { term: "Private browsing", detail: "Reduces local history and cache storage, but it does not hide all activity from networks, websites, or providers." }
        ]
      },
      {
        type: "Anti-malware tasks",
        points: [
          { term: "Install protection", detail: "Adds antivirus or anti-malware software to detect and block malicious activity." },
          { term: "Uninstall/reinstall", detail: "Used when protection is broken, corrupted, or needs replacement." },
          { term: "Updates", detail: "New signatures and engine updates help detect newer threats." },
          { term: "Scheduled scans", detail: "Regularly checks systems for malware even when no user has noticed a problem." },
          { term: "Alert investigation", detail: "Reviews what was detected, where it came from, and whether more systems are affected." },
          { term: "Remediation", detail: "Removes or quarantines malware and fixes the weakness that allowed it." }
        ]
      }
    ]
  }
];

const questionOptionGlossary = [
  { term: "Adware", detail: "Software that displays unwanted advertisements. It may track browsing behavior or install with other unwanted programs." },
  { term: "Antivirus software", detail: "Security software that detects, blocks, quarantines, or removes malware." },
  { term: "Backdoor", detail: "A hidden way to access a system while bypassing normal authentication." },
  { term: "Buffer overflow", detail: "An attack that writes more data to memory than expected, which can crash software or allow code execution." },
  { term: "BitLocker", detail: "Microsoft drive encryption that protects stored data, often with TPM support." },
  { term: "Blacklisting", detail: "A filtering approach that blocks known bad or unwanted items." },
  { term: "Brute force attack", detail: "An attack that repeatedly guesses passwords, PINs, or keys until one works." },
  { term: "Confidentiality", detail: "Protects data from unauthorized viewing or disclosure." },
  { term: "Content filtering", detail: "Allows or blocks web pages, files, or traffic based on category, content, or policy." },
  { term: "Cross-site scripting", detail: "A web attack where malicious scripts run in another user's browser." },
  { term: "Delegation", detail: "Giving another user or group limited authority to perform specific tasks without full administrator access." },
  { term: "Differential backup", detail: "Copies data changed since the last full backup." },
  { term: "DNS", detail: "Domain Name System resolves names, such as example.com, to IP addresses." },
  { term: "DNSSEC", detail: "Adds digital signatures to DNS records so clients can verify DNS responses were not altered." },
  { term: "Firewall", detail: "A control that permits or denies traffic based on rules." },
  { term: "FTP", detail: "File Transfer Protocol, commonly on port 21. Traditional FTP is not encrypted." },
  { term: "Full backup", detail: "Copies all selected data." },
  { term: "Group Policy", detail: "Windows centralized configuration feature; gpupdate refreshes it and gpresult reports applied settings." },
  { term: "gpresult", detail: "Windows command that shows which Group Policy settings apply to a user or computer." },
  { term: "gpupdate", detail: "Windows command that refreshes Group Policy settings." },
  { term: "Honeynet", detail: "A decoy network used to observe attacker behavior without exposing real production systems." },
  { term: "HTTP", detail: "Unencrypted web traffic, commonly on port 80." },
  { term: "HTTPS", detail: "Encrypted web traffic using TLS, commonly on port 443." },
  { term: "IDS", detail: "Intrusion Detection System watches for suspicious activity and alerts." },
  { term: "IMAP", detail: "Email retrieval protocol listed in the well-known ports objective." },
  { term: "Incremental backup", detail: "Copies data changed since the last backup of any type." },
  { term: "Inheritance", detail: "Child files or folders receiving permissions from a parent folder." },
  { term: "Integrity", detail: "Protects data from unauthorized or accidental modification." },
  { term: "IPsec", detail: "A suite of protocols that secures IP communications with authentication and encryption." },
  { term: "IPS", detail: "Intrusion Prevention System can block suspicious traffic inline." },
  { term: "Kerberos", detail: "Ticket-based authentication protocol commonly used in Windows domain environments." },
  { term: "Keylogger", detail: "Malware or hardware that records keystrokes, often to steal passwords." },
  { term: "LDAP", detail: "Directory access protocol commonly used for querying user and directory information." },
  { term: "LDAPS", detail: "LDAP protected with TLS, commonly on port 636." },
  { term: "Least privilege", detail: "Users receive only the access needed for their work." },
  { term: "Logic bomb", detail: "Malicious code that activates when a condition is met, such as a date or event." },
  { term: "MAC filtering", detail: "Allows or blocks devices by MAC address. It adds control but is not strong enough alone." },
  { term: "Man-in-the-middle", detail: "An attack where someone intercepts or changes communication between two parties." },
  { term: "Man-in-the-browser", detail: "A browser-based interception attack where malware changes or observes web activity in the browser." },
  { term: "Mantrap", detail: "A controlled physical entry area with two interlocking doors." },
  { term: "MFA", detail: "Multifactor authentication uses more than one factor, such as password plus authenticator approval." },
  { term: "NAT", detail: "Network Address Translation maps private addresses to public addresses." },
  { term: "NAT/PAT", detail: "PAT lets many internal devices share one public IP by tracking different ports." },
  { term: "Non-repudiation", detail: "Provides proof that an action happened and who performed it." },
  { term: "Pharming", detail: "Redirects users to fraudulent websites, often by abusing DNS or host-file settings." },
  { term: "Phishing", detail: "Tricks users into revealing information or taking unsafe actions through fake messages." },
  { term: "Polymorphic virus", detail: "Malware that changes its code or appearance to avoid signature detection." },
  { term: "Private key", detail: "The secret key in asymmetric cryptography. It must be protected." },
  { term: "Public key", detail: "The shareable key in asymmetric cryptography." },
  { term: "Ransomware", detail: "Malware that blocks or encrypts data and demands payment." },
  { term: "RDP", detail: "Remote Desktop Protocol, commonly on port 3389." },
  { term: "Rootkit", detail: "Malware that hides itself and may maintain privileged access." },
  { term: "SFTP", detail: "Secure File Transfer Protocol over SSH." },
  { term: "Security baseline", detail: "A standard secure configuration used to harden and compare systems or network devices." },
  { term: "Share permissions", detail: "Permissions that control access to a shared folder over the network." },
  { term: "SIEM", detail: "Security Information and Event Management collects and correlates logs and alerts." },
  { term: "SMTP", detail: "Email sending protocol, commonly on port 25." },
  { term: "SNMP", detail: "Network monitoring and management protocol, commonly on port 161." },
  { term: "Spoofing", detail: "Faking identity information, such as an email sender, IP address, or website." },
  { term: "Spyware", detail: "Malware that secretly monitors user activity or collects information." },
  { term: "SQL injection", detail: "A web/database attack that inserts malicious SQL commands through unsafe input." },
  { term: "SSH", detail: "Secure remote administration protocol, commonly on port 22." },
  { term: "SSID", detail: "The visible or configured name of a wireless network." },
  { term: "Telnet", detail: "Insecure remote command-line protocol, commonly on port 23. SSH should be used instead." },
  { term: "Trojan horse", detail: "Malware that pretends to be useful or legitimate software." },
  { term: "TPM", detail: "Trusted Platform Module, a hardware component that helps protect cryptographic keys." },
  { term: "UAC", detail: "User Account Control prompts before privileged Windows changes." },
  { term: "Virus", detail: "Malware that attaches to files or programs and spreads when executed." },
  { term: "VLAN", detail: "Virtual LAN, a logical network segment." },
  { term: "VPN", detail: "Virtual Private Network creates an encrypted tunnel over an untrusted network." },
  { term: "WEP", detail: "Old and weak Wi-Fi security method that should not be used." },
  { term: "Whitelisting", detail: "Allows only approved items and blocks everything else by default." },
  { term: "Worm", detail: "Malware that can self-spread across systems or networks." },
  { term: "WPA2/WPA3", detail: "Modern Wi-Fi security modes stronger than WEP." },
  { term: "XSS", detail: "Another name for cross-site scripting." },
  { term: "Zero day", detail: "A vulnerability or attack before a fix is publicly available." }
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
  { c: "1. Defense in Depth", q: "Which attack can overwrite memory by sending more data than a program expects?", a: "Buffer overflow", o: ["Buffer overflow", "Pharming", "MAC filtering", "Differential backup"], e: "Buffer overflow is listed in the Certiport attack-types objective." },
  { c: "1. Defense in Depth", q: "Which malware attaches to files or programs and spreads when they run?", a: "Virus", o: ["Virus", "Worm", "Backdoor", "Logic bomb"], e: "A virus usually needs an infected file or program to execute so it can spread." },
  { c: "1. Defense in Depth", q: "Which malware can spread across networks without needing a user to run an infected file?", a: "Worm", o: ["Worm", "Adware", "Trojan horse", "Keylogger"], e: "Worms are known for self-spreading across systems or networks." },
  { c: "1. Defense in Depth", q: "Which malware is disguised as useful or legitimate software?", a: "Trojan horse", o: ["Trojan horse", "Buffer overflow", "VLAN", "DNSSEC"], e: "A Trojan horse tricks users by pretending to be legitimate." },
  { c: "1. Defense in Depth", q: "Which malware secretly monitors user activity or collects information?", a: "Spyware", o: ["Spyware", "Ransomware", "Firewall", "Full backup"], e: "Spyware is listed in the malware examples under attack types." },
  { c: "1. Defense in Depth", q: "Which malware provides hidden access that bypasses normal authentication?", a: "Backdoor", o: ["Backdoor", "Rootkit", "IMAP", "Share permissions"], e: "A backdoor is a hidden access method into a system." },
  { c: "1. Defense in Depth", q: "Which attack injects malicious database commands through unsafe input?", a: "SQL injection", o: ["SQL injection", "Pharming", "NAT", "Kerberos"], e: "SQL injection is named directly in the ITS Network Security attack-types objective." },
  { c: "1. Defense in Depth", q: "Which attack runs malicious scripts in a victim's browser?", a: "Cross-site scripting", o: ["Cross-site scripting", "IPsec", "Differential backup", "MAC filtering"], e: "XSS is a web application attack listed in the objective domain." },
  { c: "1. Defense in Depth", q: "Which attack attempts many passwords until one works?", a: "Brute force attack", o: ["Brute force attack", "DNSSEC", "BitLocker", "Content filtering"], e: "Brute force attacks are repeated guessing attempts against passwords or keys." },
  { c: "1. Defense in Depth", q: "Which attack intercepts or alters communication between two parties?", a: "Man-in-the-middle", o: ["Man-in-the-middle", "Full backup", "gpresult", "SSID hiding"], e: "MITM and MITB are listed in the attack-types objective." },
  { c: "1. Defense in Depth", q: "Which attack uses malware inside the browser to observe or change web activity?", a: "Man-in-the-browser", o: ["Man-in-the-browser", "Mantrap", "NAT/PAT", "LDAPS"], e: "Man-in-the-browser is listed with man-in-the-middle in the Certiport attack-types objective." },
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
  { c: "2. Operating System Security", q: "What is the purpose of secure dynamic DNS updates?", a: "Allow only authorized systems to update DNS records", o: ["Allow only authorized systems to update DNS records", "Disable all DNS lookups", "Replace Kerberos tickets", "Encrypt browser cache"], e: "Secure dynamic DNS updates are listed under client and server protection." },
  { c: "2. Operating System Security", q: "What do software restriction policies help control?", a: "Which programs are allowed to run", o: ["Which programs are allowed to run", "Which DNS port is open", "Which emails are spam", "Which SSID is hidden"], e: "Software restriction policies reduce risk from unauthorized programs." },
  { c: "2. Operating System Security", q: "Which authentication method uses something more than just a password?", a: "Multifactor authentication", o: ["Multifactor authentication", "Single shared login", "Anonymous access", "Open Wi-Fi"], e: "MFA is directly listed under user authentication." },
  { c: "2. Operating System Security", q: "What is Kerberos used for?", a: "Ticket-based network authentication", o: ["Ticket-based network authentication", "Drive encryption", "Port translation", "Browser private mode"], e: "Kerberos is an authentication protocol used in domain environments." },
  { c: "2. Operating System Security", q: "What do Run As and sudo allow?", a: "Running tasks with elevated or alternate credentials", o: ["Running tasks with elevated or alternate credentials", "Disabling file permissions", "Creating DNSSEC signatures", "Filtering email spam"], e: "The objective domain mentions using secondary sign-on for administrative tasks." },
  { c: "2. Operating System Security", q: "Which permission type controls access over a network share?", a: "Share permissions", o: ["Share permissions", "SSID permissions", "NAT permissions", "Browser cache permissions"], e: "The exam objectives include file, folder, and share permissions." },
  { c: "2. Operating System Security", q: "What is permission inheritance?", a: "Child items receiving permissions from a parent folder", o: ["Child items receiving permissions from a parent folder", "A router learning routes", "A firewall tracking sessions", "A browser deleting cache"], e: "Inheritance is an important file and folder permission concept." },
  { c: "2. Operating System Security", q: "What permission topic covers files moved or copied within the same disk or to another disk?", a: "How moving or copying affects permissions", o: ["How moving or copying affects permissions", "How DNSSEC signs records", "How spam filters score mail", "How VPNs choose tunnels"], e: "The Certiport objective specifically mentions moving or copying files within the same disk or another disk." },
  { c: "2. Operating System Security", q: "What does taking ownership of a file allow?", a: "Changing permissions when authorized", o: ["Changing permissions when authorized", "Bypassing all auditing", "Creating a VPN", "Filtering websites"], e: "Ownership affects who can manage permissions on files and folders." },
  { c: "2. Operating System Security", q: "Why enable audit policies?", a: "To record security-relevant events", o: ["To record security-relevant events", "To assign DHCP addresses", "To hide user actions", "To change wireless channels"], e: "Auditing and log review facilitate non-repudiation." },
  { c: "2. Operating System Security", q: "Which item should be reviewed to investigate audited activity?", a: "Log files", o: ["Log files", "SSID broadcast", "Cable length", "NAT pool only"], e: "The objective domain includes reviewing log files and deciding what to audit." },
  { c: "2. Operating System Security", q: "What is BitLocker?", a: "A Microsoft drive encryption feature", o: ["A Microsoft drive encryption feature", "A firewall inspection mode", "An email protocol", "A honeynet service"], e: "BitLocker and drive encryption are listed under encryption knowledge." },
  { c: "2. Operating System Security", q: "Which OS security topic protects cached offline folders?", a: "Encrypting offline folders", o: ["Encrypting offline folders", "Changing SSID broadcast", "Running content filtering", "Creating a honeynet"], e: "Encrypting offline folders is listed under client and server protection." },
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
  { c: "3. Network Device Security", q: "What is a security baseline?", a: "An approved secure configuration standard", o: ["An approved secure configuration standard", "A hidden Wi-Fi name", "A type of malware", "A backup that copies everything"], e: "Security baselines are listed under network protection devices." },
  { c: "3. Network Device Security", q: "What is content filtering?", a: "Allowing or blocking content by policy or category", o: ["Allowing or blocking content by policy or category", "Delegating file ownership", "Updating Group Policy", "Creating a private key"], e: "Content filtering is listed with blacklisting and whitelisting." },
  { c: "3. Network Device Security", q: "What is blacklisting?", a: "Blocking known bad or unwanted items", o: ["Blocking known bad or unwanted items", "Allowing only approved items", "Encrypting a drive", "Creating an SSID"], e: "Blacklisting blocks specified items, while whitelisting allows only approved items." },
  { c: "3. Network Device Security", q: "What is whitelisting?", a: "Allowing only approved items", o: ["Allowing only approved items", "Blocking only known bad items", "Disabling all filters", "Clearing all logs"], e: "Whitelisting is more restrictive because only approved items are allowed." },
  { c: "3. Network Device Security", q: "What is a DMZ?", a: "A perimeter network for public-facing services", o: ["A perimeter network for public-facing services", "A local password database", "A browser private window", "A removable drive"], e: "Perimeter networks and DMZs are listed as network isolation methods." },
  { c: "3. Network Device Security", q: "What is a honeynet?", a: "A decoy network used to observe attackers", o: ["A decoy network used to observe attackers", "A secure email filter", "A backup rotation", "A Kerberos ticket"], e: "Honeynet is part of network isolation methods in the objective domain." },
  { c: "3. Network Device Security", q: "What does NAT/PAT do?", a: "Translates private addresses to public addresses, often using ports", o: ["Translates private addresses to public addresses, often using ports", "Signs DNS records", "Audits file access", "Filters spam"], e: "NAT/PAT is listed under network isolation methods." },
  { c: "3. Network Device Security", q: "What is an air-gapped network?", a: "A network physically isolated from other networks", o: ["A network physically isolated from other networks", "A public guest Wi-Fi", "A browser cache", "A software firewall"], e: "Air gap networks are listed as an isolation method." },
  { c: "3. Network Device Security", q: "Which Microsoft remote access technology is listed as a network isolation method?", a: "DirectAccess", o: ["DirectAccess", "Adware", "gpresult", "Antispam"], e: "DirectAccess appears in the Certiport network isolation objective." },
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
  { c: "3. Network Device Security", q: "Which protocol is used by mail clients to access messages on a mail server?", a: "IMAP", o: ["IMAP", "RDP", "SNMP", "Telnet"], e: "IMAP is one of the well-known protocols listed in the Certiport objective domain." },

  { c: "4. Secure Computing", q: "Which attack uses fake messages to trick users into giving information?", a: "Phishing", o: ["Phishing", "DNSSEC", "BitLocker", "NAT"], e: "Email protection includes spoofing, phishing, and pharming." },
  { c: "4. Secure Computing", q: "What is email spoofing?", a: "Forging sender information to make email look trusted", o: ["Forging sender information to make email look trusted", "Encrypting a folder", "Creating a VLAN", "Refreshing Group Policy"], e: "Spoofing is listed under email protection." },
  { c: "4. Secure Computing", q: "What is pharming?", a: "Redirecting users to a fraudulent site", o: ["Redirecting users to a fraudulent site", "Creating a firewall rule", "Running a full backup", "Disabling UAC"], e: "Pharming can redirect users even when they try to visit a legitimate site." },
  { c: "4. Secure Computing", q: "What is antispam software designed to reduce?", a: "Unwanted or malicious email", o: ["Unwanted or malicious email", "Drive encryption", "Group Policy inheritance", "VLAN routing"], e: "Antispam is part of email protection." },
  { c: "4. Secure Computing", q: "Why is user training important for email security?", a: "Users can learn to recognize phishing and unsafe attachments", o: ["Users can learn to recognize phishing and unsafe attachments", "Users can bypass MFA", "Users can disable logs", "Users can remove encryption"], e: "User training is named directly in the secure computing objective." },
  { c: "4. Secure Computing", q: "What is private browsing mainly designed to reduce?", a: "Local browsing traces on the device", o: ["Local browsing traces on the device", "Network attacks on the server", "Need for antivirus", "Firewall inspection"], e: "Private browsing is a browser security setting, but it does not make a user anonymous to all parties." },
  { c: "4. Secure Computing", q: "Why manage browser cache?", a: "To reduce stored private data and stale content", o: ["To reduce stored private data and stale content", "To create Kerberos tickets", "To configure NAT", "To enable SNMP"], e: "Cache management is specifically listed under browser security." },
  { c: "4. Secure Computing", q: "Which task keeps antivirus able to detect newer threats?", a: "Updating antivirus definitions or software", o: ["Updating antivirus definitions or software", "Disabling scans", "Clearing all audit logs", "Opening Telnet"], e: "Installing, updating, scheduling scans, and investigating alerts are part of anti-malware objectives." },
  { c: "4. Secure Computing", q: "What should you do when anti-malware reports an alert?", a: "Investigate and remediate the alert", o: ["Investigate and remediate the alert", "Ignore it if the device still works", "Disable the scanner permanently", "Delete all backups"], e: "The objective domain includes remediation and investigating alerts." },
  { c: "4. Secure Computing", q: "Why schedule antivirus scans?", a: "To regularly check systems for malware", o: ["To regularly check systems for malware", "To sign DNS responses", "To refresh Group Policy", "To translate addresses"], e: "Scheduling scans is named in the anti-malware objective." },

  { c: "1. Defense in Depth", q: "A school installs door locks, endpoint antivirus, user training, and firewall filtering. Which concept best describes using these controls together?", a: "Defense in depth", o: ["Defense in depth", "Single sign-on", "Port forwarding", "Private browsing"], e: "Defense in depth uses multiple layers so one failed control does not leave everything exposed." },
  { c: "1. Defense in Depth", q: "A user can read payroll files even though their job does not require payroll access. Which principle is being violated?", a: "Least privilege", o: ["Least privilege", "Availability", "NAT/PAT", "Content filtering"], e: "Least privilege means access should be limited to what the user needs." },
  { c: "1. Defense in Depth", q: "A server has an old unpatched web service that attackers can exploit. What is the old service?", a: "Vulnerability", o: ["Vulnerability", "Threat", "Backup", "Certificate"], e: "The weakness is the vulnerability; an attacker or malware would be the threat." },
  { c: "1. Defense in Depth", q: "An attacker floods a website until students cannot access it. Which security goal is most affected?", a: "Availability", o: ["Availability", "Confidentiality", "Non-repudiation", "Delegation"], e: "The service is unavailable, so availability is the target." },
  { c: "1. Defense in Depth", q: "A suspicious email asks a student to log in to a fake school portal. Which attack type is this?", a: "Phishing", o: ["Phishing", "Buffer overflow", "BitLocker", "VLAN"], e: "Phishing tricks users through fake messages, links, or portals." },
  { c: "1. Defense in Depth", q: "A malicious program waits until Friday at 5 PM before deleting files. What type of malware behavior is this?", a: "Logic bomb", o: ["Logic bomb", "Adware", "Mantrap", "DNSSEC"], e: "A logic bomb triggers when a condition such as time or event is met." },
  { c: "1. Defense in Depth", q: "A program keeps changing its signature so antivirus based on known patterns misses it. What is it most likely using?", a: "Polymorphic behavior", o: ["Polymorphic behavior", "Full backup", "Secure DNS update", "MAC filtering"], e: "Polymorphic malware changes appearance to avoid signature detection." },
  { c: "1. Defense in Depth", q: "A backup plan stores one complete copy every Sunday and only changed files after that. What is the Sunday copy?", a: "Full backup", o: ["Full backup", "Incremental backup", "Differential backup", "Audit policy"], e: "A full backup copies all selected data." },
  { c: "1. Defense in Depth", q: "A backup job copies only files changed since yesterday's backup. Which backup type is this?", a: "Incremental backup", o: ["Incremental backup", "Differential backup", "Full backup", "Image restore"], e: "Incremental backups copy changes since the last backup of any type." },
  { c: "1. Defense in Depth", q: "A company wants proof of which account changed a sensitive file. Which goal does this support?", a: "Non-repudiation", o: ["Non-repudiation", "SSID", "Pharming", "NAT"], e: "Non-repudiation is supported by audit records that show who performed an action." },

  { c: "2. Operating System Security", q: "A Windows user opens an installer and receives a prompt before administrator-level changes are made. Which feature caused this?", a: "User Account Control", o: ["User Account Control", "DNSSEC", "SNMP", "Content filtering"], e: "UAC prompts before privileged Windows changes." },
  { c: "2. Operating System Security", q: "An administrator wants to force updated Windows domain settings immediately. Which command should be used?", a: "gpupdate", o: ["gpupdate", "gpresult", "BitLocker", "LDAPS"], e: "gpupdate refreshes Group Policy settings." },
  { c: "2. Operating System Security", q: "A technician needs to see which Group Policy settings are applied to a computer. Which command helps?", a: "gpresult", o: ["gpresult", "gpupdate", "sudo", "IMAP"], e: "gpresult reports applied Group Policy settings." },
  { c: "2. Operating System Security", q: "A user authenticates to a domain and receives tickets to access services without resending the password each time. What is being used?", a: "Kerberos", o: ["Kerberos", "RDP", "WEP", "NAT"], e: "Kerberos uses tickets for network authentication." },
  { c: "2. Operating System Security", q: "A Linux user runs one administrative command without logging in permanently as root. Which command is commonly used?", a: "sudo", o: ["sudo", "gpresult", "Telnet", "SNMP"], e: "sudo allows permitted elevated commands." },
  { c: "2. Operating System Security", q: "A folder gives newly created files the same access rules as the parent folder. Which permission concept is this?", a: "Inheritance", o: ["Inheritance", "Spoofing", "Tunneling", "Pharming"], e: "Inheritance passes parent permissions to child objects." },
  { c: "2. Operating System Security", q: "A laptop is stolen, but the internal drive is encrypted with Windows drive encryption. Which feature most likely protected it?", a: "BitLocker", o: ["BitLocker", "SIEM", "Honeynet", "Antispam"], e: "BitLocker provides Windows drive encryption." },
  { c: "2. Operating System Security", q: "A security team decides which logon and file access events should be recorded. What are they configuring?", a: "Audit policy", o: ["Audit policy", "SSID", "NAT pool", "Browser cache"], e: "Audit policy controls which events are logged." },
  { c: "2. Operating System Security", q: "A company prevents unknown executable files from running on client PCs. Which OS protection concept matches this?", a: "Software restriction policies", o: ["Software restriction policies", "Pharming", "Differential backup", "RDP"], e: "Software restriction policies control which programs can run." },
  { c: "2. Operating System Security", q: "A user needs temporary admin rights to run one app with another account on Windows. Which method fits?", a: "Run As", o: ["Run As", "DNSSEC", "WPA3", "Honeynet"], e: "Run As lets a program execute under alternate credentials." },

  { c: "3. Network Device Security", q: "A wireless network still uses WEP. What is the best security concern?", a: "WEP can be cracked and should be replaced", o: ["WEP can be cracked and should be replaced", "WEP is the strongest Wi-Fi mode", "WEP is required for DNSSEC", "WEP blocks all phishing"], e: "WEP is weak; WPA2 or WPA3 is preferred." },
  { c: "3. Network Device Security", q: "A company changes the default admin password and default SSID on a new access point. Which objective topic does this match?", a: "Default out-of-box configuration", o: ["Default out-of-box configuration", "Audit policy", "Email spoofing", "File ownership"], e: "Changing insecure defaults is part of wireless device security." },
  { c: "3. Network Device Security", q: "A device allows traffic only if it belongs to an established connection. What kind of inspection is this?", a: "Stateful inspection", o: ["Stateful inspection", "Stateless inspection", "Private browsing", "Full backup"], e: "Stateful inspection tracks connection state." },
  { c: "3. Network Device Security", q: "A monitoring system alerts on suspicious traffic but does not block it. Which device is described?", a: "IDS", o: ["IDS", "IPS", "NAT", "TPM"], e: "IDS detects and alerts; IPS can block inline." },
  { c: "3. Network Device Security", q: "A security tool blocks suspicious network traffic inline. Which tool is this?", a: "IPS", o: ["IPS", "IDS", "IMAP", "WEP"], e: "IPS can prevent or block suspicious traffic." },
  { c: "3. Network Device Security", q: "A public web server is placed in a separate perimeter network away from internal clients. What is this zone called?", a: "DMZ", o: ["DMZ", "SSID", "UAC", "SFTP"], e: "A DMZ/perimeter network isolates public-facing services." },
  { c: "3. Network Device Security", q: "A lab network is intentionally made as a decoy so attacks can be observed. What is it?", a: "Honeynet", o: ["Honeynet", "Mantrap", "Pharming", "BitLocker"], e: "A honeynet is a decoy network for observing attacker behavior." },
  { c: "3. Network Device Security", q: "A private address 192.168.1.20 is translated before traffic goes to the internet. Which feature is being used?", a: "NAT", o: ["NAT", "DNSSEC", "LDAP", "Antispam"], e: "NAT translates private addresses to public addresses." },
  { c: "3. Network Device Security", q: "A company separates accounting and guest devices into different logical networks on the same switch infrastructure. What is being used?", a: "VLAN", o: ["VLAN", "Adware", "gpupdate", "Browser cache"], e: "VLANs provide logical network separation." },
  { c: "3. Network Device Security", q: "A user securely transfers files over SSH. Which protocol is being used?", a: "SFTP", o: ["SFTP", "FTP", "SMTP", "HTTP"], e: "SFTP provides secure file transfer over SSH." },

  { c: "4. Secure Computing", q: "A user receives email from a sender that appears to be the school registrar, but the sender identity was forged. What is this?", a: "Spoofing", o: ["Spoofing", "BitLocker", "VLAN", "Audit policy"], e: "Spoofing forges identity information such as email sender details." },
  { c: "4. Secure Computing", q: "A student types the correct website address but is redirected to a fake login page due to DNS manipulation. What attack is this?", a: "Pharming", o: ["Pharming", "Phishing", "Whitelisting", "Kerberos"], e: "Pharming redirects users to fraudulent sites." },
  { c: "4. Secure Computing", q: "A mail gateway filters junk and suspicious email before it reaches users. Which protection is this?", a: "Antispam", o: ["Antispam", "DNSSEC", "NAT/PAT", "TPM"], e: "Antispam helps reduce unwanted or malicious email." },
  { c: "4. Secure Computing", q: "A browser is configured to block unsafe downloads and limit site permissions. Which topic is this?", a: "Browser security settings", o: ["Browser security settings", "Differential backup", "DirectAccess", "Share permissions"], e: "Browser security includes browser settings and safe configuration." },
  { c: "4. Secure Computing", q: "A user clears stored cookies and temporary browser files on a shared computer. Which topic is this?", a: "Cache management", o: ["Cache management", "Kerberos", "VLAN routing", "Software restriction"], e: "Cache management reduces locally stored private data." },
  { c: "4. Secure Computing", q: "A user opens a private browsing window. What is the main local benefit?", a: "It reduces local browsing traces", o: ["It reduces local browsing traces", "It encrypts all network traffic", "It disables phishing", "It replaces antivirus"], e: "Private browsing reduces local history/cache traces but does not make all activity anonymous." },
  { c: "4. Secure Computing", q: "Antivirus detects a malicious file and moves it away so it cannot run. What action is this?", a: "Quarantine", o: ["Quarantine", "Pharming", "Tunneling", "Inheritance"], e: "Quarantine isolates suspicious or malicious files." },
  { c: "4. Secure Computing", q: "A system has antivirus installed, but definitions are six months old. What should be done first to improve detection?", a: "Update antivirus definitions or software", o: ["Update antivirus definitions or software", "Disable scheduled scans", "Open Telnet", "Clear audit logs"], e: "Anti-malware must be updated to detect newer threats." },
  { c: "4. Secure Computing", q: "After malware is removed, the technician checks alerts and scans again to confirm the system is clean. Which objective task is this?", a: "Remediation and alert investigation", o: ["Remediation and alert investigation", "NAT translation", "SSID broadcast", "File delegation"], e: "The secure computing objective includes remediation and investigating alerts." },
  { c: "4. Secure Computing", q: "Employees are taught not to open unexpected attachments or enter passwords from email links. Which protection is this?", a: "User training", o: ["User training", "Stateful inspection", "BitLocker", "DNSSEC"], e: "User training is part of email protection." }
];

const activeQuestions = examQuestions;
const nonCertQuestions = [
  { c: "General Network Security", q: "Which device is commonly used to filter traffic between networks based on rules?", a: "Firewall", o: ["Firewall", "Hub", "Keyboard", "Patch cable"], e: "Firewalls permit or deny traffic based on security rules." },
  { c: "General Network Security", q: "Which system alerts when suspicious network activity is detected but does not normally block traffic?", a: "IDS", o: ["IDS", "IPS", "NAT", "DHCP"], e: "An IDS detects and alerts; an IPS can block inline." },
  { c: "General Network Security", q: "Which system can actively block malicious traffic inline?", a: "IPS", o: ["IPS", "IDS", "DNS", "NTP"], e: "An IPS is placed inline and can prevent detected attacks." },
  { c: "General Network Security", q: "What does a VPN primarily provide over an untrusted network?", a: "Encrypted tunnel", o: ["Encrypted tunnel", "More RAM", "Open Wi-Fi", "Printer sharing"], e: "VPNs protect traffic by tunneling it securely." },
  { c: "General Network Security", q: "Which VPN type is best for one remote employee connecting to headquarters?", a: "Remote access VPN", o: ["Remote access VPN", "Site-to-site VPN", "Open wireless", "Content filter"], e: "Remote access VPNs connect individual users to an organization." },
  { c: "General Network Security", q: "Which VPN type connects two office networks together?", a: "Site-to-site VPN", o: ["Site-to-site VPN", "Remote access VPN", "Guest Wi-Fi", "Adware"], e: "Site-to-site VPNs link networks at different locations." },
  { c: "General Network Security", q: "Which firewall inspection method remembers whether packets belong to an active conversation?", a: "Stateful inspection", o: ["Stateful inspection", "Stateless inspection", "Private browsing", "Full backup"], e: "Stateful inspection tracks connection state." },
  { c: "General Network Security", q: "Which firewall inspection method evaluates each packet without remembering session state?", a: "Stateless inspection", o: ["Stateless inspection", "Stateful inspection", "Kerberos", "WPA3"], e: "Stateless filtering applies packet rules without session memory." },
  { c: "General Network Security", q: "Which network zone commonly hosts public-facing servers while separating them from the internal LAN?", a: "DMZ", o: ["DMZ", "SSID", "TPM", "UAC"], e: "A DMZ isolates public services from internal systems." },
  { c: "General Network Security", q: "What does NAT do?", a: "Translates private IP addresses to public addresses", o: ["Translates private IP addresses to public addresses", "Encrypts hard drives", "Blocks spam", "Stores passwords"], e: "NAT maps private internal addresses to routable addresses." },
  { c: "General Network Security", q: "What does PAT add to NAT?", a: "Port tracking so many devices can share one public IP", o: ["Port tracking so many devices can share one public IP", "Antivirus signatures", "Wireless encryption only", "Browser history"], e: "PAT tracks ports to let multiple hosts share one public address." },
  { c: "General Network Security", q: "Which concept means never automatically trusting traffic just because it is inside the network?", a: "Zero trust", o: ["Zero trust", "Default allow", "Open access", "Hub mode"], e: "Zero trust verifies access explicitly and assumes no implicit trust." },
  { c: "General Network Security", q: "Which control separates departments into different logical networks?", a: "VLAN", o: ["VLAN", "HTTP", "Adware", "Cookie"], e: "VLANs provide logical segmentation." },
  { c: "General Network Security", q: "What does a WAF mainly protect?", a: "Web applications", o: ["Web applications", "Keyboard input", "Laptop batteries", "Cable labels"], e: "A web application firewall filters application-layer web attacks." },
  { c: "General Network Security", q: "Which attack attempts to overload a service so legitimate users cannot access it?", a: "Denial of service", o: ["Denial of service", "Hashing", "VLAN hopping", "Drive encryption"], e: "DoS attacks target availability." },
  { c: "General Network Security", q: "Which attack uses many systems to flood a target at once?", a: "Distributed denial of service", o: ["Distributed denial of service", "Single sign-on", "DNSSEC", "SFTP"], e: "DDoS attacks use multiple sources against one target." },
  { c: "General Network Security", q: "Which attack inserts malicious database commands through unsafe user input?", a: "SQL injection", o: ["SQL injection", "Spoofing", "SNMP", "Full backup"], e: "SQL injection abuses unsafe database query handling." },
  { c: "General Network Security", q: "Which web attack injects scripts that run in another user's browser?", a: "Cross-site scripting", o: ["Cross-site scripting", "IPsec", "RDP", "MAC filtering"], e: "XSS runs malicious script in the victim browser context." },
  { c: "General Network Security", q: "Which attack forges identity information to appear trusted?", a: "Spoofing", o: ["Spoofing", "Compression", "Formatting", "Patching"], e: "Spoofing falsifies identity information." },
  { c: "General Network Security", q: "Which attack tricks users through fake messages or links?", a: "Phishing", o: ["Phishing", "Routing", "Hashing", "Whitelisting"], e: "Phishing is social engineering through deceptive messages." },
  { c: "General Network Security", q: "Which malware records keystrokes?", a: "Keylogger", o: ["Keylogger", "Firewall", "VLAN", "Certificate"], e: "Keyloggers capture typed information, often passwords." },
  { c: "General Network Security", q: "Which malware hides itself and may maintain privileged access?", a: "Rootkit", o: ["Rootkit", "Adware", "Cookie", "Router"], e: "Rootkits conceal malware and privileged access." },
  { c: "General Network Security", q: "Which malware encrypts files and demands payment?", a: "Ransomware", o: ["Ransomware", "Spyware", "DNSSEC", "SFTP"], e: "Ransomware denies access and demands ransom." },
  { c: "General Network Security", q: "Which malware spreads by itself across networks?", a: "Worm", o: ["Worm", "Trojan horse", "Adware", "Logic bomb"], e: "Worms self-propagate across systems." },
  { c: "General Network Security", q: "Which malware pretends to be useful software?", a: "Trojan horse", o: ["Trojan horse", "Worm", "VLAN", "Proxy"], e: "Trojans rely on disguise to get executed." },
  { c: "General Network Security", q: "Which wireless security mode should be avoided because it is weak?", a: "WEP", o: ["WEP", "WPA2", "WPA3", "802.1X"], e: "WEP is outdated and easily cracked." },
  { c: "General Network Security", q: "Which wireless security mode is stronger and newer than WPA2-Personal?", a: "WPA3-Personal", o: ["WPA3-Personal", "WEP", "Open Wi-Fi", "Telnet"], e: "WPA3 improves Wi-Fi security over older modes." },
  { c: "General Network Security", q: "What does SSID mean in wireless networking?", a: "Wireless network name", o: ["Wireless network name", "Firewall rule", "Password hash", "Mail protocol"], e: "The SSID is the Wi-Fi network name." },
  { c: "General Network Security", q: "Which authentication method is common for enterprise Wi-Fi?", a: "802.1X", o: ["802.1X", "WEP only", "Anonymous access", "HTTP"], e: "802.1X is commonly used with enterprise authentication." },
  { c: "General Network Security", q: "Which protocol securely replaces Telnet for remote administration?", a: "SSH", o: ["SSH", "FTP", "HTTP", "POP3"], e: "SSH encrypts remote administrative sessions." },
  { c: "General Network Security", q: "Which protocol protects web traffic with TLS?", a: "HTTPS", o: ["HTTPS", "HTTP", "Telnet", "TFTP"], e: "HTTPS is HTTP protected by TLS." },
  { c: "General Network Security", q: "Which service resolves domain names to IP addresses?", a: "DNS", o: ["DNS", "DHCP", "SMTP", "RDP"], e: "DNS translates names to addresses." },
  { c: "General Network Security", q: "Which protocol automatically gives IP configuration to clients?", a: "DHCP", o: ["DHCP", "DNS", "SSH", "LDAP"], e: "DHCP assigns IP settings automatically." },
  { c: "General Network Security", q: "Which protocol sends email between mail servers?", a: "SMTP", o: ["SMTP", "IMAP", "SNMP", "SMB"], e: "SMTP sends mail." },
  { c: "General Network Security", q: "Which protocol is preferred for secure network management instead of older community-string versions?", a: "SNMPv3", o: ["SNMPv3", "SNMPv1", "Telnet", "FTP"], e: "SNMPv3 supports authentication and encryption." },
  { c: "General Network Security", q: "Which port is commonly used by HTTPS?", a: "443", o: ["443", "80", "22", "3389"], e: "HTTPS commonly uses TCP 443." },
  { c: "General Network Security", q: "Which port is commonly used by SSH?", a: "22", o: ["22", "23", "25", "53"], e: "SSH commonly uses TCP 22." },
  { c: "General Network Security", q: "Which port is commonly used by DNS?", a: "53", o: ["53", "80", "110", "389"], e: "DNS commonly uses port 53." },
  { c: "General Network Security", q: "Which port is commonly used by RDP?", a: "3389", o: ["3389", "443", "161", "636"], e: "RDP commonly uses TCP 3389." },
  { c: "General Network Security", q: "Which port is commonly used by LDAP?", a: "389", o: ["389", "636", "22", "25"], e: "LDAP commonly uses port 389." },
  { c: "General Network Security", q: "What does encryption mainly protect?", a: "Confidentiality", o: ["Confidentiality", "Cable length", "Screen resolution", "File size only"], e: "Encryption helps keep data unreadable to unauthorized parties." },
  { c: "General Network Security", q: "What does hashing mainly verify?", a: "Integrity", o: ["Integrity", "Wireless range", "User age", "Port speed"], e: "Hashes help detect whether data has changed." },
  { c: "General Network Security", q: "What does salting password hashes help prevent?", a: "Easy use of precomputed hash tables", o: ["Easy use of precomputed hash tables", "Firewall filtering", "DNS lookup", "VLAN tagging"], e: "Salts make identical passwords hash differently and reduce precomputed attacks." },
  { c: "General Network Security", q: "Which control gives users only the permissions they need?", a: "Least privilege", o: ["Least privilege", "Open access", "Default permit", "Public sharing"], e: "Least privilege limits unnecessary access." },
  { c: "General Network Security", q: "Which authentication control requires two or more factor types?", a: "MFA", o: ["MFA", "NAT", "DNS", "FTP"], e: "MFA combines factors such as password and device approval." },
  { c: "General Network Security", q: "Which system collects and correlates logs from many sources?", a: "SIEM", o: ["SIEM", "DHCP", "WEP", "RDP"], e: "SIEM centralizes and correlates security events." },
  { c: "General Network Security", q: "Which term means a normal behavior pattern used to spot unusual activity?", a: "Baseline", o: ["Baseline", "Backdoor", "Browser cache", "Packet loss"], e: "Baselines help detect deviations from normal activity." },
  { c: "General Network Security", q: "Which practice checks that backups can actually be used?", a: "Test restoration", o: ["Test restoration", "Disable logging", "Open ports", "Hide SSID"], e: "Testing restores confirms backups are usable." },
  { c: "General Network Security", q: "Which access model assigns permissions through job roles?", a: "RBAC", o: ["RBAC", "NAT", "DNSSEC", "WEP"], e: "Role-based access control grants permissions through roles." },
  { c: "General Network Security", q: "Which security approach blocks everything unless specifically permitted?", a: "Default deny", o: ["Default deny", "Default allow", "Open relay", "Guest access"], e: "Default deny is safer because only approved traffic is allowed." }
];
const importedGithubQuestions = [
  {
    "id": 1,
    "type": "single",
    "text": "How does role separation improve server security?",
    "options": [
      "By installing applications on separate hard disks.",
      "By physically separating high-security servers from other servers.",
      "By enforcing the principle of least privilege.",
      "By placing servers on separate VLANs."
    ],
    "correct": [
      2
    ],
    "explanation": "Role separation improves security by enforcing the principle of least privilege — users and processes only get the minimum permissions needed."
  },
  {
    "id": 2,
    "type": "truefalse",
    "text": "For each statement, select True or False.",
    "statements": [
      {
        "text": "Because senior executives have rights to access sensitive data, they should use administrator accounts.",
        "correct": false,
        "explanation": "False. Executives should use standard accounts; admin rights are separate from data access rights."
      },
      {
        "text": "One purpose of User Account Control (UAC) is to grant users the lowest level permissions required to complete their tasks.",
        "correct": true,
        "explanation": "True. UAC helps enforce least privilege by prompting for elevated permissions only when needed."
      },
      {
        "text": "System administrators should use a standard user account when performing routine functions like reading emails and browsing the internet.",
        "correct": true,
        "explanation": "True. Admins should avoid using admin accounts for everyday tasks to reduce exposure."
      }
    ]
  },
  {
    "id": 3,
    "type": "dropdown",
    "text": "The 'application.bat' file in the image (C:\\Apps\\application.bat) is currently on the [FILE SYSTEM] file system. [PERMISSION TYPE] permissions are currently being displayed for the 'application.bat' file.",
    "answers": [
      {
        "label": "File system",
        "correct": "NTFS",
        "options": [
          "NTFS",
          "FAT32",
          "exFAT",
          "ReFS"
        ]
      },
      {
        "label": "Permission type",
        "correct": "Everyone",
        "options": [
          "Administrators",
          "Everyone",
          "Users",
          "SYSTEM"
        ]
      }
    ],
    "explanation": "The file is on an NTFS system (Windows permissions tab is only available on NTFS). The permissions shown are for the 'Everyone' group."
  },
  {
    "id": 4,
    "type": "match",
    "text": "Move each policy description from the list on the left to the correct policy on the right.",
    "items": [
      "A policy that describes permissible behaviors on a computer network",
      "A policy that grants or revokes permissions for an employee or a group of employees on a computer network",
      "A policy that defines actions to take after an unexpected or uncommon event",
      "A policy that defines the requirements to connect to a computer network from outside that network"
    ],
    "targets": [
      {
        "label": "Remote Access Policy",
        "correct": "A policy that defines the requirements to connect to a computer network from outside that network"
      },
      {
        "label": "Access Control Policy",
        "correct": "A policy that grants or revokes permissions for an employee or a group of employees on a computer network"
      },
      {
        "label": "Incident Response Policy",
        "correct": "A policy that defines actions to take after an unexpected or uncommon event"
      },
      {
        "label": "Acceptable Use Policy",
        "correct": "A policy that describes permissible behaviors on a computer network"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "text": "What is a user probably receiving if they get a large number of emails selling prescription medicine?",
    "options": [
      "Spam",
      "Malware",
      "Pharming mail",
      "Spoofed mail"
    ],
    "correct": [
      0
    ],
    "explanation": "Unsolicited bulk emails selling products like prescription drugs are classic spam."
  },
  {
    "id": 6,
    "type": "single",
    "text": "You create a web server for your school. When users visit your site, they get a certificate error that says your site is not trusted. What should you do to fix this problem?",
    "options": [
      "Enable Public Keys on your website.",
      "Use a digital signature.",
      "Generate a certificate request.",
      "Install a certificate from a trusted Certificate Authority (CA)."
    ],
    "correct": [
      3
    ],
    "explanation": "A 'not trusted' error means the certificate isn't signed by a recognized CA. Installing a certificate from a trusted CA resolves this."
  },
  {
    "id": 7,
    "type": "single",
    "text": "Creating MD5 hash for files is an example of ensuring what?",
    "options": [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Least privilege"
    ],
    "correct": [
      0
    ],
    "explanation": "MD5 hashing verifies that files haven't been altered — this is the CIA triad concept of Integrity."
  },
  {
    "id": 8,
    "type": "single",
    "text": "Which link is a valid secure link to the CompanyPro account management site?",
    "options": [
      "http://secure.companypro/SecureSignIn",
      "http://VPN.VisitMe/logon.html",
      "https://companypro/SecureSignIn/",
      "http://VPN.VisitMe/SecureSignIn/"
    ],
    "correct": [
      2
    ],
    "explanation": "Only option C uses HTTPS (secure) and the correct companypro domain."
  },
  {
    "id": 9,
    "type": "truefalse",
    "text": "For each statement, select True or False.",
    "statements": [
      {
        "text": "To protect users from malicious browser pop-ups, you should set a default browser configuration that blocks untrusted pop-ups.",
        "correct": true,
        "explanation": "True. Blocking untrusted pop-ups in browser settings is a standard protection measure."
      },
      {
        "text": "Pop-ups can display a realistic operating system or application error message.",
        "correct": true,
        "explanation": "True. Malicious pop-ups often mimic real OS/app errors to trick users."
      },
      {
        "text": "Protecting users from untrusted pop-up applications is mostly a function of awareness.",
        "correct": false,
        "explanation": "False. It primarily relies on technical controls like pop-up blockers, not just awareness."
      }
    ]
  },
  {
    "id": 10,
    "type": "match",
    "text": "Move each backup strategy to its recovery time description. (Strategy 1: Full backup every night. Strategy 2: Full + incremental Mon-Sat. Strategy 3: Full + differential Mon-Sat.)",
    "items": [
      "Strategy 1",
      "Strategy 2",
      "Strategy 3"
    ],
    "targets": [
      {
        "label": "Method with fastest data recovery time",
        "correct": "Strategy 1"
      },
      {
        "label": "Method with intermediate data recovery time",
        "correct": "Strategy 3"
      },
      {
        "label": "Method with slowest data recovery time",
        "correct": "Strategy 2"
      }
    ],
    "explanation": "Full backup nightly (S1) = fastest restore (one backup set). Differential (S3) = intermediate (full + one differential). Incremental (S2) = slowest (full + all incrementals)."
  },
  {
    "id": 11,
    "type": "single",
    "text": "How should the certificate of a secure public web server on the internet be signed?",
    "options": [
      "By an enterprise certificate authority (CA)",
      "By a public certificate authority (CA)",
      "By using a 4096-bit key",
      "By using a 1024-bit key"
    ],
    "correct": [
      1
    ],
    "explanation": "Public web servers need certificates from a publicly trusted CA so browsers recognize and trust them."
  },
  {
    "id": 12,
    "type": "single",
    "text": "You need to implement a firewall that includes examining the origin of the data. Which type of firewall should you implement?",
    "options": [
      "Application layer",
      "Stateful",
      "Content filter",
      "Network layer"
    ],
    "correct": [
      1
    ],
    "explanation": "A stateful firewall tracks the origin and state of connections, examining where data comes from."
  },
  {
    "id": 13,
    "type": "single",
    "text": "What should you use to protect systems from buffer overflow errors?",
    "options": [
      "An Intruder Prevention System",
      "Data Execution Prevention",
      "Antivirus software",
      "A proxy server"
    ],
    "correct": [
      1
    ],
    "explanation": "Data Execution Prevention (DEP) prevents code from running in memory regions not designated for execution, protecting against buffer overflow exploits."
  },
  {
    "id": 14,
    "type": "single",
    "text": "Your anti-spam program is blocking emails from a particular sender. Your company needs to receive emails from this sender. What should you do?",
    "options": [
      "Add the email address to the whitelist.",
      "List the sender's email address in DNS.",
      "Accept RSS feeds from their domain.",
      "Reconfigure the SMS Gateway."
    ],
    "correct": [
      0
    ],
    "explanation": "Adding the sender to the whitelist (allowlist) tells the spam filter to allow their emails through."
  },
  {
    "id": 15,
    "type": "single",
    "text": "Which networking protocol provides centralized authentication, authorization, and accounting?",
    "options": [
      "HTTPS",
      "OpenID",
      "RADIUS",
      "SMTP"
    ],
    "correct": [
      2
    ],
    "explanation": "RADIUS (Remote Authentication Dial-In User Service) provides centralized AAA services."
  },
  {
    "id": 16,
    "type": "single",
    "text": "You are an intern at Sunset Web. You help manage 1000 workstations. All the workstations are members of an Active Directory Domain. You need to push an application security patch to all workstations. What is the quickest method to do this?",
    "options": [
      "Local security policy",
      "Logon script",
      "Windows Update",
      "Group policy"
    ],
    "correct": [
      3
    ],
    "explanation": "Group Policy allows centralized deployment of software and patches to all domain-joined machines simultaneously."
  },
  {
    "id": 17,
    "type": "single",
    "text": "You install a system-file checksum-verification application on your servers. What does this help to ensure?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Accessibility",
      "Availability"
    ],
    "correct": [
      1
    ],
    "explanation": "Checksum verification detects unauthorized changes to files, ensuring data Integrity."
  },
  {
    "id": 18,
    "type": "single",
    "text": "Which type of password attack attempts to guess passwords by using a list of common passwords?",
    "options": [
      "Rainbow table",
      "Brute force",
      "Keylogger",
      "Dictionary"
    ],
    "correct": [
      3
    ],
    "explanation": "A dictionary attack uses a predefined list of common words and passwords to guess credentials."
  },
  {
    "id": 19,
    "type": "single",
    "text": "Why should you implement a wireless intrusion prevention system?",
    "options": [
      "To prevent rogue wireless access points",
      "To enforce SSID broadcasting",
      "To prevent wireless interference",
      "To detect wireless packet theft"
    ],
    "correct": [
      0
    ],
    "explanation": "A wireless IPS detects and prevents unauthorized (rogue) access points from operating on the network."
  },
  {
    "id": 20,
    "type": "multi",
    "text": "What are three major attack vectors that a social engineering hacker might use? (Choose 3.)",
    "options": [
      "Honeypot systems",
      "Dumpster diving",
      "Telephone",
      "Firewall interface",
      "Reverse social engineering"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Social engineering attack vectors include Dumpster diving (physical info gathering), Telephone (vishing), and Reverse social engineering (hacker poses as help desk)."
  },
  {
    "id": 21,
    "type": "truefalse",
    "text": "For each statement, select True or False.",
    "statements": [
      {
        "text": "You can view audit logs in the Event Viewer.",
        "correct": true,
        "explanation": "True. Windows Event Viewer is the standard tool for viewing audit/security logs."
      },
      {
        "text": "Audit logs have a set size limit and cannot be adjusted.",
        "correct": false,
        "explanation": "False. Audit log size limits can be configured in Event Viewer properties."
      },
      {
        "text": "You can configure an event notification for an audited activity.",
        "correct": true,
        "explanation": "True. You can set up alerts/notifications for specific audited events."
      }
    ]
  },
  {
    "id": 22,
    "type": "multi",
    "text": "Which two vulnerabilities is a wireless network client exposed to? (Choose 2.)",
    "options": [
      "File corruption",
      "Rogue access points",
      "Eavesdropping",
      "Buffer overflow"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Wireless clients are exposed to rogue access points (fake APs stealing credentials) and eavesdropping (intercepting unencrypted traffic)."
  },
  {
    "id": 23,
    "type": "multi",
    "text": "Which two strategies will help keep your devices free from viruses and malware? (Choose 2.)",
    "options": [
      "Keep antivirus and anti-malware software definitions are up to date.",
      "Ensure that the Windows Firewall is disabled so it doesn't interfere with any anti-malware software scans.",
      "Ensure that all network ports are available so all important network traffic can get through.",
      "Ensure that Real-time Protection is disabled.",
      "Configure full antivirus and anti-malware scans to run automatically on a regular schedule."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Keeping definitions updated and scheduling regular automatic scans are the two key strategies for malware protection."
  },
  {
    "id": 24,
    "type": "single",
    "text": "Your organization has a Windows Bring Your Own Device (BYOD) policy that includes ensuring that all devices are protected against various malware attacks. Where should you go on the local device to verify and configure the appropriate settings?",
    "options": [
      "Device Performance and Health",
      "Account Protection",
      "Virus & Threat Protection",
      "User Account Control"
    ],
    "correct": [
      2
    ],
    "explanation": "Virus & Threat Protection in Windows Security is where you configure and verify malware protection settings."
  },
  {
    "id": 25,
    "type": "single",
    "text": "What is an example of physical security for a laptop?",
    "options": [
      "Fingerprint reader",
      "Cable lock",
      "Docking station",
      "External USB drive"
    ],
    "correct": [
      1
    ],
    "explanation": "A cable lock physically secures the laptop to a desk or fixture — that is physical security."
  },
  {
    "id": 26,
    "type": "single",
    "text": "Which term refers to a physical opportunity that a hacker might use to look for information about a computer network?",
    "options": [
      "Reverse social engineering",
      "Phishing",
      "Dumpster diving",
      "Malware"
    ],
    "correct": [
      2
    ],
    "explanation": "Dumpster diving is searching through physical trash for discarded documents with sensitive information."
  },
  {
    "id": 27,
    "type": "single",
    "text": "You are a network administrator. All computers run the Chrome browser. You need to prevent third-party cookies from being saved. What should you enforce?",
    "options": [
      "Antivirus protection",
      "Cross-Site Scripting Filter",
      "Incognito",
      "SmartScreen Filter"
    ],
    "correct": [
      2
    ],
    "explanation": "Chrome's Incognito mode does not save cookies, preventing third-party cookie storage."
  },
  {
    "id": 28,
    "type": "single",
    "text": "What can intercept passwords that are transmitted in clear text?",
    "options": [
      "A Kerberos client",
      "A rogue DHCP server",
      "An IPsec decoder",
      "A packet sniffer"
    ],
    "correct": [
      3
    ],
    "explanation": "A packet sniffer captures network traffic including cleartext credentials like unencrypted passwords."
  },
  {
    "id": 29,
    "type": "single",
    "text": "The client computers on your network are stable and do not need any new features. What is a benefit of applying operating system updates to these clients?",
    "options": [
      "Update the hardware firewall.",
      "Keep the software licensed.",
      "Close existing vulnerabilities.",
      "Keep the server ports available."
    ],
    "correct": [
      2
    ],
    "explanation": "Even without new features, OS updates patch security vulnerabilities and close exploitable gaps."
  },
  {
    "id": 30,
    "type": "single",
    "text": "You need to hide internal IP addresses from the internet while maintaining client internet access. What should you implement?",
    "options": [
      "Secure Sockets Layer (SSL)",
      "Access Control Lists",
      "Network Address Translation (NAT)",
      "Port forwarding"
    ],
    "correct": [
      2
    ],
    "explanation": "NAT translates private internal IP addresses to a public IP, hiding the internal network from the internet."
  },
  {
    "id": 31,
    "type": "single",
    "text": "You have two servers that run Windows Server. All the server drives have been formatted by using NTFS. You move a file from one server to the other server. What permissions does the file have in the new location?",
    "options": [
      "The file retains the original folder's permissions.",
      "Access will be limited to members of the Administrators group.",
      "The file inherits the destination folder's permissions.",
      "Members of the Everyone group will have full access to the file."
    ],
    "correct": [
      2
    ],
    "explanation": "When moving a file between NTFS volumes, the file inherits the permissions of the destination folder."
  },
  {
    "id": 32,
    "type": "order",
    "text": "You have an off-domain computer suspected of malware infection. You need to ensure the computer is completely safe and user files are available. Place actions in correct order.",
    "items": [
      "Reinstall the OS and applications from the original media.",
      "Update everything, including the OS, applications, and anti-virus/anti-malware tools.",
      "Restore the user data from the backup image.",
      "Reformat the disk.",
      "Back up the entire system."
    ],
    "correct": [
      "Back up the entire system.",
      "Reformat the disk.",
      "Reinstall the OS and applications from the original media.",
      "Update everything, including the OS, applications, and anti-virus/anti-malware tools.",
      "Restore the user data from the backup image."
    ],
    "explanation": "Correct order: 1) Back up, 2) Reformat, 3) Reinstall OS/apps, 4) Update everything, 5) Restore user data."
  },
  {
    "id": 33,
    "type": "single",
    "text": "What is the first step when conducting a physical security audit?",
    "options": [
      "Inventory the company's technology assets.",
      "Set up the system logs to audit security events.",
      "Set up a virus quarantine area.",
      "Install auditing software on your servers."
    ],
    "correct": [
      0
    ],
    "explanation": "The first step in a physical security audit is to inventory all technology assets so you know what needs to be secured."
  },
  {
    "id": 34,
    "type": "single",
    "text": "Which technology examines packet header information to determine whether network traffic is allowed to enter the internal network?",
    "options": [
      "Dedicated firewall",
      "RADIUS server",
      "BitLocker To Go",
      "Antivirus software"
    ],
    "correct": [
      0
    ],
    "explanation": "A dedicated firewall inspects packet headers to allow or block traffic based on defined rules."
  },
  {
    "id": 35,
    "type": "multi",
    "text": "What are two benefits to using an incremental backup solution instead of a differential backup solution? (Choose 2.)",
    "options": [
      "Less storage space required",
      "Less time needed to back up data",
      "Less administrative effort",
      "Less time needed to recover data"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Incremental backups only back up changes since the last backup (of any type), using less storage and less backup time than differential backups."
  },
  {
    "id": 36,
    "type": "truefalse",
    "text": "For each statement, select True or False.",
    "statements": [
      {
        "text": "IPsec requires network applications to be IPsec aware.",
        "correct": false,
        "explanation": "False. IPsec works at the network layer transparently — applications don't need to be IPsec aware."
      },
      {
        "text": "IPsec can encrypt data.",
        "correct": true,
        "explanation": "True. IPsec provides encryption through ESP (Encapsulating Security Payload)."
      },
      {
        "text": "IPsec adds overhead for all network communications for which it is used.",
        "correct": true,
        "explanation": "True. Encryption and authentication processing adds overhead to communications."
      }
    ]
  },
  {
    "id": 37,
    "type": "multi",
    "text": "What are three examples of two-factor authentication? (Choose 3.)",
    "options": [
      "A username and a password",
      "A password and a PIN number",
      "A fingerprint and a pattern",
      "A password and a smart card",
      "A PIN number and a debit card"
    ],
    "correct": [
      2,
      3,
      4
    ],
    "explanation": "2FA requires two different factor types. C: biometric + something you know. D: something you know + something you have. E: something you know + something you have."
  },
  {
    "id": 38,
    "type": "single",
    "text": "You learn that several employees have downloaded and installed a browser extension that translates text. What should you do?",
    "options": [
      "Disable the browser extension and implement controls to allow only corporate-approved browser extensions.",
      "Make sure the browser extension is set to read-only mode, so it cannot overwrite critical information.",
      "Remove the browser extension because it will perform malicious activities.",
      "Nothing, browser extensions pose no harm to the machine or the user."
    ],
    "correct": [
      0
    ],
    "explanation": "Proper security practice is to disable unauthorized extensions and enforce a policy allowing only approved browser extensions."
  },
  {
    "id": 39,
    "type": "single",
    "text": "You have an application that uses IPsec to secure communications between an internet client and a server on the internal network. To which network security service must the IPsec client connect?",
    "options": [
      "SFTP",
      "VPN",
      "SSH",
      "RADIUS"
    ],
    "correct": [
      1
    ],
    "explanation": "IPsec is commonly used within VPN connections. The client connects to a VPN gateway to establish the IPsec tunnel."
  },
  {
    "id": 40,
    "type": "single",
    "text": "Your manager wants to be sure that you understand the types of social engineering threats that might occur. Which type of threat mitigation educates the staff within an organization, explaining what to do, when, why, and by whom?",
    "options": [
      "Acceptable Use Policy",
      "Physical Security",
      "Defense in Depth",
      "Policies, Procedures, and Awareness"
    ],
    "correct": [
      3
    ],
    "explanation": "Policies, Procedures, and Awareness programs educate staff on security threats and proper responses."
  }
];

const MAX_TAKE_SIZE = 50;
let take = [];
let current = 0;
let score = 0;
let answered = false;
let missed = [];
let nonCertTake = [];
let nonCertCurrent = 0;
let nonCertScoreValue = 0;
let nonCertAnswered = false;
let nonCertMissed = [];
let importTake = [];
let importCurrent = 0;
let importScoreValue = 0;
let importAnswered = false;
let importMissed = [];
let importStateData = {};
let selectedQuizCategory = "all";
let currentTakeSize = Math.min(MAX_TAKE_SIZE, activeQuestions.length);

const views = document.querySelectorAll(".view");
const tabs = document.querySelectorAll(".tab");
const reviewCards = document.getElementById("reviewCards");
const bankList = document.getElementById("bankList");
const categoryFilter = document.getElementById("categoryFilter");
const quizCategory = document.getElementById("quizCategory");
const searchBank = document.getElementById("searchBank");
const questionText = document.getElementById("questionText");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextQuestion = document.getElementById("nextQuestion");
const results = document.getElementById("results");
const themeToggle = document.getElementById("themeToggle");
const downloadReviewer = document.getElementById("downloadReviewer");
const nonCertState = document.getElementById("nonCertState");
const nonCertProgressBar = document.getElementById("nonCertProgressBar");
const nonCertCurrentNumber = document.getElementById("nonCertCurrentNumber");
const nonCertScore = document.getElementById("nonCertScore");
const nonCertRemaining = document.getElementById("nonCertRemaining");
const nonCertMeta = document.getElementById("nonCertMeta");
const nonCertQuestionText = document.getElementById("nonCertQuestionText");
const nonCertChoices = document.getElementById("nonCertChoices");
const nonCertFeedback = document.getElementById("nonCertFeedback");
const nonCertNextQuestion = document.getElementById("nonCertNextQuestion");
const nonCertResults = document.getElementById("nonCertResults");
const importStateText = document.getElementById("importState");
const importProgressBar = document.getElementById("importProgressBar");
const importCurrentNumber = document.getElementById("importCurrentNumber");
const importScore = document.getElementById("importScore");
const importRemaining = document.getElementById("importRemaining");
const importMeta = document.getElementById("importMeta");
const importQuestionText = document.getElementById("importQuestionText");
const importChoices = document.getElementById("importChoices");
const importFeedback = document.getElementById("importFeedback");
const importNextQuestion = document.getElementById("importNextQuestion");
const importResults = document.getElementById("importResults");

document.getElementById("bankCount").textContent = `${activeQuestions.length} likely exam questions`;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem("itsNsTheme", theme);
}

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
      ${(topic.sections || [{ type: "Key points", points: topic.points }]).map((section) => `
        <div class="review-section">
          <h4>${section.type}</h4>
          <ul>${section.points.map((point) => {
            if (typeof point === "string") return `<li>${point}</li>`;
            return `<li><span class="term">${point.term}</span><span class="definition">${point.detail}</span></li>`;
          }).join("")}</ul>
        </div>
      `).join("")}
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildReviewerPrintDocument() {
  const reviewerTerms = new Set(
    reviewerTopics.flatMap((topic) =>
      topic.sections.flatMap((section) =>
        section.points.map((point) => (typeof point === "string" ? point : point.term).toLowerCase())
      )
    )
  );
  const extraGlossary = questionOptionGlossary
    .filter((item) => !reviewerTerms.has(item.term.toLowerCase()))
    .sort((a, b) => a.term.localeCompare(b.term));
  const content = reviewerTopics.map((topic) => `
    <section>
      <h2>${escapeHtml(topic.title)}</h2>
      ${topic.sections.map((section) => `
        <article>
          <h3>${escapeHtml(section.type)}</h3>
          <dl>
            ${section.points.map((point) => {
              const term = typeof point === "string" ? point : point.term;
              const detail = typeof point === "string" ? "" : point.detail;
              return `
                <dt>${escapeHtml(term)}</dt>
                ${detail ? `<dd>${escapeHtml(detail)}</dd>` : ""}
              `;
            }).join("")}
          </dl>
        </article>
      `).join("")}
    </section>
  `).join("");
  const glossary = extraGlossary.map((item) => `
    <dt>${escapeHtml(item.term)}</dt>
    <dd>${escapeHtml(item.detail)}</dd>
  `).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ITS Network Security Reviewer</title>
  <style>
    body {
      color: #111827;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.45;
      margin: 32px;
    }

    h1 {
      font-size: 26px;
      margin: 0 0 8px;
    }

    .subtitle {
      color: #4b5563;
      margin: 0 0 24px;
    }

    h2 {
      border-bottom: 2px solid #176b87;
      color: #0f3f4d;
      font-size: 20px;
      margin: 28px 0 14px;
      padding-bottom: 6px;
    }

    h3 {
      color: #8a5a00;
      font-size: 15px;
      margin: 18px 0 8px;
    }

    article {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    dl {
      margin: 0;
    }

    dt {
      font-weight: 700;
      margin-top: 10px;
    }

    dd {
      color: #374151;
      margin: 3px 0 0 18px;
    }

    @media print {
      body {
        margin: 0.45in;
      }
    }
  </style>
</head>
<body>
  <h1>ITS Network Security Reviewer</h1>
  <p class="subtitle">Based only on the Certiport ITS Network Security objectives: https://certiport.filecamp.com/s/i/ITS_Network_Security</p>
  ${content}
  <section>
    <h2>Question Option Glossary</h2>
    <p class="subtitle">Extra real terms that appear as answer choices in the questionnaire.</p>
    <dl>${glossary}</dl>
  </section>
</body>
</html>`;
}

function downloadSearchableReviewerPdf() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    setView("reviewer");
    window.print();
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildReviewerPrintDocument());
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 250);
}

function renderCategories() {
  const categories = [...new Set(activeQuestions.map((item) => item.c))].sort();
  categoryFilter.innerHTML += categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  quizCategory.innerHTML += categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function getQuizPool() {
  return selectedQuizCategory === "all"
    ? activeQuestions
    : activeQuestions.filter((item) => item.c === selectedQuizCategory);
}

function getCategoryLabel() {
  return selectedQuizCategory === "all" ? "all categories" : selectedQuizCategory;
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
  const pool = getQuizPool();
  currentTakeSize = Math.min(MAX_TAKE_SIZE, pool.length);
  take = shuffle(pool).slice(0, currentTakeSize).map((item) => ({ ...item, choices: shuffle(item.o) }));
  current = 0;
  score = 0;
  missed = [];
  answered = false;
  results.hidden = true;
  setView("quiz");
  renderQuestion();
}

function updateStatus() {
  const previewSize = Math.min(MAX_TAKE_SIZE, getQuizPool().length);
  const takeSize = take.length ? currentTakeSize : previewSize;
  document.getElementById("currentNumber").textContent = take.length ? Math.min(current + 1, currentTakeSize) : 0;
  document.getElementById("score").textContent = score;
  document.getElementById("remaining").textContent = take.length ? Math.max(currentTakeSize - current - (answered ? 1 : 0), 0) : takeSize;
  document.getElementById("quizState").textContent = take.length
    ? `Answering item ${Math.min(current + 1, currentTakeSize)} of ${currentTakeSize} from ${getCategoryLabel()}.`
    : `Start a take to receive ${takeSize} randomized questions from ${getCategoryLabel()}.`;
  document.getElementById("progressBar").style.width = `${take.length ? (current / currentTakeSize) * 100 : 0}%`;
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
  document.querySelector(".question-meta").textContent = `${item.c} | Item ${current + 1} of ${currentTakeSize}`;
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
  document.getElementById("progressBar").style.width = `${((current + 1) / currentTakeSize) * 100}%`;
  updateStatus();
}

function finishTake() {
  questionText.textContent = "Take complete.";
  document.querySelector(".question-meta").textContent = "Results";
  choices.innerHTML = "";
  feedback.hidden = true;
  nextQuestion.hidden = true;
  document.getElementById("quizState").textContent = `Finished ${getCategoryLabel()}. You scored ${score} out of ${currentTakeSize}.`;
  document.getElementById("currentNumber").textContent = currentTakeSize;
  document.getElementById("remaining").textContent = 0;
  document.getElementById("progressBar").style.width = "100%";

  const percent = Math.round((score / currentTakeSize) * 100);
  const missedHtml = missed.slice(0, 10).map((item) => `<li><strong>${item.q}</strong><br>${item.e}</li>`).join("");
  results.hidden = false;
  results.innerHTML = `
    <h3>Your score: ${score}/${currentTakeSize} (${percent}%)</h3>
    <p>${percent >= 80 ? "Strong work. Review the missed items and take another randomized set." : "Keep going. Read the reviewer sections, then retake with a new randomized set."}</p>
    ${missed.length ? `<h3>First missed items to review</h3><ol>${missedHtml}</ol>` : "<p>No missed items in this take.</p>"}
  `;
}

function startNonCertTake() {
  nonCertTake = shuffle(nonCertQuestions).slice(0, MAX_TAKE_SIZE).map((item) => ({ ...item, choices: shuffle(item.o) }));
  nonCertCurrent = 0;
  nonCertScoreValue = 0;
  nonCertMissed = [];
  nonCertAnswered = false;
  nonCertResults.hidden = true;
  setView("noncert");
  renderNonCertQuestion();
}

function updateNonCertStatus() {
  nonCertCurrentNumber.textContent = nonCertTake.length ? Math.min(nonCertCurrent + 1, MAX_TAKE_SIZE) : 0;
  nonCertScore.textContent = nonCertScoreValue;
  nonCertRemaining.textContent = nonCertTake.length ? Math.max(MAX_TAKE_SIZE - nonCertCurrent - (nonCertAnswered ? 1 : 0), 0) : MAX_TAKE_SIZE;
  nonCertState.textContent = nonCertTake.length
    ? `Answering item ${Math.min(nonCertCurrent + 1, MAX_TAKE_SIZE)} of ${MAX_TAKE_SIZE}.`
    : "Start a 50-item practice take made from general public network-security study topics.";
  nonCertProgressBar.style.width = `${nonCertTake.length ? (nonCertCurrent / MAX_TAKE_SIZE) * 100 : 0}%`;
}

function renderNonCertQuestion() {
  updateNonCertStatus();
  nonCertFeedback.hidden = true;
  nonCertNextQuestion.hidden = true;
  nonCertAnswered = false;
  nonCertResults.hidden = true;

  const item = nonCertTake[nonCertCurrent];
  if (!item) {
    finishNonCertTake();
    return;
  }

  nonCertQuestionText.textContent = item.q;
  nonCertMeta.textContent = `${item.c} | Item ${nonCertCurrent + 1} of ${MAX_TAKE_SIZE}`;
  nonCertChoices.innerHTML = item.choices.map((choice) => `
    <button class="choice" data-choice="${choice}">${choice}</button>
  `).join("");
}

function chooseNonCertAnswer(choiceButton) {
  if (nonCertAnswered) return;
  nonCertAnswered = true;
  const item = nonCertTake[nonCertCurrent];
  const selected = choiceButton.dataset.choice;
  const correct = selected === item.a;

  if (correct) nonCertScoreValue += 1;
  else nonCertMissed.push(item);

  nonCertChoices.querySelectorAll(".choice").forEach((button) => {
    button.disabled = true;
    if (button.dataset.choice === item.a) button.classList.add("correct");
    if (button === choiceButton && !correct) button.classList.add("wrong");
  });

  nonCertFeedback.hidden = false;
  nonCertFeedback.innerHTML = `<strong>${correct ? "Correct." : "Not quite."}</strong> ${item.e}`;
  nonCertNextQuestion.hidden = false;
  nonCertProgressBar.style.width = `${((nonCertCurrent + 1) / MAX_TAKE_SIZE) * 100}%`;
  updateNonCertStatus();
}

function finishNonCertTake() {
  nonCertQuestionText.textContent = "Practice complete.";
  nonCertMeta.textContent = "Results";
  nonCertChoices.innerHTML = "";
  nonCertFeedback.hidden = true;
  nonCertNextQuestion.hidden = true;
  nonCertState.textContent = `Finished. You scored ${nonCertScoreValue} out of ${MAX_TAKE_SIZE}.`;
  nonCertCurrentNumber.textContent = MAX_TAKE_SIZE;
  nonCertRemaining.textContent = 0;
  nonCertProgressBar.style.width = "100%";

  const percent = Math.round((nonCertScoreValue / MAX_TAKE_SIZE) * 100);
  const missedHtml = nonCertMissed.slice(0, 10).map((item) => `<li><strong>${item.q}</strong><br>${item.e}</li>`).join("");
  nonCertResults.hidden = false;
  nonCertResults.innerHTML = `
    <h3>Your score: ${nonCertScoreValue}/${MAX_TAKE_SIZE} (${percent}%)</h3>
    <p>${percent >= 80 ? "Strong work on the general network-security practice set." : "Review the missed items, then try another randomized set."}</p>
    ${nonCertMissed.length ? `<h3>First missed items to review</h3><ol>${missedHtml}</ol>` : "<p>No missed items in this take.</p>"}
  `;
}

function startImportTake() {
  importTake = shuffle(importedGithubQuestions);
  importCurrent = 0;
  importScoreValue = 0;
  importMissed = [];
  importAnswered = false;
  importStateData = {};
  importResults.hidden = true;
  setView("githubimport");
  renderImportQuestion();
}

function importTypeLabel(type) {
  const labels = {
    single: "Single choice",
    multi: "Choose multiple",
    truefalse: "True/False group",
    match: "Matching",
    order: "Ordering",
    dropdown: "Dropdown"
  };
  return labels[type] || "Imported question";
}

function updateImportStatus() {
  const total = importedGithubQuestions.length;
  importCurrentNumber.textContent = importTake.length ? Math.min(importCurrent + 1, total) : 0;
  importScore.textContent = importScoreValue;
  importRemaining.textContent = importTake.length ? Math.max(total - importCurrent - (importAnswered ? 1 : 0), 0) : total;
  importStateText.textContent = importTake.length
    ? `Answering item ${Math.min(importCurrent + 1, total)} of ${total}.`
    : `Start a questionnaire with all ${total} imported mixed-format questions.`;
  importProgressBar.style.width = `${importTake.length ? (importCurrent / total) * 100 : 0}%`;
}

function renderImportQuestion() {
  updateImportStatus();
  importFeedback.hidden = true;
  importNextQuestion.hidden = true;
  importAnswered = false;
  importResults.hidden = true;
  importStateData = {};

  const item = importTake[importCurrent];
  if (!item) {
    finishImportTake();
    return;
  }

  importQuestionText.textContent = item.text;
  importMeta.textContent = `${importTypeLabel(item.type)} | Item ${importCurrent + 1} of ${importedGithubQuestions.length}`;
  importChoices.innerHTML = renderImportBody(item);
}

function renderImportBody(item) {
  if (item.type === "single" || item.type === "multi") {
    const hint = item.type === "multi" ? `<p class="import-hint">Choose all correct answers, then check.</p>` : "";
    const options = item.options.map((option, index) => `
      <button class="choice import-choice" data-import-action="${item.type === "single" ? "single" : "multi"}" data-index="${index}">
        <span class="choice-letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHtml(option)}</span>
      </button>
    `).join("");
    const check = item.type === "multi" ? `<button class="primary" data-import-action="check-multi">Check answer</button>` : "";
    return `${hint}<div class="choices">${options}</div>${check}`;
  }

  if (item.type === "truefalse") {
    return `
      <div class="import-stack">
        ${item.statements.map((statement, index) => `
          <div class="import-row" data-statement="${index}">
            <p>${escapeHtml(statement.text)}</p>
            <div class="import-row-actions">
              <button class="import-tf-btn" data-import-action="tf" data-index="${index}" data-value="true" aria-pressed="false">True</button>
              <button class="import-tf-btn" data-import-action="tf" data-index="${index}" data-value="false" aria-pressed="false">False</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="primary" data-import-action="check-tf">Check answer</button>
    `;
  }

  if (item.type === "dropdown") {
    return `
      <div class="import-stack">
        ${item.answers.map((answer, index) => `
          <label class="import-field">
            ${escapeHtml(answer.label)}
            <select data-dropdown="${index}">
              <option value="">Select an answer</option>
              ${answer.options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
            </select>
          </label>
        `).join("")}
      </div>
      <button class="primary" data-import-action="check-dropdown">Check answer</button>
    `;
  }

  if (item.type === "match") {
    return `
      <div class="import-match">
        <div>
          <h3>Descriptions</h3>
          ${item.items.map((entry, index) => `
            <button class="choice import-choice" data-import-action="match-source" data-index="${index}">${escapeHtml(entry)}</button>
          `).join("")}
        </div>
        <div>
          <h3>Policies / Categories</h3>
          ${item.targets.map((target, index) => `
            <button class="import-drop" data-import-action="match-target" data-index="${index}">
              <strong>${escapeHtml(target.label)}</strong>
              <span>Click a description, then this box</span>
            </button>
          `).join("")}
        </div>
      </div>
      <button class="primary" data-import-action="check-match">Check answer</button>
    `;
  }

  if (item.type === "order") {
    return `
      <div class="import-match">
        <div>
          <h3>Actions</h3>
          ${item.items.map((entry, index) => `
            <button class="choice import-choice" data-import-action="order-source" data-index="${index}">${escapeHtml(entry)}</button>
          `).join("")}
        </div>
        <div>
          <h3>Actions in order</h3>
          ${item.correct.map((_, index) => `
            <button class="import-drop" data-import-action="order-slot" data-index="${index}">
              <strong>Step ${index + 1}</strong>
              <span>Click an action, then this slot</span>
            </button>
          `).join("")}
        </div>
      </div>
      <button class="primary" data-import-action="check-order">Check answer</button>
    `;
  }

  return `<p>This imported question type is not supported yet.</p>`;
}

function handleImportClick(event) {
  const control = event.target.closest("[data-import-action]");
  if (!control || importAnswered) return;
  const action = control.dataset.importAction;
  const item = importTake[importCurrent];

  if (action === "single") {
    checkImportSingle(Number(control.dataset.index));
  } else if (action === "multi") {
    toggleImportMulti(control);
  } else if (action === "check-multi") {
    checkImportMulti();
  } else if (action === "tf") {
    selectImportTrueFalse(control);
  } else if (action === "check-tf") {
    checkImportTrueFalse();
  } else if (action === "check-dropdown") {
    checkImportDropdown();
  } else if (action === "match-source") {
    selectImportSource(control, "matchSelected");
  } else if (action === "match-target") {
    placeImportMatch(control, item);
  } else if (action === "check-match") {
    checkImportMatch();
  } else if (action === "order-source") {
    selectImportSource(control, "orderSelected");
  } else if (action === "order-slot") {
    placeImportOrder(control, item);
  } else if (action === "check-order") {
    checkImportOrder();
  }
}

function lockImportControls() {
  importChoices.querySelectorAll("button, select").forEach((control) => {
    control.disabled = true;
  });
}

function completeImportQuestion(isCorrect, explanation) {
  importAnswered = true;
  if (isCorrect) importScoreValue += 1;
  else importMissed.push(importTake[importCurrent]);
  lockImportControls();
  importFeedback.hidden = false;
  importFeedback.innerHTML = `<strong>${isCorrect ? "Correct." : "Not quite."}</strong> ${escapeHtml(explanation || "Review the highlighted answer.")}`;
  importNextQuestion.hidden = false;
  importProgressBar.style.width = `${((importCurrent + 1) / importedGithubQuestions.length) * 100}%`;
  updateImportStatus();
}

function checkImportSingle(index) {
  const item = importTake[importCurrent];
  const isCorrect = item.correct.includes(index);
  importChoices.querySelectorAll(".import-choice").forEach((button) => {
    const optionIndex = Number(button.dataset.index);
    if (item.correct.includes(optionIndex)) button.classList.add("correct");
    if (optionIndex === index && !isCorrect) button.classList.add("wrong");
  });
  completeImportQuestion(isCorrect, item.explanation);
}

function toggleImportMulti(button) {
  button.classList.toggle("selected");
}

function checkImportMulti() {
  const item = importTake[importCurrent];
  const selected = [...importChoices.querySelectorAll('.import-choice.selected')].map((button) => Number(button.dataset.index));
  const correct = [...item.correct].sort((a, b) => a - b);
  const selectedSorted = selected.sort((a, b) => a - b);
  const isCorrect = correct.length === selectedSorted.length && correct.every((value, index) => value === selectedSorted[index]);
  importChoices.querySelectorAll(".import-choice").forEach((button) => {
    const optionIndex = Number(button.dataset.index);
    if (item.correct.includes(optionIndex)) button.classList.add("correct");
    if (selectedSorted.includes(optionIndex) && !item.correct.includes(optionIndex)) button.classList.add("wrong");
  });
  completeImportQuestion(isCorrect, item.explanation);
}

function selectImportTrueFalse(button) {
  const row = button.closest(".import-row");
  row.querySelectorAll("button").forEach((entry) => {
    entry.classList.remove("selected");
    entry.setAttribute("aria-pressed", "false");
  });
  button.classList.add("selected");
  button.setAttribute("aria-pressed", "true");
  importStateData[`tf-${button.dataset.index}`] = button.dataset.value === "true";
}

function checkImportTrueFalse() {
  const item = importTake[importCurrent];
  const hasAnswer = (index) => Object.prototype.hasOwnProperty.call(importStateData, `tf-${index}`);
  const isComplete = item.statements.every((_, index) => hasAnswer(index));
  if (!isComplete) {
    importFeedback.hidden = false;
    importFeedback.innerHTML = "<strong>Almost.</strong> Answer every True/False row first.";
    return;
  }
  const isCorrect = item.statements.every((statement, index) => importStateData[`tf-${index}`] === statement.correct);
  item.statements.forEach((statement, index) => {
    const row = importChoices.querySelector(`[data-statement="${index}"]`);
    const selectedValue = importStateData[`tf-${index}`];
    const rowCorrect = selectedValue === statement.correct;
    row.classList.add(rowCorrect ? "correct-row" : "wrong-row");
    row.querySelectorAll(".import-tf-btn").forEach((button) => {
      const value = button.dataset.value === "true";
      if (value === statement.correct) button.classList.add("correct");
      if (value === selectedValue && !rowCorrect) button.classList.add("wrong");
    });
  });
  completeImportQuestion(isCorrect, item.statements.map((statement) => statement.explanation).join(" "));
}

function checkImportDropdown() {
  const item = importTake[importCurrent];
  const isCorrect = item.answers.every((answer, index) => {
    const select = importChoices.querySelector(`[data-dropdown="${index}"]`);
    const correct = select.value === answer.correct;
    select.classList.add(correct ? "correct-control" : "wrong-control");
    return correct;
  });
  completeImportQuestion(isCorrect, item.explanation);
}

function selectImportSource(button, key) {
  importChoices.querySelectorAll(`[data-import-action="${button.dataset.importAction}"]`).forEach((entry) => entry.classList.remove("selected"));
  button.classList.add("selected");
  importStateData[key] = Number(button.dataset.index);
}

function placeImportMatch(button, item) {
  if (!Object.hasOwn(importStateData, "matchSelected")) return;
  const targetIndex = Number(button.dataset.index);
  const sourceIndex = importStateData.matchSelected;
  importStateData[`match-${targetIndex}`] = sourceIndex;
  button.querySelector("span").textContent = item.items[sourceIndex];
  button.classList.add("filled");
}

function checkImportMatch() {
  const item = importTake[importCurrent];
  const isComplete = item.targets.every((_, index) => Object.hasOwn(importStateData, `match-${index}`));
  if (!isComplete) {
    importFeedback.hidden = false;
    importFeedback.innerHTML = "<strong>Almost.</strong> Fill every matching box first.";
    return;
  }
  const isCorrect = item.targets.every((target, index) => item.items[importStateData[`match-${index}`]] === target.correct);
  item.targets.forEach((target, index) => {
    const drop = importChoices.querySelector(`[data-import-action="match-target"][data-index="${index}"]`);
    drop.classList.add(item.items[importStateData[`match-${index}`]] === target.correct ? "correct" : "wrong");
  });
  completeImportQuestion(isCorrect, item.explanation || "Review the highlighted matches.");
}

function placeImportOrder(button, item) {
  if (!Object.hasOwn(importStateData, "orderSelected")) return;
  const slotIndex = Number(button.dataset.index);
  const sourceIndex = importStateData.orderSelected;
  importStateData[`order-${slotIndex}`] = sourceIndex;
  button.querySelector("span").textContent = item.items[sourceIndex];
  button.classList.add("filled");
}

function checkImportOrder() {
  const item = importTake[importCurrent];
  const isComplete = item.correct.every((_, index) => Object.hasOwn(importStateData, `order-${index}`));
  if (!isComplete) {
    importFeedback.hidden = false;
    importFeedback.innerHTML = "<strong>Almost.</strong> Fill every order slot first.";
    return;
  }
  const isCorrect = item.correct.every((expected, index) => item.items[importStateData[`order-${index}`]] === expected);
  item.correct.forEach((expected, index) => {
    const drop = importChoices.querySelector(`[data-import-action="order-slot"][data-index="${index}"]`);
    drop.classList.add(item.items[importStateData[`order-${index}`]] === expected ? "correct" : "wrong");
  });
  completeImportQuestion(isCorrect, item.explanation);
}

function finishImportTake() {
  importQuestionText.textContent = "Imported questionnaire complete.";
  importMeta.textContent = "Results";
  importChoices.innerHTML = "";
  importFeedback.hidden = true;
  importNextQuestion.hidden = true;
  importStateText.textContent = `Finished. You scored ${importScoreValue} out of ${importedGithubQuestions.length}.`;
  importCurrentNumber.textContent = importedGithubQuestions.length;
  importRemaining.textContent = 0;
  importProgressBar.style.width = "100%";
  const percent = Math.round((importScoreValue / importedGithubQuestions.length) * 100);
  const missedHtml = importMissed.slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.text)}</strong><br>${escapeHtml(item.explanation || "Review this imported item.")}</li>`).join("");
  importResults.hidden = false;
  importResults.innerHTML = `
    <h3>Your score: ${importScoreValue}/${importedGithubQuestions.length} (${percent}%)</h3>
    <p>${percent >= 80 ? "Strong work on the imported mixed-format set." : "Review the missed imported items, then try again."}</p>
    ${importMissed.length ? `<h3>First missed items to review</h3><ol>${missedHtml}</ol>` : "<p>No missed items in this take.</p>"}
  `;
}

tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
document.getElementById("startQuiz").addEventListener("click", startTake);
document.getElementById("restartQuiz").addEventListener("click", startTake);
document.getElementById("showReviewer").addEventListener("click", () => setView("reviewer"));
document.getElementById("showBank").addEventListener("click", () => setView("bank"));
document.getElementById("startNonCertQuiz").addEventListener("click", startNonCertTake);
document.getElementById("startImportQuiz").addEventListener("click", startImportTake);
quizCategory.addEventListener("change", () => {
  selectedQuizCategory = quizCategory.value;
  take = [];
  current = 0;
  score = 0;
  missed = [];
  answered = false;
  questionText.textContent = "Ready when you are.";
  document.querySelector(".question-meta").textContent = "Questionnaire";
  choices.innerHTML = "";
  feedback.hidden = true;
  nextQuestion.hidden = true;
  results.hidden = true;
  updateStatus();
});
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});
downloadReviewer.addEventListener("click", () => {
  downloadSearchableReviewerPdf();
});
choices.addEventListener("click", (event) => {
  const button = event.target.closest(".choice");
  if (button) chooseAnswer(button);
});
nextQuestion.addEventListener("click", () => {
  current += 1;
  renderQuestion();
});
nonCertChoices.addEventListener("click", (event) => {
  const button = event.target.closest(".choice");
  if (button) chooseNonCertAnswer(button);
});
nonCertNextQuestion.addEventListener("click", () => {
  nonCertCurrent += 1;
  renderNonCertQuestion();
});
importChoices.addEventListener("click", handleImportClick);
importNextQuestion.addEventListener("click", () => {
  importCurrent += 1;
  renderImportQuestion();
});
categoryFilter.addEventListener("change", renderBank);
searchBank.addEventListener("input", renderBank);

renderReviewer();
renderCategories();
renderBank();
applyTheme(localStorage.getItem("itsNsTheme") || "light");
updateStatus();
updateNonCertStatus();
updateImportStatus();
