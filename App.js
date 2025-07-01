import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modal, Pressable, Image, Picker, ImageBackground } from "react-native-web";

export default function App() {
  const [contador, setContador] = useState(0);
  const [ativar, setAtivar] = useState(false);
  const Voltar = () => {
    setAtivar(false)
  };

  const [dia, setDia] = useState(1);
  const [mes, setMes] = useState("Janeiro");

  const VerificarSigno = () => {
    if (dia == 0 && mes == "") {

    } else {
      if ((dia >= 21 && mes == "Março" && dia <= 31) || (dia <= 19 && mes == "Abril")) {
        setContador(0);
        setAtivar(true)
      } else if ((dia >= 20 && mes == "Abril" && dia <= 30) || (dia <= 20 && mes == "Maio")) {
        setContador(1);
        setAtivar(true)
      } else if ((dia >= 21 && mes == "Maio" && dia <= 31) || (dia <= 20 && mes == "Junho")) {
        setContador(2);
        setAtivar(true)
      } else if ((dia >= 21 && mes == "Junho" && dia <= 30) || (dia <= 22 && mes == "Julho")) {
        setContador(3);
        setAtivar(true)
      } else if ((dia >= 23 && mes == "Julho" && dia <= 31) || (dia <= 22 && mes == "Agosto")) {
        setContador(4);
        setAtivar(true)
      } else if ((dia >= 23 && mes == "Agosto" && dia <= 31) || (dia <= 22 && mes == "Setembro")) {
        setContador(5);
        setAtivar(true)
      } else if ((dia >= 23 && mes == "Setembro" && dia <= 30) || (dia <= 22 && mes == "Outubro")) {
        setContador(6);
        setAtivar(true)
      } else if ((dia >= 23 && mes == "Outubro" && dia <= 31) || (dia <= 21 && mes == "Novembro")) {
        setContador(7);
        setAtivar(true)
      } else if ((dia >= 22 && mes == "Novembro" && dia <= 30) || (dia <= 21 && mes == "Dezembro")) {
        setContador(8);
        setAtivar(true)
      } else if ((dia >= 22 && mes == "Dezembro" && dia <= 31) || (dia <= 19 && mes == "Janeiro")) {
        setContador(9);
        setAtivar(true)
      } else if ((dia >= 20 && mes == "Janeiro" && dia <= 31) || (dia <= 18 && mes == "Fevereiro")) {
        setContador(10);
        setAtivar(true)
      } else if ((dia >= 19 && mes == "Fevereiro" && dia <= 29) || (dia <= 20 && mes == "Março")) {
        setContador(11);
        setAtivar(true)
      }
    }
  };

  const [horoscopo, setHoroscopo] = useState([
    {
      nome: "Áries",
      dias: "21 de Março a 19 de Abril",
      imagem: <Image style={styles.signo} source={require('./assets/aries.png')}></Image>,
      elemento: "Fogo",
      caracteristicas:
        "Corajoso, enérgico, líder, impetuoso, competitivo, impulsivo.",
    },

    {
      nome: "Touro",
      dias: "20 de Abril a 20 de Maio",
      imagem: <Image style={styles.signo} source={require('./assets/touro.png')}></Image>,
      elemento: "Terra",
      caracteristicas:
        "Determinado, prático, confiável, paciente, sensorial, possessivo.",
    },

    {
      nome: "Gêmeos",
      dias: "21 de Maio a 20 de Junho",
      imagem: <Image style={styles.signo} source={require('./assets/gemeos.png')}></Image>,
      elemento: "Ar",
      caracteristicas:
        "Comunicativo, adaptável, curioso, sociável, versátil, inquieto.",
    },

    {
      nome: "Câncer",
      dias: "21 de Junho a 22 de Julho",
      imagem: <Image style={styles.signo} source={require('./assets/cancer.png')}></Image>,
      elemento: "Água",
      caracteristicas:
        "Sensível, intuitivo, protetor, emotivo, nostálgico, cuidadoso.",
    },

    {
      nome: "Leão",
      dias: "23 de Julho a 22 de Agosto",
      imagem: <Image style={styles.signo} source={require('./assets/leao.png')}></Image>,
      elemento: "Fogo",
      caracteristicas:
        "Confiante, carismático, generoso, orgulhoso, criativo, líder.",
    },

    {
      nome: "Virgem",
      dias: "23 de Agosto a 22 de Setembro",
      imagem: <Image style={styles.signo} source={require('./assets/virgem.png')}></Image>,
      elemento: "Terra",
      caracteristicas:
        "Analítico, prático, detalhista, organizado, crítico, modesto.",
    },

    {
      nome: "Libra",
      dias: "23 de Setembro a 22 de Outubro",
      imagem: <Image style={styles.signo} source={require('./assets/libra.png')}></Image>,
      elemento: "Ar",
      caracteristicas:
        "Diplomático, sociavel, equilibrado, ideciso, elegante, justo.",
    },

    {
      nome: "Escorpião",
      dias: "23 de Outubro a 21 de Novembro",
      imagem: <Image style={styles.signo} source={require('./assets/escorpiao.png')}></Image>,
      elemento: "Fogo",
      caracteristicas:
        "Intensivo, apaixonado, misterioso, determinado, leal, vingativo.",
    },

    {
      nome: "Sagitário",
      dias: "22 de Novembro a 21 de Dezembro",
      imagem: <Image style={styles.signo} source={require('./assets/sagitario.png')}></Image>,
      elemento: "Fogo",
      caracteristicas:
        "Otimista, aventureiro, filosófico, independente, impulsivo, honesto.",
    },

    {
      nome: "Capricornio",
      dias: "22 de Dezembro a 19 de Janeiro",
      imagem: <Image style={styles.signo} source={require('./assets/capricornio.png')}></Image>,
      elemento: "Terra",
      caracteristicas:
        "Ambicioso, disciplinado, responsável, prático, paciente, tradicional.",
    },

    {
      nome: "Aquário",
      dias: "20 de Janeiro a 18 de Fevereiro",
      imagem: <Image style={styles.signo} source={require('./assets/aquario.png')}></Image>,
      elemento: "Ar",
      caracteristicas:
        "Inovador, humanitário, independente, excêntrico, visionário, racional.",
    },

    {
      nome: "Peixes",
      dias: "19 de Fevereiro a 20 de Março",
      imagem: <Image style={styles.signo} source={require('./assets/peixes.png')}></Image>,
      elemento: "Água",
      caracteristicas:
        "Empático, intuitivo, sonhador, sensível, compassivo, escapista.",
    },

  ]);
  return (
    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.container}>

      <View style={styles.caixa}>

        <View style={styles.img}>
          <Image
            style={styles.face}
            source={require("./assets/face.png")}
          ></Image>
        </View>


        <View style={styles.picks}>
          <View style={styles.sep}>
            <Text style={styles.info}>Selecione seu dia de nascimento</Text>
            <Picker onValueChange={(itemValue) => setDia(itemValue)} style={styles.pick}>
              <Picker.Item label="1" value={1}></Picker.Item>
              <Picker.Item label="2" value={2}></Picker.Item>
              <Picker.Item label="3" value={3}></Picker.Item>
              <Picker.Item label="4" value={4}></Picker.Item>
              <Picker.Item label="5" value={5}></Picker.Item>
              <Picker.Item label="6" value={6}></Picker.Item>
              <Picker.Item label="7" value={7}></Picker.Item>
              <Picker.Item label="8" value={8}></Picker.Item>
              <Picker.Item label="9" value={9}></Picker.Item>
              <Picker.Item label="10" value={10}></Picker.Item>
              <Picker.Item label="11" value={11}></Picker.Item>
              <Picker.Item label="12" value={12}></Picker.Item>
              <Picker.Item label="13" value={13}></Picker.Item>
              <Picker.Item label="14" value={14}></Picker.Item>
              <Picker.Item label="15" value={15}></Picker.Item>
              <Picker.Item label="16" value={16}></Picker.Item>
              <Picker.Item label="17" value={17}></Picker.Item>
              <Picker.Item label="18" value={18}></Picker.Item>
              <Picker.Item label="19" value={19}></Picker.Item>
              <Picker.Item label="20" value={20}></Picker.Item>
              <Picker.Item label="21" value={21}></Picker.Item>
              <Picker.Item label="22" value={22}></Picker.Item>
              <Picker.Item label="23" value={23}></Picker.Item>
              <Picker.Item label="24" value={24}></Picker.Item>
              <Picker.Item label="25" value={25}></Picker.Item>
              <Picker.Item label="26" value={26}></Picker.Item>
              <Picker.Item label="27" value={27}></Picker.Item>
              <Picker.Item label="28" value={28}></Picker.Item>
              <Picker.Item label="29" value={29}></Picker.Item>
              <Picker.Item label="30" value={30}></Picker.Item>
              <Picker.Item label="31" value={31}></Picker.Item>
            </Picker>
          </View>

          <View style={styles.sep}>
            <Text style={styles.info}>Selecione seu mês de nascimento</Text>

            <Picker onValueChange={(itemValue) => setMes(itemValue)} style={styles.pick}>
              <Picker.Item label="Janeiro" value="Janeiro"></Picker.Item>
              <Picker.Item label="Fevereiro" value="Fevereiro"></Picker.Item>
              <Picker.Item label="Março" value="Março"></Picker.Item>
              <Picker.Item label="Abril" value="Abril"></Picker.Item>
              <Picker.Item label="Maio" value="Maio"></Picker.Item>
              <Picker.Item label="Junho" value="Junho"></Picker.Item>
              <Picker.Item label="Julho" value="Julho"></Picker.Item>
              <Picker.Item label="Agosto" value="Agosto"></Picker.Item>
              <Picker.Item label="Setembro" value="Setembro"></Picker.Item>
              <Picker.Item label="Outubro" value="Outubro"></Picker.Item>
              <Picker.Item label="Novembro" value="Novembro"></Picker.Item>
              <Picker.Item label="Dezembro" value="Dezembro"></Picker.Item>
            </Picker>
          </View>


          <View style={styles.sep}>
            <Pressable style={styles.botao1} onPress={() => VerificarSigno()}><Text style={styles.tBot}>Verificar</Text></Pressable>
          </View>
        </View>
      </View>
      <Modal visible={ativar} animationType='fade'>
        <ImageBackground source={require('./assets/fundo.jpg')} style={styles.modal}>
        <View style={styles.caixaMod}>
          <Text style={styles.nomeMod}>{horoscopo[contador].nome}</Text>
          <Text>{horoscopo[contador].imagem}</Text>
          <Text style={styles.caracMod}>{horoscopo[contador].dias}</Text>
          <Text style={styles.caracMod1}>Elemento:</Text>
          <Text style={styles.caracMod}>{horoscopo[contador].elemento}</Text>
          <Text style={styles.caracMod1}>Caracteristicas:</Text>
          <Text style={styles.caracMod}>{horoscopo[contador].caracteristicas}</Text>
          <View style={styles.sep}>
            <Pressable style={styles.botao1} onPress={() => Voltar()}><Text style={styles.tBot}>Voltar</Text></Pressable>
          </View>
          
        </View>
        </ImageBackground>
      </Modal>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    resizeMode: 'repeat',
    width: '100%',
  },

  picks: {
    justifyContent: 'space-between',
  },

  caixa: {
    padding: 10,
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  info: {
    fontSize: 20,
    marginBottom: 10,
  },

  img: {
    width: "100%",
    alignItems: "center",
  },

  face: {
    width: 300,
    height: 300,
  },

  pick: {
    fontSize: 20,
    padding: 7,
    borderWidth: 2,
    width: 250,
    borderRadius: 20,
    textAlign: 'center',
  },

  sep: {
    padding: 10,
    flex: 0.2,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  botao1: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: "#2b34fd",
    width: 120,
    alignItems: "center",
    marginBottom: 10,
  },

  tBot: {
    color: 'white',
    fontSize: 20,
  },

  signo: {
    width: 200,
    height: 200,
  },

  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    resizeMode: 'repeat',
    width: '100%',
  },

  caixaMod: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    width: '80%',
    shadowOffset: {
      width: 6,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  nomeMod: {
    fontSize: 50,
    paddingBottom: 1,
    fontWeight: 'bold',
  },

  caracMod: {
    fontSize: 20,
    textAlign: 'center',
  },

  caracMod1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
