import React, { memo, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Images } from "../../utils/Theme";
import styles from "./styles";
const quizData = [
  {
    question: "What is the primary purpose of a firewall?",
    options: [
      "A) Prevent unauthorized access to a network",
      "B) Encrypt data",
      "C) Detect malware",
      "D) Manage user accounts",
    ],
    answer: "A) Prevent unauthorized access to a network",
  },
  {
    question: "Which type of malware disguises itself as legitimate software?",
    options: ["A) Virus", "B) Trojan", "C) Worm", "D) Ransomware"],
    answer: "B) Trojan",
  },
  {
    question: "What does SSL stand for?",
    options: [
      "A) Secure Service Layer",
      "B) Secure Sockets Layer",
      "C) Secure Sharing Layer",
      "D) Secure Software Layer",
    ],
    answer: "B) Secure Sockets Layer",
  },
  {
    question:
      "Which attack attempts to overwhelm a system with traffic to disrupt its normal functions?",
    options: [
      "A) Phishing",
      "B) DoS Attack",
      "C) Man-in-the-Middle Attack",
      "D) SQL Injection",
    ],
    answer: "B) DoS Attack",
  },
  {
    question: "What is a zero-day vulnerability?",
    options: [
      "A) A vulnerability that has been publicly disclosed but not yet patched",
      "B) A vulnerability that has been patched",
      "C) A vulnerability in an old software version",
      "D) A fake vulnerability created to confuse attackers",
    ],
    answer:
      "A) A vulnerability that has been publicly disclosed but not yet patched",
  },
  {
    question:
      "Which of the following is used to monitor and analyze suspicious network activity?",
    options: [
      "A) IDS (Intrusion Detection System)",
      "B) Firewall",
      "C) VPN",
      "D) DNS",
    ],
    answer: "A) IDS (Intrusion Detection System)",
  },
  {
    question: "What does the term 'phishing' refer to?",
    options: [
      "A) Stealing someone's data by hacking into their system",
      "B) Sending deceptive emails to trick users into revealing sensitive information",
      "C) Redirecting DNS traffic to malicious websites",
      "D) Monitoring network traffic",
    ],
    answer:
      "B) Sending deceptive emails to trick users into revealing sensitive information",
  },
  {
    question: "What is encryption used for?",
    options: [
      "A) Compressing files",
      "B) Encoding data to prevent unauthorized access",
      "C) Scanning systems for viruses",
      "D) Managing user permissions",
    ],
    answer: "B) Encoding data to prevent unauthorized access",
  },
  {
    question:
      "Which security principle ensures that data is not altered during transmission?",
    options: [
      "A) Integrity",
      "B) Confidentiality",
      "C) Availability",
      "D) Authentication",
    ],
    answer: "A) Integrity",
  },
  {
    question: "What does VPN stand for?",
    options: [
      "A) Virtual Private Network",
      "B) Verified Public Network",
      "C) Virtual Public Network",
      "D) Verified Private Network",
    ],
    answer: "A) Virtual Private Network",
  },
  {
    question: "What is the purpose of multi-factor authentication (MFA)?",
    options: [
      "A) To reset a password",
      "B) To use multiple methods to verify a user’s identity",
      "C) To encrypt user data",
      "D) To block phishing attacks",
    ],
    answer: "B) To use multiple methods to verify a user’s identity",
  },
  {
    question: "Which of the following is a strong password?",
    options: ["A) Password123", "B) JohnDoe2020", "C) 3e#fT9b!", "D) qwerty"],
    answer: "C) 3e#fT9b!",
  },
  {
    question: "What is social engineering in cybersecurity?",
    options: [
      "A) Cracking passwords using algorithms",
      "B) Manipulating people into divulging confidential information",
      "C) Infecting systems with malware",
      "D) Encrypting sensitive data",
    ],
    answer: "B) Manipulating people into divulging confidential information",
  },
  {
    question: "Which is not a form of malware?",
    options: ["A) Spyware", "B) Ransomware", "C) Adware", "D) Encryption"],
    answer: "D) Encryption",
  },
  {
    question: "What does the term 'ransomware' refer to?",
    options: [
      "A) Software designed to steal financial information",
      "B) Malware that locks files until a ransom is paid",
      "C) A tool to prevent system intrusions",
      "D) A type of phishing attack",
    ],
    answer: "B) Malware that locks files until a ransom is paid",
  },
  {
    question: "Which type of attack exploits vulnerabilities in SQL databases?",
    options: [
      "A) Brute Force Attack",
      "B) SQL Injection",
      "C) Phishing Attack",
      "D) Cross-Site Scripting",
    ],
    answer: "B) SQL Injection",
  },
  {
    question: "What is the role of a honeypot in cybersecurity?",
    options: [
      "A) To attract attackers and study their methods",
      "B) To encrypt sensitive data",
      "C) To protect against phishing attacks",
      "D) To scan for malware",
    ],
    answer: "A) To attract attackers and study their methods",
  },
  {
    question:
      "Which type of malware can self-replicate without human intervention?",
    options: ["A) Virus", "B) Worm", "C) Trojan", "D) Rootkit"],
    answer: "B) Worm",
  },
  {
    question: "What is the primary purpose of antivirus software?",
    options: [
      "A) Detect and remove malware",
      "B) Encrypt sensitive data",
      "C) Manage firewall rules",
      "D) Monitor network traffic",
    ],
    answer: "A) Detect and remove malware",
  },
  {
    question:
      "Which security principle ensures data is accessible when needed?",
    options: [
      "A) Availability",
      "B) Integrity",
      "C) Confidentiality",
      "D) Authentication",
    ],
    answer: "A) Availability",
  },
  {
    question: "What is a DDoS attack?",
    options: [
      "A) A single machine flooding a server with requests",
      "B) Multiple machines overwhelming a target with traffic",
      "C) Spoofing IP addresses to bypass security",
      "D) Exploiting a vulnerability in a web application",
    ],
    answer: "B) Multiple machines overwhelming a target with traffic",
  },
  {
    question: "What is penetration testing?",
    options: [
      "A) Preventing attacks on a network",
      "B) Scanning systems for malware",
      "C) Simulating attacks to find vulnerabilities",
      "D) Encrypting sensitive data",
    ],
    answer: "C) Simulating attacks to find vulnerabilities",
  },
  {
    question:
      "Which cryptographic algorithm is known for its use in asymmetric encryption?",
    options: ["A) AES", "B) RSA", "C) DES", "D) SHA"],
    answer: "B) RSA",
  },
  {
    question: "What is the main characteristic of a brute-force attack?",
    options: [
      "A) Guessing passwords until the correct one is found",
      "B) Using social engineering to gather login details",
      "C) Sending fake emails to obtain credentials",
      "D) Exploiting vulnerabilities in software",
    ],
    answer: "A) Guessing passwords until the correct one is found",
  },
  {
    question:
      "Which of the following best describes 'man-in-the-middle' attacks?",
    options: [
      "A) An attacker intercepts communication between two parties",
      "B) An attacker spoofs a DNS server",
      "C) An attacker sends deceptive emails",
      "D) An attacker brute forces into a system",
    ],
    answer: "A) An attacker intercepts communication between two parties",
  },
  {
    question:
      "Which type of malware specifically targets hardware-level vulnerabilities?",
    options: ["A) Rootkit", "B) Worm", "C) Trojan", "D) Spyware"],
    answer: "A) Rootkit",
  },
  {
    question:
      "Which protocol is commonly used for secure remote access to systems?",
    options: ["A) HTTP", "B) FTP", "C) SSH", "D) DNS"],
    answer: "C) SSH",
  },
  {
    question: "Which tool is commonly used for network security scanning?",
    options: ["A) Nmap", "B) MS Word", "C) Adobe Acrobat", "D) Slack"],
    answer: "A) Nmap",
  },
  {
    question: "What does the principle of least privilege refer to?",
    options: [
      "A) Users should have the minimum level of access necessary to perform their job",
      "B) Systems should always run with root access",
      "C) Network traffic should always be encrypted",
      "D) Data should be stored in an encrypted format",
    ],
    answer:
      "A) Users should have the minimum level of access necessary to perform their job",
  },
  {
    question: "What does a digital certificate provide?",
    options: [
      "A) Proof of identity for secure communications",
      "B) Malware detection",
      "C) Protection from phishing attacks",
      "D) A method to reset passwords",
    ],
    answer: "A) Proof of identity for secure communications",
  },
];

const QuizTwoComponent = memo((props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz Completed! Your score is ${score + 1}/${quizData.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Cyber Security Quiz ({currentQuestion + 1}/{quizData.length})
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.quizContainer}>
        <Text style={styles.question}>
          {quizData[currentQuestion].question}
        </Text>
        {quizData[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={handleNext}
          style={styles.nextButton}
          disabled={!selectedAnswer}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
});

export default QuizTwoComponent;
