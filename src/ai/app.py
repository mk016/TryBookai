from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load environment variables
load_dotenv()
openai.api_key = os.getenv('VITE_OPENAI_API_KEY')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        prompt = data['prompt']
        pages = int(data['pages'])
        language = data['language']
        
        # Calculate tokens based on pages (roughly 250 words per page)
        max_tokens = pages * 250

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{
                "role": "user",
                "content": f"Write a book in {language} about: {prompt}"
            }],
            max_tokens=max_tokens,
            temperature=0.7
        )

        generated_text = response.choices[0].message.content

        return jsonify({
            'success': True,
            'text': generated_text
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
