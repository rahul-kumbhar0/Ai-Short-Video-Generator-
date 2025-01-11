"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../@/components/ui/select";
import { Textarea } from "../../../../@/components/ui/textarea";

function SelectTopic({ onUserSelect }) {
  const topics = [
    { value: "Custom Prompt", label: "Custom Prompt" },
    { value: "Random AI Story", label: "Random AI Story" },
    { value: "Scary Story", label: "Scary Story" },
    { value: "Historical Facts", label: "Historical Facts" },
    { value: "Bed Time Story", label: "Bed Time Story" },
    { value: "Motivational", label: "Motivational" },
    { value: "Fun Facts", label: "Fun Facts" },
  ];

  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicChange = (value) => {
    console.log("Selected Content Type:", value); // This will show what option you clicked
    setSelectedTopic(value);
    if (value !== "Custom Prompt") {
      onUserSelect("topic", value);
    }
  };

  return (
    <div className="mt-7 space-y-3">
      <div className="space-y-1">
        <h2 className="font-bold text-2xl text-primary">Content</h2>
        <p className="text-gray-500 text-sm">
          What is the topic of your video?
        </p>
      </div>

      <Select onValueChange={handleTopicChange}>
        <SelectTrigger 
          className="w-full mt-2 p-4 text-lg bg-white border rounded-md
                     hover:bg-gray-50 transition-colors duration-200
                     focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>

        <SelectContent 
          position="popper"
          className="w-[var(--radix-select-trigger-width)] bg-white rounded-md shadow-lg"
        >
          {topics.map((topic) => (
            <SelectItem
              key={topic.value}
              value={topic.value}
              className="py-3 px-4 text-base cursor-pointer hover:bg-gray-50
                         focus:bg-gray-50 focus:text-primary"
            >
              {topic.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedTopic === "Custom Prompt" && (
        <div className="mt-4">
          <Textarea
            className="min-h-[120px] w-full p-4 text-base border rounded-md
                       focus:ring-2 focus:ring-primary focus:ring-offset-2
                       placeholder:text-gray-400"
            onChange={(e) => onUserSelect("topic", e.target.value)}
            placeholder="Write prompt on which you want to generate video"
          />
        </div>
      )}
    </div>
  );
}

export default SelectTopic;