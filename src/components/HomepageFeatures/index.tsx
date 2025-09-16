import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: JSX.Element;
  variant: 'scalability' | 'plug' | 'flexibility';
  loading?: 'eager' | 'lazy';
  priority?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scalability',
    imageSrc: require('@site/static/img/scalability-2.webp').default,
    loading: 'eager',
    priority: true,
    variant: 'scalability',
    description: (
      <>
        Connect, manage and scale unlimited devices.
      </>
    ),
  },
  {
    title: 'Plug & Play',
    imageSrc: require('@site/static/img/plugplay.webp').default,
    loading: 'lazy',
    priority: false,
    variant: 'plug',
    description: (
      <>
       Simple configuration, without the need for internal developers.
      </>
    ),
  },
  {
    title: 'Flexibility',
    imageSrc: require('@site/static/img/flexibility.webp').default,
    loading: 'lazy',
    priority: false,
    variant: 'flexibility',
    description: (
      <>
        A solution that adapts to the needs of your company.
      </>
    ),
  },
];

function Feature({title, imageSrc, description, variant, loading = 'lazy', priority = false}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.card, styles[variant])}>
        <div className={clsx('card__image', styles.cardImage)}>
          <img
            src={imageSrc}
            alt={title}
            className={styles.featureImage}
            loading={loading}
            decoding={priority ? 'sync' : 'async'}
            width="240"
            height="240"
            sizes="(max-width: 480px) 160px, (max-width: 768px) 180px, (max-width: 996px) 200px, 240px"
            style={{
              aspectRatio: '1 / 1',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className={clsx('card__body', styles.cardBody)}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}