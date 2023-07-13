import React, { useContext } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LanguageContext } from 'utils/LanguageContext';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';

import { ReactComponent as ArrowPrev } from '../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../images/arrow_forward.svg';
import scss from './BandMembers.module.scss';

SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]);

const SwiperMember = ({ data }) => {
  const { currentLanguage } = useContext(LanguageContext);

  const carouselSettings = {
    spaceBetween: 5,
    initialSlide: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-prev-button',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      type: 'progressbar',
      el: '.swiper-progressbar-band',
    },

    speed: 1000,
  };
  return (
    <div className={scss.containerSwiper}>
      <Swiper {...carouselSettings} className={scss.list}>
        {data &&
          data.bandList.map(member => (
            <SwiperSlide key={member.name.en}>
              <div className={scss.member}>
                <img
                  src={member.bandImage}
                  alt={member.name[currentLanguage]}
                  srcSet={member.bandImage}
                  className={scss.member_photo}
                />
                <div className={scss.member_info}>
                  <h3 className={scss.member_name}>
                    {member.name[currentLanguage]}
                  </h3>
                  <p className={scss.member_position}>
                    {member.specialization[currentLanguage]}
                  </p>
                  <ul className={scss.member_description}>
                    {member.descriptionList.map(item => {
                      return (
                        <li
                          key={item.id}
                          className={scss.member_description_item}
                        >
                          {item.description[currentLanguage]}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={scss.swiperNav}>
        <div className={scss.swiperBtns}>
          <div
            className={`swiper-prev-button ${scss.arrowNavigationLeft} ${scss.defaultBandPosition}`}
          >
            <ArrowPrev className={scss.arrow} />
          </div>
          <div
            className={`swiper-next-button ${scss.arrowNavigationRight} ${scss.defaultBandPosition}`}
          >
            <ArrowNext className={scss.arrow} />
          </div>
        </div>

        <div
          className={`swiper-progressbar-band  ${scss.swiperProgressbarBand}`}
        />
      </div>
    </div>
  );
};

export default SwiperMember;
