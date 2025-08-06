import React from 'react';
import './Games.css'; // стиль қосқың келсе, осындай файл қос
import GameVideoNav from './GameVideoNav';

function Games() {
  return (
    <div>
        <GameVideoNav/>


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
            src="https://yandex.kz/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Ffast.startgamer.ru%2Fi%2Fimages%2F31254%2Forigin%2Fgame_31254_65868e07526b1.jpg&text=Red+Ball+4+img&rpt=simage&lr=162"
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
            src=""
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
            src="https://yandex.kz/images/search?pos=1&img_url=https%3A%2F%2Fpic.rutubelist.ru%2Fvideo%2F2024-11-26%2Fb9%2F14%2Fb9145db811d554d776d1eb0a580a1955.jpg%3Fsize%3Dl&text=ГТАРП%3A+Дрифт+на+BMW+M5+F90&rpt=simage&lr=162"
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
            src="https://yandex.kz/images/search?text=дурак+переводной&pos=4&rpt=simage&img_url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-games%2F11385414%2F2a0000018dadc08490ac2dc89a413b4c17fa%2Fpjpg256x256&from=tabbar&lr=162"
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
            src="https://yandex.kz/images/search?text=5+nights+at+freddy%27s&pos=2&rpt=simage&img_url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fbc0df4bd-cbff-49cf-a350-661c428f82b3%2Fdftokf8-d4bd64fa-59b3-4774-9abc-b531a9ee4a47.png%2Fv1%2Ffill%2Fw_1229%2Ch_650%2Cq_70%2Cstrp%2Ffnaf_movie_by_mnstrfrc_dftokf8-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcL2JjMGRmNGJkLWNiZmYtNDljZi1hMzUwLTY2MWM0MjhmODJiM1wvZGZ0b2tmOC1kNGJkNjRmYS01OWIzLTQ3NzQtOWFiYy1iNTMxYTllZTRhNDcucG5nIiwid2lkdGgiOiI8PTE4OTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FzlxEw2grUq2E-CG3sD_prS9Zct0A8sVB2d_fi3Ja58&from=tabbar&lr=162"
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
            src="https://yandex.kz/images/search?text=Block+Dropping+Merge&pos=1&rpt=simage&img_url=https%3A%2F%2Ffreegamesfreegames.com%2Fassets%2Fgames%2Fq2c4x2r2z244%2Ficon.webp&from=tabbar&lr=162"
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