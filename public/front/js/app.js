import {settings, select, classNames} from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';
import Opinions from './components/Opinions.js';
import Gallery from './components/Gallery.js';

const app = {
  initBooking: function () {
  //  const thisApp = this;
    const bookingWrapper = document.querySelector(select.containerOf.booking);
    new Booking(bookingWrapper);
  },
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    thisApp.header = {};
    thisApp.header.wrapper = document.querySelector(select.header.wrapper);
    thisApp.header.cart = thisApp.header.wrapper.querySelector(select.header.cart);
    thisApp.header.mainNav = thisApp.header.wrapper.querySelector(select.header.mainNav);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatcingHash = thisApp.pages[0].id;
    for (let page of thisApp.pages){
      if(page.id === idFromHash) {
        pageMatcingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatcingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }

  },
  activatePage: function (pageId) {
    const thisApp = this;
    /* add class "active" to matching page, remove from non-matching*/ 
    for( let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, (page.id === pageId));
    }
    for( let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        (link.getAttribute('href') === '#' + pageId)
      );
    }
    switch(pageId){
      case 'home':
        thisApp.header.cart.classList.add(classNames.header.hidden);
        thisApp.header.mainNav.classList.add(classNames.header.hidden);
        break;
      case 'order':
        thisApp.header.cart.classList.remove(classNames.header.hidden);
        thisApp.header.mainNav.classList.remove(classNames.header.hidden);
        break;  
      case 'booking':
        thisApp.header.cart.classList.add(classNames.header.hidden);
        thisApp.header.mainNav.classList.remove(classNames.header.hidden);
        break;
      default:
        break;
    }
  },
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.product;
    fetch(url).then(function(rawResponse){
      return rawResponse.json();
    }).then(function (parsedResponse){
      thisApp.data.products = parsedResponse;
      thisApp.initMenu();
    });
  },
  initMenu: function () {
    const thisApp = this;
    // console.log('thisApp.data:', thisApp.data);
    for (let productData in thisApp.data.products) {
      new Product(
        thisApp.data.products[productData].id, 
        thisApp.data.products[productData]
      );
    }
  },
  initCart: function () {
    const thisApp = this;
    const cartElement = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElement);
    thisApp.productList = document.querySelector(select.containerOf.menu);
    thisApp.productList.addEventListener('add-to-cart', function(event){
      app.cart.add(event.detail.product);
    });
  },
  initHome: function () {
    const thisApp = this;
    const order = document.querySelector(select.homeMenu.order);
    console.log('order', order);
    order.addEventListener('click', function () {
      thisApp.activatePage('order');
    });
    const booking = document.querySelector(select.homeMenu.booking);
    booking.addEventListener('click', function () {
      thisApp.activatePage('booking');
    });
  },
  initOpinions: function () {
    const thisApp = this;
    const wrapper = document.querySelector(select.opinions.wrapper);
    const url = settings.db.url + '/' + settings.db.opinions;
    thisApp.opinions = new Opinions(wrapper, url);
  },
  initGallery: function () {
    const thisApp = this;
    const wrapper = document.querySelector(select.gallery.wrapper);
    const url = settings.db.url + '/' + settings.db.gallery;
    thisApp.gallery = new Gallery(wrapper, url); 
  },
  init: function () {
    const thisApp = this;
    thisApp.initPages();
    // console.log('*** App starting ***');
    // console.log('thisApp:', thisApp);
    // console.log('classNames:', classNames);
    // console.log('settings:', settings);
    // console.log('templates:', templates);
    thisApp.initData();
    //thisApp.initMenu();
    thisApp.initCart();
    thisApp.initBooking();
    thisApp.initHome();
    thisApp.initOpinions();
    thisApp.initGallery();
  },
};

app.init();

