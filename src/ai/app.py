from flask import Flask, request, jsonify
from textgen import generate_book_text  # You can create this function

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data['prompt']
    pages = data['pages']
    language = data['language']

    # Generate the text using your function
    generated_text = generate_book_text(prompt, pages, language)

    return jsonify({'text': generated_text})

def generate_book_text(prompt, pages, language):
    # Simple text generation example (you can replace this with your logic)
    generated_text = f"Generating a book with the prompt '{prompt}' in {language} for {pages} pages.\n"
    generated_text += "..." * int(pages)  # Simulating content generation
    return generated_text

if __name__ == '__main__':
    app.run(debug=True)
