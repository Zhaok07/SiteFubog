import { SlArrowUp } from "react-icons/sl";
import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona a rolagem suave
    });
  };

  // Verifica a rolagem da página e mostra o botão após um certo ponto
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Exibe o botão após 200px de rolagem
    } else {
      setIsVisible(false); // Esconde o botão
    }
  };

  // Adiciona e remove o event listener para scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Limpeza do event listener quando o componente for desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '16px',
        zIndex: 1,

        cursor: 'pointer',
        display: isVisible ? 'block' : 'none', // Exibe ou esconde o botão
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      }}
    >
      <SlArrowUp />
    </button>
  );
};

export default ScrollTop;
