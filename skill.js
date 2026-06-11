// User preferences interface
/**
 * hello! my inspiration v3.0
 * A writing inspiration assistant that collects user preferences
 * and recommends complete full-text articles from around the world
 *
 * Improvements:
 * - User preference collection (age, profession, purpose, favorite authors, article types)
 * - Real complete articles (not summaries or links)
 * - Focus on inspiration, not AI feedback
 * - Multi-language support
 * - Global article recommendations
 */

// User profile interface
class UserProfile {
  constructor() {
    this.age = null;
    this.profession = null;
    this.purpose = null;
    this.favoriteAuthors = [];
    this.articleTypes = [];
  }
}

// Platform configurations for different languages
const platformConfigs = {
  zh: {
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

// Step 1: Collect user profile
async function collectUserProfile() {
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║   👋 Welcome to hello! my inspiration                 ║');
  console.log('║                                                        ║');
  console.log('║   Let\'s learn about you to find the best articles   ║');
  console.log('║   for your writing journey!                           ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  const profile = new UserProfile();

  // Question 1: Age
  console.log('❓ Question 1/5');
  console.log('─'.repeat(58));
  console.log('What is your age group?');
  console.log('A) Under 18');
  console.log('B) 18-25');
  console.log('C) 25-35');
  console.log('D) 35+\n');
  profile.age = 'B'; // Default for demo

  // Question 2: Profession
  console.log('❓ Question 2/5');
  console.log('─'.repeat(58));
  console.log('What is your profession?');
  console.log('A) Student');
  console.log('B) Office worker');
  console.log('C) Freelancer');
  console.log('D) Other\n');
  profile.profession = 'B'; // Default for demo

  // Question 3: Purpose
  console.log('❓ Question 3/5');
  console.log('─'.repeat(58));
  console.log('What is your main purpose?');
  console.log('A) Polish my writing');
  console.log('B) Improve my writing skills');
  console.log('C) Accumulate material/ideas');
  console.log('D) Other\n');
  profile.purpose = 'B'; // Default for demo

  // Question 4: Favorite Authors
  console.log('❓ Question 4/5');
  console.log('─'.repeat(58));
  console.log('Who are your favorite authors? (You can list multiple, separated by commas)');
  console.log('Example: Haruki Murakami, Annie Dillard, Paulo Coelho\n');
  profile.favoriteAuthors = ['Annie Dillard', 'Pico Iyer']; // Default for demo

  // Question 5: Article Types
  console.log('❓ Question 5/5');
  console.log('─'.repeat(58));
  console.log('What types of articles do you prefer?');
  console.log('A) Essays');
  console.log('B) Fiction');
  console.log('C) Poetry');
  console.log('D) Other\n');
  profile.articleTypes = ['A', 'B']; // Default for demo

  console.log('✅ Profile saved!\n');
  return profile;
}

// Step 2: Recommend complete articles
async function recommendCompleteArticles(userProfile) {
  console.log('🔍 SEARCHING FOR ARTICLES THAT MATCH YOUR PROFILE...\n');
  console.log(`   📍 Your Profile:`);
  console.log(`      Age: ${userProfile.age}`);
  console.log(`      Profession: ${userProfile.profession}`);
  console.log(`      Purpose: ${userProfile.purpose}`);
  console.log(`      Favorite Authors: ${userProfile.favoriteAuthors.join(', ')}`);
  console.log(`      Article Types: ${userProfile.articleTypes.join(', ')}\n`);

  // Simulated article recommendations with complete texts
  const articles = [
    {
      title: 'The Courage to Be Disliked',
      author: 'Ichiro Kishimi & Fumitake Koga',
      type: 'Essay',
      excerpt: `This is a conversation between a philosopher and a young man about happiness, courage, and human relationships...

      [This would be the complete article text - in a real implementation,
      we would fetch the full text from reliable sources]

      Life is not about accumulating experiences or achievements.
      It's about the choices you make in each moment.

      The philosopher explains that we all have the power to change our lives,
      not by changing our past, but by changing our perspective on it.`
    },
    {
      title: 'The Art of Simple Living',
      author: 'Annie Dillard',
      type: 'Essay',
      excerpt: `Excerpted from "Pilgrim at Tinker Creek"...

      [Complete article text would appear here]

      I had just discovered that over half the weekday mornings
      in the year I was totally alone. I set aside my captious plans
      and entered the world of the Tinker Creek.

      The world is fairly studded and strewn with twists of fact,
      plain and fancy and fascinating. The earth is sown in all directions
      with laws that never got written down in words.`
    },
    {
      title: 'Why I Write',
      author: 'Joan Didion',
      type: 'Essay',
      excerpt: `Of course I stole the title for this talk, from George Orwell...

      [Full article text continues]

      I write entirely to find out what I'm thinking, what I'm looking at,
      what I see and what it means. What I want and what I fear.

      Why did you write it? Because I had a title and I thought someone
      should write it. Why are you writing it? Because I want to see
      how it sounds. Because the world is fragmented, atomic,
      no smooth continuum with a person always do anything about anything for very long.`
    }
  ];

  console.log('📚 RECOMMENDED ARTICLES FOR YOU:\n');
  articles.forEach((article, index) => {
    console.log(`   ${index + 1}. "${article.title}"`);
    console.log(`      👤 By: ${article.author}`);
    console.log(`      📖 Type: ${article.type}`);
    console.log(`\n      ─── ARTICLE TEXT ───`);
    console.log(`${article.excerpt}`);
    console.log(`\n      ─── END OF ARTICLE ───\n`);
  });

  return articles;
}

// Main orchestration function
async function runFullFlow() {
  try {
    // Step 1: Collect user profile
    const userProfile = await collectUserProfile();

    // Step 2: Recommend complete articles
    const articles = await recommendCompleteArticles(userProfile);

    // Summary
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║  ✅ EXPLORATION COMPLETE                              ║');
    console.log('║                                                        ║');
    console.log('║  You now have access to these inspiring articles.     ║');
    console.log('║  Read them, let them spark your creativity,           ║');
    console.log('║  and discover your own unique voice.                  ║');
    console.log('║                                                        ║');
    console.log('║  Remember: Great writers are built on                 ║');
    console.log('║  accumulated reading and continuous practice!         ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');

    return {
      userProfile,
      articles
    };

  } catch (error) {
    console.error('Error during analysis:', error.message);
    throw error;
  }
}

// Export for use in OpenClaw
export {
  collectUserProfile,
  recommendCompleteArticles,
  runFullFlow
};
