const responseType = [
  {
    result: "Positive",
    color: "#00ff00",
  },
  {
    result: "Neutral",
    color: "#fbec5d",
  },
  {
    result: "Negative",
    color: "#ff1201",
  },
];

function PercentagePrediction({
  percentage,
  response,
}: {
  percentage: string | null | number;
  response: string | null;
}) {
  if (percentage === null || response === null) return;

  const output = responseType.filter((r) => r.result === response)[0];
  return (
    <>
      <tr>
        <td className="pr-2 font-['Chakra_Petch'] text-[1.3rem]">
          {output.result}:
        </td>
        <td className="font-['Chakra_Petch']">
          <div className="flex h-[1.3rem] w-[60vw] items-center justify-start gap-2 overflow-hidden rounded-[15px] border-[2px] border-white text-white xs:w-[230px]">
            <span
              className="flex h-full items-center justify-center self-start overflow-hidden px-6 font-['Chakra_Petch'] text-black"
              style={{
                width: `${percentage}%`,
                backgroundColor: output.color,
              }}
            >
              {percentage}%
            </span>
          </div>
        </td>
      </tr>
    </>
  );
}

export default PercentagePrediction;
