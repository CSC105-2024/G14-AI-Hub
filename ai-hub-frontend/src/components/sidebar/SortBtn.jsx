import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBtn = ({ name, className }) => {
  const [value, setValue] = useState("default");

  const handleChange = (data) => {
    setValue(data);
  };

  return (
    <div>
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger
          className={`w-35 border-black hover:border-[var(--primary-color)]${className}`}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="default">{name}</SelectItem>
            <SelectItem value="alpha">A {"->"} Z</SelectItem>
            <SelectItem value="earl">Earliest</SelectItem>
            <SelectItem value="new">Newest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBtn;
