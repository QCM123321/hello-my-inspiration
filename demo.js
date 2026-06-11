/**
 * hello! my inspiration v2.0 - DEMO
 * Demonstrates the improved workflow with user preferences
 */

import {
  collectUserPreferences,
  analyzeWritingStyle,
  searchRelevantArticles,
  provideWritingFeedback,
  explainDailyPushFeature,
  runFullAnalysis
} from './skill-v2.js';

// Sample user draft
const userDraft = `
Technology has fundamentally transformed how we communicate. In the past decade alone,
we've witnessed an unprecedented shift from traditional media to digital platforms.
What's particularly fascinating is how this transition has democratized content creation—
anyone with a smartphone can now reach a global audience.

However, this accessibility comes with challenges. The abundance of information has created
what some call "digital noise," making it harder to distinguish quality content from
superficial material. As writers, we must adapt and find our unique voice in this crowded landscape.

The future of writing isn't about writing more—it's about writing better. It's about
understanding your audience, crafting compelling narratives, and using technology as a tool
rather than letting it use us.
`;

// Run the demo
async function runDemo() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   ✨ hello! my inspiration v2.0 - DEMO ✨             ║');
  console.log('║                                                        ║');
  console.log('║   Improved Features:                                   ║');
  console.log('║   • User preference collection                         ║');
  console.log('║   • Real-time article search                           ║');
  console.log('║   • Clear daily push explanation                       ║');
  console.log('║   • Multi-language support                             ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  try {
    // Run the complete analysis flow
    const result = await runFullAnalysis(userDraft);

    console.log('\n📊 ANALYSIS DATA CAPTURED:');
    console.log('─'.repeat(58));
    console.log('Preferences:', JSON.stringify(result.preferences, null, 2));
    console.log('Style Analysis:', JSON.stringify(result.styleAnalysis, null, 2));
    console.log('Articles Found:', result.articles.length);
    console.log('\n');

  } catch (error) {
    console.error('Error running demo:', error);
  }
}

// Run the demo
runDemo();
