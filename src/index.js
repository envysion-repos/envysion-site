import domElements from './javascript/dom-elements';

const seoParagraphSample = `Did you know that 68% of online experiences begin with a search engine (<a id='reference-link' onclick='window.open("https://videos.brightedge.com/research-report/BrightEdge_ChannelReport2019_FINAL.pdf", "_blank", "width=800, height=800");'>BrightEdge</a>), 92.96% of global traffic comes from Google (<a id='reference-link' onclick='window.open("https://sparktoro.com/blog/2018-search-market-share-myths-vs-realities-of-google-bing-amazon-facebook-duckduckgo-more/", "_blank", "width=800, height=800");'>Sparktoro</a>), and only 0.78% of Google searchers click on results from the 2nd page (<a id='reference-link' onclick='window.open("https://backlinko.com/google-ctr-stats", "_blank", "width=800, height=800");'>Backlinko</a>)? If you want [...] <a id='reference-link' href='./services.html''>Read More &#8640;</a>`;
const seoParagraphFull = `Did you know that 68% of online experiences begin with a search engine (<a id='reference-link' onclick='window.open("https://videos.brightedge.com/research-report/BrightEdge_ChannelReport2019_FINAL.pdf", "_blank", "width=800, height=800");'>BrightEdge</a>), 92.96% of global traffic comes from Google (<a id='reference-link' onclick='window.open("https://sparktoro.com/blog/2018-search-market-share-myths-vs-realities-of-google-bing-amazon-facebook-duckduckgo-more/", "_blank", "width=800, height=800");'>Sparktoro</a>), and only 0.78% of Google searchers click on results from the 2nd page (<a id='reference-link' onclick='window.open("https://backlinko.com/google-ctr-stats", "_blank", "width=800, height=800");'>Backlinko</a>)? If you want customers who are searching for your product or service to find you it is imperative that you use search engine optimization to bring your company up in the search results and avoid becoming a needle in a haystack.`;
const emailAndSMSParagraphSample = `Email marketing and SMS marketing are great tools to generate new leads and keep your current customers up to date with the latest information about your business. A recent study has shown that for every dollar your company spends on email marketing alone you can expect a return of $42 <a id='reference-link' onclick='window.open("https://dma.org.uk/uploads/misc/marketers-email-tracker-2019.pdf", "_blank", "width=800, height=800");'>(DMA)</a> and 98% of text messages sent are [...] <a id='reference-link' href='./services.html''>Read More &#8640;</a>`;
const emailAndSMSParagraphFull = `Email marketing and SMS marketing are great tools to generate new leads and keep your current customers up to date with the latest information about your business. A recent study has shown that for every dollar your company spends on email marketing alone you can expect a return of $42 <a id='reference-link' onclick='window.open("https://dma.org.uk/uploads/misc/marketers-email-tracker-2019.pdf", "_blank", "width=800, height=800");'>(DMA)</a> and 98% of text messages sent are viewed by the receiver <a id='reference-link' onclick='window.open("https://www.gartner.com/en/marketing/insights/articles/tap-into-the-marketing-power-of-sms", "_blank", "width=800, height=800");'>(Gartner Marketing and Communications)</a>. If you’re interested in reaching out to new potential clients or you simply want a direct communication channel with your customers that you could use to launch new sales or products you can not go wrong with email marketing or SMS marketing. Not sure which one is right for you? No problem, give us a call and we can find a plan that best suits your needs.`;
const advertsParagraphSample = `Harness the power of Google, Facebook, or Instagram ads to drive traffic to your website. These platforms [...] <a id='reference-link' href='./services.html''>Read More &#8640;</a>`;
const advertsParagraphFull = `Harness the power of Google, Facebook, or Instagram ads to drive traffic to your website. These platforms have been refined over time to become great options for gaining visibility and reaching out to potential customers within your niche. Don't have content for your ads? Envysion has you covered. Just let us know what product or service you would like advertised and we will do the rest.`;

const carouselContainer = document.querySelector('.carousel-container');

const carouselWebsites = document.querySelector(
  '.carousel-container__websites'
);
const carouselSEO = document.querySelector(
  '.carousel-container__search-engine-optimization'
);
const carouselEmailMarketing = document.querySelector(
  '.carousel-container__email-marketing'
);
const carouselSMSMarketing = document.querySelector(
  '.carousel-container__sms-marketing'
);
const carouselDigitalAdvertisements = document.querySelector(
  '.carousel-container__digital-advertisements'
);

const nextButton = document.querySelector('.next');

const carouselClasses = [
  'carousel-container__content-front--websites',
  'carousel-container__content-front--search-engine-optimization',
  'carousel-container__content-front--email-marketing',
  'carousel-container__content-front--sms-marketing',
  'carousel-container__content-front--digital-advertisements',
];

const currentCarousel = document.getElementById('current-carousel');

const websitesDiv = `
<div class="carousel-container__content-front carousel-container__content-front--websites">
    <h2 class="carousel-container__content-front--header">
        <span>Web</span><br>
        <span>Development&nbsp;&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--websites">
    <h2 class="carousel-container__content-back--header">
        <span>1 Page: $1,500.00</span><hr>
        <span>3 Pages: $3,000.00</span><hr>
        <span>4 or More: Contact Us</span>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>
`;

