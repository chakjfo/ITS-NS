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

const questions = [
  { c: "Foundations", q: "Which security goal ensures information is only available to authorized people?", a: "Confidentiality", o: ["Availability", "Confidentiality", "Scalability", "Non-repudiation"], e: "Confidentiality protects data from unauthorized viewing or disclosure." },
  { c: "Foundations", q: "Which part of the CIA triad is most affected by a denial-of-service attack?", a: "Availability", o: ["Integrity", "Availability", "Confidentiality", "Authentication"], e: "DoS attacks try to make a service unreachable, so availability is the main target." },
  { c: "Foundations", q: "What does integrity protect against?", a: "Unauthorized or accidental data changes", o: ["Unauthorized or accidental data changes", "Weak radio signals", "Lack of bandwidth", "Too many IP addresses"], e: "Integrity means data remains correct, complete, and trustworthy." },
  { c: "Foundations", q: "What is a vulnerability?", a: "A weakness that can be exploited", o: ["A weakness that can be exploited", "A guaranteed attack", "A business objective", "A completed backup"], e: "A vulnerability is a weakness in design, configuration, process, or code." },
  { c: "Foundations", q: "In risk management, risk is commonly based on which two factors?", a: "Likelihood and impact", o: ["Speed and duplex", "Likelihood and impact", "Port and protocol", "Username and password"], e: "Risk is usually estimated from how likely an event is and how severe its impact would be." },
  { c: "Foundations", q: "What is the best description of a threat?", a: "A potential cause of harm", o: ["A potential cause of harm", "A patched weakness", "An approved user", "An encrypted backup"], e: "Threats are events or actors that may exploit vulnerabilities and cause harm." },
  { c: "Foundations", q: "Which control type is a security awareness training program?", a: "Administrative control", o: ["Physical control", "Administrative control", "Compensating protocol", "Routing control"], e: "Policies, procedures, and training are administrative controls." },
  { c: "Foundations", q: "A locked server room is what type of control?", a: "Physical control", o: ["Physical control", "Detective control only", "Logical control only", "Cloud control"], e: "Locks, guards, cameras, and badges are physical controls." },
  { c: "Foundations", q: "Which term means proving a user is who they claim to be?", a: "Authentication", o: ["Authorization", "Authentication", "Accounting", "Availability"], e: "Authentication verifies identity, often with passwords, MFA, certificates, or biometrics." },
  { c: "Foundations", q: "Which term means determining what an authenticated user may access?", a: "Authorization", o: ["Authorization", "Authentication", "Hashing", "Tunneling"], e: "Authorization checks permissions after identity is verified." },

  { c: "Network Devices", q: "What is the primary purpose of a firewall?", a: "Control traffic between networks using rules", o: ["Assign IP addresses", "Control traffic between networks using rules", "Store passwords", "Amplify wireless signals"], e: "A firewall permits or denies traffic based on defined security rules." },
  { c: "Network Devices", q: "What does an IDS do?", a: "Detect suspicious activity and alert", o: ["Encrypt hard drives", "Detect suspicious activity and alert", "Replace DNS", "Assign VLAN tags"], e: "An intrusion detection system watches traffic or hosts and alerts on suspicious patterns." },
  { c: "Network Devices", q: "How is an IPS different from an IDS?", a: "An IPS can block traffic inline", o: ["An IPS only stores logs", "An IPS can block traffic inline", "An IPS never uses signatures", "An IPS replaces encryption"], e: "An IPS is placed inline and can actively prevent or block detected attacks." },
  { c: "Network Devices", q: "What is the purpose of a proxy server?", a: "Intermediates client requests and can filter or inspect traffic", o: ["Intermediates client requests and can filter or inspect traffic", "Creates electrical grounding", "Stores routing tables only", "Disables all logging"], e: "A proxy sits between clients and destinations to control, inspect, cache, or anonymize requests." },
  { c: "Network Devices", q: "What does a switch normally use to forward frames?", a: "MAC addresses", o: ["MAC addresses", "URLs", "File hashes", "User roles"], e: "Layer 2 switches forward Ethernet frames using MAC address tables." },
  { c: "Network Devices", q: "What does a router use to forward packets between networks?", a: "IP addresses and routing tables", o: ["IP addresses and routing tables", "MAC passwords", "File extensions", "VLAN names only"], e: "Routers forward Layer 3 packets based on IP destination and routing information." },
  { c: "Network Devices", q: "Why is a DMZ used?", a: "To place public-facing services in a separate network zone", o: ["To remove the need for backups", "To place public-facing services in a separate network zone", "To speed up keyboard input", "To disable authentication"], e: "A demilitarized zone isolates exposed services from the internal network." },
  { c: "Network Devices", q: "Which device commonly terminates site-to-site encrypted tunnels?", a: "VPN gateway", o: ["VPN gateway", "Unmanaged hub", "Printer", "Patch panel"], e: "VPN gateways establish and terminate encrypted tunnels between networks or users." },
  { c: "Network Devices", q: "What is a WAF designed to protect?", a: "Web applications", o: ["Web applications", "Power supplies", "Bluetooth keyboards", "Fiber cables"], e: "A web application firewall filters HTTP/HTTPS traffic for application-layer attacks." },
  { c: "Network Devices", q: "What is the risk of using an unmanaged switch in a sensitive area?", a: "Limited security controls and monitoring", o: ["Automatic encryption", "Limited security controls and monitoring", "Stronger identity enforcement", "Built-in SIEM"], e: "Unmanaged switches usually lack features such as port security, VLANs, and detailed monitoring." },

  { c: "Protocols", q: "Which protocol securely replaces Telnet for remote command-line administration?", a: "SSH", o: ["FTP", "SSH", "HTTP", "SNMPv1"], e: "SSH encrypts remote administration traffic; Telnet sends data in cleartext." },
  { c: "Protocols", q: "Which protocol secures web browsing with TLS?", a: "HTTPS", o: ["HTTP", "HTTPS", "TFTP", "ARP"], e: "HTTPS is HTTP protected by TLS." },
  { c: "Protocols", q: "What service translates domain names like example.com into IP addresses?", a: "DNS", o: ["NTP", "DNS", "DHCP", "SMTP"], e: "DNS resolves human-readable names to network addresses." },
  { c: "Protocols", q: "Which protocol automatically assigns IP configuration to clients?", a: "DHCP", o: ["DHCP", "ICMP", "LDAP", "RDP"], e: "DHCP can assign IP address, subnet mask, gateway, and DNS settings." },
  { c: "Protocols", q: "Which protocol is used to send email between mail servers?", a: "SMTP", o: ["IMAP", "SMTP", "SNMP", "SMB"], e: "SMTP transfers outgoing email and mail between servers." },
  { c: "Protocols", q: "Which protocol is preferred for secure network device monitoring and management?", a: "SNMPv3", o: ["SNMPv1", "SNMPv2c", "SNMPv3", "Telnet"], e: "SNMPv3 supports authentication and encryption, unlike older community-string versions." },
  { c: "Protocols", q: "Which protocol synchronizes time across network devices?", a: "NTP", o: ["NTP", "POP3", "ARP", "FTP"], e: "Accurate NTP time is important for logs, certificates, and investigations." },
  { c: "Protocols", q: "Which protocol maps IPv4 addresses to MAC addresses on a local network?", a: "ARP", o: ["ARP", "TLS", "LDAP", "SFTP"], e: "ARP resolves an IPv4 address to a local Layer 2 MAC address." },
  { c: "Protocols", q: "What is the main security weakness of FTP?", a: "It can transmit credentials and data in cleartext", o: ["It cannot move files", "It can transmit credentials and data in cleartext", "It only works with IPv6", "It blocks backups"], e: "Traditional FTP is not encrypted; SFTP or FTPS should be used instead." },
  { c: "Protocols", q: "Which protocol is commonly used for secure file transfer over SSH?", a: "SFTP", o: ["TFTP", "SFTP", "POP3", "ICMP"], e: "SFTP uses SSH to protect file transfer sessions." },

  { c: "Ports", q: "What is the default TCP port for HTTPS?", a: "443", o: ["22", "53", "80", "443"], e: "HTTPS commonly uses TCP port 443." },
  { c: "Ports", q: "What is the default port for SSH?", a: "22", o: ["21", "22", "25", "110"], e: "SSH uses TCP port 22 by default." },
  { c: "Ports", q: "What is the default port for DNS queries?", a: "53", o: ["53", "67", "123", "389"], e: "DNS usually uses UDP 53 for queries and TCP 53 for zone transfers or large responses." },
  { c: "Ports", q: "Which port is commonly used by SMTP?", a: "25", o: ["25", "69", "143", "3389"], e: "SMTP commonly uses TCP 25 for server-to-server mail transfer." },
  { c: "Ports", q: "Which port is commonly used by RDP?", a: "3389", o: ["161", "389", "445", "3389"], e: "Microsoft Remote Desktop Protocol commonly uses TCP 3389." },
  { c: "Ports", q: "Which port is associated with LDAP without TLS?", a: "389", o: ["389", "443", "636", "993"], e: "LDAP commonly uses TCP/UDP 389; LDAPS commonly uses TCP 636." },
  { c: "Ports", q: "Which port is commonly used by LDAPS?", a: "636", o: ["110", "143", "636", "8080"], e: "LDAPS protects LDAP with TLS and commonly uses port 636." },
  { c: "Ports", q: "Which port is commonly used by SMB over TCP?", a: "445", o: ["23", "123", "445", "514"], e: "SMB commonly uses TCP 445 for Windows file and printer sharing." },
  { c: "Ports", q: "Which port is commonly used by SNMP agents?", a: "161", o: ["161", "162", "443", "995"], e: "SNMP agents listen on UDP 161; traps commonly use UDP 162." },
  { c: "Ports", q: "Which port is commonly used by NTP?", a: "123", o: ["53", "88", "123", "179"], e: "NTP commonly uses UDP port 123." },

  { c: "Threats", q: "What is phishing?", a: "A social engineering attack that tricks users into revealing information or taking action", o: ["A wireless encryption mode", "A social engineering attack that tricks users into revealing information or taking action", "A backup method", "A routing protocol"], e: "Phishing uses deceptive messages, links, or attachments to manipulate victims." },
  { c: "Threats", q: "What is spear phishing?", a: "A targeted phishing attack against a specific person or group", o: ["A random network scan", "A targeted phishing attack against a specific person or group", "A firewall rule", "A password hash"], e: "Spear phishing is customized to the target, making it more convincing." },
  { c: "Threats", q: "What is malware?", a: "Software designed to harm, exploit, or gain unauthorized access", o: ["Software designed to harm, exploit, or gain unauthorized access", "A secure tunnel", "A network diagram", "A backup schedule"], e: "Malware includes viruses, worms, ransomware, spyware, and trojans." },
  { c: "Threats", q: "What does ransomware typically do?", a: "Encrypts or blocks access to data and demands payment", o: ["Encrypts or blocks access to data and demands payment", "Improves firewall rules", "Creates secure passwords", "Synchronizes time"], e: "Ransomware attempts to extort victims by denying access to systems or data." },
  { c: "Threats", q: "What is a man-in-the-middle attack?", a: "Interception or alteration of communication between parties", o: ["Interception or alteration of communication between parties", "A normal software update", "A hardware inventory", "A cooling issue"], e: "MITM attacks place the attacker between communicating parties." },
  { c: "Threats", q: "What is a brute-force attack?", a: "Trying many password or key guesses until one works", o: ["Trying many password or key guesses until one works", "Encrypting traffic with TLS", "Creating a VLAN", "Testing a backup restore"], e: "Brute force relies on repeated guessing, often automated." },
  { c: "Threats", q: "What is credential stuffing?", a: "Using leaked username and password pairs on other services", o: ["Using leaked username and password pairs on other services", "Adding RAM to a server", "Compressing log files", "Changing DNS records"], e: "Credential stuffing works because many people reuse passwords." },
  { c: "Threats", q: "What is SQL injection?", a: "Injecting malicious database commands through application input", o: ["Injecting malicious database commands through application input", "Flooding a switch with frames", "Changing Wi-Fi channels", "Encrypting a disk"], e: "SQL injection happens when untrusted input is handled unsafely in database queries." },
  { c: "Threats", q: "What is cross-site scripting or XSS?", a: "Injecting scripts that run in another user's browser", o: ["Injecting scripts that run in another user's browser", "Breaking a fiber cable", "Creating a VPN tunnel", "Resetting a password"], e: "XSS lets attackers run malicious client-side scripts in the victim's browser context." },
  { c: "Threats", q: "What is ARP spoofing?", a: "Sending false ARP messages to redirect local network traffic", o: ["Sending false ARP messages to redirect local network traffic", "Improving DNSSEC", "Backing up a router", "Creating stronger hashes"], e: "ARP spoofing can enable local interception or traffic redirection." },

  { c: "Cryptography", q: "Which encryption type uses the same key to encrypt and decrypt?", a: "Symmetric encryption", o: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Tokenization only"], e: "Symmetric encryption uses one shared secret key." },
  { c: "Cryptography", q: "Which encryption type uses a public key and private key pair?", a: "Asymmetric encryption", o: ["Asymmetric encryption", "Symmetric encryption", "Encoding", "Compression"], e: "Asymmetric cryptography uses mathematically related public and private keys." },
  { c: "Cryptography", q: "What does a hash primarily provide?", a: "Integrity verification", o: ["Integrity verification", "Wireless range", "Automatic routing", "Physical security"], e: "A secure hash creates a fixed-length digest that changes if the input changes." },
  { c: "Cryptography", q: "Why are password salts used?", a: "To make identical passwords produce different hashes", o: ["To make identical passwords produce different hashes", "To speed up DNS", "To disable MFA", "To remove logs"], e: "Salts make precomputed hash attacks and duplicate-hash detection harder." },
  { c: "Cryptography", q: "What does a digital signature provide?", a: "Integrity, authentication, and non-repudiation", o: ["Integrity, authentication, and non-repudiation", "More IP addresses", "Signal strength", "Packet fragmentation"], e: "A signature proves the private key holder signed the data and that it was not changed." },
  { c: "Cryptography", q: "What is TLS used for?", a: "Protecting data in transit", o: ["Protecting data in transit", "Formatting hard drives", "Assigning IP addresses", "Disabling routing"], e: "TLS encrypts and authenticates communication sessions such as HTTPS." },
  { c: "Cryptography", q: "What is a certificate authority?", a: "An entity that issues and signs digital certificates", o: ["An entity that issues and signs digital certificates", "A type of malware", "A switch feature", "A password manager only"], e: "CAs help clients trust that a public key belongs to a verified subject." },
  { c: "Cryptography", q: "What does encryption at rest protect?", a: "Stored data", o: ["Stored data", "Only live network packets", "Wireless signal strength", "Power supply uptime"], e: "Encryption at rest protects data stored on disks, databases, backups, or devices." },
  { c: "Cryptography", q: "Which is the safest password storage approach?", a: "Salted, slow password hashing", o: ["Plaintext passwords", "Reversible encryption with a shared key", "Salted, slow password hashing", "Base64 encoding"], e: "Passwords should be stored with salted, purpose-built slow hashes such as bcrypt, scrypt, or Argon2." },
  { c: "Cryptography", q: "What is non-repudiation?", a: "Assurance that someone cannot credibly deny an action they performed", o: ["Assurance that someone cannot credibly deny an action they performed", "A Wi-Fi frequency", "A router reboot", "A backup type"], e: "Digital signatures and audit logs can support non-repudiation." },

  { c: "Access Control", q: "What does least privilege mean?", a: "Users receive only the access needed for their work", o: ["Users receive only the access needed for their work", "Everyone gets administrator rights", "Passwords never expire", "All traffic is allowed"], e: "Least privilege reduces damage from mistakes, abuse, and compromised accounts." },
  { c: "Access Control", q: "What is MFA?", a: "Using more than one authentication factor", o: ["Using more than one authentication factor", "A firewall brand", "A routing metric", "A malware family"], e: "MFA combines factors such as something you know, have, or are." },
  { c: "Access Control", q: "Which is an example of something you have?", a: "Security token", o: ["Security token", "Password", "Fingerprint", "Username"], e: "A hardware token, smart card, or phone authenticator is possession-based." },
  { c: "Access Control", q: "What does RBAC use to assign permissions?", a: "Roles", o: ["Roles", "Cable colors", "IP TTL values", "Hash length only"], e: "Role-based access control assigns permissions to roles and users inherit role permissions." },
  { c: "Access Control", q: "What does AAA stand for?", a: "Authentication, authorization, and accounting", o: ["Authentication, authorization, and accounting", "Access, address, and audit", "Analyze, approve, and apply", "Alert, allow, and avoid"], e: "AAA covers identity verification, permission decisions, and activity records." },
  { c: "Access Control", q: "What is account lockout designed to reduce?", a: "Online password guessing", o: ["Online password guessing", "Disk fragmentation", "DNS latency", "Software licensing"], e: "Lockout or throttling slows brute-force attempts against accounts." },
  { c: "Access Control", q: "Why should default accounts be disabled or changed?", a: "They are widely known and often targeted", o: ["They are widely known and often targeted", "They improve encryption", "They remove the need for logs", "They increase bandwidth"], e: "Attackers often try default usernames and passwords first." },
  { c: "Access Control", q: "What is separation of duties?", a: "Dividing sensitive tasks so one person cannot complete risky actions alone", o: ["Dividing sensitive tasks so one person cannot complete risky actions alone", "Putting all servers in one VLAN", "Using one shared admin password", "Disabling audit logs"], e: "Separation of duties reduces fraud, error, and unchecked privilege." },
  { c: "Access Control", q: "What is a service account?", a: "An account used by applications or services rather than a human user", o: ["An account used by applications or services rather than a human user", "A guest Wi-Fi pass", "A firewall cable", "A DNS record type"], e: "Service accounts need strong secrets, least privilege, and monitoring." },
  { c: "Access Control", q: "Why is periodic access review important?", a: "To remove unnecessary or outdated permissions", o: ["To remove unnecessary or outdated permissions", "To increase packet size", "To replace encryption", "To disable MFA"], e: "Access reviews catch role changes, terminated users, and privilege creep." },

  { c: "Wireless", q: "Which Wi-Fi security mode is generally stronger than WPA2-Personal?", a: "WPA3-Personal", o: ["WEP", "WPA", "WPA3-Personal", "Open Wi-Fi"], e: "WPA3 improves personal Wi-Fi security and replaces older weak modes when supported." },
  { c: "Wireless", q: "Why is WEP considered insecure?", a: "Its encryption can be cracked quickly", o: ["Its encryption can be cracked quickly", "It uses too much bandwidth", "It requires certificates", "It blocks DHCP"], e: "WEP has serious cryptographic weaknesses and should not be used." },
  { c: "Wireless", q: "What is a rogue access point?", a: "An unauthorized wireless access point connected to or impersonating a network", o: ["An unauthorized wireless access point connected to or impersonating a network", "A patched router", "A trusted certificate", "A VPN gateway"], e: "Rogue APs can expose networks or trick users into connecting." },
  { c: "Wireless", q: "What does SSID broadcasting reveal?", a: "The wireless network name", o: ["The wireless network name", "The admin password", "The private key", "The firewall rules"], e: "The SSID is the Wi-Fi network name; hiding it is not a strong security control." },
  { c: "Wireless", q: "What is an evil twin attack?", a: "A fake access point that imitates a legitimate network", o: ["A fake access point that imitates a legitimate network", "A duplicate backup", "A second firewall", "A switch loop"], e: "Evil twins lure users into connecting so traffic or credentials can be captured." },
  { c: "Wireless", q: "Which authentication method is common for enterprise Wi-Fi?", a: "802.1X", o: ["802.1X", "WEP shared key", "Open authentication", "Telnet"], e: "802.1X supports enterprise authentication, often through RADIUS." },
  { c: "Wireless", q: "What is the purpose of a guest Wi-Fi network?", a: "Separate visitor devices from internal resources", o: ["Separate visitor devices from internal resources", "Give visitors domain admin", "Disable encryption", "Share server VLANs"], e: "Guest networks should isolate untrusted devices from internal systems." },
  { c: "Wireless", q: "What is a pre-shared key?", a: "A shared Wi-Fi password used by clients to join a network", o: ["A shared Wi-Fi password used by clients to join a network", "A public DNS server", "A malware signature", "A firewall log"], e: "WPA-Personal commonly uses a pre-shared key." },
  { c: "Wireless", q: "Why should Wi-Fi admin interfaces not be exposed to guests?", a: "Guests could attempt configuration attacks", o: ["Guests could attempt configuration attacks", "It improves battery life", "It removes encryption", "It blocks DNS"], e: "Management interfaces should be restricted to trusted admin networks." },
  { c: "Wireless", q: "What can wireless site surveys help identify?", a: "Coverage gaps, interference, and rogue devices", o: ["Coverage gaps, interference, and rogue devices", "Password hash algorithms", "Expired software licenses", "Printer toner levels"], e: "Wireless surveys help tune coverage and detect security or reliability issues." },

  { c: "Segmentation", q: "What is the main security benefit of VLANs?", a: "They logically separate network traffic", o: ["They logically separate network traffic", "They encrypt files", "They replace passwords", "They cool servers"], e: "VLANs separate broadcast domains and support segmentation policies." },
  { c: "Segmentation", q: "Why segment critical servers from user workstations?", a: "To limit lateral movement and exposure", o: ["To limit lateral movement and exposure", "To make passwords shorter", "To disable logging", "To avoid routing"], e: "Segmentation reduces the reach of compromised endpoints." },
  { c: "Segmentation", q: "What is zero trust based on?", a: "Verify explicitly and assume no implicit trust", o: ["Verify explicitly and assume no implicit trust", "Trust all internal users", "Disable authentication inside the LAN", "Use one shared password"], e: "Zero trust continuously verifies users, devices, and context." },
  { c: "Segmentation", q: "What is microsegmentation?", a: "Fine-grained isolation between workloads or systems", o: ["Fine-grained isolation between workloads or systems", "A tiny keyboard", "A backup tape size", "A DNS cache"], e: "Microsegmentation applies precise policies to reduce lateral movement." },
  { c: "Segmentation", q: "Which network should IoT devices usually use?", a: "A restricted, segmented network", o: ["A restricted, segmented network", "The domain controller VLAN", "The backup administrator network", "The public server DMZ with full access"], e: "IoT devices often have weaker security and should be isolated." },
  { c: "Segmentation", q: "What does NAC help enforce?", a: "Device and user compliance before network access", o: ["Device and user compliance before network access", "Disk encryption speed", "Website colors", "Email subject lines"], e: "Network access control can check identity, posture, and policy before granting access." },
  { c: "Segmentation", q: "What is lateral movement?", a: "An attacker moving from one compromised system to others", o: ["An attacker moving from one compromised system to others", "A user moving a desk", "A router changing time zones", "A backup moving offsite"], e: "Attackers use lateral movement to expand control inside a network." },
  { c: "Segmentation", q: "What is a trust zone?", a: "A network area with a defined security level and policy", o: ["A network area with a defined security level and policy", "A password reset page", "An antenna pattern", "A file extension"], e: "Trust zones help decide how traffic should be filtered and monitored." },
  { c: "Segmentation", q: "Which rule is safest for traffic between zones?", a: "Deny by default, allow only required traffic", o: ["Deny by default, allow only required traffic", "Allow everything by default", "Permit unknown services", "Trust all private IPs"], e: "Default deny reduces accidental exposure." },
  { c: "Segmentation", q: "What is the role of an ACL on a router or firewall?", a: "Permit or deny traffic based on criteria", o: ["Permit or deny traffic based on criteria", "Store user photos", "Replace TLS", "Generate passwords"], e: "Access control lists filter traffic by source, destination, protocol, port, or direction." },

  { c: "Monitoring", q: "Why are logs important in security?", a: "They support detection, investigation, and accountability", o: ["They support detection, investigation, and accountability", "They encrypt network traffic", "They assign IP addresses", "They remove vulnerabilities automatically"], e: "Logs show activity history and are essential during incident response." },
  { c: "Monitoring", q: "What does SIEM stand for?", a: "Security information and event management", o: ["Security information and event management", "Secure internet email mode", "System image encryption module", "Switch interface event map"], e: "A SIEM collects, correlates, and alerts on security event data." },
  { c: "Monitoring", q: "What is a false positive?", a: "An alert that reports a problem when there is no real incident", o: ["An alert that reports a problem when there is no real incident", "A missed attack", "A confirmed breach", "An encrypted log"], e: "False positives create noise and require tuning." },
  { c: "Monitoring", q: "What is a false negative?", a: "A real attack or issue that is not detected", o: ["A real attack or issue that is not detected", "A harmless alert", "A backup success", "A firewall rule"], e: "False negatives are dangerous because malicious activity is missed." },
  { c: "Monitoring", q: "What is baselining?", a: "Learning normal behavior so abnormal activity can be noticed", o: ["Learning normal behavior so abnormal activity can be noticed", "Formatting a disk", "Changing a username", "Printing a network map"], e: "Baselines help identify deviations such as unusual traffic or login patterns." },
  { c: "Monitoring", q: "What is NetFlow useful for?", a: "Summarizing network traffic flows", o: ["Summarizing network traffic flows", "Encrypting files", "Resetting passwords", "Scanning Wi-Fi channels only"], e: "Flow data shows source, destination, ports, protocol, volume, and timing." },
  { c: "Monitoring", q: "Why centralize logs?", a: "To preserve and search events even if one host is compromised", o: ["To preserve and search events even if one host is compromised", "To disable auditing", "To make malware faster", "To remove timestamps"], e: "Central logging helps protect evidence and correlate events." },
  { c: "Monitoring", q: "What is alert fatigue?", a: "Reduced response quality caused by too many low-value alerts", o: ["Reduced response quality caused by too many low-value alerts", "A failed UPS battery", "A secure protocol", "A password reset method"], e: "Too much noise can cause analysts to miss important alerts." },
  { c: "Monitoring", q: "Which event is most suspicious?", a: "Successful admin login from an unusual country at 3 AM", o: ["Successful admin login from an unusual country at 3 AM", "A normal patch install during maintenance", "A user opening the intranet", "A printer reporting low toner"], e: "Unusual privileged access can indicate account compromise." },
  { c: "Monitoring", q: "What is log retention?", a: "How long logs are stored and available", o: ["How long logs are stored and available", "How often passwords rotate", "How many VLANs exist", "How fast disks spin"], e: "Retention should meet investigation, legal, compliance, and operational needs." },

  { c: "Incident Response", q: "What is the first phase of incident response?", a: "Preparation", o: ["Preparation", "Recovery", "Eradication", "Lessons learned"], e: "Preparation happens before incidents and includes tools, roles, playbooks, and training." },
  { c: "Incident Response", q: "What does containment focus on?", a: "Limiting damage and preventing spread", o: ["Limiting damage and preventing spread", "Writing marketing emails", "Ignoring alerts", "Deleting all backups"], e: "Containment isolates affected systems or accounts to stop further harm." },
  { c: "Incident Response", q: "What does eradication mean?", a: "Removing the root cause and attacker artifacts", o: ["Removing the root cause and attacker artifacts", "Paying invoices", "Creating a guest network", "Opening all ports"], e: "Eradication removes malware, persistence, exploited vulnerabilities, and unauthorized access." },
  { c: "Incident Response", q: "Why preserve evidence during an incident?", a: "To support investigation, legal needs, and lessons learned", o: ["To support investigation, legal needs, and lessons learned", "To slow down recovery only", "To increase noise", "To avoid documentation"], e: "Good evidence handling keeps facts reliable for decisions and possible legal action." },
  { c: "Incident Response", q: "What is chain of custody?", a: "Documented control and handling of evidence", o: ["Documented control and handling of evidence", "A type of firewall cable", "A password policy", "A Wi-Fi mode"], e: "Chain of custody records who handled evidence, when, and why." },
  { c: "Incident Response", q: "What is the purpose of lessons learned?", a: "Improve controls and response after an incident", o: ["Improve controls and response after an incident", "Assign blame only", "Remove all logs", "Disable training"], e: "Post-incident review turns experience into better prevention and response." },
  { c: "Incident Response", q: "When ransomware is detected, what is often an early containment step?", a: "Isolate affected systems from the network", o: ["Isolate affected systems from the network", "Share admin passwords", "Disable backups", "Open SMB to the internet"], e: "Isolation helps stop encryption or spread to other systems." },
  { c: "Incident Response", q: "What is an incident response playbook?", a: "A repeatable procedure for handling a specific incident type", o: ["A repeatable procedure for handling a specific incident type", "A game file", "An IP address list only", "A cable diagram"], e: "Playbooks guide consistent action under pressure." },
  { c: "Incident Response", q: "Who should communicate externally during a major incident?", a: "Approved spokespersons or designated communication roles", o: ["Approved spokespersons or designated communication roles", "Anyone with a social media account", "Only the attacker", "No one under any circumstance"], e: "Controlled communication reduces confusion, legal risk, and misinformation." },
  { c: "Incident Response", q: "What does recovery focus on?", a: "Restoring normal operations safely", o: ["Restoring normal operations safely", "Ignoring root cause", "Deleting documentation", "Allowing all traffic"], e: "Recovery restores services while validating that systems are clean and secure." },

  { c: "Hardening", q: "What is system hardening?", a: "Reducing attack surface through secure configuration", o: ["Reducing attack surface through secure configuration", "Adding decorative UI", "Increasing monitor brightness", "Changing cable color"], e: "Hardening removes unnecessary services, applies secure settings, and limits exposure." },
  { c: "Hardening", q: "Why disable unused services?", a: "They increase attack surface", o: ["They increase attack surface", "They improve MFA", "They encrypt backups", "They prevent logging"], e: "Any running service can contain vulnerabilities or misconfigurations." },
  { c: "Hardening", q: "Why is patch management important?", a: "It fixes known vulnerabilities", o: ["It fixes known vulnerabilities", "It removes the need for firewalls", "It guarantees no attacks", "It replaces backups"], e: "Timely patches reduce exposure to publicly known flaws." },
  { c: "Hardening", q: "What is secure baseline configuration?", a: "A standard approved set of security settings", o: ["A standard approved set of security settings", "A random password list", "A Wi-Fi antenna", "A public website"], e: "Baselines make systems consistent and easier to audit." },
  { c: "Hardening", q: "Why remove local administrator rights from regular users?", a: "To limit damage from malware or mistakes", o: ["To limit damage from malware or mistakes", "To make browsers slower", "To disable encryption", "To stop DHCP"], e: "Admin rights let malware or users make broad system changes." },
  { c: "Hardening", q: "What is application allowlisting?", a: "Allowing only approved software to run", o: ["Allowing only approved software to run", "Blocking all TLS", "Permitting all downloads", "Disabling updates"], e: "Allowlisting can prevent unauthorized or malicious programs from executing." },
  { c: "Hardening", q: "Why use configuration backups for network devices?", a: "To restore known-good settings after failure or compromise", o: ["To restore known-good settings after failure or compromise", "To replace encryption", "To share passwords", "To stop logging"], e: "Configuration backups speed recovery and support change tracking." },
  { c: "Hardening", q: "What is the risk of exposing management interfaces to the internet?", a: "They become direct targets for attackers", o: ["They become direct targets for attackers", "They automatically patch faster", "They hide all logs", "They improve availability"], e: "Management ports should be restricted with VPN, ACLs, MFA, and trusted sources." },
  { c: "Hardening", q: "What is a secure password policy meant to reduce?", a: "Unauthorized account access", o: ["Unauthorized account access", "Network cable length", "DNS record count", "Backup storage only"], e: "Password length, uniqueness, MFA, and monitoring help reduce account compromise." },
  { c: "Hardening", q: "Why should firmware be updated?", a: "To fix device vulnerabilities and stability issues", o: ["To fix device vulnerabilities and stability issues", "To delete firewall rules", "To remove authentication", "To disable routing"], e: "Routers, switches, firewalls, and access points also need security updates." },

  { c: "Backup and Recovery", q: "What is the 3-2-1 backup rule?", a: "Three copies, two media types, one offsite copy", o: ["Three copies, two media types, one offsite copy", "Three passwords, two users, one router", "Three VLANs, two switches, one cable", "Three ports, two protocols, one log"], e: "3-2-1 improves resilience against failure, disaster, and ransomware." },
  { c: "Backup and Recovery", q: "Why test backup restoration?", a: "To confirm backups can actually recover systems and data", o: ["To confirm backups can actually recover systems and data", "To make malware stronger", "To disable encryption", "To reduce password length"], e: "Untested backups may be incomplete, corrupt, or unusable." },
  { c: "Backup and Recovery", q: "What is RPO?", a: "Maximum acceptable data loss measured in time", o: ["Maximum acceptable data loss measured in time", "Maximum login attempts", "A firewall rule", "A wireless standard"], e: "Recovery point objective defines how much data loss the business can tolerate." },
  { c: "Backup and Recovery", q: "What is RTO?", a: "Target time to restore service after disruption", o: ["Target time to restore service after disruption", "A password hash", "A DNS query", "A cable type"], e: "Recovery time objective defines how quickly a service must be restored." },
  { c: "Backup and Recovery", q: "Why keep offline or immutable backups?", a: "To protect backups from ransomware modification or deletion", o: ["To protect backups from ransomware modification or deletion", "To make files public", "To remove retention policies", "To speed up phishing"], e: "Isolated or immutable backups are harder for attackers to encrypt or erase." },
  { c: "Backup and Recovery", q: "What is disaster recovery?", a: "Restoring technology services after major disruption", o: ["Restoring technology services after major disruption", "Writing firewall logs", "Naming VLANs", "Changing a wallpaper"], e: "Disaster recovery plans how systems continue or return after severe events." },
  { c: "Backup and Recovery", q: "What is business continuity?", a: "Keeping essential business functions operating during disruption", o: ["Keeping essential business functions operating during disruption", "Only formatting disks", "Only replacing passwords", "Only scanning ports"], e: "Business continuity is broader than IT recovery and focuses on critical operations." },
  { c: "Backup and Recovery", q: "Why encrypt backup media?", a: "To protect data if the media is lost or stolen", o: ["To protect data if the media is lost or stolen", "To erase logs", "To open all firewall ports", "To make passwords shorter"], e: "Backups often contain sensitive data and need confidentiality controls." },
  { c: "Backup and Recovery", q: "What should backup access follow?", a: "Least privilege", o: ["Least privilege", "Open access", "Anonymous access", "Shared admin only"], e: "Backup systems are high-value targets and should have tightly limited access." },
  { c: "Backup and Recovery", q: "What is a hot site?", a: "A recovery location ready to operate quickly with systems and data", o: ["A recovery location ready to operate quickly with systems and data", "A server with poor cooling", "A public Wi-Fi network", "A phishing page"], e: "Hot sites are prepared for rapid failover but cost more than warm or cold sites." },

  { c: "Secure Operations", q: "What is change management used for?", a: "Controlling and documenting system changes", o: ["Controlling and documenting system changes", "Guessing passwords", "Disabling logs", "Creating malware"], e: "Change management reduces outages and tracks who changed what, when, and why." },
  { c: "Secure Operations", q: "Why document network diagrams?", a: "They help troubleshooting, audits, and incident response", o: ["They help troubleshooting, audits, and incident response", "They replace encryption", "They remove all vulnerabilities", "They make phishing impossible"], e: "Accurate diagrams help teams understand systems and dependencies." },
  { c: "Secure Operations", q: "What is data classification?", a: "Labeling data based on sensitivity and handling needs", o: ["Labeling data based on sensitivity and handling needs", "Sorting cables by color", "Choosing monitor size", "Naming printers"], e: "Classification guides access, encryption, retention, and sharing rules." },
  { c: "Secure Operations", q: "What is acceptable use policy?", a: "Rules for proper use of organizational technology", o: ["Rules for proper use of organizational technology", "A Wi-Fi encryption cipher", "A network port", "A backup image"], e: "AUPs tell users what behavior is allowed and prohibited." },
  { c: "Secure Operations", q: "Why perform vulnerability scans?", a: "To identify known weaknesses before attackers exploit them", o: ["To identify known weaknesses before attackers exploit them", "To create stronger Wi-Fi signals", "To replace incident response", "To disable patching"], e: "Scanning helps prioritize remediation." },
  { c: "Secure Operations", q: "How is penetration testing different from vulnerability scanning?", a: "Penetration testing attempts to exploit weaknesses to prove impact", o: ["Penetration testing attempts to exploit weaknesses to prove impact", "It only counts printers", "It never needs permission", "It only changes passwords"], e: "Pen tests are controlled attempts to validate exploitability and business risk." },
  { c: "Secure Operations", q: "What is security awareness training meant to reduce?", a: "Human-related security mistakes and social engineering success", o: ["Human-related security mistakes and social engineering success", "CPU temperature", "DNS record size", "Fiber signal loss"], e: "Users are part of the defense; training helps them recognize risky situations." },
  { c: "Secure Operations", q: "What is asset inventory?", a: "A record of hardware, software, systems, and owners", o: ["A record of hardware, software, systems, and owners", "A malware type", "A firewall port", "A hash function"], e: "You cannot protect what you do not know exists." },
  { c: "Secure Operations", q: "Why classify incidents by severity?", a: "To prioritize response resources and escalation", o: ["To prioritize response resources and escalation", "To hide alerts", "To skip documentation", "To remove MFA"], e: "Severity helps teams decide urgency, communication, and response level." },
  { c: "Secure Operations", q: "What is the purpose of an audit trail?", a: "To record actions for accountability and investigation", o: ["To record actions for accountability and investigation", "To boost Wi-Fi range", "To encrypt RAM", "To disable passwords"], e: "Audit trails show who did what and when." },
  { c: "Official Domain: Defense in Depth", q: "What is a mantrap?", a: "A controlled physical access area with two interlocking doors", o: ["A controlled physical access area with two interlocking doors", "A malware quarantine folder", "A wireless channel scanner", "A password reset token"], e: "A mantrap helps enforce physical access control by allowing only authorized entry through a controlled space." },
  { c: "Official Domain: Defense in Depth", q: "Which backup type copies all selected data every time it runs?", a: "Full backup", o: ["Full backup", "Incremental backup", "Differential backup", "Synthetic route"], e: "A full backup captures all selected data and is the base for many backup strategies." },
  { c: "Official Domain: Defense in Depth", q: "Which backup type copies data changed since the last full backup?", a: "Differential backup", o: ["Differential backup", "Incremental backup", "Archive-only restore", "Bare metal scan"], e: "Differential backups grow until the next full backup because they include changes since that full backup." },
  { c: "Official Domain: Defense in Depth", q: "Which backup type copies data changed since the last backup of any type?", a: "Incremental backup", o: ["Incremental backup", "Differential backup", "Full backup", "Image wipe"], e: "Incremental backups are usually smaller because each one captures changes since the previous backup." },
  { c: "Official Domain: Defense in Depth", q: "What is a logic bomb?", a: "Malicious code triggered by a condition or event", o: ["Malicious code triggered by a condition or event", "A firewall default rule", "A failed cooling system", "A wireless encryption mode"], e: "Logic bombs wait for a trigger such as a date, login, or file change before executing." },
  { c: "Official Domain: Operating System Security", q: "What does UAC help prevent in Windows?", a: "Unauthorized or accidental elevation of privileges", o: ["Unauthorized or accidental elevation of privileges", "DNS cache poisoning only", "Wireless interference", "Packet fragmentation"], e: "User Account Control prompts before privileged changes, reducing silent administrative actions." },
  { c: "Official Domain: Operating System Security", q: "What is the purpose of gpupdate?", a: "Refresh Group Policy settings on a Windows system", o: ["Refresh Group Policy settings on a Windows system", "Encrypt a disk", "Scan a web server", "Create a VLAN"], e: "gpupdate applies current Group Policy settings without waiting for the normal refresh interval." },
  { c: "Official Domain: Operating System Security", q: "What is the purpose of gpresult?", a: "Show the Group Policy settings applied to a user or computer", o: ["Show the Group Policy settings applied to a user or computer", "Assign an IP address", "Start a VPN tunnel", "Clear browser cache"], e: "gpresult helps troubleshoot which Group Policy objects affected a system or user." },
  { c: "Official Domain: Operating System Security", q: "What is Kerberos mainly used for?", a: "Network authentication using tickets", o: ["Network authentication using tickets", "Wireless signal boosting", "File compression", "Port mirroring"], e: "Kerberos uses tickets to authenticate users and services without repeatedly sending passwords." },
  { c: "Official Domain: Operating System Security", q: "What do Run As and sudo allow?", a: "Performing administrative tasks with secondary elevated credentials", o: ["Performing administrative tasks with secondary elevated credentials", "Disabling all access control", "Sniffing packets", "Creating a public website"], e: "Run As and sudo help users perform privileged actions without staying logged in as an administrator." },
  { c: "Official Domain: Operating System Security", q: "What is permission inheritance?", a: "Child files or folders receiving permissions from a parent folder", o: ["Child files or folders receiving permissions from a parent folder", "Routers learning DNS records", "Users inheriting IP addresses", "Firewalls copying malware"], e: "Inheritance makes permission management easier but must be checked when access is unexpected." },
  { c: "Official Domain: Operating System Security", q: "What is BitLocker?", a: "A Microsoft drive encryption feature", o: ["A Microsoft drive encryption feature", "A DNS filtering service", "A Linux package manager", "A wireless antenna type"], e: "BitLocker protects Windows volumes with drive encryption, often using TPM support." },
  { c: "Official Domain: Network Device Security", q: "What is a stateful firewall?", a: "A firewall that tracks connection state when filtering traffic", o: ["A firewall that tracks connection state when filtering traffic", "A firewall that ignores sessions", "A device that only assigns DNS names", "A backup appliance"], e: "Stateful inspection considers whether traffic belongs to an established or valid connection." },
  { c: "Official Domain: Network Device Security", q: "What is content filtering?", a: "Blocking or allowing content based on category, policy, or risk", o: ["Blocking or allowing content based on category, policy, or risk", "Encrypting a folder", "Changing a MAC address", "Replacing authentication"], e: "Content filtering can restrict malicious, inappropriate, or policy-violating content." },
  { c: "Official Domain: Network Device Security", q: "What is a honeynet?", a: "A decoy network used to observe attacker behavior", o: ["A decoy network used to observe attacker behavior", "A faster guest Wi-Fi network", "A password vault", "A backup rotation"], e: "Honeynets are intentionally monitored decoys, not production networks." },
  { c: "Official Domain: Network Device Security", q: "What does NAT/PAT do?", a: "Translates private addresses to public addresses, often sharing one public IP by port", o: ["Translates private addresses to public addresses, often sharing one public IP by port", "Encrypts local files", "Detects phishing emails", "Creates password hashes"], e: "NAT translates addresses; PAT lets many private hosts share one public address using ports." },
  { c: "Official Domain: Network Device Security", q: "What is DNSSEC designed to protect?", a: "The authenticity and integrity of DNS responses", o: ["The authenticity and integrity of DNS responses", "Wi-Fi signal strength", "USB storage speed", "Printer access"], e: "DNSSEC uses signatures so clients can validate DNS data has not been spoofed or altered." },
  { c: "Official Domain: Network Device Security", q: "What is network sniffing?", a: "Capturing and inspecting network traffic", o: ["Capturing and inspecting network traffic", "Deleting browser cache", "Changing file ownership", "Updating antivirus signatures"], e: "Sniffing can be legitimate for troubleshooting or malicious when used to capture sensitive data." },
  { c: "Official Domain: Secure Computing", q: "What is pharming?", a: "Redirecting users to a fraudulent site even when they enter a legitimate address", o: ["Redirecting users to a fraudulent site even when they enter a legitimate address", "Scanning antivirus logs", "Creating full backups", "Encrypting a USB drive"], e: "Pharming often abuses DNS or host-file manipulation to send users to fake sites." },
  { c: "Official Domain: Secure Computing", q: "Why clear browser cache on shared or sensitive systems?", a: "To reduce stored private data and stale session artifacts", o: ["To reduce stored private data and stale session artifacts", "To open Telnet", "To bypass MFA", "To increase phishing success"], e: "Cache can hold pages, files, cookies, or session traces that should not remain on shared systems." },
  { c: "Official Domain: Secure Computing", q: "What should be done after antivirus reports malware?", a: "Investigate the alert, remediate, update protection, and rescan", o: ["Investigate the alert, remediate, update protection, and rescan", "Ignore it if the computer still boots", "Disable all logs", "Open firewall ports"], e: "The objective domain includes remediation, scheduled scans, updating, and investigating alerts." }
];

const TAKE_SIZE = 50;
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

document.getElementById("bankCount").textContent = `${questions.length} questions`;

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
  const categories = [...new Set(questions.map((item) => item.c))].sort();
  categoryFilter.innerHTML += categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderBank() {
  const category = categoryFilter.value;
  const term = searchBank.value.trim().toLowerCase();
  const filtered = questions.filter((item) => {
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
  take = shuffle(questions).slice(0, TAKE_SIZE).map((item) => ({ ...item, choices: shuffle(item.o) }));
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
    : "Start a take to receive 50 randomized questions from the full bank.";
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
