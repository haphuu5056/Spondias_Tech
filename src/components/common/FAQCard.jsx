import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
export const FAQCard = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="space-y-4 font-body">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white rounded-xl border-0 shadow-sm"
        >
          <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg text-black hover:text-primary hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-700 font-medium leading-relaxed text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

               
