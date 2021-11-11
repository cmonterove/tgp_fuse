const prodConfig = {
  apiKey: "AIzaSyA_pdzlVCMpDuppHRRNntSPrx7afWIdan8",
  authDomain: "tpgapp-b5f15.firebaseapp.com",
  projectId: "tpgapp-b5f15",
  storageBucket: "tpgapp-b5f15.appspot.com",
  messagingSenderId: "491994965627",
  appId: "1:491994965627:web:d81455d1efa41bbab164de",
  measurementId: "G-VY6B5MW1WQ"
};

const devConfig = {
  apiKey: "AIzaSyA_pdzlVCMpDuppHRRNntSPrx7afWIdan8",
  authDomain: "tpgapp-b5f15.firebaseapp.com",
  projectId: "tpgapp-b5f15",
  storageBucket: "tpgapp-b5f15.appspot.com",
  messagingSenderId: "491994965627",
  appId: "1:491994965627:web:d81455d1efa41bbab164de",
  measurementId: "G-VY6B5MW1WQ"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
