import { Question } from "./components";

function QnA() {
  return (
    <div className="QnA">
      <Question question="Do you offer freelancers?" />
      <Question
        question="What’s the guarantee that I will be satisfied
with the hired talent?"
      />
      <Question question="Can I hire multiple talents at once?" />
      <Question question="Why should I not go to an agency directly?" />
      <Question
        question="Who can help me pick a right skillset
and duration for me?"
      />
    </div>
  );
}

export default QnA;
