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
  };

  const onCreateClickHandler = async () => {
    console.log("Create button clicked");
    console.log("Current form data:", formData);
    
    if (!formData.topic || !formData.duration || !formData.imageStyle) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      console.log("Setting loading to true");
      setLoading(true); // Set loading to true before API call
      await GetVideoScript();
    } catch (error) {
      console.error("Error in create handler:", error);
      alert("An error occurred while processing your request.");
    }
};

  const GetVideoScript = async () => {
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
    
    try {
      const response = await axios.post("/api/get-video-script", { prompt });
      
      if (response.data?.result) {
        const parsedResult = response.data.result;
        setVideoScript(parsedResult);
        
        if (parsedResult.scenes && Array.isArray(parsedResult.scenes)) {
          await GenerateAudioFile(parsedResult.scenes);
        } else {
          throw new Error("Invalid response format - missing scenes array");
        }
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propagate error to the handler
    } finally {
      setLoading(false); // Set loading to false after all processing is done
    }
  };

  const GenerateAudioFile = async (scenes) => {
    try {
      let script = scenes.map((scene, index) => 
        `Scene ${index + 1}: ${scene.contentText}`
      ).join(' ');
      
      console.log("Generated script:", script);
      return script;
    } catch (error) {
      console.error("Error generating audio script:", error);
      throw error;
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