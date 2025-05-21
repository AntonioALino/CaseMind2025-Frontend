import React, { useEffect, useState } from 'react';

interface ImageFromDataProps {
  data: string; // espera a string base64 da imagem
  alt: string;
}

export const ImageFromData = ({ data, alt }: ImageFromDataProps) => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      try {
        // Converte a string base64 para Uint8Array
        const uint8Array = base64ToUint8Array(data);
        // Cria o Blob com o tipo de imagem correto (ajuste se necessário)
        const blob = new Blob([uint8Array], { type: 'image/jpeg' });
        const objectUrl = URL.createObjectURL(blob);
        setUrl(objectUrl);

        return () => {
          URL.revokeObjectURL(objectUrl);
        };
      } catch (e) {
        console.error("Erro convertendo a imagem:", e);
      }
    }
  }, [data]);

  if (!url) return <p>Carregando imagem...</p>;
  return <img src={url} alt={alt} />;
};

function base64ToUint8Array(base64: string): Uint8Array {
  // Remove o prefixo data URL, se existir
  const base64String = base64.replace(/^data:image\/\w+;base64,/, '');
  // atob decodifica a string base64 para uma string binária
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
