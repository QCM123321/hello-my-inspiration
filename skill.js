/**
 * hello! my inspiration
 * A writing inspiration assistant that analyzes your writing style
 * and recommends relevant articles from around the world
 */

const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic();

// Analyze writing style from the initial draft
async function analyzeWritingStyle(draft) {
  const response = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `Analyze the writing style of this draft and provide:
1. Vocabulary level (simple/moderate/sophisticated)
2. Sentence structure (short/mixed/long)
3. Tone (formal/casual/poetic/academic/conversational/etc)
4. Key themes and topics
5. Writing characteristics (descriptive/narrative/argumentative/etc)

Draft:
${draft}

Provide a concise analysis in JSON format with these fields:
- vocabulary_level
- sentence_structure
- tone
- themes
- characteristics
- summary`
      }
    ]
  });

  return JSON.parse(response.content[0].text);
}

// Search for relevant articles based on writing style
async function searchRelevantArticles(styleAnalysis, numResults = 5) {
  const keywords = styleAnalysis.themes.join(', ');
  const tone = styleAnalysis.tone;

  const response = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 2048,
    messages: [
      {
        role: 'user',
        content: `Based on this writing style profile, suggest ${numResults} excellent articles/essays that match or complement it:

Style Profile:
- Tone: ${tone}
- Vocabulary: ${styleAnalysis.vocabulary_level}
- Characteristics: ${styleAnalysis.characteristics}
- Key Themes: ${keywords}

Suggest articles from around the world (any language) that would inspire a writer with this style.
For each article, provide:
- Title
- Author
- Source/URL (if available)
- Why it matches this writing style
- Key writing techniques to learn from it

Format as JSON array with fields: title, author, source, match_reason, techniques`
      }
    ]
  });

  return JSON.parse(response.content[0].text);
}

// Generate writing feedback at different depth levels
async function generateWritingFeedback(draft, styleAnalysis, depth = 'medium') {
  const depthInstructions = {
    simple: 'Provide 3-5 key tips in simple language',
    medium: 'Provide detailed feedback on 5-7 areas with specific examples',
    deep: 'Provide comprehensive analysis with advanced techniques, literary devices, and sophisticated recommendations'
  };

  const response = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 2048,
    messages: [
      {
        role: 'user',
        content: `Provide writing feedback at "${depth}" level.

${depthInstructions[depth]}

Consider the writer's current style:
- Tone: ${styleAnalysis.tone}
- Vocabulary level: ${styleAnalysis.vocabulary_level}
- Characteristics: ${styleAnalysis.characteristics}

Draft:
${draft}

Provide feedback that:
1. Acknowledges strengths
2. Suggests areas for improvement
3. Offers specific, actionable tips
4. Relates to the recommended reference articles

Format as structured feedback with sections.`
      }
    ]
  });

  return response.content[0].text;
}

// Main skill function
async function analyzeAndInspire(draft, options = {}) {
  const {
    depth = 'medium',
    includeArticles = true,
    numArticles = 5
  } = options;

  console.log('🎨 Analyzing your writing style...\n');
  const styleAnalysis = await analyzeWritingStyle(draft);

  console.log('✨ Writing Style Analysis:');
  console.log(`   Tone: ${styleAnalysis.tone}`);
  console.log(`   Vocabulary: ${styleAnalysis.vocabulary_level}`);
  console.log(`   Characteristics: ${styleAnalysis.characteristics}`);
  console.log(`   Themes: ${styleAnalysis.themes.join(', ')}\n`);

  let articles = [];
  if (includeArticles) {
    console.log('🔍 Searching for inspiring articles...\n');
    articles = await searchRelevantArticles(styleAnalysis, numArticles);

    console.log('📚 Recommended Articles:');
    articles.forEach((article, index) => {
      console.log(`\n   ${index + 1}. "${article.title}" by ${article.author}`);
      console.log(`      Source: ${article.source}`);
      console.log(`      Why: ${article.match_reason}`);
      console.log(`      Learn: ${article.techniques}`);
    });
  }

  console.log('\n💡 Writing Feedback:\n');
  const feedback = await generateWritingFeedback(draft, styleAnalysis, depth);
  console.log(feedback);

  return {
    styleAnalysis,
    articles,
    feedback,
    depth
  };
}

// Daily inspiration recommendation
async function dailyInspirationRecommendation(userProfile, options = {}) {
  const {
    numArticles = 3
  } = options;

  const response = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 2048,
    messages: [
      {
        role: 'user',
        content: `Based on this writer's profile, recommend ${numArticles} articles they might enjoy today:

Writer Profile:
- Preferred Tone: ${userProfile.preferredTone}
- Writing Style: ${userProfile.writingStyle}
- Favorite Themes: ${userProfile.favoriteThemes}
- Vocabulary Level: ${userProfile.vocabularyLevel}

Suggest diverse, high-quality articles from around the world that would inspire them.
Include why each article would resonate with their style.

Format as JSON array with: title, author, source, why_recommended, learning_value`
      }
    ]
  });

  return JSON.parse(response.content[0].text);
}

module.exports = {
  analyzeAndInspire,
  analyzeWritingStyle,
  searchRelevantArticles,
  generateWritingFeedback,
  dailyInspirationRecommendation
};