const SEODiv = `
<div class="carousel-container__content-front carousel-container__content-front--search-engine-optimization">
    <h2 class="carousel-container__content-front--header">
        <span>Search</span><br>
        <span>Engine</span><br>
        <span>Optimization&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--search-engine-optimization">
    <h2 class="carousel-container__content-back--header">
        <span>$1,000.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>
`;

const emailDiv = `
<div class="carousel-container__content-front carousel-container__content-front--email-marketing">
    <h2 class="carousel-container__content-front--header">
        <span>Email</span><br>
        <span>Marketing&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--email-marketing">
    <h2 class="carousel-container__content-back--header">
        <span>$1,000.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>`;

const SMSDiv = `
<div class="carousel-container__content-front carousel-container__content-front--sms-marketing">
    <h2 class="carousel-container__content-front--header">
        <span>SMS</span><br>
        <span>Marketing&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--sms-marketing">
    <h2 class="carousel-container__content-back--header">
        <span>$1,000.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>`;

const advertisementsDiv = `
<div class="carousel-container__content-front carousel-container__content-front--digital-advertisements">
    <h2 class="carousel-container__content-front--header">
        <span>Digital</span><br>
        <span>Advertisements&nbsp;&#8640;</span>
    </h2>
</div>
<div 
class="carousel-container__content-back carousel-container__content-back--digital-advertisements"
>
    <h2 class="carousel-container__content-back--header">
        <span>$1,500.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>`;

const carouselDivs = [websitesDiv, SEODiv, emailDiv, SMSDiv, advertisementsDiv];

let count = 0;

const theHiddenThing = (itemInQuestion) => {
  itemInQuestion.style.visibility == 'hidden'
    ? (itemInQuestion.style.visibility = 'visible')
    : (itemInQuestion.style.visibility = 'hidden');
};
const openAndClose = () => {
  xButton.classList.toggle('nav__button-x-open');
  theHiddenThing(menuCover);
};
const selectService = (itemInQuestion, theString) => {
  if (!itemInQuestion.innerHTML) {
    websitesParagraph.innerHTML = '';
    seoParagraph.innerHTML = '';
    emailAndSMSParagraph.innerHTML = '';
    advertsParagraph.innerHTML = '';
    itemInQuestion.innerHTML = theString;
  } else {
    itemInQuestion.innerHTML = '';
  }
};

const twoSelectService = (itemInQuestion, theString) => {
  if (!itemInQuestion.innerHTML) {
    twoWebsitesParagraph.innerHTML = '';
    twoSeoParagraph.innerHTML = '';
    twoEmailAndSMSParagraph.innerHTML = '';
    twoAdvertsParagraph.innerHTML = '';
    itemInQuestion.innerHTML = theString;
  } else {
    itemInQuestion.innerHTML = '';
  }
};

const carouselScroll = () => {
  if (count === 4) {
    count = 0;
    currentCarousel.innerHTML = carouselDivs[count];
  } else {
    count += 1;
    currentCarousel.innerHTML = carouselDivs[count];
  }
};

onload = () => theHiddenThing(menuCover);

xButton.onclick = () => openAndClose();
hero.onclick = () => openAndClose();
services.onclick = () => openAndClose();
pricing.onclick = () => openAndClose();
contact.onclick = () => openAndClose();
// about.onclick = () => openAndClose
// whyEnvysion.onclick = () => openAndClose');

websitesHeader
  ? (websitesHeader.onclick = () => {
      selectService(websitesParagraph, websitesParagraphSample);
    })
  : null;
twoWebsitesHeader
  ? (twoWebsitesHeader.onclick = () => {
      twoSelectService(twoWebsitesParagraph, websitesParagraphFull);
    })
  : null;
seoHeader
  ? (seoHeader.onclick = () => {
      selectService(seoParagraph, seoParagraphSample);
    })
  : null;
twoSeoHeader
  ? (twoSeoHeader.onclick = () => {
      twoSelectService(twoSeoParagraph, seoParagraphFull);
    })
  : null;
emailAndSMSHeader
  ? (emailAndSMSHeader.onclick = () => {
      selectService(emailAndSMSParagraph, emailAndSMSParagraphSample);
    })
  : null;
twoEmailAndSMSHeader
  ? (twoEmailAndSMSHeader.onclick = () => {
      twoSelectService(twoEmailAndSMSParagraph, emailAndSMSParagraphFull);
    })
  : null;
advertsHeader
  ? (advertsHeader.onclick = () => {
      selectService(advertsParagraph, advertsParagraphSample);
    })
  : null;
twoAdvertsHeader
  ? (twoAdvertsHeader.onclick = () => {
      twoSelectService(twoAdvertsParagraph, advertsParagraphFull);
    })
  : null;

quoraCreativeLink
  ? (quoraCreativeLink.onclick = () => {
      window.open(
        'https://quoracreative.com/article/mobile-marketing-statistics',
        '_blank',
        'width=800, height=800'
      );
    })
  : null;

nextButton.onclick = () => {
  carouselScroll();
};
