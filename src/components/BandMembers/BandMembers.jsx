import SwiperMember from './SwiperMember';
import useFetch from 'hooks/useFetch';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';

import scss from './BandMembers.module.scss';

function BandMembers() {
  const { data } = useFetch('band');
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <section className={scss.bandMembers} id="members">
      <div
        className={
          currentLanguage === 'en'
            ? `container ${scss.band}`
            : `container ${scss.bandDesktop}`
        }
      >
        <h2 className={scss.title}>
          {data ? data.title[currentLanguage] : 'band members'}
        </h2>
        <div className={scss.info}>
          <p className={scss.info_text}>
            {data
              ? data.description[currentLanguage]
              : 'We are a pop-rock trio from Nizhyn, Chernighiv Rg., Ukraine. Our aim is just the creation of good music, a bit heavy but spiced by some substantial portion of electronic.'}
          </p>
          {data && <SwiperMember data={data} />}
        </div>
      </div>
    </section>
  );
}

export default BandMembers;
