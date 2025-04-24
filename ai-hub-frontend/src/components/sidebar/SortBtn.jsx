import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBtn = ({ name, className, setSelectedCourses, courses }) => {
  const [value, setValue] = useState("default");
  const [tempCourse, setTempCourse] = useState(courses);

  const handleChange = (data) => {
    setValue(data);

    switch (data) {
      case "default":
        setSelectedCourses(courses);
        break;
      case "alpha":
        setSelectedCourses(
          tempCourse.sort((a, b) => a.title.localeCompare(b.title)) //localeCompare is for alphabatical sorting
        );
        break;
      //TODO: will implement latest and newest later
    }
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
