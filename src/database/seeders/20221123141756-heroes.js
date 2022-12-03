'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('heroes', [{
        name: 'Batman',
        gender: 'male',
        image: 'https://cdn.fansshare.com/image/wallpaper1080p/batman-arkham-origins-game-epic-wallpaper-hd-epic-batman-wallpapers-hd-batman-1334058431.jpg'
      },
      {
        name: 'Joker',
        gender: 'male',
        image: 'https://images8.alphacoders.com/435/thumbbig-435122.webp'
      },
      {
        name: 'Hellboy',
        gender: 'male',
        image:'https://images3.alphacoders.com/162/thumbbig-162537.webp'
      },
      {
        name: 'Magneto',
        gender: 'male',
        image: 'https://images3.alphacoders.com/995/thumbbig-99559.webp'
      },{
        name: 'Spider Man',
        gender: 'male',
        image:'https://images.alphacoders.com/440/thumbbig-44051.webp'
      },
      {
        name: 'Storm',
        gender: 'female',
        image: 'https://images8.alphacoders.com/489/thumbbig-489409.webp'
      },
      {
        name: 'Wolverine',
        gender: 'male',
        image: 'https://images.alphacoders.com/168/thumbbig-168973.webp'
      },
      {
        name: 'Hulk',
        gender: 'male',
        image: 'https://images7.alphacoders.com/328/thumbbig-328787.webp'
      },
      {
        name: 'Venon',
        gender: 'male',
        image: 'https://images4.alphacoders.com/268/thumbbig-268216.webp'
      },
      {
        name: 'Iron Man',
        gender: 'male',
        image:'https://images5.alphacoders.com/523/thumbbig-523395.webp'
      },
      {
        name: 'Loki',
        gender: 'male',
        image:'https://images6.alphacoders.com/474/thumbbig-474106.webp'
      },
      {
        name: 'Thor',
        gender: 'male',
        image: 'https://images3.alphacoders.com/100/thumbbig-100275.webp'
      },
      {
        name: 'Superman',
        gender: 'male',
        image: 'https://images3.alphacoders.com/635/thumbbig-63585.webp'
      },
      {
        name: 'Aquaman',
        gender: 'male',
        image : 'https://images4.alphacoders.com/161/thumbbig-161548.webp'
      },
      {
        name: 'Green Arrow',
        gender: 'male',
        image: 'https://images4.alphacoders.com/870/thumbbig-870729.webp'
      },
      {
        name: 'Green Lantern',
        gender: 'male',
        image: 'https://images.alphacoders.com/803/thumbbig-803177.webp'
      },
      {
        name: 'Deadpool',
        gender: 'male',
        image: 'https://images5.alphacoders.com/387/thumbbig-387523.webp'
      },
      {
        name: 'Captain America',
        gender: 'male',
        image:'https://images3.alphacoders.com/211/thumbbig-211685.webp'
      },
      {
        name: 'Robin',
        gender: 'male',
        image: 'https://www.einerd.com.br/wp-content/uploads/2016/12/robin-dc.jpg.webp'
      },
      {
        name: 'Gamora',
        gender: 'female',
        image: 'https://images3.alphacoders.com/119/thumbbig-1198374.webp'
      },
      {
        name: 'Thanos',
        gender: 'male',
        image: 'https://images2.alphacoders.com/608/thumbbig-608772.webp'
      },], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('heroes', null, {});
  }
};
