import { IonIcon } from '@ionic/react';
import { arrowUpCircleOutline } from 'ionicons/icons';

const ChatToTop = () => {
  let backToTop = document.querySelector('.back-to-top');
  backToTop.addEventListener('click', function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <button class="back-to-top">
        <IonIcon
          icon={arrowUpCircleOutline}
          className="back-to-top-icon"
          id="backToTopIcon"
        />
      </button>
      <button class="chat-with-us">Chat with us!</button>
    </>
  );
};

export default ChatToTop;
