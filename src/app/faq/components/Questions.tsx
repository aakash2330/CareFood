import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

const faqQuestions = [
  {
    question: "What is CareFood?",
    answer: "CareFood is a web application that connects individuals and organizations with surplus food to those facing food insecurity. It aims to streamline the donation process and reduce food waste.",
},
{
    question: "Who can use CareFood?",
    answer: "CareFood is accessible to anyone who wishes to contribute to the fight against food insecurity. Whether you're an individual with surplus food items or an organization seeking assistance, CareFood provides a platform for meaningful engagement and impact.",
},
{
    question: "What kind of food can I donate?",
    answer: "You can donate a variety of prepared or packaged food items that are still safe for consumption. When listing your donation, be sure to specify details like type of food, dietary restrictions (if applicable), and quantity.",
},
{
    question: "Is CareFood available in my area?",
    answer: "CareFood aims to expand its reach to communities throughout the country. While availability may vary depending on your location, we're continuously working to partner with local organizations and stakeholders to extend our services to as many areas as possible.",
},
{
    question: "Is my personal information secure on CareFood?",
    answer: "Yes, we take the security and privacy of our users seriously. CareFood employs robust encryption protocols and data protection measures to safeguard your personal information. Your data will only be used for the purpose of facilitating food donations and assistance, and will not be shared with third parties without your consent.",
},
{
    question: "Can I donate non-food items on CareFood?",
    answer: "At this time, CareFood focuses specifically on facilitating the donation of surplus food items. However, we encourage you to explore other charitable organizations and platforms that specialize in accepting non-food donations for various causes.",
},
{
    question: "How can I get involved if I'm unable to donate food?",
    answer: "There are several ways to support CareFood's mission beyond food donations. You can help spread awareness about food insecurity in your community, volunteer your time to assist with food distribution efforts, or make a financial contribution to support our operations and initiatives.",
},
{
    question: "How does CareFood ensure food safety and quality?",
    answer: "CareFood encourages donors to adhere to food safety guidelines and regulations when contributing surplus food items. Donors are responsible for providing accurate information about the quality and expiration dates of donated items. Additionally, informers can inspect donated items before accepting them to ensure they meet safety standards.",
},
{
    question: "How can I contact CareFood for further assistance?",
    answer: "If you have any questions, feedback, or concerns, please don't hesitate to reach out to us. You can contact our customer support team through the 'Contact Us' page on our website. We're here to help and appreciate your support in our mission to combat food insecurity.",
},
{
  question: "What types of food items can be donated through CareFood?",
  answer: "CareFood accepts donations of various food items, including non-perishable goods, fresh produce, packaged foods, and prepared meals. Donors are encouraged to provide details about the type and condition of the food items they wish to donate.",
},
{
  question: "Can restaurants participate in our donation program?",
  answer: "Yes, businesses, restaurants, and other food establishments are welcome to participate in CareFood's donation program. By partnering with local eateries, CareFood aims to reduce food waste and support those in need within the community.",
},
{
  question: "Are there any guidelines for donating perishable food items?",
  answer: "While CareFood accepts donations of perishable food items, donors are encouraged to consider the shelf life and transportation requirements of these items. It's essential to package perishable foods properly and coordinate timely pickup or delivery to ensure freshness and safety.",
},
{
  question: "What impact  CareFood made in addressing food insecurity?",
  answer: "CareFood has made a significant impact in addressing food insecurity within communities by facilitating the donation of surplus food items, fostering collaboration among stakeholders, and empowering individuals to take action against hunger. Our platform continues to expand its reach and effectiveness in making a positive difference in the lives of those in need.",
},

    
]
function Questions() {
  return (
    
    <Accordion type="single" collapsible className=" -mt-5 w-full">
      <ScrollArea className="h-[580px] w-full rounded-md  p-4">
      {faqQuestions.map((question, index) => (
        <AccordionItem key={`question-${index}`} value={`value-${index}`}>
          <AccordionTrigger className="text-lg font-semibold my-3 font-serif">{question.question}</AccordionTrigger>
          <AccordionContent className="text-base leading-8 mt-2 mb-4 font-medium text-[#666]">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
         </ScrollArea>
    </Accordion>
 
  )
}

export default Questions
