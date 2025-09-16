import {lazy, Suspense} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// Lazy load non-critical component
const HomepageFeatures = lazy(() => import('@site/src/components/HomepageFeatures'));

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  const handleButtonMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.ctaButton)}
            to="/docs/category/tutorials"
            onMouseMove={handleButtonMouseMove}
            onMouseEnter={() => {
              const link = document.createElement('link');
              link.rel = 'prefetch';
              link.href = '/docs/category/tutorials';
              document.head.appendChild(link);
            }}
          >
            <span className={styles.ctaLabel}>Get started</span>
            <svg
              className={styles.ctaBorderSvg}
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                className={styles.ctaBorder}
                x="1"
                y="1"
                width="198"
                height="58"
                rx="11"
                ry="11"
                pathLength="100"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Everything you need to know about Biotz to master the ins and outs of our IoT ecosystem.">
      <HomepageHeader />
      <main>
        <Suspense 
          fallback={
            <div style={{
              height: '400px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#fff'
            }}>
              Loading features...
            </div>
          }
        >
          <HomepageFeatures />
        </Suspense>
      </main>
    </Layout>
  );
}