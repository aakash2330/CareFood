import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqQuestions = [
    {
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        question: "Is it styled?",
        answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
        question: "Is it animated?",
        answer: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    
]
function Questions() {
  return (
    <Accordion type="single" collapsible className=" -mt-5 w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-lg font-semibold font-serif">Is it accessible?</AccordionTrigger>
      <AccordionContent className="text-base font-medium text-[#666]">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        {/* Yes. It comes with default styles that matches the other */}
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default Questions
