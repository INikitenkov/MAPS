// import { User } from './User';
// import { Company } from './Company';
// const user = new User();
// const company = new Company();

// google.maps

// console.log(user);
// console.log(company);

new google.maps.Map(document.getElementById('map'),{
    zoom:1,
    center:{
        lat:0,
        lng:0
    }
});