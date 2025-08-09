import React from 'react';
import './Games.css'; // стиль қосқың келсе, осындай файл қос


function Games() {
    
  return (
    <div>
    
  <div className='game' style={{}}> 
        
        <h3>Категориялар</h3>
          <div className="game-type"> Карта</div>
        <div className="game-type"> Машина</div>
        <div className="game-type"> RPG</div>
        <div className="game-type">FPS</div>
        <div className="game-type"> Басқатырғыш</div>
        <div className="game-type"> Аркада</div>
       </div>
       

        <div className='clasGame'>
       <h4>Рекомендованные игры:</h4>


     
    <div className="games-container">
   
  {/* 1 */}
      <div className="game-card">
        <a
          href="https://yandex.ru/games/app/96860"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=2ce64b300cd8288fc65e459bcf2e1a7a3975e95d-16412977-images-thumbs&n=13"
            alt="Fireboy & Watergirl 1 in The Forest Temple
"
            className="game-image"
          />
        </a>
        <p className="game-title">Fireboy & Watergirl 1 in The Forest Temple
</p>
      </div>
{/* 2 */}
      <div className="game-card">
        <a
          href="https://yandex.ru/games/app/408697?utm_source=game_promo_catalog&yclid=3839940630083010559#app-id=408697&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22main%22%2C%22rn%22%3A999529696%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754111789715789-11289797297867351806-ethxjlj6qb4plbk2-BAL%22%2C%22games_request_id%22%3A%221754111789695232-5766504304827117083-balancer-l7leveler-kubr-yp-vla-205-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=bcb6c6183e0006bf68803d14a8e94857e654ac1a-12716743-images-thumbs&n=13"
            alt="Westland Survival"
            className="game-image"
          />
        </a>
        <p className="game-title">Westland Survival</p>
      </div>
{/* 3 */}
      <div className="game-card">
        <a
          href="https://yandex.ru/games/app/263344#app-id=263344&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A3%2C%22first_screen%22%3A0%2C%22page%22%3A%22main%22%2C%22rn%22%3A222977090%2C%22row%22%3A5%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754111789715789-11289797297867351806-ethxjlj6qb4plbk2-BAL%22%2C%22games_request_id%22%3A%221754111789695232-5766504304827117083-balancer-l7leveler-kubr-yp-vla-205-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=d5e08a2cee9ac80e9a801187c3fd5c39990de702-5905147-images-thumbs&n=13"
            alt="Red Ball 4
"
            className="game-image"
          />
        </a>
        <p className="game-title">Red Ball 4
</p>
      </div>
{/* 4 */}
       <div className="game-card">
        <a
          href="https://yandex.ru/games/app/227352#app-id=227352&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A1%2C%22first_screen%22%3A0%2C%22page%22%3A%22main%22%2C%22rn%22%3A248007707%2C%22row%22%3A3%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754111789715789-11289797297867351806-ethxjlj6qb4plbk2-BAL%22%2C%22games_request_id%22%3A%221754111789695232-5766504304827117083-balancer-l7leveler-kubr-yp-vla-205-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=67d1564397c258f2cb1a84f3c85c15e3299be5d9-5886829-images-thumbs&n=13"
            alt="Геометри Даш: Волна Челлендж"
            className="game-image"
          />
        </a>
        <p className="game-title">Геометри Даш: Волна Челлендж</p>
      </div>
      {/* 5 */}
       <div className="game-card">
        <a
          href="https://yandex.ru/games/app/295738#app-id=295738&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A3%2C%22first_screen%22%3A1%2C%22page%22%3A%22main%22%2C%22rn%22%3A570745498%2C%22row%22%3A1%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754111789715789-11289797297867351806-ethxjlj6qb4plbk2-BAL%22%2C%22games_request_id%22%3A%221754111789695232-5766504304827117083-balancer-l7leveler-kubr-yp-vla-205-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=d13d56d8ea0770160c9702d1b81e7961671c14dc-5605720-images-thumbs&n=13s"
            alt="ГТАРП: Дрифт на BMW M5 F90"
            className="game-image"
          />
        </a>
        <p className="game-title">ГТАРП: Дрифт на BMW M5 F90</p>
      </div>
      {/* 6 */}
       <div className="game-card">
        <a
          href="https://yandex.ru/games/app/204598?utm_source=game_promo_catalog&yclid=17785456397746175999#app-id=204598&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A1%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A3%2C%22first_screen%22%3A1%2C%22page%22%3A%22main%22%2C%22rn%22%3A153816412%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754111789715789-11289797297867351806-ethxjlj6qb4plbk2-BAL%22%2C%22games_request_id%22%3A%221754111789695232-5766504304827117083-balancer-l7leveler-kubr-yp-vla-205-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=648cbcb082cc24fca5143eae7ef58c26c7187337-13583247-images-thumbs&n=13s"
            alt="Дурак переводной"
            className="game-image"
          />
        </a>
        <p className="game-title">Дурак переводной</p>
      </div>
      {/* 7 */}
       <div className="game-card">
        <a
          href="https://yandex.ru/games/app/183657?utm_source=game_promo_catalog&yclid=3162541720950013951#app-id=183657&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A3%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A0%2C%22page%22%3A%22main%22%2C%22rn%22%3A835394112%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A1%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754112213145481-11987108375160794519-fjc7wnwfqsoqdy2m-BAL%22%2C%22games_request_id%22%3A%221754112213132826-152780543606314157-balancer-l7leveler-kubr-yp-klg-264-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=f7503ae113fdc650fc6879709fac8aee6206c8a7-4666607-images-thumbs&n=13"
            alt="Пять Ночей у Фредди"
            className="game-image"
          />
        </a>
        <p className="game-title">Пять Ночей у Фредди</p>
      </div>
      {/* 8 */}
       <div className="game-card">
        <a
          href="https://yandex.ru/games/app/295183#app-id=295183&catalog-session-uid=catalog-22646492-f5cf-517c-a36f-a5af9491a1c8-1754111795757-e62a&rtx-reqid=8768466906836030819&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A5%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A0%2C%22page%22%3A%22main%22%2C%22rn%22%3A951062146%2C%22row%22%3A2%2C%22rtx_reqid%22%3A%228768466906836030819%22%2C%22same_block_index%22%3A2%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221754112213145481-11987108375160794519-fjc7wnwfqsoqdy2m-BAL%22%2C%22games_request_id%22%3A%221754112213132826-152780543606314157-balancer-l7leveler-kubr-yp-klg-264-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252F%253Fk50id%253D0100000052515917964_52515917964%2526etext%253D2202.OchUk0q2NwbPddCPZwaVYGlld3pocWhyYXZsYmlrY2Q.cf2c14ec3018e7087310cbc911dec291e9fca4bb%2526yclid%253D10334731222614278143%22%7D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=79473a117a0565709a7dfdc8bc9e7a9c099159d7-5879907-images-thumbs&n=13"
            alt="Block Dropping Merge"
            className="game-image"
          />
        </a>
        <p className="game-title">Block Dropping Merge</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Games;




