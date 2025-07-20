import { FAQCard } from '../common/FAQCard'
import { faqItems } from '../../constants'

const FaqSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-700 font-body">
          Here you can find answers to some of the most common questions we receive. If you have any other questions, feel free to reach out to our support team.
        </p>
      </div>

      <div className="mt-12">
        <FAQCard faqs={faqItems} />
      </div>

      </div>
      </div>
  )
}

export default FaqSection