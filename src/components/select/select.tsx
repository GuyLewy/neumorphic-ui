import { Popover } from "../popover/popover";
import { Button } from "../button/button";
import { useState } from "react";
import styles from "./select.module.scss";
import { LucideIcon } from "lucide-react";

export function Select({
  defaultValue,
  options,
  onChange,
}: {
  defaultValue?: string;
  options: {
    label: string;
    value: string;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
  }[];
  onChange: (value: string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <Popover>
      <Button label={selectedValue ? selectedValue : "Select Option"} />
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <span
            key={option.value}
            onClick={() => {
              onChange(option.value);
              setSelectedValue(option.value);
            }}
            className={styles.option}
          >
            {option.label}
          </span>
        ))}
      </div>
    </Popover>
  );
}
