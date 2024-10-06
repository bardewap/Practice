import React, { memo, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { Images } from "../../utils/Theme";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Add AsyncStorage for saving the score

const quizData = [
  {
    question: "What is the primary function of a router?",
    options: [
      "A) Transmits data between devices within a network",
      "B) Routes data between different networks",
      "C) Filters packets by IP address",
      "D) Encrypts traffic",
    ],
    answer: "B) Routes data between different networks",
  },
  {
    question: "Which protocol is used to send an email?",
    options: ["A) FTP", "B) HTTP", "C) SMTP", "D) IMAP"],
    answer: "C) SMTP",
  },
  // {
  //   question: "What is the maximum transmission speed of Gigabit Ethernet?",
  //   options: ["A) 10 Mbps", "B) 100 Mbps", "C) 1000 Mbps", "D) 10 Gbps"],
  //   answer: "C) 1000 Mbps",
  // },
  // {
  //   question:
  //     "Which layer of the OSI model is responsible for reliable data transfer?",
  //   options: ["A) Data Link", "B) Transport", "C) Network", "D) Physical"],
  //   answer: "B) Transport",
  // },
  // {
  //   question: "What is the function of DNS?",
  //   options: [
  //     "A) Converts IP addresses into URLs",
  //     "B) Resolves domain names to IP addresses",
  //     "C) Provides encryption for network traffic",
  //     "D) Authenticates devices on a network",
  //   ],
  //   answer: "B) Resolves domain names to IP addresses",
  // },
  // {
  //   question: "What type of network uses radio waves to transmit data?",
  //   options: ["A) LAN", "B) WAN", "C) WLAN", "D) PAN"],
  //   answer: "C) WLAN",
  // },
  // {
  //   question: "Which protocol is used to securely browse the internet?",
  //   options: ["A) FTP", "B) HTTP", "C) HTTPS", "D) SNMP"],
  //   answer: "C) HTTPS",
  // },
  // {
  //   question: "Which IP address class allows up to 16777216 hosts?",
  //   options: ["A) Class A", "B) Class B", "C) Class C", "D) Class D"],
  //   answer: "A) Class A",
  // },
  // {
  //   question: "What does VLAN stand for?",
  //   options: [
  //     "A) Virtual Local Access Network",
  //     "B) Virtual Linear Area Network",
  //     "C) Virtual Local Area Network",
  //     "D) Virtual Limited Access Network",
  //   ],
  //   answer: "C) Virtual Local Area Network",
  // },
  // {
  //   question: "Which protocol allows the dynamic assignment of IP addresses?",
  //   options: ["A) DNS", "B) DHCP", "C) ARP", "D) ICMP"],
  //   answer: "B) DHCP",
  // },
  // {
  //   question: "What is the primary function of a switch in a network?",
  //   options: [
  //     "A) Connect different networks",
  //     "B) Connects devices within a network and forwards data",
  //     "C) Encrypts data packets",
  //     "D) Assigns IP addresses",
  //   ],
  //   answer: "B) Connects devices within a network and forwards data",
  // },
  // {
  //   question: "What is the purpose of a subnet mask?",
  //   options: [
  //     "A) Identifies the network portion of an IP address",
  //     "B) Encrypts traffic within a network",
  //     "C) Defines the host portion of an IP address",
  //     "D) Restricts access to the internet",
  //   ],
  //   answer: "A) Identifies the network portion of an IP address",
  // },
  // {
  //   question:
  //     "Which protocol is used to resolve an IP address to a MAC address?",
  //   options: ["A) DHCP", "B) ARP", "C) DNS", "D) FTP"],
  //   answer: "B) ARP",
  // },
  // {
  //   question: "What type of network topology uses a single central node?",
  //   options: ["A) Star", "B) Ring", "C) Bus", "D) Mesh"],
  //   answer: "A) Star",
  // },
  // {
  //   question:
  //     "Which layer of the OSI model establishes and terminates connections between applications?",
  //   options: ["A) Transport", "B) Session", "C) Application", "D) Network"],
  //   answer: "B) Session",
  // },
  // {
  //   question: "What is a private IP address?",
  //   options: [
  //     "A) An IP address that is accessible over the internet",
  //     "B) An IP address that is used for internal network communication",
  //     "C) An IP address assigned by an ISP",
  //     "D) An IP address used for public servers",
  //   ],
  //   answer: "B) An IP address that is used for internal network communication",
  // },
  // {
  //   question: "What does NAT stand for?",
  //   options: [
  //     "A) Network Access Translation",
  //     "B) Network Address Transfer",
  //     "C) Network Address Translation",
  //     "D) Node Access Transfer",
  //   ],
  //   answer: "C) Network Address Translation",
  // },
  // {
  //   question:
  //     "Which protocol is responsible for network diagnostics and error reporting?",
  //   options: ["A) ICMP", "B) DNS", "C) SMTP", "D) FTP"],
  //   answer: "A) ICMP",
  // },
  // {
  //   question:
  //     "Which command is used to test the reachability of a host in a network?",
  //   options: ["A) tracert", "B) ping", "C) nslookup", "D) ipconfig"],
  //   answer: "B) ping",
  // },
  // {
  //   question: "What does the term 'latency' refer to in networking?",
  //   options: [
  //     "A) Amount of data that can be transferred per second",
  //     "B) Time taken for a packet to travel from source to destination",
  //     "C) Number of dropped packets during transmission",
  //     "D) The range of IP addresses available in a network",
  //   ],
  //   answer: "B) Time taken for a packet to travel from source to destination",
  // },
  // {
  //   question: "Which of the following is not a type of network topology?",
  //   options: ["A) Star", "B) Bus", "C) Hybrid", "D) Pyramid"],
  //   answer: "D) Pyramid",
  // },
  // {
  //   question: "What is the default port for HTTP?",
  //   options: ["A) 21", "B) 25", "C) 80", "D) 443"],
  //   answer: "C) 80",
  // },
  // {
  //   question: "What type of cable is commonly used in Ethernet networks?",
  //   options: ["A) Coaxial", "B) Twisted Pair", "C) Fiber Optic", "D) USB"],
  //   answer: "B) Twisted Pair",
  // },
  // {
  //   question:
  //     "Which protocol is used for transferring files between a client and a server?",
  //   options: ["A) FTP", "B) SMTP", "C) HTTP", "D) SSH"],
  //   answer: "A) FTP",
  // },
  // {
  //   question: "What does BGP stand for?",
  //   options: [
  //     "A) Best Gateway Protocol",
  //     "B) Border Gateway Protocol",
  //     "C) Bandwidth Gateway Protocol",
  //     "D) Base Gateway Protocol",
  //   ],
  //   answer: "B) Border Gateway Protocol",
  // },
  // {
  //   question: "Which device regenerates and amplifies the signal in a network?",
  //   options: ["A) Router", "B) Switch", "C) Repeater", "D) Hub"],
  //   answer: "C) Repeater",
  // },
  // {
  //   question: "What does the 'ping' command use to send packets?",
  //   options: ["A) ICMP", "B) HTTP", "C) TCP", "D) UDP"],
  //   answer: "A) ICMP",
  // },
  // {
  //   question: "What is the purpose of Quality of Service (QoS)?",
  //   options: [
  //     "A) Prioritize certain types of network traffic",
  //     "B) Encrypt all network communications",
  //     "C) Authenticate users on a network",
  //     "D) Balance the load across network servers",
  //   ],
  //   answer: "A) Prioritize certain types of network traffic",
  // },
  // {
  //   question: "What is a gateway in networking?",
  //   options: [
  //     "A) A device that forwards data between different networks",
  //     "B) A device that encrypts network traffic",
  //     "C) A protocol for file transfer",
  //     "D) A device used to assign IP addresses",
  //   ],
  //   answer: "A) A device that forwards data between different networks",
  // },
  // {
  //   question: "Which network protocol does not provide error-checking?",
  //   options: ["A) TCP", "B) UDP", "C) FTP", "D) ICMP"],
  //   answer: "B) UDP",
  // },
];

const QuizComponent = memo((props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to show modal
  const [previousScore, setPreviousScore] = useState(null); // To store the previous score

  // Load the previous score from AsyncStorage when the component mounts
  useEffect(() => {
    const loadPreviousScore = async () => {
      try {
        const savedScore = await AsyncStorage.getItem("quizScore");
        if (savedScore !== null) {
          setPreviousScore(parseInt(savedScore, 10));
        }
      } catch (error) {
        console.error("Failed to load previous score", error);
      }
    };
    loadPreviousScore();
  }, []);

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowModal(true); // Show modal when quiz is completed
      saveScore(score + 1); // Save the final score
    }
  };

  // Save the score to AsyncStorage
  const saveScore = async (finalScore) => {
    try {
      await AsyncStorage.setItem("quizScore", finalScore.toString());
    } catch (error) {
      console.error("Failed to save score", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Quiz ({currentQuestion + 1}/{quizData.length})
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

      {/* Modal for displaying the score */}
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Quiz Completed!</Text>
            <Text style={styles.modalText}>
              Your Score: {score}/{quizData.length}
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowModal(false);
                props?.backPress(); // Go back to the Home screen
              }}
            >
              <Text style={styles.modalButtonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default QuizComponent;
