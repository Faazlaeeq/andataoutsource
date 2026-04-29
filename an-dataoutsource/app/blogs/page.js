import { PageBanner } from '../components/Hero/Hero';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Blogs',
  description: 'Insights, tips, and industry updates from the AN Dataoutsource team. Stay informed about outsourcing trends and best practices.',
};

const blogPosts = [
  {
    title: 'Top 5 Benefits of Outsourcing Data Management in 2025',
    excerpt: 'Discover how strategic data management outsourcing can reduce costs by up to 50%, improve accuracy, and free your team to focus on core business objectives.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    date: 'April 15, 2025',
    readTime: '5 min read',
    author: 'AN Dataoutsource Team',
    category: 'Data Management',
  },
  {
    title: 'How Contact Centers Are Evolving with AI Integration',
    excerpt: 'Explore the future of customer service: how AI-powered tools are enhancing human agents rather than replacing them, and what this means for outsourced contact centers.',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
    date: 'March 28, 2025',
    readTime: '7 min read',
    author: 'AN Dataoutsource Team',
    category: 'Contact Center',
  },
  {
    title: 'HIPAA Compliance Checklist for Outsourced Healthcare Operations',
    excerpt: 'A comprehensive guide to ensuring your outsourcing partner meets all HIPAA requirements for handling protected health information securely.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: 'March 10, 2025',
    readTime: '8 min read',
    author: 'AN Dataoutsource Team',
    category: 'Healthcare',
  },
  {
    title: 'Virtual Assistants vs. In-House Staff: A Cost Comparison',
    excerpt: 'Breaking down the real costs of hiring in-house administrative staff versus leveraging virtual assistants from a trusted outsourcing partner.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    date: 'February 22, 2025',
    readTime: '6 min read',
    author: 'AN Dataoutsource Team',
    category: 'Virtual Assistant',
  },
  {
    title: 'Revenue Cycle Management: Reducing Days in A/R',
    excerpt: 'Learn proven strategies for accelerating your revenue cycle, reducing denial rates, and improving net collections through expert RCM outsourcing.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    date: 'February 5, 2025',
    readTime: '6 min read',
    author: 'AN Dataoutsource Team',
    category: 'RCM',
  },
  {
    title: 'Securing Your Outsourced Operations: Best Practices',
    excerpt: 'Essential security measures every business should verify when choosing an outsourcing partner, from SOC 2 certification to employee screening protocols.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
    date: 'January 18, 2025',
    readTime: '5 min read',
    author: 'AN Dataoutsource Team',
    category: 'Security',
  },
];

export default function BlogsPage() {
  return (
    <>
      <PageBanner
        title="Blog & Insights"
        subtitle="Stay updated with the latest trends, tips, and insights from the world of outsourcing."
        breadcrumbs="Blogs"
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
      />

      <section className={`section`}>
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post, i) => (
              <article key={i} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.blogCategory}>{post.category}</span>
                </div>
                <div className={styles.blogBody}>
                  <div className={styles.blogMeta}>
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <div className={styles.blogFooter}>
                    <span className={styles.blogAuthor}>
                      <User size={14} /> {post.author}
                    </span>
                    <span className={styles.readMore}>
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
