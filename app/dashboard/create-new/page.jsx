"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from './_components/SelectDuration';
import { Button } from "../../../@/components/ui/button";
import axios from "axios";
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';

function CreateNew() {
  const [formData, setFormData] = useState({
    topic: '',
    duration: '',
    imageStyle: ''
  });
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
      setLoading(true);
      await getVideoScript();
    } catch (error) {
      console.error("Error in create handler:", error);
      alert("An error occurred while processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getVideoScript = async () => {
    try {
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

      const response = await axios.post("/api/get-video-script", { prompt });

      if (response.data?.result) {
        const parsedResult = response.data.result;
        setVideoScript(parsedResult);

        // Extract all content texts from scenes
        if (parsedResult.scenes && Array.isArray(parsedResult.scenes)) {
          const fullScript = parsedResult.scenes
            .map(scene => scene.contentText)
            .join(' ');
          
          await generateAudioFile(fullScript);
        } else {
          throw new Error("Invalid response format - missing scenes array");
        }
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const generateAudioFile = async (scriptText) => {
    try {
      const id = uuidv4();
      await axios.post('/api/generate-audio', {
        text: scriptText,
        id: id
      }).then(resp => {
        console.log('audio file generated successfully', resp.data);
      });
    } catch (error) {
      console.error("Error generating audio:", error);
      throw error;
    }
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold mt-12 text-4xl text-primary text-center">
        Create New
      </h2>
      
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

      {/* Optional: Display generated script for debugging */}
      {videoScript && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Generated Script:</h3>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(videoScript, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default CreateNew;