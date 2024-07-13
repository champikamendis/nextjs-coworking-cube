import styles from '../styles/FAQSection.module.css';

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "How can I get to Coworking Cube?",
      answer: "Coworking Cube is located in Kottawa, just outside Colombo. Therefore, you can easily travel there from within Colombo and from other areas. The premises itself has its own spacious car park (so using your own vehicle if perfectly viable), while also being just 5 minutes away from Makumbura Multimodal Center which offers both bus and train services with access to highways.",
    },
    {
      id: 2,
      question: "Is Sri Lanka good for Digital Nomads?",
      answer: "Yes. Despite not yet as famous as Bali and Thailand among Digital Nomads, it is a great place to spend your workcation. With some famed beaches, historical monuments and serene spaces, it gives you space to focus and do your work surrounded by quiet nature. Sri Lanka is also budget-friendly with lots of sights that won’t break your bank. If you’re a Digital Nomad contact us and we shall help you find accommodation within short distance of us for easy working space.",
    },
    {
      id: 3,
      question: "What about Food?",
      answer: "Currently we only offer complimentary tea and coffee (on self-service) in terms of food. There’s no separate lunch area at the moment. However, there are many budget-friendly eateries and restaurants in Kottawa town and at Makumbura Multimodal Center just 5 minutes away.",
    },
    {
      id: 4,
      question: "My company wants a Remote Working / Hybrid Working Space for our employees. Is this possible?",
      answer: "We are happy to host small companies depending on their size. If your employees are working on hybrid basis and want to use Coworking Cube as their office space, you can also opt for a cost-effective hot-desking method within a private workspace using a work schedule. Contact us directly for Bespoke Office Solutions such as this which will fit your needs perfectly.",
    },
    {
      id: 5,
      question: "What Internet Speed do you offer? And How Much Data do we get?",
      answer: "We provide high-speed SLT Fibre 5G router connections for all users of Coworking Cube, with an average data speed of 200Mbps or higher. The Private Workspace offers 5GB of data for a full day of booking, with 50GB data for the 10-day pass package and a generous 150GB for the 1-month package.",
    },
    {
      id: 6,
      question: "Do you offer any Discounts?",
      answer: "The package passes offer a discounted rate, especially for long-term bookings. Contact us for more details on available discounts.",
    },
  ];

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className={styles.questions}>
        {faqData.map((faq, index) => {
          return (
            <div key={index} className={styles.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </div>  
          )
        })}
      </div>
    </section>
  );
};

export default FAQSection;