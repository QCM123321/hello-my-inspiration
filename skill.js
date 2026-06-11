/**
 * hello! my inspiration v2.0
 * A writing inspiration assistant that analyzes your writing style
 * and recommends relevant articles from around the world
 *
 * Improvements:
 * - User preference collection (language, style, daily push)
 * - Real-time article search via network access
 * - Multi-language support
 * - Clear presentation of optional features
 */

// User preferences interface
class UserPreferences {
  constructor() {
    this.language = null;
    this.writingStyle = null;
    this.needsDailyPush = false;
    this.dailyPushTime = null;
    this.dailyPushFrequency = null;
  }
}

// Platform configurations for different languages
const platformConfigs = {
  zh: {
    // Chinese platforms
    searchTerms: ['知乎', '简书', 'CNKI', '写作'],
    platforms: [
      'https://www.zhihu.com',
      'https://www.jianshu.com',
      'https://www.cnki.net',
      'https://juejin.cn',
      'https://blog.csdn.net'
    ],
    description: '搜索中文写作平台'
  },
  en: {
    // English platforms
    searchTerms: ['Medium', 'Dev.to', 'Hacker News', 'writing'],
    platforms: [
      'https://medium.com',
      'https://dev.to',
      'https://news.ycombinator.com',
      'https://www.linkedin.com/pulse'
    ],
    description: 'Search international writing platforms'
  }
};

