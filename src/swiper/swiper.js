import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

Swiper.use([Navigation, Pagination, EffectCoverflow]);

export default Swiper;