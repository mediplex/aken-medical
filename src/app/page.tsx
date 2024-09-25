import { Hero, LearnMoreForm } from '@/components';

// import wilco from '../../public/images/wilco-logo.webp';
// import bpiFrance from '../../public/images/bpi-france-logo.webp';
// import cnrs from '../../public/images/cnrs-logo.webp';
// import eckertAndZiegler from '../../public/images/eckert-and-ziegler-logo.webp';
// import icm from '../../public/images/icm-logo.webp';
// import inserm from '../../public/images/inserm-logo.webp';
// import pantera from '../../public/images/pantera-logo.webp';
// import reseauEntreprendre from '../../public/images/reseau-entreprendre-logo.webp';
// import siric from '../../public/images/siric-logo.webp';
// import universiteDeMontpellier from '../../public/images/universite-de-montpellier-logo.webp';

// import data from '@/data/home-data.json';

import React from 'react';
import HOME_DATA from '@/data/home-data.json';
import { Dialog } from '@/components';
import { Suspense } from 'react';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <main className="flex flex-col">
        <Hero
          title={HOME_DATA.hero.title}
          tag={HOME_DATA.hero.tag}
          content={HOME_DATA.hero.content}
        />
      </main>
      <Suspense>
        <Dialog id="learn-more">
          <LearnMoreForm />
        </Dialog>
      </Suspense>
    </>
  );
};

export default HomePage;
