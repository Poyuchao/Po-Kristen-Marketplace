import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faCandyCane, faBirthdayCake, faMugHot } from '@fortawesome/free-solid-svg-icons';


const snacksData =[
    {
        title: 'Cookies',
        description: 'A delicious blend of tradition and innovation in every bite.',
        icon: <FontAwesomeIcon icon={faCookie} />
      },
      {
        title: 'Sweets',
        description: 'A symphony of sweetness and creativity, each treat tells a story of Taiwan\'s dessert culture.',
        icon: <FontAwesomeIcon icon={faCandyCane} />
    
      },
      {
        title: 'Pastries',
        description: 'A delightful fusion of Eastern and Western pastry traditions, bringing you the flavors of Taiwan in every bite.',
        icon: <FontAwesomeIcon icon={faBirthdayCake} />
      },
      {
        title: 'Drinks',
        description: 'Sip on the essence of Taiwan with our refreshing and flavorful beverage selection, inspired by the island\'s rich tea.',
        icon: <FontAwesomeIcon icon={faMugHot} />
      }

];

export default snacksData;