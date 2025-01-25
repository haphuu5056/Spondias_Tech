import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "../../constants";

export const FAQ = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-20"
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      Frequently Asked Questions
    </h2>
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </motion.section>
);
