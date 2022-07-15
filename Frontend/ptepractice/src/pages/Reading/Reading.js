import Introduction from "./components/Introduction/Introduction";
import SelectionCard from "./components/SelectionCard/SelectionCard";

function Reading() {
  return (
    <div
      className="
                w-[98%] h-[100%] 
                flex flex-wrap
            "
    >
      <header
        className="
                text-4xl font-bold
                ml-[10px] mt-[10px]
            "
      >
        Reading
      </header>

      <div
        className="
            mt-[10px] w-[100%] h-[auto]
            flex flex-wrap 
            "
      >
        <Introduction>PTE Reading is the second section of the test and will take approximately 30-40 minutes. The reading materials for this section are all authentic texts about a variety of academic subjects, including humanities, natural sciences and social sciences.</Introduction>
        <Introduction>
            <p>There are 5 tasks in the section:</p>
            <ul className="list-disc flex flex-col pl-[30px] ">
                <li>Multiple-choice, choose single answer</li>
                <li>Multiple-choice, multiple answers</li>
                <li>Re-order paragraphs</li>
                <li>Fill in the blanks</li>
                <li>Reading & writing: Fill in the blanks</li>
            </ul>
        </Introduction>

        <SelectionCard
            name='READING'
            title='PTE MAGIC MATERIALS'
        />
        <SelectionCard
            href='/question_bank'
            name='READING'
            title='MC, choose single answer'
        />
        <SelectionCard
            href='/reading_reorder_paragraph'
            name='READING'
            title='Re-order paragraphs'
        />
        <SelectionCard
            href='/reading_fillin_blank'
            name='READING'
            title='R&W: Fill in the blanks [RWFIB]'
        />
        <SelectionCard
            name='READING'
            title='MC, choose multiple answers'
        />
        <SelectionCard
            name='READING'
            title='R: Fill in the blanks [RFIB]'
        />
      
        
      </div>
    </div>
  );
}

export default Reading;
