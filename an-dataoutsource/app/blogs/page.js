export const metadata = {
  title: 'Blogs',
  description: 'Insights and articles from AN Dataoutsource on outsourcing, healthcare, IT services, and business efficiency.',
};

const blogPosts = [
  {
    title: 'Back-office Credentialing Solutions: Streamlining Healthcare Administration',
    excerpt: 'In the healthcare industry, efficient and accurate credentialing of medical professionals is essential for maintaining high standards of care and ensuring compliance with regulatory requirements. Back-office credentialing solutions are designed to manage this complex process, allowing healthcare organizations to focus on their primary mission of delivering quality patient care.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    title: 'Call Center Solutions: Elevating Customer Experience and Business Efficiency',
    excerpt: 'In today\'s competitive business environment, delivering exceptional customer service is paramount. Call center solutions are designed to help businesses manage customer interactions efficiently, enhancing customer satisfaction and loyalty. These solutions provide a range of tools and services that streamline communication processes, support customer needs, and drive business growth.',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80',
  },
  {
    title: 'Data Management Services: Optimizing Your Business Data for Success',
    excerpt: 'In today\'s data-driven world, businesses need to efficiently manage and utilize their data to stay competitive. Data management services are crucial in helping organizations organize, store, and analyze their data, ensuring that it is accessible and valuable. Effective data management can lead to better decision-making, enhanced operational efficiency, and improved business outcomes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'IT Solution Services: Empowering Your Business for the Digital Age',
    excerpt: 'In the modern business landscape, staying competitive means leveraging the best technology available. IT solution services play a crucial role in this, offering comprehensive support to help businesses manage, optimize, and secure their IT infrastructure. From enhancing operational efficiency to safeguarding data integrity, these services are essential for companies aiming to thrive in the digital age.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
  },
  {
    title: 'The Role of IT Solution Services in Modern Business',
    excerpt: 'In today\'s rapidly evolving technological landscape, businesses across various industries are increasingly reliant on robust IT solution services to maintain competitiveness and drive innovation. As digital transformation becomes a critical factor for success, companies need comprehensive and adaptive IT solutions that address their unique challenges and objectives.',
    image: '',
  },
];

export default function BlogsPage() {
  return (
    <div className="page-content">
      <h1>Blogs</h1>

      {blogPosts.map((post, i) => (
        <div key={i} className="blog-post">
          {post.image && (
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}
          <div className="blog-post-content">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href="#" className="read-more-btn">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}
