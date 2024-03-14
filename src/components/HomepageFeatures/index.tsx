import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scalability',
    imageSrc: require('@site/static/img/scalability-2.png').default,
    description: (
      <>
        Connect, manage and scale unlimited devices.
      </>
    ),
  },
  {
    title: 'Plug & Play',
    imageSrc: require('@site/static/img/plugplay.png').default,
    description: (
      <>
       Simple configuration, without the need for internal developers.
      </>
    ),
  },
  {
    title: 'Flexibility',
    imageSrc: require('@site/static/img/flexibility.png').default,
    description: (
      <>
        A solution that adapts to the needs of your company.
      </>
    ),
  },
];

function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
