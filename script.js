const merchSection = document.querySelector('.merchandise');
const merchContainer = document.querySelector('.merchandise-container');
const adContainer = document.querySelector('.ads');
const searchbar = document.getElementById('searchbar');

let input;

let SalesItems = [
   {
      id: '1',
      productImg: 'img/sword-wood-handle.jpg',
      alt: 'sword wood handle',
      productHeader: 'Steel Longsword',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$367',
   },
   {
      id: '3',
      productImg: 'img/fantasy-queen-costume.jpg',
      alt: 'Fantasy Queen costume',
      productHeader: 'Fantasy Queen costume',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$400',
   },
   {
      id: '2',
      productImg: 'img/flail.jpg',
      alt: 'Medieval Flail',
      productHeader: 'Medieval Flail',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$270',
   },
   {
      id: '4',
      productImg: 'img/gold-crusader-sword.jpg',
      alt: 'Crusader Sword',
      productHeader: 'Crusader Sword',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$133',
   },
   {
      id: '5',
      productImg: 'img/helmet-and-coif.jpg',
      alt: 'Helmet and Coiff',
      productHeader: 'Helmet and Coiff',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$473',
   },
   {
      id: '6',
      productImg: 'img/lot-of-single-handed-swords.jpg',
      alt: 'Lot of single handed swords',
      productHeader: 'Lot of single handed swords',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$2,342',
   },
   {
      id: '7',
      productImg: 'img/kingly-helmet-and-coif.jpg',
      alt: 'Fantasy helmet and coiff',
      productHeader: 'Fantasy helmet and coiff',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$240',
   },
   {
      id: '8',
      productImg: 'img/Nord-costume.jpg',
      alt: 'Nord costume',
      productHeader: 'Nord costume',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$73.99',
   },
   {
      id: '9',
      productImg: 'img/ornate-rapier.jpg',
      alt: 'Ornate rapier',
      productHeader: 'Ornate rapier',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$237.45',
   },
   {
      id: '10',
      productImg: 'img/yeoman-costume.jpg',
      alt: 'Yeoman costume',
      productHeader: 'Yeoman costume',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$65.23',
   },
   {
      id: '11',
      productImg: 'img/short-sword.jpg',
      alt: 'Short Sword',
      productHeader: 'Short Sword',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$287',
   },
   {
      id: '12',
      productImg: 'img/suit-of-medieval-armor.jpg',
      alt: 'Suit of Medieval Armour',
      productHeader: 'Suit of Medieval Armour',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam voluptatum totam tenetur veritatis iste natus quo, quos, recusandae officiis minima quasi, laboriosam dolorum dignissimos architecto nobis. Debitis, repudiandae facere!',
      price: '$1,342',
   }
];

adList = [
   {
      img: 'img/ads/Beuatiful-land.jpg',
      alt: 'beutiful landscape, and tunnel entrance.',
      text: 'Purchase beutiful land in Europe'
   },
   {
      img: 'img/ads/tournaments.jpg',
      alt: 'People dueling',
      text: 'Join in duels of honor with blunted weapons!'
   },
   {
      img: 'img/ads/visit-castles.jpg',
      alt: 'Picturesqe Castle',
      text: 'Visit castles from the middel ages.'
   }
];

function getContent() {
   i = 0;
   SalesItems.forEach(() => {
      // add a card
      const card = document.createElement('div');
      card.classList.add('sale-item');
      card.id = SalesItems[i].id;

      const textContainer = document.createElement('div')
      textContainer.classList.add('text-container');

      //add image
      const img = document.createElement('img');
      img.classList.add('product-img');
      img.src = SalesItems[i].productImg;
      img.alt = SalesItems[i].alt;

      //add a heading
      const itemName = document.createElement('h3');
      itemName.classList.add('product-heading');
      itemName.textContent = SalesItems[i].productHeader;

      // add a product description
      const itemDescription = document.createElement('p');
      itemDescription.classList.add('product-description');
      itemDescription.textContent = SalesItems[i].productDescription;
      //add a price
      const price = document.createElement('p');
      price.classList.add('product-cost');
      price.textContent = `Purchase for: ${SalesItems[i].price}`;

      merchContainer.appendChild(card);
      card.appendChild(img);
      card.appendChild(textContainer);
      textContainer.appendChild(itemName);
      textContainer.appendChild(itemDescription);
      textContainer.appendChild(price);
      i++;
   });
   generateAds()
}

//Create Ads
function generateAds() {
   let adCurrent = Math.floor(Math.random() * 3);

   const ad = document.createElement('img');
   ad.src = adList[adCurrent].img;
   ad.alt = adList[adCurrent].alt;
   ad.classList.add('ad-img');

   const adText = document.createElement('p')
   adText.classList.add('ad-header');
   adText.textContent = adList[adCurrent].text;

   adContainer.appendChild(ad);
   adContainer.appendChild(adText);
}

function sort() {
   input = searchbar.value;
   adContainer.classList.add('hide');

   for (i = 0; i < SalesItems.length; i++) {
      const indexarr = [];
      indexarr[i] = new Array(SalesItems[i].productHeader.split(''));
      const inputarr = input.split('');


      if (i < SalesItems.length) {

         let timer = 0;
         for (i2 = 0; timer < indexarr.length; i2++) {


            if (inputarr.length == i2) {
               timer++;
               i2 = 0;
            }

            if (inputarr[timer] === indexarr[timer]) {
               if (SalesItems[timer] !== undefined) {    //Just in case the loop continues and there are no more items
                  console.log('input: ' + inputarr);
                  console.log('index: ' + indexarr[i][i2]);
                  const element = document.getElementById(SalesItems[timer].id);//get element
                  element.classList.add('hide');//hide that element
               } else {
                  const element = document.getElementById(SalesItems[timer].id);
                  element.classList.remove('hide');
                  element.classList.add('ads-gone');
               }

            } else {
               const element = document.getElementById(SalesItems[timer].id);
               element.classList.remove('hide');
               element.classList.add('ads-gone');
            }

         }
      }
   }
   // console.log(input);
}


getContent()

