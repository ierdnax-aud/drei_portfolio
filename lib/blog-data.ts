export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Quantum Computing in Cybersecurity",
    excerpt:
      "Quantum computing poses both unprecedented opportunities and challenges for the cybersecurity landscape. Learn how organizations are preparing for the quantum era.",
    content:
      "Quantum computing represents a fundamental shift in computational capabilities. With the ability to process exponentially more information, quantum computers will revolutionize how we approach cryptography, encryption, and threat detection. Organizations must begin preparing today for this inevitable transition.",
    author: "You",
    date: "2024-12-01",
    category: "Cybersecurity",
    image: "/quantum-computing-cybersecurity.jpg",
    readTime: 8,
    tags: ["Quantum", "Cryptography", "Future"],
  },
  {
    id: "2",
    title: "AI-Powered Threat Detection: Next Generation Security",
    excerpt:
      "Artificial intelligence is transforming cybersecurity by enabling real-time threat detection and automated response systems. Discover the latest advancements in AI security.",
    content:
      "AI and machine learning have become essential components of modern security infrastructure. These technologies can analyze vast amounts of data in milliseconds, identifying patterns that would be impossible for humans to detect manually. The result is faster threat identification and mitigation.",
    author: "You",
    date: "2024-11-28",
    category: "AI & Security",
    image: "/artificial-intelligence-threat-detection.jpg",
    readTime: 6,
    tags: ["AI", "ML", "Detection"],
  },
  {
    id: "3",
    title: "Zero Trust Architecture: Beyond the Perimeter",
    excerpt:
      "Zero Trust principles eliminate implicit trust from networks. Explore how to implement Zero Trust architecture in your organization for enhanced security.",
    content:
      "The traditional perimeter-based security model is no longer sufficient. Zero Trust Architecture operates on the principle that no user or device should be trusted by default, regardless of whether they are inside or outside the network. This approach significantly reduces the attack surface.",
    author: "You",
    date: "2024-11-25",
    category: "Security Architecture",
    image: "/zero-trust-security-network.jpg",
    readTime: 7,
    tags: ["ZeroTrust", "Architecture", "Network"],
  },
  {
    id: "4",
    title: "Machine Learning Models for Anomaly Detection",
    excerpt:
      "Learn how machine learning models can be trained to detect anomalies in network traffic and user behavior to identify security threats early.",
    content:
      "Anomaly detection models have proven highly effective in identifying unusual patterns that may indicate a security breach. By establishing baselines of normal behavior, ML models can flag deviations that warrant further investigation, enabling rapid response to potential threats.",
    author: "You",
    date: "2024-11-20",
    category: "AI & Security",
    image: "/machine-learning-anomaly-detection.jpg",
    readTime: 9,
    tags: ["ML", "Anomaly", "Detection"],
  },
]
