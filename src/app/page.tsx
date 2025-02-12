import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
      <>
          <img src={'/drewabout.jpg'} alt={'Drew as a child at the computer.'} className={'rounded-sm'} />
          <article className={'prose prose-h1:text-2xl dark:prose-invert mt-7'}>
              <h1>About</h1>
              <p>
                  I’m a technologist, software developer, and business strategist. I’m originally from Florida, where I’ve  built my career at the intersection of technology sales and product development. Ever since I built my first online store at the age of 6, I have been obsessed with the power of technology to drive sales.
              </p>
              <p>
                  I’ve spent the past decade immersed in technology sales, JavaScript development, and design with a passion for building tools that empower individuals and businesses to scale efficiently. I am a quick learner and find it fun and fascinating to learn virtually any new technology.
              </p>
              <p>
                  Early on, I recognized the potential of software to drive transformative change in traditional industries. This realization led me to blend my experience in sales with modern development frameworks, focusing on delivering impactful tools and products.
              </p>
              <p>
                  I’ve built and scaled sales operations that generated millions in revenue. This was made possible by endlessly experimenting with new product ideas, from sales tracking tools to customer portals and mobile-first business apps.
              </p>
              <p>
                  Today, I’m focused on building platforms that redefine how we interact with sales data, customer relationships, and human connections in the digital age.
              </p>
              <h3>Technical & Professional Contributions</h3>
              <ul>
                  <li>
                      <strong>2024-2025:</strong> Single-handedly architected, developed, and deployed a full-stack React customer portal application, empowering IT clients to track assets, orders, and shipping statuses seamlessly.
                  </li>
                  <li>
                      <strong>2022-2025:</strong> Built and scaled a sales operation generating nearly $7 million in revenue over three years while driving strategic business growth.
                  </li>
                  <li>
                      <strong>2022-2025:</strong> Built and deployed a marketing funnel for a US government program that generated over $5M in sales revenue.
                  </li>
                  <li>
                      <strong>2020-2022</strong> As a video editor, helped a YouTuber reach 100K subscribers and generate over $1M in revenue.
                  </li>
                  <li>
                      <strong>2014-2023:</strong> Built and deployed 50+ static sites for clients all over the world, including e-commerce platforms, marketing websites, and landing pages.
                  </li>
              </ul>
              <TechStack />
          </article>
      </>
  );
}