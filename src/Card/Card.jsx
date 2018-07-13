import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return <div class='section'>
              <div class='card_box'>
                <div class='front'><span></span></div>
                <div class='back'>
                  <span>
                    <p><strong>Опыт работы:</strong></p>
                    <p><em><b>ООО «КУА АПФ «Инициатива»</b></em>  2008-2012 от специалиста до заместителя директора.</p>
                    <p><em><b>ООО «КУА АПФ «Гарант-Капитал»</b></em>  2007-2008 специалист по ценным бумагам</p>
                  </span>
                </div>
              </div>
              <div class='card_box'>
                <div class='front'><span></span></div>
                <div class='back'><span>back</span></div>
              </div>
              <div class='card_box'>
                <div class='front'><span></span></div>
                <div class='back'><span>back</span></div>
              </div>
           </div>
  }
}

export default Card;
