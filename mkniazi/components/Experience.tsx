import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Experience = () => {
  return (
    <div className="w-[100%]  ">
      <Accordion type="single" collapsible className="w-[92%] ml-[4%]">
        <AccordionItem className="border-b-2" value="item-5">
          <AccordionTrigger>Experience/Education</AccordionTrigger>
          <AccordionContent className=" ">
            <div className="grid grid-cols-2 grid-flow-row gap-3 lg:ml-[50%] mb-10 gap-y-9 ">
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>
            <div>2018 - 2020 Visual Designer Brandeeq</div>

            </div>
           
              
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Experience;
