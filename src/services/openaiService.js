import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateBookContent = async ({
    topic,
    prompt,
    genre,
    language,
    wordCount,
    tone,
    model
}) => {
    try {
        if (!import.meta.env.VITE_OPENAI_API_KEY) {
            throw new Error('OpenAI API key is missing. Please check your .env file.');
        }

        console.log('OpenAI Service - Starting request with parameters:', {
            topic,
            genre,
            language,
            wordCount,
            model
        });

        const promptText = `Write a ${genre} book about ${topic}. 
                         Additional details: ${prompt}
                         Language: ${language}
                         Style: Creative and engaging`;
        
        console.log('OpenAI Service - Full prompt:', promptText);
        
        const response = await openai.chat.completions.create({
            model: model || "gpt-4",
            messages: [{ role: "user", content: promptText }],
            max_tokens: wordCount,
            temperature: 0.7,
        });

        console.log('OpenAI Service - Raw response:', response);

        if (!response.choices || !response.choices[0]) {
            throw new Error('Invalid response from OpenAI');
        }

        const generatedContent = response.choices[0].message.content;
        console.log('OpenAI Service - Generated content:', generatedContent.substring(0, 200) + '...');
        
        return generatedContent;
    } catch (error) {
        console.error('OpenAI API error:', error);
        throw new Error(`Failed to generate content: ${error.message}`);
    }
};

export const generateBookImage = async (bookTitle, description) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Book cover for "${bookTitle}": ${description}`,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}; 