import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateBookContent = async (bookDetails) => {
  try {
    console.log("API Key:", import.meta.env.VITE_OPENAI_API_KEY); // Temporary log to debug
    
    const prompt = `Write a ${bookDetails.genre} book about ${bookDetails.topic}. 
                   Additional details: ${bookDetails.prompt}
                   Language: ${bookDetails.language}
                   Style: Creative and engaging`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: bookDetails.wordCount * bookDetails.pages,
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating book:', error);
    throw error;
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