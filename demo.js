/**
 * Demo for hello! my inspiration v3.0
 * Demonstrates the interactive questionnaire and article recommendation flow
 */

import {
  collectUserProfile,
  recommendCompleteArticles,
  runFullFlow
} from './skill.js';

async function runDemo() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║                                                        ║');
  console.log('║     🎨 hello! my inspiration v3.0 - DEMO              ║');
  console.log('║                                                        ║');
  console.log('║     Interactive Writing Inspiration Assistant          ║');
  console.log('║                                                        ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log('\n');
  console.log('This demo shows how the skill works:\n');
  console.log('STEP 1: User answers 5 questions about their profile');
  console.log('STEP 2: Skill recommends complete, full-text articles');
  console.log('STEP 3: User reads and gets inspired (no AI feedback!)\n');
  console.log('─'.repeat(58) + '\n');

  try {
    // Run the complete flow
    const result = await runFullFlow();

    // Print summary
    console.log('\n' + '═'.repeat(58));
    console.log('📊 DEMO SUMMARY');
    console.log('═'.repeat(58) + '\n');

    console.log('✅ User Profile Collected:');
    console.log(`   • Age Group: ${result.userProfile.age}`);
    console.log(`   • Profession: ${result.userProfile.profession}`);
    console.log(`   • Purpose: ${result.userProfile.purpose}`);
    console.log(`   • Favorite Authors: ${result.userProfile.favoriteAuthors.join(', ')}`);
    console.log(`   • Preferred Article Types: ${result.userProfile.articleTypes.join(', ')}\n`);

    console.log(`📚 Articles Recommended: ${result.articles.length}`);
    result.articles.forEach((article, i) => {
      console.log(`   ${i + 1}. "${article.title}" by ${article.author}`);
    });

    console.log('\n' + '═'.repeat(58));
    console.log('💡 KEY FEATURES IN v3.0:');
    console.log('═'.repeat(58) + '\n');
    console.log('✨ Interactive Questionnaire');
    console.log('   → Collects: Age, Profession, Purpose, Authors, Article Types\n');
    console.log('📖 Complete Full-Text Articles');
    console.log('   → No summaries, no links, just complete articles\n');
    console.log('🎯 Pure Inspiration Focus');
    console.log('   → No AI feedback, no modification suggestions\n');
    console.log('🌍 Global Recommendations');
    console.log('   → Supports multiple languages and platforms\n');

    console.log('═'.repeat(58));
    console.log('\n✅ Demo Complete!\n');

  } catch (error) {
    console.error('❌ Demo error:', error);
    process.exit(1);
  }
}

// Run the demo
runDemo();

export { runDemo };
