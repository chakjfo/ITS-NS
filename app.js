const reviewerTopics = [
  {
    title: "1. Defense in Depth",
    sections: [
      {
        type: "Security principles",
        points: [
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
          { term: "Zero day", detail: "An attack or vulnerability that is not yet publicly patched. Defenders may have little warning." },
          { term: "DoS", detail: "Denial of service makes a system unavailable by overwhelming it or abusing a weakness." },
          { term: "SQL injection", detail: "An attacker inserts database commands into input fields. Safe coding and parameterized queries help prevent it." },
          { term: "XSS", detail: "Cross-site scripting injects malicious scripts into web pages so they run in another user's browser." },
          { term: "Brute force", detail: "Repeated guessing of passwords or keys. Lockouts, MFA, and strong passwords reduce this risk." },
          { term: "Man-in-the-middle", detail: "The attacker intercepts or alters traffic between two parties. TLS, certificates, and VPNs help reduce the risk." },
          { term: "Social engineering", detail: "Tricking people into revealing information or taking unsafe actions." },
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
          { term: "User Account Control", detail: "Windows feature that prompts before elevated actions to reduce silent administrative changes." },
          { term: "Secure DNS updates", detail: "Allows only authorized systems to update DNS records, reducing spoofed or incorrect records." },
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
  },
  {
    title: "Exam Readiness",
    sections: [
      {
        type: "Expected experience",
        points: [
          { term: "Client operating systems", detail: "Know basic security settings and tools in end-user systems." },
          { term: "Security applications", detail: "Understand antivirus, anti-malware, firewalls, and filtering tools." },
          { term: "Firewalls", detail: "Know what they protect, where they are placed, and how rules affect traffic." },
          { term: "Network devices", detail: "Understand routers, switches, wireless access points, and security appliances at a basic level." },
          { term: "Common network ports", detail: "Memorize common services and their ports because they appear often in network security questions." }
        ]
      },
      {
        type: "Exam shape",
        points: [
          { term: "Preparation", detail: "The objective sheet recommends at least 150 hours of instruction or hands-on experience." },
          { term: "Time", detail: "The exam information lists 50 minutes." },
          { term: "Questions", detail: "The exam information lists 35-50 questions." },
          { term: "Passing score", detail: "The listed cut score is 700 out of 1000." }
        ]
      }
    ]
  },
  {
    title: "Study Strategy",
    sections: [
      {
        type: "How to use this reviewer",
        points: [
          { term: "Study one type at a time", detail: "Focus on one small group, such as ports or malware, before moving to the next." },
          { term: "Use the question bank after each domain", detail: "Answer questions after studying a domain to check if you can recognize the concepts." },
          { term: "Read every explanation", detail: "The explanation teaches why the correct answer is right, which is more useful than memorizing letters." }
        ]
      },
      {
        type: "When to retake",
        points: [
          { term: "Consistent passing", detail: "Retake until your score stays above the passing level across multiple attempts." },
          { term: "Avoid lucky scores", detail: "One high score may come from familiar questions. Consistency means stronger understanding." },
          { term: "Review weak categories", detail: "Use missed questions to decide which type or domain needs more study." }
        ]
      }
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
const MAX_TAKE_SIZE = 50;
let take = [];
let current = 0;
let score = 0;
let answered = false;
let missed = [];
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

tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
document.getElementById("startQuiz").addEventListener("click", startTake);
document.getElementById("restartQuiz").addEventListener("click", startTake);
document.getElementById("showReviewer").addEventListener("click", () => setView("reviewer"));
document.getElementById("showBank").addEventListener("click", () => setView("bank"));
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
  setView("reviewer");
  window.print();
});
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
applyTheme(localStorage.getItem("itsNsTheme") || "light");
updateStatus();
