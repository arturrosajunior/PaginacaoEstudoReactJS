import React, {useState} from 'react';
import axios from 'axios';

const lojasArray = [
    {id: "136", name: "JSL - FORD AVANTE-SÃO MIGUEL (SP)", telefone: ""},
    {id: "148", name: "JSL - FIAT PONTO GUARULHOS (SP)", telefone: ""},
    {id: "149", name: "JSL - FIAT PONTO SÃO MIGUEL (SP)", telefone: ""},
    {id: "150", name: "JSL - FIAT PONTO PIRES DO RIO (SP)", telefone: ""},
    {id: "194", name: "JSL - ORIGINAL VW - SÃO MIGUEL", telefone: ""},
    {id: "195", name: "JSL - ORIGINAL VW - SJC VALE / COLINA", telefone: ""},
    {id: "196", name: "JSL - ORIGINAL VW - TAUBATÉ I", telefone: ""},
    {id: "197", name: "JSL - ORIGINAL VW - TAUBATÉ II", telefone: ""},
    {id: "198", name: "JSL - ORIGINAL VW - MOGI DAS CRUZES", telefone: ""},
    {id: "199", name: "JSL - ORIGINAL VW - ARUJÁ", telefone: ""},
    {id: "200", name: "JSL - ORIGINAL VW - SUZANO", telefone: ""},
    {id: "201", name: "JSL -  ORIGINAL VW - GUARULHOS TIRADENTES", telefone: ""},
    {id: "202", name: "JSL - ORIGINAL VW - S.B.CAMPO", telefone: ""},
    {id: "203", name: "JSL - ORIGINAL VW - SJC DUTRA", telefone: ""},
    {id: "204", name: "JSL - ORIGINAL VW - GUARULHOS TIMÓTEO", telefone: ""}
]


function LojasAPI(props){

  const [stores, setStores] = useState(lojasArray);

  return (
   <>
    <ul>
      {
        stores.map((store, i) => <li key={i.toString()}><small>{store.name}</small></li>)
      }
    </ul>
   </>
  )
}

export default LojasAPI;
