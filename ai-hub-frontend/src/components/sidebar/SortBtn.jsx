import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBtn = ({ name }) => {
  const [value, setValue] = useState("default");

  const handleChange = (data) => {
    setValue(data);
  };

  return (
    <div>
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger className="w-35 border-black">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="default">{name}</SelectItem>
            <SelectItem value="alpha">A {"->"} Z</SelectItem>
            <SelectItem value="tr">Teacher's Name</SelectItem>
            <SelectItem value="earl">Earliest</SelectItem>
            <SelectItem value="new">Newest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBtn;