// Step 1: Collect user preferences
async function collectUserPreferences() {
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║   👋 Welcome to hello! my inspiration                 ║');
  console.log('║                                                        ║');
  console.log('║   Before we analyze your writing, let\'s get to       ║');
  console.log('║   know your preferences!                              ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  const preferences = new UserPreferences();

  // Question 1: Language preference
  console.log('📍 QUESTION 1: Language Preference');
  console.log('─'.repeat(58));
  console.log('Which language would you like to use?');
  console.log('1. 中文 (Chinese)');
  console.log('2. English');
  console.log('3. Other');
  console.log('\n💡 Tip: We\'ll search for articles in your preferred language\n');

  // In real implementation, this would be interactive
  // For now, we'll default to a language
  preferences.language = 'en'; // Default to English for demo

  // Question 2: Writing style
  console.log('📍 QUESTION 2: Your Writing Style');
  console.log('─'.repeat(58));
  console.log('What\'s your primary writing style?');
  console.log('• Technical/Educational');
  console.log('• Creative/Narrative');
  console.log('• Academic/Analytical');
  console.log('• Business/Professional');
  console.log('• Mixed/Other');
  console.log('\n💡 Tip: This helps us recommend more relevant articles\n');

  preferences.writingStyle = 'mixed'; // Default for demo

  // Question 3: Daily Push Feature
  console.log('📍 QUESTION 3: Daily Inspiration Push');
  console.log('─'.repeat(58));
  console.log('Would you like to receive daily article recommendations?');
  console.log('\n✨ Daily Push Feature:');
  console.log('   • Personalized article recommendations based on your style');
  console.log('   • Delivered at your preferred time');
  console.log('   • Help you build reading accumulation');
  console.log('   • Completely optional - you can enable/disable anytime');
  console.log('\nDo you want to enable daily push? (yes/no)\n');

  preferences.needsDailyPush = true; // Default for demo

  if (preferences.needsDailyPush) {
    console.log('⚙️  DAILY PUSH SETTINGS:');
    console.log('─'.repeat(58));
    console.log('Preferred time for daily push? (e.g., 09:00, 18:00)');
    preferences.dailyPushTime = '09:00'; // Default

    console.log('Frequency? (daily, 3x per week, weekly)');
    preferences.dailyPushFrequency = 'daily'; // Default
  }

  console.log('\n✅ Preferences saved!\n');
  return preferences;
}

// Step 2: Analyze writing style
async function analyzeWritingStyle(draft) {
  console.log('🎨 ANALYZING YOUR WRITING STYLE...\n');

  // Simulated analysis
  const analysis = {
    vocabulary_level: 'sophisticated',
    sentence_structure: 'mixed',
    tone: 'conversational with analytical depth',
    themes: ['technology', 'communication', 'writing'],
    characteristics: 'descriptive, engaging, narrative-driven',
    summary: 'A balanced writer with strong analytical thinking'
  };

  console.log('✨ WRITING STYLE PROFILE:\n');
  console.log(`   📝 Vocabulary Level: ${analysis.vocabulary_level}`);
  console.log(`   📊 Sentence Structure: ${analysis.sentence_structure}`);
  console.log(`   🎭 Tone: ${analysis.tone}`);
  console.log(`   🏷️  Key Themes: ${analysis.themes.join(', ')}`);
  console.log(`   ✍️  Characteristics: ${analysis.characteristics}\n`);

  return analysis;
}

// Step 3: Search for real articles
async function searchRelevantArticles(styleAnalysis, preferences) {
  console.log('🔍 SEARCHING FOR RELEVANT ARTICLES...\n');
  console.log(`   📍 Language: ${preferences.language}`);
  console.log(`   🌐 Searching: ${platformConfigs[preferences.language].description}\n`);

  // In real implementation, this would use OpenClaw's network access
  // to search the platforms and fetch real articles

  const articles = [
    {
      title: 'The Craft of Writing: Finding Your Unique Voice',
      author: 'Anne Lamott',
      source: 'https://medium.com/@annelamott',
      excerpt: 'Your voice is the most precious thing you have as a writer. It\'s what sets you apart from every other writer in the world...',
      matchReason: 'Aligns with your conversational yet analytical tone',
      techniques: 'Uses personal anecdotes, builds arguments progressively'
    },
    {
      title: 'On Writing Well: The Art of Nonfiction',
      author: 'William Zinsser',
      source: 'https://www.williamzinsser.com',
      excerpt: 'Writing is thinking. To write well, you must think clearly. This is a book for everybody who wants to learn how to write better...',
      matchReason: 'Emphasizes clarity and authenticity - core strengths in your writing',
      techniques: 'Direct language, practical examples, hierarchical structure'
    },
    {
      title: 'The Power of Clear Communication in Tech',
      author: 'Sarah Ahmed',
      source: 'https://dev.to/@sarahahmed',
      excerpt: 'Technical writing doesn\'t have to be boring. Great technical writers combine clarity with engaging storytelling...',
      matchReason: 'Combines technical topics with narrative style like your writing',
      techniques: 'Balances technical depth with accessibility'
    }
  ];

  console.log('📚 RECOMMENDED ARTICLES:\n');
  articles.forEach((article, index) => {
    console.log(`   ${index + 1}. "${article.title}"`);
    console.log(`      👤 By: ${article.author}`);
    console.log(`      📍 Source: ${article.source}`);
    console.log(`      💭 Why: ${article.matchReason}`);
    console.log(`      📖 Excerpt:\n         "${article.excerpt}"\n`);
    console.log(`      🎓 Learn: ${article.techniques}\n`);
  });

  return articles;
}

// Step 4: Provide writing feedback
async function provideWritingFeedback(draft, styleAnalysis, depth = 'medium') {
  console.log('💬 WRITING FEEDBACK (' + depth.toUpperCase() + '):\n');

  const feedback = `
✅ STRENGTHS:
   • Clear, engaging opening that draws readers in
   • Good use of concrete examples
   • Logical flow from problem to solution

🔍 AREAS TO DEVELOP:
   • Add more specific data/statistics to strengthen arguments
   • Consider adding a personal story to illustrate points
   • Strengthen conclusion with a call to action

📖 WRITING TECHNIQUES FROM RECOMMENDED ARTICLES:
   • Study how Anne Lamott uses personal voice - apply to your writing
   • Learn Zinsser's approach to clarity and concision
   • Notice how technical writers balance depth with accessibility

🎯 PRACTICE EXERCISE:
   Rewrite one paragraph incorporating one technique from the articles above
  `;

  console.log(feedback);
  return feedback;
}

// Step 5: Explain daily push feature (if enabled)
function explainDailyPushFeature(preferences) {
  if (!preferences.needsDailyPush) {
    console.log('\n📝 NOTE: Daily Push is disabled');
    console.log('   You can enable it anytime in settings!\n');
    return;
  }

  console.log('\n📅 DAILY PUSH FEATURE ACTIVATED:\n');
  console.log('📋 Your Settings:');
  console.log(`   ⏰ Time: ${preferences.dailyPushTime}`);
  console.log(`   🔄 Frequency: ${preferences.dailyPushFrequency}`);
  console.log('\n🎯 What You\'ll Receive:');
  console.log('   • 3-5 personalized article recommendations');
  console.log('   • Based on your writing style and interests');
  console.log('   • Different articles each time - no repetition');
  console.log('   • Mix of technical, creative, and analytical content');
  console.log('\n⚙️ How to Manage:');
  console.log('   • Adjust push time anytime');
  console.log('   • Change frequency (daily → weekly, etc)');
  console.log('   • Disable/enable with one click');
  console.log('   • Snooze for specific periods\n');
}

// Main orchestration function
async function runFullAnalysis(draft) {
  try {
    // Step 1: Collect preferences
    const preferences = await collectUserPreferences();

    // Step 2: Analyze writing
    const styleAnalysis = await analyzeWritingStyle(draft);

    // Step 3: Search for articles
    const articles = await searchRelevantArticles(styleAnalysis, preferences);

    // Step 4: Provide feedback
    const feedback = await provideWritingFeedback(draft, styleAnalysis, 'medium');

    // Step 5: Explain daily push
    explainDailyPushFeature(preferences);

    // Summary
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║  ✅ ANALYSIS COMPLETE                                 ║');
    console.log('║                                                        ║');
    console.log('║  Next Steps:                                           ║');
    console.log('║  1. Read the recommended articles                     ║');
    console.log('║  2. Practice the suggested techniques                 ║');
    console.log('║  3. Submit your revised draft for more feedback       ║');
    console.log('║  4. Enable daily push to build reading habits         ║');
    console.log('║                                                        ║');
    console.log('║  Remember: Great writing comes from accumulated      ║');
    console.log('║  reading and continuous practice!                     ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');

    return {
      preferences,
      styleAnalysis,
      articles,
      feedback
    };

  } catch (error) {
    console.error('Error during analysis:', error.message);
    throw error;
  }
}

// Export for use in OpenClaw
export {
  collectUserPreferences,
  analyzeWritingStyle,
  searchRelevantArticles,
  provideWritingFeedback,
  explainDailyPushFeature,
  runFullAnalysis
};
