import React, { useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { showMessage } from "react-native-flash-message";

import { comprado, requestCompra, atualizacaoDeCompra, buscaProdutos } from "~/services/comprasIAP";

import { Container, Text, Item, BtnComprar, TxtBtn } from './styles';



const itensLoja = Platform.select({
  android: [
    'android.test.purchased',
    'android.test.canceled',
    'android.test.refuned',
    'android.test.item_unavailable',
    'br.com.deway.incasty.autorenovavel'
  ],
  ios: [
    'br.com.deway.incasty.autorenovavel'
  ]
});

const IdProdutoDefaultCompra = 'android.test.purchased';

export default function Login() {

  useEffect(() => {
    buscaProdutos(itensLoja)
  }, []);

  useEffect(() => {
    atualizacaoDeCompra(itensLoja)
  }, []);

  const handleCompra = useCallback(async () => {

    if (await comprado(IdProdutoDefaultCompra)) {
      showMessage({
        type: 'success',
        message: 'Produto já adquirido',
        description: 'você já possui este produto',
        animationDuration: 1000,
        icon: {
          icon: 'success',
          position: 'left',
        },
      });
    } else {
      showMessage({
        message: 'Compra necessária',
        description: `Você precisa comprar este produto!`,
        type: 'info',
        animationDuration: 1000,
        icon: {
          icon: 'info',
          position: 'left',
        },
      });

      await requestCompra(IdProdutoDefaultCompra)
    }

  }, []);



  return (
    <Container>
      <Item>
        <Text>Plano premium R$9,90/m</Text>
        <BtnComprar onPress={handleCompra}>
          <TxtBtn>  comprar plano </TxtBtn>
        </BtnComprar>
      </Item>

      <Item>
        <Text>Plano premium R$19,90/m</Text>
        <BtnComprar onPress={handleCompra}>
          <TxtBtn>  comprar plano </TxtBtn>
        </BtnComprar>
      </Item>

      <Item>
        <Text>Plano premium R$29,90/m</Text>
        <BtnComprar onPress={handleCompra}>
          <TxtBtn>  comprar plano </TxtBtn>
        </BtnComprar>
      </Item>
    </Container>
  );
}


