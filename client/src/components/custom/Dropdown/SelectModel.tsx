import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primitives/select";

function SelectModel({
  isSubmitting,
  value,
  onChange,
}: {
  isSubmitting: boolean;
  value: string;
  onChange: (...event: unknown[]) => void;
}) {
  return (
    <>
      <Select value={value} onValueChange={onChange} disabled={isSubmitting}>
        <SelectTrigger className="h-[70px] w-[85vw] rounded-[15px] border-[2px] border-[#1da1f2] bg-[#2026309a] text-[1.125rem] leading-[1.75rem] xs:w-[20rem]">
          <SelectValue
            className="font-['Maven_Pro'] text-[#989FAB]"
            placeholder="Select a Model..."
          />
        </SelectTrigger>
        <SelectContent className="rounded-[15px] border-[2px] border-[#1da1f2] bg-[#2026309a] backdrop-blur-sm">
          <SelectGroup>
            <SelectItem value="Ada-Boost-Classifier">
              Ada Boost Classifier
            </SelectItem>
            <SelectItem value="Bernoulli-NB">Bernoulli NB</SelectItem>
            <SelectItem value="Linear-SVC">Linear SVC</SelectItem>
            <SelectItem value="Logistic-Regression">
              Logistic Regression
            </SelectItem>
            <SelectItem value="Multinomial-NB">Multinomial NB</SelectItem>
            <SelectItem value="Passive-Aggressive-Classifier">
              Passive Aggressive Classifier
            </SelectItem>
            <SelectItem value="Perceptron">Perceptron</SelectItem>
            <SelectItem value="Ridge-Classifier">Ridge Classifier</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectModel;
