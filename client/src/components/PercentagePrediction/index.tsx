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
  percentage: string | null;
  response: string | null;
}) {
  if (percentage === null || response === null) return;

  const output = responseType.filter((r) => r.result === response)[0];
  return (
    <>
      <tr>
        <td className="font-['Chakra_Petch'] text-[1.3rem] pr-2">
          {output.result}:
        </td>
        <td className="font-['Chakra_Petch']">
          <div className="flex justify-start items-center gap-2 xs:w-[230px] border-[2px] border-white rounded-[15px] overflow-hidden text-white h-[1.3rem] w-[60vw]">
            <span
              className="font-['Chakra_Petch'] self-start flex justify-center items-center px-6 overflow-hidden h-full text-black"
              style={{
                width: percentage + "%",
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
