import Introduction from "./components/Introduction/Introduction";
import SelectionCard from "./components/SelectionCard/SelectionCard";

function Reading() {
  return (
    <div
      className="
                w-[98%] h-[98%] border-[2px] border-black
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
            border-[2px] border-blue-700
            mt-[10px] h-[90%]
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

        <SelectionCard></SelectionCard>
        <SelectionCard></SelectionCard>
        <SelectionCard></SelectionCard>
        <SelectionCard></SelectionCard>
      </div>
    </div>
  );
}

export default Reading;
