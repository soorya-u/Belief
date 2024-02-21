import { useRef } from "react";
import "./styles.css";

function DropDown({
  modelName,
  setModelName,
}: {
  modelName: string;
  setModelName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const detailElement = useRef<HTMLDetailsElement>(null);

  function handleClick() {
    detailElement.current?.removeAttribute("open");
  }

  return (
    <>
      <details ref={detailElement} id="detail-element">
        <summary className=" radios">
          <input
            type="radio"
            value=""
            name="model-name"
            id="default"
            title={modelName}
            checked
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Ada-Boost-Classifier")}
            id="item1"
            title="Ada Boost Classifier"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Bernoulli-NB")}
            id="item2"
            title="Bernoulli NB"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Linear-SVC")}
            id="item3"
            title="Linear SVC"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Logistic-Regression")}
            id="item4"
            title="Logistic Regression"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Multinomial-NB")}
            id="item5"
            title="Multinomial NB"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Passive-Aggressive-Classifier")}
            id="item6"
            title="Passive Aggressive Classifier"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Perceptron")}
            id="item7"
            title="Perceptron"
            readOnly
          />
          <input
            type="radio"
            name="model-name"
            onClick={() => setModelName("Ridge-Classifier")}
            id="item8"
            title="Ridge Classifier"
            readOnly
          />
        </summary>
        <ul className="select">
          <li className="option">
            <label onClick={handleClick} htmlFor="item1">
              Ada Boost Classifier
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item2">
              Bernoulli NB
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item3">
              Linear SVC <em>(Default)</em>
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item4">
              Logistic Regression
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item5">
              Multinomial NB
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item6">
              Passive Aggressive Classifier
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item7">
              Perceptron
            </label>
          </li>
          <li className="option">
            <label onClick={handleClick} htmlFor="item8">
              Ridge Classifier
            </label>
          </li>
        </ul>
      </details>
    </>
  );
}

export default DropDown;
