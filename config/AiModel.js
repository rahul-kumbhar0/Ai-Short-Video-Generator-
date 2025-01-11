const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic : Interesting historical story  along with AI image prompt  in Realistic format for each scene and give me result in JSON format  with imagePrompt and Content Text as Field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling medieval marketplace, crowded with people, stalls selling various goods, and a large wooden sign hanging above the entrance that reads 'The Market at York'\",\n    \"contentText\": \"In the heart of medieval York, England, a bustling marketplace thrummed with life. Merchants hawked their wares, townsfolk haggled over prices, and the air was thick with the scents of spices and freshly baked bread.\"\n  },\n  {\n    \"imagePrompt\": \"A young woman, dressed in simple clothing, standing at a stall selling herbs, her face filled with determination\",\n    \"contentText\": \"Among them was a young woman named Eleanor, known for her knowledge of herbs and their medicinal properties.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up of Eleanor's hands as she carefully selects and mixes different herbs in a small pouch\",\n    \"contentText\": \"She had a secret recipe, a blend of rare herbs that could supposedly cure any ailment.\"\n  },\n  {\n    \"imagePrompt\": \"A shadowy figure in a hooded cloak approaching Eleanor's stall, their face hidden in the shadows\",\n    \"contentText\": \"But one day, a mysterious figure in a hooded cloak appeared, his face hidden in the shadows.\"\n  },\n  {\n    \"imagePrompt\": \"The hooded figure whispering to Eleanor, his voice low and menacing, as she looks on with a mix of fear and curiosity\",\n    \"contentText\": \"He offered her a proposition, a chance to sell her secret recipe for a hefty sum.\"\n  },\n  {\n    \"imagePrompt\": \"Eleanor contemplating the offer, her face etched with worry and uncertainty\",\n    \"contentText\": \"Eleanor was torn. The money could change her life, but she feared the consequences of sharing her secret.\"\n  },\n  {\n    \"imagePrompt\": \"A montage of scenes showing Eleanor's life: a close-up of a worn book filled with herbal remedies, a shot of her tending a small garden, a scene of her comforting a sick child\",\n    \"contentText\": \"She had spent years honing her skills, dedicating her life to healing.\"\n  },\n  {\n    \"imagePrompt\": \"Eleanor looking determined, her eyes shining with a newfound resolve\",\n    \"contentText\": \"Finally, she made her decision.  She wouldn't betray her craft for greed.\"\n  },\n  {\n    \"imagePrompt\": \"Eleanor confronting the hooded figure, her voice firm and unwavering\",\n    \"contentText\": \"She refused the offer, declaring that her knowledge was not for sale.\"\n  },\n  {\n    \"imagePrompt\": \"The hooded figure disappearing into the crowd, leaving Eleanor standing alone, but resolute\",\n    \"contentText\": \"The hooded figure vanished into the throng, leaving Eleanor standing alone, but her heart filled with a sense of triumph.\"\n  },\n  {\n    \"imagePrompt\": \"Eleanor smiling at the camera, a shot of her hands now holding a small pouch filled with herbs, the image fading into the background of the bustling medieval marketplace\",\n    \"contentText\": \"She knew she had made the right choice, and her legacy would continue to heal for generations to come.\"\n  }\n]\n```\n\n**Explanation of the JSON Structure:**\n\n* **imagePrompt:** This field contains the text prompt for the AI image generation tool. It describes the scene and elements to be included in the image, using a realistic style.\n* **contentText:** This field contains the narrative text that will be spoken over the corresponding scene in the video. It provides the historical context and story details.\n\n**Video Script Breakdown:**\n\nThe script is designed to create a 30-second video about a young woman named Eleanor, who possessed a secret herbal remedy and refused to sell it to a mysterious figure. \n\nThe scenes progressively build the narrative, starting with the setting of a bustling medieval marketplace and introducing Eleanor as a skilled herbalist. The suspense builds as the hooded figure enters the scene, offering Eleanor a tempting proposition. Eleanor's internal conflict and eventual decision to refuse the offer are conveyed through a series of images and narration. The video ends with a hopeful note, highlighting Eleanor's commitment to her craft and her legacy.\n\n**Note:**\n\n* This script provides a basic framework. You can expand on it by adding more scenes, dialogue, or sound effects to enhance the narrative.\n* The provided image prompts are starting points. You can modify them to match your desired visual style and level of detail.\n* The script is designed for a 30-second video. If you need a longer video, you will need to add more scenes and content. \n* You can use an AI image generator like DALL-E 2 or Midjourney to create images based on the provided prompts. \n* You will need video editing software to assemble the images, narration, and any additional elements into a final video. \n"},
          ],
        },
      ],
    });
  
    