import React, { useState } from 'react';
import './Musics.css';

export const allMusic = [
  // Қазақша
  { title: 'Plecto - QalQalay?', image: 'https://avatars.mds.yandex.net/i?id=0c26a853735a5b5475273d512924aded33478be8-3308358-images-thumbs&n=13', category: 'kaz', music: '/models/music/plecto qal qalay_63 (1).mp3' },
  { title: 'Turar - Kobelek', image: 'https://avatars.mds.yandex.net/i?id=aafba4fa4359ffa676743d6447aa710040d5028d-5655440-images-thumbs&n=13', category: 'kaz', music: '/models/music/turar-kobelek.mp3' },
  { title: 'Kalifarniya-Almaty', image: 'https://avatars.mds.yandex.net/i?id=42359326eda936bb1a659411e0a15b59ae59ed4b-5109160-images-thumbs&n=13', category: 'kaz', music: '/models/music/kalifarniya-almaty.mp3' },
  { title: 'Dimash - Adagio', image: 'https://avatars.mds.yandex.net/i?id=e1105e78a381e5dc1bc71a094eba7740edf8684a-5254493-images-thumbs&n=13', category: 'kaz', music: '/models/music/Dimash_Kudaibergenov_-_Adagio_60966683.mp3' },
  { title: 'Kairat Nurtas - Auyrdym', image: 'https://avatars.mds.yandex.net/i?id=1724ae6c5cbf4fe8a15309f44e62f74f49b6b25e-6978923-images-thumbs&n=13', category: 'kaz', music: '/models/music/Kajjrat_Nurtas_-_Aurmajjdy_zhurek_75536447.mp3' },
  { title: 'Erke Esmahan - Aeraport', image: 'https://avatars.mds.yandex.net/i?id=559423bdecd2203334aed75542d19915_sr-5288833-images-thumbs&n=13', category: 'kaz', music: '/models/music/Ерке Есмахан — Аэропорт (www.lightaudio.ru).mp3' },
  { title: 'Moldanazar - Akpen Birge', image: 'https://avatars.mds.yandex.net/i?id=35d930d25023d950a7d32eafd68c1bb40bd8681b-8453627-images-thumbs&n=13', category: 'kaz', music: '/models/music/MOLDANAZAR_-_Akpen_Birge_73803734.mp3' },
  { title: 'Ninety One - Aiyptama', image: 'https://avatars.mds.yandex.net/i?id=ab9cef5b1236762bad752679672281800e445f33-5243350-images-thumbs&n=13', category: 'kaz', music: '/models/music/Ninety_One_-_Ajjyptama_78110867.mp3' },
  { title: 'Rakhat-SU', image: 'https://avatars.mds.yandex.net/i?id=0590f68642875e177fe3aaac5f1a54fa402c78a6-12936542-images-thumbs&n=13', category: 'kaz', music: '/models/music/rakhat-s_u.mp3' },
  { title: 'Ayau-Sybyrlain', image: 'https://avatars.mds.yandex.net/i?id=c471fc21ad3cc810a3d161441bb5ed1363859f7f-12485500-images-thumbs&n=13', category: 'kaz', music: '/models/music/Ayau_-_Sybyrlaiyn_75002696.mp3' },
  { title: 'Ayau-Kozder', image: 'https://avatars.mds.yandex.net/i?id=badb55026508f9cd3fcdeab38933da271cfa02b1-9709143-images-thumbs&n=13', category: 'kaz', music: '/models/music/Ayau - kozder.mp3' },
  { title: 'Miras Zhugunusov-Sen gana', image: 'https://avatars.mds.yandex.net/i?id=3b17ef244af00de45d297c7f4d6336a5a4ee1b20-5274458-images-thumbs&n=13', category: 'kaz', music: '/models/music/miras-zhugunusov-sen-gana.mp3' },
  { title: 'Esko-Papa qasynda', image: 'https://avatars.mds.yandex.net/i?id=560db130fe27e7d31bb9b3ce0fd3e2be7c55902e-8455861-images-thumbs&n=13', category: 'kaz', music: '/models/music/esko-papa-asyda.mp3' },
  { title: 'Sadraddin-Telephon', image: 'https://avatars.mds.yandex.net/i?id=2d1b97a85b850399eb466ce2a0d5adac24c19815-12611061-images-thumbs&n=13', category: 'kaz', music: '/models/music/sadraddin-telefon.mp3' },

  // Орысша
  { title: 'Miyagi - Minor', image: 'https://avatars.mds.yandex.net/i?id=537635dc22517841763ee5845bf4fa5c40590499-4969866-images-thumbs&n=13', category: 'rus', music: '/models/music/Miyagi_Andy_Panda_-_Minor_74650269.mp3' },
  { title: 'Morgenshtern-Slava', image: 'https://i.ytimg.com/vi/bIIQVHwR6ek/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYChRMA8=&rs=AOn4CLDvFCiDPT7h2gDaF3qyxDB3dEXwBw', category: 'rus', music: '/models/music/Neizvestnyjj_-_MORGENSHTERN_i_SLAVA_MARLOW_o_khejjterakh_Vite_Ak_i_Gufe_Avtory_Cadilla_71558373.mp3' },
  { title: 'Artik & Asti - Девочка танцуй', image: 'https://avatars.mds.yandex.net/i?id=2084960c60c23f5c7fe54435f2200500b529a4c7-4416220-images-thumbs&n=13', category: 'rus', music: '/models/music/Artik_Asti_-_Devochka_tancujj_68289048.mp3' },
  { title: 'HammAli & Navai - Девочка-война', image: 'https://avatars.mds.yandex.net/i?id=1433b5bf957ea15eb3240de3e91f836364c57902-4600873-images-thumbs&n=13', category: 'rus', music: '/models/music/HammAli_Navai_-_Devochka-vojjna_62592480.mp3' },
  { title: 'Egor Krid - Сердцеедка', image: 'https://avatars.mds.yandex.net/i?id=84be0e7abe57b46508137d33c39a9268eb459d29-5512684-images-thumbs&n=13', category: 'rus', music: '/models/music/Egor_Krid_-_Serdceedka_74833477.mp3' },
  { title: 'Макс Барских - Берега', image: 'https://avatars.mds.yandex.net/i?id=e8317237d4d04f9f8341f33c5b14dcedc9c752e5-5232852-images-thumbs&n=13', category: 'rus', music: '/models/music/MAX_BARSKIH_-_Berega_73901191.mp3' },
  { title: 'Анна Асти - Феникс', image: 'https://avatars.mds.yandex.net/i?id=4454701dcc11e39db237fadfbf75c71b58e37b4d-5655998-images-thumbs&n=13', category: 'rus', music: '/models/music/Anna_Asti_-_eniks_pesnya_73648871.mp3' },
  { title: 'Basta - Sansara', image: 'https://avatars.mds.yandex.net/i?id=ab0fa8cad7e010ed41eb970b460c5e91201b5c21-5133396-images-thumbs&n=13', category: 'rus', music: '/models/music/Basta_-_sansara_63347926.mp3' },
  { title: 'Jony - Kometa', image: 'https://avatars.mds.yandex.net/i?id=85fbceccd7a71771e33d1e17d80f39292a69480c-12602673-images-thumbs&n=13', category: 'rus', music: '/models/music/RX_-_Jony-Kometa_67298896.mp3' },
  { title: 'MOT - Kupyura', image: 'https://avatars.mds.yandex.net/i?id=ea99ec4d57a4d4eb8fa677795e9d6facbbac33b4-3767926-images-thumbs&n=13', category: 'rus', music: '/models/music/MOT_-_Tryapki_ot_kutyur_74440638.mp3' },

  // Ағылшынша
  { title: 'Ed Sheeran-Perfect', image: 'https://avatars.mds.yandex.net/i?id=f5405af62c4527eca0e01b282552ad2c3fd3ea86-10805549-images-thumbs&n=13', category: 'eng', music: '/models/music/Ed_Sheeran_-_Perfect_47828368.mp3' },
  { title: 'Adele - Someone Like You', image: 'https://avatars.mds.yandex.net/i?id=6828c2d7f69329649c0da3d23d9483c8ddf99e6c-5877309-images-thumbs&n=13', category: 'eng', music: '/models/music/Adele_-_Someone_Like_You_47835372.mp3' },
  { title: 'The Weeknd - Blinding Lights', image: 'https://avatars.mds.yandex.net/i?id=264e6ef70a03571347650cd6d41b8f728043b7fa-4457085-images-thumbs&n=13', category: 'eng', music: '/models/music/The_Weeknd_-_Blinding_Lights_67509023.mp3' },
  { title: 'Imagine Dragons - Believer', image: 'https://avatars.mds.yandex.net/i?id=78234ee69a12b7fc5cd63893817fc53acbfcd8f4-12503858-images-thumbs&n=13', category: 'eng', music: '/models/music/Imagine_Dragons_-_Believer_74640917.mp3' },
  { title: 'Maroon 5 - Memories', image: 'https://avatars.mds.yandex.net/i?id=e546e4ab7c560fdb91a2184f938fb4d613a90de6-5234550-images-thumbs&n=13', category: 'eng', music: '/models/music/Maroon_5_-_Memories_66671340.mp3' },
  { title: 'Coldplay - Paradise', image: 'https://avatars.mds.yandex.net/i?id=32553e1c16b808a4c60ce2bf85a6f94f-4439117-images-thumbs&n=13', category: 'eng', music: '/models/music/coldplay-paradise_456318333.mp3' },
  { title: 'Shawn Mendes - Señorita', image: 'https://avatars.mds.yandex.net/i?id=10295000f9d4beb70f524e86571d5202-5331889-images-thumbs&n=13', category: 'eng', music: '/models/music/Shawn_Mendes_Camila_Cabello_-_Seorita_65347680.mp3' },
  { title: 'Taylor Swift - Lover', image: 'https://avatars.mds.yandex.net/i?id=6a6e925280a8dede5e88027f60bfcb5472287cf8-16303239-images-thumbs&n=13', category: 'eng', music: '/models/music/Taylor_Swift_-_Lover_66123315.mp3' },
  { title: 'Justin Bieber - Peaches', image: 'https://avatars.mds.yandex.net/i?id=069326992831cb1b799cc50589af60b60c24fea5-5427095-images-thumbs&n=13', category: 'eng', music: '/models/music/Justin_Bieber_Daniel_Caesar_Giveon_-_Peaches_72861066.mp3' },
  { title: 'Billie Eilish - Bad Guy', image: 'https://avatars.mds.yandex.net/i?id=bda9a57624f6ce82eb93889b77fef2be64707d22-15426262-images-thumbs&n=13', category: 'eng', music: '/models/music/Billie_Eilish_-_bad_guy_63154737.mp3' },
  { title: 'Faouzia - RIP, Love ', image: 'https://avatars.mds.yandex.net/i?id=f7d7aef26869bce3b5b716aaa0c1d398cdfe85e7-4548378-images-thumbs&n=13', category: 'eng', music: '/models/music/music1.mp3' },
   { title: 'Alan Walker-Faded ', image: 'https://avatars.mds.yandex.net/i?id=4777e56ba5413c67933cb1b5eff668db3cb46cb2-5236153-images-thumbs&n=13', category: 'eng', music: '/models/music/Alan_Walker_-_Faded_47911858.mp3' },

  // Корей
  { title: 'BTS - Dynamite', image: 'https://avatars.mds.yandex.net/i?id=177a038f01ea8e0eb91c95934b23dc2a6a637e23-9065868-images-thumbs&n=13', category: 'kor', music: '/models/music/BTS_-_Dynamite_70672434.mp3' },
  { title: 'Blackpink - How You Like That', image: 'https://avatars.mds.yandex.net/i?id=b71a47f7dc825e1b430350b0234601d893309ea1-3744351-images-thumbs&n=13', category: 'kor', music: '/models/music/BLACKPINK_-_How_You_Like_That_70062449.mp3' },
  { title: 'IU - Eight', image: 'https://avatars.mds.yandex.net/i?id=2b03d684aa8e4ebd8a161c90390c486cd4a2ebfd-3700445-images-thumbs&n=13', category: 'kor', music: '/models/music/IU_-_eight_69692517.mp3' },
  { title: 'EXO - Love Shot', image: 'https://avatars.mds.yandex.net/i?id=aada13a7e3729f80cd2b91588f090ce754d2d9a2-16749353-images-thumbs&n=13', category: 'kor', music: '/models/music/Exo_-_Love_Shot_63565847.mp3' },
  { title: 'Psy-Gentelmen', image: 'https://avatars.mds.yandex.net/i?id=e74892f65f73227bef077ecae9890b4f6febd3fb-5866055-images-thumbs&n=13', category: 'kor', music: '/models/music/PSY_-_Gangnam_Style__47995629.mp3' },
  { title: 'Stray Kids - Thunderous', image: 'https://avatars.mds.yandex.net/i?id=e5653fdf516b3cfdfb9a5fda5a67046e8618a4a4-8497133-images-thumbs&n=13', category: 'kor', music: '/models/music/Stray_Kids_-_Thunderous_73131785.mp3' },
  { title: 'Seventeen - Rock With You', image: 'https://avatars.mds.yandex.net/i?id=6462a48c0c12be125aeb88dd034f10d08b28f875-4622572-images-thumbs&n=13', category: 'kor', music: '/models/music/Seventeen_-_Rock_with_you_73284024.mp3' },
  { title: 'ITZY - Wannabe', image: 'https://avatars.mds.yandex.net/i?id=ca8d724e3e80456948486f87a97e1b5dbdebfdd8-5222634-images-thumbs&n=13', category: 'kor', music: '/models/music/Itzy_-_WANNABE_68703582.mp3' },
  { title: 'ATEEZ - Say My Name', image: 'https://avatars.mds.yandex.net/i?id=8c4142da5ebb0ecaec57dfa7e9833522d4ec5359-5875850-images-thumbs&n=13', category: 'kor', music: '/models/music/ATEEZ_-_Say_My_Name_61464562.mp3' },
  { title: 'TXT - Blue Hour', image: 'https://avatars.mds.yandex.net/i?id=78cb13c29bc0b8b6d04d1dc455f9b20334272a9a-5874987-images-thumbs&n=13', category: 'kor', music: '/models/music/TXT_-_Blue_Hour_71388303.mp3' },
  { title: 'Twice-Fancy', image: 'https://avatars.mds.yandex.net/i?id=ee17b252365c6399035b7c41fcc83a1358d1e04d-5243206-images-thumbs&n=13', category: 'kor', music: '/models/music/TWICE_-_FANCY_63705513.mp3' }
];


function Musics() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMusic =
    selectedCategory === 'all'
      ? allMusic
      : allMusic.filter((song) => song.category === selectedCategory);

  return (
    <div className="music-wrapper">
      <div className="music-sidebar" style={{ margin: "10px" }}>
        <h3>Categories</h3>
        <p onClick={() => setSelectedCategory('all')}>All</p>
        <p onClick={() => setSelectedCategory('kaz')}>Kazakh</p>
        <p onClick={() => setSelectedCategory('rus')}>Russia</p>
        <p onClick={() => setSelectedCategory('eng')}>English</p>
        <p onClick={() => setSelectedCategory('kor')}>Korea(KPop)</p>
      </div>

      <div className="music-main">
        <h4>Musics:</h4>
        <div className="music-container">
          {filteredMusic.map((song, index) => (
            <div className="music-card" key={index}>
              <img
                src={song.image}
                alt={song.title}
                className="music-image"
                style={{ width: "100px", height: "100px" }}
              />
              <p className="music-title">{song.title}</p>
              <audio controls className="music-player">
                <source src={song.music} type="audio/mp3" />
                Сіздің браузеріңіз аудионы қолдамайды.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Musics;
