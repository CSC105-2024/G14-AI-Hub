import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBtn = ({ name, className, setSelectedCourses, courses, onClick }) => {
  const [value, setValue] = useState("default");

  const handleChange = (data) => {
    setValue(data);

    switch (data) {
      case "default":
        setSelectedCourses(courses);
        break;
      case "alpha":
        setSelectedCourses(
          [...courses].sort((a, b) => a.title.localeCompare(b.title)) //localeCompare is for alphabatical sorting
        );
        break;
      case "earl":
        setSelectedCourses(
          [...courses].sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
          )
        );
        break;
      case "new":
        setSelectedCourses(
          [...courses].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
        break;
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
          <SelectGroup onClick={onClick}>
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
