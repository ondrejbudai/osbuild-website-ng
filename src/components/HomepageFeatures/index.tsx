import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Reliable',
        description: (
            <>
                Use OSBuild to create images of your linux operating system in a reliable fashion, isolating the image
                creation from your host operating system, and producing a reliable, well-defined image ready to be
                deployed.
            </>
        ),
    },
    {
        title: 'Available as a service',
        description: (
            <>
                Want to build an image but don't care about infra? Visit console.redhat.com
            </>
        ),
    },
    {
        title: 'Open',
        description: (
            <>
                It's open source, baby!
            </>
        ),
    },
];

function Feature({title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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
