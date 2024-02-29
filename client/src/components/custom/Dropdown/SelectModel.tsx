import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";

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
        <SelectTrigger className="w-[320px] h-[70px] rounded-[15px] leading-[1.75rem] text-[1.125rem] border-[2px] border-[#1da1f2] bg-[#2026309a]">
          <SelectValue
            className="text-[#989FAB] font-['Maven_Pro']"
            placeholder="Select a Model..."
          />
        </SelectTrigger>
        <SelectContent className="bg-[#2026309a] backdrop-blur-sm rounded-[15px] border-[2px] border-[#1da1f2]">
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
