const prodConfig = {
  apiKey: "AIzaSyCdjYbgjkMKx_jSUoUAlyUxjCm_PsOFInw",
  authDomain: "proyecto-x-18123.firebaseapp.com",
  projectId: "proyecto-x-18123",
  storageBucket: "proyecto-x-18123.appspot.com",
  messagingSenderId: "292216059941",
  appId: "1:292216059941:web:a5ee01ffade8cf7f4a67cc",
  measurementId: "G-E86JBSK6V8"
};

const devConfig = {
  apiKey: "AIzaSyCdjYbgjkMKx_jSUoUAlyUxjCm_PsOFInw",
  authDomain: "proyecto-x-18123.firebaseapp.com",
  projectId: "proyecto-x-18123",
  storageBucket: "proyecto-x-18123.appspot.com",
  messagingSenderId: "292216059941",
  appId: "1:292216059941:web:a5ee01ffade8cf7f4a67cc",
  measurementId: "G-E86JBSK6V8"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
