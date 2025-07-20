import { FAQCard } from "../common/FAQCard";

const CourseFAQ = ({course,curriculum}) => {
  const faqs = [
  {
    question: "What prerequisites are required for this course?",
    answer:
      ` ${curriculum.courseOverview.prerequisites ==="None" ? "No prerequisites are required for this course." : ` ${curriculum.courseOverview.prerequisites}` }.  `,
  },
  {
    question: "How much time should I dedicate to this course weekly?",
    answer:
      `We recommend ${curriculum.courseOverview.timeCommitment}, which includes live sessions, assignments, and self-study. Flexibility is key, and you can adjust based on your schedule.`,
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, you'll receive a verified certificate of completion that you can add to your LinkedIn profile and resume.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live sessions are recorded and available for viewing within 24 hours. You'll also have access to session materials and can ask questions in our community forum.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the course within the first two weeks, you can request a full refund.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, we offer flexible payment plans. You can split the payment into 3 or 6 monthly installments with no additional fees.",
  },
];
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 font-body">
            Get answers to common questions about our <span className="font-bold text-black">{course.title}</span> course.
          </p>
        </div>

       <FAQCard faqs={faqs} />
      </div>
    </div>
  );
};

export default CourseFAQ;
