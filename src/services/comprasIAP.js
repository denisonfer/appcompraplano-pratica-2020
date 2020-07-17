import RNIap, { purchaseUpdatedListener } from 'react-native-iap';


export const comprado = async produtoId => {
  let comprado = false;

  try {

    const compras = await RNIap.getAvailablePurchases();

    compras.forEach(compra => {
      if (compra.productId === produtoId) {
        comprado = true;

        return;
      }

      return comprado;

    })

  } catch (error) {
    console.tron.log(error);
    return false;
  }


  return comprado;
}

export const requestCompra = async produtoId => {
  try {
    await RNIap.requestSubscription(produtoId);

  } catch (error) {
    console.tron.log('Erro ao recuperar os dados do produto', error);
  }

}

export const buscaProdutos = async produtosId => {
  try {
    const getProdutos = await RNIap.getProducts(produtosId);
    console.tron.log(getProdutos);
  } catch (error) {
    console.tron.log(error);
  }
}

export const atualizacaoDeCompra = async () => {
  purchaseUpdatedListener(async (compra) => {
    const recibo = compra.transactionReceipt;


    if (recibo) {
      const response = await RNIap.finishTransaction(recibo);
      console.tron.log(response);
    }
  })
}
