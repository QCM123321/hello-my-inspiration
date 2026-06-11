# hello! my inspiration

A powerful writing inspiration assistant that analyzes your unique writing style and recommends relevant articles from around the world. Perfect for writers of all levels—students, professionals, content creators, and anyone looking to enhance their craft.

## 🎯 What It Does

**hello! my inspiration** solves two fundamental challenges for writers:

1. **Time Problem** — No need to manually search for reference materials
2. **Reading Accumulation Problem** — Quickly access high-quality articles that match your writing style

The skill works by:
- 📝 Analyzing your writing style (tone, vocabulary, characteristics, themes)
- 🔍 Searching for relevant articles globally (any language)
- 💡 Providing personalized writing feedback at multiple depth levels
- 📅 Optionally recommending daily inspiration articles based on your profile

## ✨ Key Features

### 1. **Writing Style Analysis**
- Vocabulary level detection (simple/moderate/sophisticated)
- Sentence structure analysis (short/mixed/long)
- Tone identification (formal, casual, poetic, academic, conversational, etc.)
- Theme extraction and characteristics mapping

### 2. **Global Article Recommendations**
- Searches articles from around the world
- Supports multiple languages
- Explains why each article matches your style
- Highlights specific writing techniques to learn from

### 3. **Multi-Level Feedback**
- **Simple**: 3-5 key tips (great for beginners)
- **Medium**: Detailed feedback with specific examples (balanced approach)
- **Deep**: Comprehensive analysis with advanced techniques (for serious writers)

### 4. **Daily Inspiration (Optional)**
- Personalized daily article recommendations
- Based on your writing profile
- Fully customizable (frequency, time, number of articles)
- Helps build reading accumulation over time

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/Qcm123321/hello-my-inspiration.git
cd hello-my-inspiration

# Install dependencies
npm install

# Set up your Anthropic API key
export ANTHROPIC_API_KEY="your-api-key-here"
```

## 💻 Usage

### Basic Usage

```javascript
const { analyzeAndInspire } = require('./skill.js');

const myDraft = `
Your writing draft goes here...
`;

// Analyze and get recommendations
const result = await analyzeAndInspire(myDraft, {
  depth: 'medium',        // 'simple', 'medium', or 'deep'
  includeArticles: true,  // Include article recommendations
  numArticles: 5          // Number of articles to recommend
});
```

### Advanced Usage

#### Get Writing Style Analysis Only
```javascript
const { analyzeWritingStyle } = require('./skill.js');

const styleAnalysis = await analyzeWritingStyle(draft);
console.log(styleAnalysis);
// Returns: vocabulary_level, sentence_structure, tone, themes, characteristics
```

#### Search for Articles Based on Style
```javascript
const { searchRelevantArticles } = require('./skill.js');

const articles = await searchRelevantArticles(styleAnalysis, 5);
```

#### Get Writing Feedback at Different Depths
```javascript
const { generateWritingFeedback } = require('./skill.js');

// Simple feedback
const simpleFeedback = await generateWritingFeedback(draft, styleAnalysis, 'simple');

// Deep feedback
const deepFeedback = await generateWritingFeedback(draft, styleAnalysis, 'deep');
```

#### Daily Inspiration Recommendation
```javascript
const { dailyInspirationRecommendation } = require('./skill.js');

const userProfile = {
  preferredTone: 'conversational',
  writingStyle: 'narrative',
  favoriteThemes: 'science fiction, technology, society',
  vocabularyLevel: 'sophisticated'
};

const dailyArticles = await dailyInspirationRecommendation(userProfile, {
  numArticles: 3
});
```

## 📊 Output Examples

### Writing Style Analysis
```json
{
  "vocabulary_level": "moderate",
  "sentence_structure": "mixed",
  "tone": "conversational",
  "themes": ["technology", "personal growth", "innovation"],
  "characteristics": "descriptive, engaging, narrative-driven",
  "summary": "A writer with an engaging, conversational tone..."
}
```

### Recommended Articles
```json
[
  {
    "title": "The Future of Technology",
    "author": "Jane Doe",
    "source": "https://example.com/article",
    "match_reason": "Similar conversational tone with tech focus",
    "techniques": "Uses analogies and personal anecdotes effectively"
  }
]
```

## 🎓 For Different User Groups

### Students (Ages 12+)
- Start with **simple** feedback level
- Use article recommendations as study material
- Learn writing techniques from established authors

### Content Creators & Bloggers
- Use **medium** feedback for balanced insights
- Track daily inspiration recommendations
- Build a personal library of reference articles

### Professional Writers & Authors
- Leverage **deep** feedback for advanced techniques
- Analyze competitor/similar style articles
- Use daily recommendations for continuous improvement

### ESL/International Writers
- Multi-language support for both input and recommendations
- Learn from global writing perspectives
- Build English (or other language) writing skills

## 🌍 Supported Languages

The skill can analyze and provide recommendations for:
- English
- Chinese (Simplified & Traditional)
- Spanish
- French
- German
- Japanese
- Korean
- And many others...

## ⚙️ Configuration

### Environment Variables
```bash
ANTHROPIC_API_KEY=your-api-key-here
```

### Customization Options

```javascript
{
  depth: 'medium',           // Feedback depth: 'simple', 'medium', 'deep'
  includeArticles: true,     // Include article recommendations
  numArticles: 5,            // Number of articles (3-10 recommended)
  dailyTime: '09:00',        // Daily push time (optional)
  dailyFrequency: 1,         // Daily frequency (optional)
}
```

## 📝 Example Workflow

1. **Write your draft** and submit it to the skill
2. **Receive style analysis** understanding your unique voice
3. **Get article recommendations** from global sources
4. **Read the feedback** at your preferred depth level
5. **Learn from references** and improve your writing
6. **Enable daily inspiration** to continuously build your reading accumulation
7. **Track your growth** as you incorporate new techniques

## 🔧 Technical Details

- **Model**: Claude Opus 4.8 (most capable for nuanced writing analysis)
- **API**: Anthropic Claude API
- **Language**: JavaScript/Node.js
- **Dependencies**: @anthropic-ai/sdk

## 🤝 Contributing

Contributions welcome! Please feel free to:
- Report bugs
- Suggest features
- Improve documentation
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Feedback & Support

- 📧 Found a bug? Open an issue on GitHub
- 💡 Have a feature idea? Start a discussion
- 🙋 Need help? Check out the examples or open an issue

## 🌟 Philosophy

> "A great writer is built on accumulated reading."

**hello! my inspiration** exists because we believe:
- Every writer deserves access to inspiration
- Great writing comes from diverse influences
- Time constraints shouldn't limit learning
- Technology can democratize writing education

Whether you're 12 or 102, writing a school essay or publishing a novel, this skill is here to help you discover, learn, and grow.

---

**Made with ❤️ for writers everywhere.**

*Let your inspiration flow.*
