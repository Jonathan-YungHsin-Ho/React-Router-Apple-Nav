
const products = [
  {
    page: 'Mac',
    id: 'mac',
    products: [
      {name: 'MacBook Air', id: 'macbook-air', url: 'https://www.apple.com/macbook-air', new: true, icon: 'fas fa-laptop fa-2x'},
      {name: 'MacBook Pro', id: 'macbook-pro', url: 'https://www.apple.com/macbook-air', new: true, icon: 'fas fa-laptop-code fa-2x'},
      {name: 'iMac', id: 'imac', url: 'https://www.apple.com/imac', new: false, icon: 'fas fa-desktop fa-2x'},
      {name: 'iMac Pro', id: 'imac-pro', url: 'https://www.apple.com/imac-pro', new: false, icon: 'fas fa-desktop fa-2x'},
      {name: 'Mac Pro', id: 'mac-air', url: 'https://www.apple.com/mac-pro', new: true, icon: 'fas fa-square fa-2x'},
      {name: 'Mac mini', id: 'mac-mini', url: 'https://www.apple.com/mac-mini', new: false, icon: 'far fa-hdd fa-lg'},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/mac/compare', new: false, icon: 'far fa-window-restore fa-2x'},
      {name: 'Pro Display XDR', id: 'pro-display-xdr', url: 'https://www.apple.com/pro-display-xdr', new: true, icon: 'fas fa-tv fa-2x'},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/mac/accessories', new: false, icon: 'fas fa-headphones-alt fa-2x'},
      {name: 'Mojave', id: 'mojave', url: 'https://www.apple.com/macos/mojave/', new: false, icon: 'fab fa-gg-circle fa-2x'},
    ]
  },
  {
    page: 'iPad',
    id: 'ipad',
    products: [
      {name: 'iPad Pro', id: 'ipad-pro', url: 'https://www.apple.com/ipad-pro', new: false, icon: 'fas fa-tablet-alt fa-3x'},
      {name: 'iPad Air', id: 'ipad-air', url: 'https://www.apple.com/ipad-air', new: true, icon: 'fas fa-tablet-alt fa-2x'},
      {name: 'iPad', id: 'ipad', url: 'https://www.apple.com/ipad-9.7', new: false, icon: 'fas fa-tablet-alt fa-2x'},
      {name: 'iPad mini', id: 'ipad-mini', url: 'https://www.apple.com/ipad-mini', new: true, icon: 'fas fa-tablet-alt fa-lg'},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/ipad/compare/', new: false, icon: 'far fa-window-restore fa-2x'},
      {name: 'Apple Pencil', id: 'apple-pencil', url: 'https://www.apple.com/apple-pencil', new: false, icon: 'fas fa-pen fa-2x'},
      {name: 'Smart Keyboard', id: 'smart-keyboard', url: 'https://www.apple.com/smart-keyboard', new: false, icon: 'far fa-keyboard fa-2x'},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/ipad/accessories', new: false, icon: 'fas fa-book fa-2x'},
      {name: 'iOS 12', id: 'ios-12', url: 'https://www.apple.com/ios/ios-12/', new: false, icon: 'fas fa-square fa-2x'},
      
    ]
  },
  {
    page: 'iPhone',
    id: 'iphone',
    products: [
      {name: 'iPhone XS', id: 'iphone-xs', url: 'https://www.apple.com/iphone-xs/', new: true, icon: 'fas fa-mobile-alt fa-2x'},
      {name: 'iPhone XR', id: 'iphone-xr', url: 'https://www.apple.com/iphone-xr/', new: true, icon: 'fas fa-mobile-alt fa-2x'},
      {name: 'iPhone 8', id: 'iphone-8', url: 'https://www.apple.com/us/shop/goto/buy_iphone/iphone_8', new: false, icon: 'fas fa-mobile-alt fa-2x'},
      {name: 'iPhone 7', id: 'iphone-7', url: 'https://www.apple.com/us/shop/goto/iphone_7/select', new: false, icon: 'fas fa-mobile-alt fa-2x'},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/iphone/compare/', new: false, icon: 'far fa-window-restore fa-2x'},
      {name: 'Apple Card', id: 'apple-card', url: 'https://www.apple.com/apple-card/', new: false, icon: 'fab fa-cc-apple-pay fa-2x'},
      {name: 'AirPods', id: 'smart-keyboard', url: 'https://www.apple.com/airpods/', new: false, icon: 'fas fa-headphones-alt fa-2x'},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/iphone/accessories', new: false, icon: 'fas fa-mobile fa-2x'},
      {name: 'iOS 12', id: 'ios-12', url: 'https://www.apple.com/ios/ios-12/', new: false, icon: 'fas fa-square fa-2x'},
      
    ]
  },
  {
    page: 'Watch',
    id: 'watch',
    products: [
      {name: 'Apple Watch', id: 'apple-watch-series-4', url: 'https://www.apple.com/apple-watch-series-4', new: false, icon: 'fas fa-clock fa-2x', extratext: 'Series 4'},
      {name: 'Apple Watch', id: 'apple-watch-nike', url: 'https://www.apple.com/apple-watch-nike', new: false, icon: 'far fa-clock fa-2x', extratext: 'Nike+'},
      {name: 'Apple Watch', id: 'apple-watch-hermes', url: 'https://www.apple.com/apple-watch-hermes', new: false, icon: 'fas fa-clock fa-2x', extratext: 'Hermes'},
      {name: 'Apple Watch', id: 'apple-watch-series-3', url: 'https://www.apple.com/apple-watch-series-3', new: false, icon: 'far fa-clock fa-2x', extratext: 'Series 3'},
      {name: 'watchOS', id: 'watchos', url: 'https://www.apple.com/watchos/watchos-5/', new: false, icon: 'fab fa-gg-circle fa-2x'},
      {name: 'Bands', id: 'bands', url: 'https://www.apple.com/us/shop/goto/watch/bands', new: false, icon: 'fas fa-clock fa-2x'},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/watch/accessories', new: false, icon: 'fas fa-drum-steelpan fa-2x'},
      {name: 'Compare', id: 'compare', url: 'https://www.apple.com/watch/compare/', new: false, icon: 'far fa-window-restore fa-2x'},
    ]
  },
  {
    page: 'TV',
    id: 'tv',
    products: [
      {name: 'Apple TV app', id: 'apple-tv-app', url: 'https://www.apple.com/apple-tv-app', new: true, icon: 'fas fa-square fa-2x'},
      {name: 'Apple TV+', id: 'apple-tv-plus', url: 'https://www.apple.com/apple-tv-plus', new: true, icon: 'fab fa-apple fa-2x'},
      {name: 'Apple TV 4K', id: 'apple-tv-4k', url: 'https://www.apple.com/apple-tv-4k', new: false, icon: 'far fa-hdd fa-2x'},
      {name: 'Apple TV HD', id: 'apple-tv-hd', url: 'https://www.apple.com/us/shop/goto/apple_tv_hd/select', new: false, icon: 'far fa-hdd fa-2x'},
      {name: 'AirPlay', id: 'airplay', url: 'https://www.apple.com/airplay', new: false, icon: 'fas fa-tv fa-2x'},
      {name: 'Accessories', id: 'accessories', url: 'https://www.apple.com/us/shop/goto/tv/tv_accessories', new: false, icon: 'fas fa-gamepad fa-2x'},
    ]
  },
  {
    page: 'Music',
    id: 'music',
    products: [
      {name: 'Apple Music', id: 'apple-music', url: 'https://www.apple.com/apple-music', new: false, icon: 'fab fa-itunes fa-2x'},
      {name: 'iTunes', id: 'iTunes', url: 'https://www.apple.com/iTunes', new: false, icon: 'fas fa-caret-square-right fa-2x'},
      {name: 'HomePod', id: 'home-pod', url: 'https://www.apple.com/home-pod', new: false, icon: 'fas fa-cube fa-2x'},
      {name: 'AirPods', id: 'air-pods', url: 'https://www.apple.com/air-pods', new: false, icon: 'fas fa-headphones fa-2x'},
      {name: 'iPod Touch', id: 'ipod-touch', url: 'https://www.apple.com/ipod-touch', new: true, icon: 'fas fa-mobile-alt fa-2x'},
      {name: 'Music Accessories', id: 'apple-music', url: 'https://www.apple.com/us/shop/goto/accessories/audio_music', new: false, icon: 'fas fa-headphones-alt fa-2x'},
      {name: 'Gift Cards', id: 'gift-cards', url: 'https://www.apple.com/us/shop/goto/giftcards', new: false, icon: 'fab fa-cc-apple-pay fa-2x'},
    ]
  }
]

export default products;