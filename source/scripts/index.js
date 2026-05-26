import { iosVhFix } from './utils/ios-vh-fix';
import { setHeaderOnScroll } from './modules/header';
import { showDropdownList } from './modules/dropdown';
import { hideDetailsonMobile, handleShowMoreClick, initResizeHandler } from './modules/details';
import { initRewardsSwiper, initRulesSwiper } from './modules/swipers';
// import { loadLeaderboard } from './modules/leaderboard';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  setHeaderOnScroll();
  showDropdownList();
  hideDetailsonMobile();
  initResizeHandler();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    handleShowMoreClick();
    initRewardsSwiper();
    initRulesSwiper();
    // loadLeaderboard();
  });
});
