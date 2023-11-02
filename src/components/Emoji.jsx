import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image } from '@chakra-ui/react';

const Emoji = ({rating}) => {
    if(rating < 3) return null;

    const emojiMap = {
        3: { src: meh, alt: 'meh', boxSize: '25px'},
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px'}
    }


  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji