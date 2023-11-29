// göndeirlen verileri lokal'e kaydeder
export const setStorage = (data) => {
    // gelen veriyi string'e çevirme
    const strData = JSON.stringify(data);
  
    // lokal'e kaydetme
    localStorage.setItem('NOTES', strData);
  };

// veluların değerini atama işlemi
export const translate ={
    goto: 'Ziyaret',
    home: 'Ev',
    job: 'iş',
    park: 'Park Yeri',
};



//   lokalden eleman alıp geri döndür
export const getStorage = (key) => {
    // lokalden veriyi alma 
    const strData = localStorage.getItem(key);
    // veriyi js objesine çevirme
    return JSON.parse(strData);

};
  

export var userIcon = L.icon({
    iconUrl: '/images/Person.png',
    iconSize: [50, 50],
    popupAnchor: [0, -20],
    shadowUrl: '/images/my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [30, 34],
  });
var jobIcon = L.icon({
    iconUrl: '/images/Briefcase_8.png',
    iconSize: [50, 50],
    popupAnchor: [0, -20],
    shadowUrl: '/images/my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [30, 34],
  });
var gotoIcon = L.icon({
    iconUrl: '/images/Aeroplane_8.png',
    iconSize: [50, 50],
    popupAnchor: [0, -20],
    shadowUrl: '/images/my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [30, 34],
  });
var parkIcon = L.icon({
    iconUrl: '/images/Parking_8.png',
    iconSize: [50, 50],
    popupAnchor: [0, -20],
    shadowUrl: '/images/my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [30, 34],
  });
var homeIcon = L.icon({
    iconUrl: '/images/Home_8.png',
    iconSize: [50, 50],
    popupAnchor: [0, -20],
    shadowUrl: '/images/my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [30, 34],
  });
  // veluların değerini atama işlemi
export const icons ={
    goto: gotoIcon,
    home: homeIcon,
    job: jobIcon,
    park: parkIcon,
};

