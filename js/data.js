const ROUTES = [{
    title: '2014滿天星挑戰系列 水星 北海岸櫻木花道',
    description: '總距離:64.51 km  爬升:881 m  下降:861 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=39856&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=03ED4157-D8DF-F1D3-4E76-D39EC42C38CF'
  },
  {
    title: '2013環大台北自行車挑戰-160K',
    description: '總距離:150.92 km  爬升:641 m  下降:609 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=34593&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=B6655F2C-005C-4262-6B64-A43546448772'
  },
  {
    title: '雙塔建議路線',
    description: '總距離:506.85 km  爬升:382 m  下降:379 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=95684&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=E45EB4E0-283B-6855-F34B-DDC72A816EA5'
  },
  {
    title: '觀音山-凌雲路',
    description: '總距離:7.57 km  爬升:335 m  下降:0 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=42198&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=27CB7F9B-4629-D002-5525-2EC1E49D2E3C'
  },
  {
    title: '2016 Never Stop 永不放棄－洄瀾極限挑戰300K',
    description: '總距離:307.83 km  爬升:1281 m  下降:1277 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=40070&timestamp=11484039514752',
    uri: 'http://tour.xplova.com/routeDetail/index.php?GUID=1C33E978-2FB8-7DA1-4FBA-08CC0C028C84&ts=1484039514752'
  },
  {
    title: '雙北認證200K 自給自足限時挑戰',
    description: '總距離:199.40 km  爬升:2878 m  下降:2359 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=6752&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=D61A0E59-B755-8E2E-C166-C971721D05D3'
  },
  {
    title: '宇老大滿貫',
    description: '總距離:91.03 km  爬升:2290 m  下降:1095 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=110840&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=0BB8F4AE-E83D-69A2-CBF1-40F15370002B'
  },
  {
    title: '如來神掌6P',
    description: '總距離:133.75 km  爬升:2887 m  下降:2871 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=45262&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=01E29461-C573-BDE1-DB84-8F5F460C9501'
  },
  {
    title: '2015不厭五分經典挑戰',
    description: '總距離:81.42 km  爬升:1639 m  下降:1635 m  ',
    image: 'http://tour.xplova.com/inc/getTrackImg.php?id=47614&timestamp=1',
    uri: 'http://tour.xplova.com/routeDetail/?GUID=1C244E44-D77F-35A5-1B38-B938502DA694'
  }
]

// var routes = [];
// var arr = [];
// ROUTES.forEach((value, index) => {
//   if(index %3 == 0 && index != 0) {
//     routes.push(arr);
//     arr = [];
//     arr.push(value);
//   } else {
//     arr.push(value);  
//   }
//   if(index == ROUTES.length -1) {
//     routes.push(arr);
//   }
// })
// console.log(routes);
const routes = [
  [{
      title: '2014滿天星挑戰系列 水星 北海岸櫻木花道',
      description: '總距離:64.51 km  爬升:881 m  下降:861 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=39856&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=03ED4157-D8DF-F1D3-4E76-D39EC42C38CF'
    },
    {
      title: '2013環大台北自行車挑戰-160K',
      description: '總距離:150.92 km  爬升:641 m  下降:609 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=34593&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=B6655F2C-005C-4262-6B64-A43546448772'
    },
    {
      title: '雙塔建議路線',
      description: '總距離:506.85 km  爬升:382 m  下降:379 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=95684&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=E45EB4E0-283B-6855-F34B-DDC72A816EA5'
    }
  ],
  [{
      title: '觀音山-凌雲路',
      description: '總距離:7.57 km  爬升:335 m  下降:0 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=42198&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=27CB7F9B-4629-D002-5525-2EC1E49D2E3C'
    },
    {
      title: '2016 Never Stop 永不放棄－洄瀾極限挑戰300K',
      description: '總距離:307.83 km  爬升:1281 m  下降:1277 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=40070&timestamp=11484039514752',
      uri: 'http://tour.xplova.com/routeDetail/index.php?GUID=1C33E978-2FB8-7DA1-4FBA-08CC0C028C84&ts=1484039514752'
    },
    {
      title: '雙北認證200K 自給自足限時挑戰',
      description: '總距離:199.40 km  爬升:2878 m  下降:2359 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=6752&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=D61A0E59-B755-8E2E-C166-C971721D05D3'
    }
  ],
  [{
      title: '宇老大滿貫',
      description: '總距離:91.03 km  爬升:2290 m  下降:1095 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=110840&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=0BB8F4AE-E83D-69A2-CBF1-40F15370002B'
    },
    {
      title: '如來神掌6P',
      description: '總距離:133.75 km  爬升:2887 m  下降:2871 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=45262&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=01E29461-C573-BDE1-DB84-8F5F460C9501'
    },
    {
      title: '2015不厭五分經典挑戰',
      description: '總距離:81.42 km  爬升:1639 m  下降:1635 m  ',
      image: 'http://tour.xplova.com/inc/getTrackImg.php?id=47614&timestamp=1',
      uri: 'http://tour.xplova.com/routeDetail/?GUID=1C244E44-D77F-35A5-1B38-B938502DA694'
    }
  ]
];