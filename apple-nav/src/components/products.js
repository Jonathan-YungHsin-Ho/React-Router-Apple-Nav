
const products = [
  {
    page: 'Mac',
    id: 'mac',
    products: [
      {name: 'MacBook Air', id: 'macbook-air', url: 'https://www.apple.com/macbook-air', new: true},
      {name: 'MacBook Pro', id: 'macbook-pro', url: 'https://www.apple.com/macbook-air', new: true},
      {name: 'iMac', id: 'imac', url: 'https://www.apple.com/imac', new: false},
      {name: 'iMac Pro', id: 'imac-pro', url: 'https://www.apple.com/imac-pro', new: false},
      {name: 'Mac Pro', id: 'mac-air', url: 'https://www.apple.com/mac-pro', new: true},
      {name: 'Mac mini', id: 'mac-mini', url: 'https://www.apple.com/mac-mini', new: false},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/mac/compare', new: false},
      {name: 'Pro Display XDR', id: 'pro-display-xdr', url: 'https://www.apple.com/pro-display-xdr', new: true},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/mac/accessories', new: false},
      {name: 'Mojave', id: 'mojave', url: 'https://www.apple.com/macos/mojave/', new: false},
    ]
  },
  {
    page: 'iPad',
    id: 'ipad',
    products: [
      {name: 'iPad Pro', id: 'ipad-pro', url: 'https://www.apple.com/ipad-pro', new: false},
      {name: 'iPad Air', id: 'ipad-air', url: 'https://www.apple.com/ipad-air', new: true},
      {name: 'iPad', id: 'ipad', url: 'https://www.apple.com/ipad-9.7', new: false},
      {name: 'iPad mini', id: 'ipad-mini', url: 'https://www.apple.com/ipad-mini', new: true},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/ipad/compare/', new: false},
      {name: 'Apple Pencil', id: 'apple-pencil', url: 'https://www.apple.com/apple-pencil', new: false},
      {name: 'Smart Keyboard', id: 'smart-keyboard', url: 'https://www.apple.com/smart-keyboard', new: false},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/ipad/accessories', new: false},
      {name: 'iOS 12', id: 'ios-12', url: 'https://www.apple.com/ios/ios-12/', new: false},
      
    ]
  },
  {
    page: 'iPhone',
    id: 'iphone',
    products: [
      {name: 'iPhone XS', id: 'iphone-xs', url: 'https://www.apple.com/iphone-xs/', new: true},
      {name: 'iPhone XR', id: 'iphone-xr', url: 'https://www.apple.com/iphone-xr/', new: true},
      {name: 'iPhone 8', id: 'iphone-8', url: 'https://www.apple.com/us/shop/goto/buy_iphone/iphone_8', new: false},
      {name: 'iPhone 7', id: 'iphone-7', url: 'https://www.apple.com/us/shop/goto/iphone_7/select', new: false},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/iphone/compare/', new: false},
      {name: 'Apple Card', id: 'apple-card', url: 'https://www.apple.com/apple-card/', new: false},
      {name: 'AirPods', id: 'smart-keyboard', url: 'https://www.apple.com/airpods/', new: false},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/iphone/accessories', new: false},
      {name: 'iOS 12', id: 'ios-12', url: 'https://www.apple.com/ios/ios-12/', new: false},
      
    ]
  },
  {
    page: 'Watch',
    id: 'watch',
    products: [
      {name: 'Apple Watch Series 4', id: 'apple-watch-series-4', url: 'https://www.apple.com/apple-watch-series-4', new: false},
      {name: 'Apple Watch Nike+', id: 'apple-watch-nike', url: 'https://www.apple.com/apple-watch-nike', new: false},
      {name: 'Apple Watch Hermes', id: 'apple-watch-hermes', url: 'https://www.apple.com/apple-watch-hermes', new: false},
      {name: 'Apple Watch Series 3', id: 'apple-watch-series-3', url: 'https://www.apple.com/apple-watch-series-3', new: false},
      {name: 'watchOS', id: 'watchos', url: 'https://www.apple.com/watchos/watchos-5/', new: false},
      {name: 'Bands', id: 'bands', url: 'https://www.apple.com/us/shop/goto/watch/bands', new: false},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/watch/accessories', new: false},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/watch/compare/', new: false},
    ]
  },
  {
    page: 'TV',
    id: 'tv',
    products: [
      {name: 'Apple TV app', id: 'apple-tv-app', url: 'https://www.apple.com/apple-tv-app', new: true},
      {name: 'Apple TV+', id: 'apple-tv-plus', url: 'https://www.apple.com/apple-tv-plus', new: true},
      {name: 'Apple TV 4K', id: 'apple-tv-4k', url: 'https://www.apple.com/apple-tv-4k', new: false},
      {name: 'Apple TV HD', id: 'apple-tv-hd', url: 'https://www.apple.com/us/shop/goto/apple_tv_hd/select', new: false},
      {name: 'AirPlay', id: 'airplay', url: 'https://www.apple.com/airplay', new: false},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/tv/tv_accessories', new: false},
    ]
  },
  {
    page: 'Music',
    id: 'music',
    products: [
      {name: 'Apple Music', id: 'apple-music', url: 'https://www.apple.com/apple-music', new: false},
      {name: 'iTunes', id: 'iTunes', url: 'https://www.apple.com/iTunes', new: false},
      {name: 'HomePod', id: 'home-pod', url: 'https://www.apple.com/home-pod', new: false},
      {name: 'AirPods', id: 'air-pods', url: 'https://www.apple.com/air-pods', new: false},
      {name: 'iPod Touch', id: 'ipod-touch', url: 'https://www.apple.com/ipod-touch', new: true},
      {name: 'Music Accessories', id: 'apple-music', url: 'https://www.apple.com/us/shop/goto/accessories/audio_music', new: false},
      {name: 'Gift Cards', id: 'gift-cards', url: 'https://www.apple.com/us/shop/goto/giftcards', new: false},
    ]
  }
]

export default products;