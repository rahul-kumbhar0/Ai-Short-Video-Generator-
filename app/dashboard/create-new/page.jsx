"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from './_components/SelectDuration';
import { Button } from "../../../@/components/ui/button";
import axios from "axios";
import CustomLoading from './_components/CustomLoading';

function CreateNew() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState(null);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(`Selected ${fieldName}:`, fieldValue); // Debug log
  };

  const onCreateClickHandler = () => {
    if (formData.topic && formData.duration && formData.imageStyle) {
      GetVideoScript();
    } else {
      alert("Please fill in all fields.");
    }
  };

  const GetVideoScript = async () => {
    setLoading(true);
    const prompt = `Create a ${formData.duration} video script about "${formData.topic}" in ${formData.imageStyle} style. 
    Return the response in this exact JSON format:
    {
      "scenes": [
        {
          "sceneNumber": 1,
          "imagePrompt": "Detailed image generation prompt",
          "contentText": "Scene description and script",
          "duration": "Duration in seconds"
        }
      ]
    }`;
    
    console.log("Sending prompt:", prompt);

    try {
      const response = await axios.post("/api/get-video-script", { prompt });
      console.log("Raw response:", response.data.result);
      
      if (response.data && response.data.result) {
        const parsedResult = response.data.result;
        console.log("Parsed result:", parsedResult);
        setVideoScript(parsedResult);
        
        if (parsedResult.scenes && Array.isArray(parsedResult.scenes)) {
          GenerateAudioFile(parsedResult.scenes);
        } else {
          console.error("Invalid response format - missing scenes array");
        }
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch video script. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const GenerateAudioFile = (scenes) => {
    try {
      let script = '';
      scenes.forEach((scene, index) => {
        if (scene.contentText) {
          script += `Scene ${index + 1}: ${scene.contentText} `;
        }
      });
      console.log("Generated script:", script);
      return script;
    } catch (error) {
      console.error("Error generating audio script:", error);
    }
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold mt-12 text-4xl text-primary text-center">Create New</h2>
      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button
          className="bg-[#8B3DFF] hover:bg-[#7c32eb] text-white font-semibold mt-10 w-full rounded-full transition-colors"
          onClick={onCreateClickHandler}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Short Video"}
        </Button>
      </div>

      <CustomLoading loading={loading} />
    </div>
  );
}

export default CreateNew;