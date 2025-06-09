import React from 'react';
import '../styles/Home.css';
import backgroundImage from '../assets/gokceada_slide05.jpg';

const Home = () => {
  const pdfFiles = [
    { 
      title: 'Denize Girmeden Mutlaka Bilmeniz Gerekenler', 
      path: process.env.PUBLIC_URL + '/pdf/DENİZ KESTANESİ VE TRAKONYA SOKMASI.pdf' 
    },
    { 
      title: 'Güneş Çarpması Sinsidir!', 
      path: process.env.PUBLIC_URL + '/pdf/☀️ GÜNEŞ ÇARPMASI HAYATİDİR!.pdf' 
    },
    { 
      title: 'Böcek Sokmaları Hakkında Bilmeniz Gerekenler', 
      path: process.env.PUBLIC_URL + '/pdf/🐝 BÖCEK SOKMALARI.pdf' 
    },
    { 
      title: 'Tatiliniz Tuvalette Geçirmeyin!', 
      path: process.env.PUBLIC_URL + '/pdf/Tatiliniz Boyu İshal Olmayın!.pdf' 
    },
    { 
      title: 'Tatil Keyfiniz Kazayla Son Bulmasın!', 
      path: process.env.PUBLIC_URL + '/pdf/Tatil Keyfiniz Kazayla Son Bulmasın!.pdf' 
    },
    { 
      title: 'Deniz Keyfi Felakete Dönüşmesin!', 
      path: process.env.PUBLIC_URL + '/pdf/Deniz Keyfi Felakete Dönüşmesin!.pdf' 
    }
  ];

  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Tatiliniz Keyfiniz Felaketle Son Bulmasın!</h1>
      <div className="pdf-grid">
        {pdfFiles.map((pdf, index) => (
          <div 
            key={index} 
            className="pdf-box"
            onClick={() => window.open(pdf.path, '_blank')}
          >
            <h3>{pdf.title}</h3>
            <p>Daha fazla bilgi için tıklayınız</p>
          </div>
        ))}
      </div>
      <h1 className="footer-title">İyi Tatiller Dileriz</h1>
    </div>
  );
};

export default Home;