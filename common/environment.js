const local = {
  BASE_API: 'http://192.168.1.6:8081/tj-chat/',
  MULTIPART_API: 'http://192.168.1.6:8081/tj-chat/fileServer/',
  WEBSOCKET_SERVICE: 'ws://192.168.1.6:8081/tj-chat/ws/mobile/',
  version:1
}


const test = {
  BASE_API: 'http://81.71.37.184:8081/tj-chat/',
  MULTIPART_API: 'http://81.71.37.184:8081/tj-chat/fileServer/',
  WEBSOCKET_SERVICE: 'ws://81.71.37.184:8081/tj-chat/ws/mobile/',
  version:1
}

//const environment=dev;
//const environment=local;
const environment=test;
export default {
  BASE_API: environment.BASE_API,
  MULTIPART_API: environment.MULTIPART_API,
  WEBSOCKET_SERVICE: environment.WEBSOCKET_SERVICE,
  version:environment.version,
}
