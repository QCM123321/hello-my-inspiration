/**
 * Example usage of hello! my inspiration
 * This demonstrates how to use the skill with a sample writing draft
 */

import { analyzeAndInspire, dailyInspirationRecommendation } from './skill.js';

// Sample writing draft
const sampleDraft = `
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

// Example 1: Full analysis with recommendations
async function example1() {
  console.log('='.repeat(60));
  console.log('EXAMPLE 1: Full Analysis with Article Recommendations');
  console.log('='.repeat(60) + '\n');

  try {
    const result = await analyzeAndInspire(sampleDraft, {
      depth: 'medium',
      includeArticles: true,
      numArticles: 5
    });

    console.log('\n✅ Analysis complete!\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example 2: Simple feedback for beginners
async function example2() {
  console.log('\n' + '='.repeat(60));
  console.log('EXAMPLE 2: Simple Feedback (For Beginners)');
  console.log('='.repeat(60) + '\n');

  try {
    const result = await analyzeAndInspire(sampleDraft, {
      depth: 'simple',
      includeArticles: false
    });

    console.log('\n✅ Simple feedback generated!\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example 3: Deep analysis for advanced writers
async function example3() {
  console.log('\n' + '='.repeat(60));
  console.log('EXAMPLE 3: Deep Analysis (For Advanced Writers)');
  console.log('='.repeat(60) + '\n');

  try {
    const result = await analyzeAndInspire(sampleDraft, {
      depth: 'deep',
      includeArticles: true,
      numArticles: 7
    });

    console.log('\n✅ Deep analysis complete!\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example 4: Daily inspiration recommendation
async function example4() {
  console.log('\n' + '='.repeat(60));
  console.log('EXAMPLE 4: Daily Inspiration Recommendation');
  console.log('='.repeat(60) + '\n');

  const userProfile = {
    preferredTone: 'conversational, thoughtful',
    writingStyle: 'narrative with analytical elements',
    favoriteThemes: 'technology, innovation, human impact, future trends',
    vocabularyLevel: 'sophisticated'
  };

  try {
    const dailyArticles = await dailyInspirationRecommendation(userProfile, {
      numArticles: 3
    });

    console.log('\n✅ Daily inspiration articles recommended!\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Main execution
async function main() {
  console.log('\n🎨 hello! my inspiration - Usage Examples\n');
  console.log('Make sure ANTHROPIC_API_KEY is set in your environment.\n');

  // Uncomment the examples you want to run:

  // Run all examples
  await example1();
  // await example2();
  // await example3();
  // await example4();
}

main();
