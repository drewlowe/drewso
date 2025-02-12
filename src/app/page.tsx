import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
      <>
          <img src={'/drewabout.jpg'} alt={'Drew as a child at the computer.'} className={'rounded-sm'} />
          <article className={'prose prose-h1:text-2xl dark:prose-invert mt-7'}>
              <h1>About</h1>
              <p>
                  Hi I’m Drew! I am a technologist, software engineer, and business strategist, deeply invested in the future of decentralized systems and next-generation internet applications. Originally from South Florida, I’ve built my career at the intersection of product development, blockchain, and scalable software solutions.
              </p>
              <p>
                  Ever since I built my first online store at the age of six, I’ve been fascinated by the power of technology to drive innovation. Over the past decade, I’ve honed my expertise in JavaScript, Solidity, and modern development frameworks, focusing on building tools that empower individuals and businesses to scale efficiently.
              </p>
              <p>
                  My background in technology sales has given me a unique perspective on how software can transform traditional industries. I’ve developed and deployed sales platforms, customer portals, and mobile-first business applications that have driven millions in revenue—all while continuously exploring new frontiers in software engineering.
              </p>
              <p>
                  Today, I’m focused on building decentralized platforms, smart contract-based systems, and high-performance business tools. I’m particularly interested in how blockchain and distributed systems can reshape commerce, streamline operations, and create new opportunities for application design.
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