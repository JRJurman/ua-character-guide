import { registerHtml, TramOneComponent, useEffect } from "tram-one";
import page, { blankPage } from "../page";
import "./page-scroller.css";

const html = registerHtml({
  page: page,
  "blank-page": blankPage,
});

const pageScroller: TramOneComponent = (props, pages) => {
  const scrollToPage = (pageScrollerElement) => {
    // get the current scroll position (we'll go back here later before moving)
    const currentScrollPosition = pageScrollerElement.scrollLeft;

    // determine what page was given focus
    const focusedPage = document.querySelector(
      ".page:focus-within"
    ) as HTMLElement;

    // put all the elements at their original offset
    pageScrollerElement.scrollLeft = 0;

    // get the location of the page now
    const pageOffset = focusedPage.offsetLeft;

    // we don't need the page to be right along the left side
    const pagePreOffset = window.innerWidth / 4;

    // build the new position to scroll to based on the where the page is, and the preoffset
    const newScrollPosition = pageOffset - pagePreOffset;

    // check if the user has preferred reduced motion (in that case we won't do a smooth transiiton)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // reset the scroll to what it was before we started,
    // and then smooth transition to the new location
    pageScrollerElement.scrollTo({ left: currentScrollPosition });
    pageScrollerElement.scrollTo({
      left: newScrollPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  useEffect((pageScroller) => {
    // get the page-scroller-flex (this is the element which actually scrolls)
    const pageScrollerElement = pageScroller.querySelector(
      `.page-scroller-flex`
    ) as HTMLElement;

    // for some reason, it's not possible to set onfocusin direclty with JS
    // this is documented in w3schools
    pageScrollerElement.addEventListener("focusin", () =>
      scrollToPage(pageScrollerElement)
    );
  });

  return html` <section class="page-scroller">
    <section class="page-scroller-flex">${pages} <blank-page /></section>
  </section>`;
};

export default pageScroller;
