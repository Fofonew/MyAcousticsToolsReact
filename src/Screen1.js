import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Screen1 = () => {
  const [typeDeLimiteur, setTypeDeLimiteur] = useState('dBu')
  const [wattHp, setWattHp] = useState(1000)
  const [ohm, setOhm] = useState(4)
  const [puissanceAmpli, setPuissanceAmpli] = useState(1000)
  const [gain, setGain] = useState(39)
  const [charge, setCharge] = useState('ouverte')
  const [hpf, setHpf] = useState(30)
  const [limiterType, setLimiterType] = useState('soft')

  return (
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculatrice limiteur</Text>

      <View style={styles.row}>
        <Text>Type de limiteur</Text>
        <Picker
            selectedValue={typeDeLimiteur}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setTypeDeLimiteur(itemValue)
            }
        >
          <Picker.Item label="dBu" value="dBu" />
          <Picker.Item label="T.Racks DS2/4" value="T.Racks DS2/4" />
          <Picker.Item label="DCX2496 Sub" value="DCX2496 Sub" />
          <Picker.Item label="DCX2496 Top" value="DCX2496 Top" />
        </Picker>
      </View>

      <View style={styles.row}>
        <Text>Watt HP</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={wattHp.toString()}
            onChangeText={text => setWattHp(parseInt(text))}
        />
      </View>

      <View style={styles.row}>
        <Text>Ohm (Ω)</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={ohm.toString()}
            onChangeText={text => setOhm(parseFloat(text))}
        />
      </View>

      <View style={styles.row}>
        <Text>Puissance Ampli</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={puissanceAmpli.toString()}
            onChangeText={text => setPuissanceAmpli(parseInt(text))}
        />
      </View>

      <View style={styles.row}>
        <Text>Gain</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={gain.toString()}
            onChangeText={text => setGain(parseFloat(text))}
        />
      </View>

      <View style={styles.row}>
        <Text>Charge</Text>
        <TouchableOpacity
            onPress={() => setCharge('ouverte')}
            style={styles.radioButton}
        >
          <Text>Ouverte</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setCharge('fermée')}
            style={styles.radioButton}
        >
          <Text>Fermée</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text>HPF</Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={hpf.toString()}
            style={styles.input}
            keyboardType="numeric"
            value={hpf.toString()}
            onChangeText={text => setHpf(parseFloat(text))}
        />
      </View>

      <View style={styles.row}>
        <Text>Limiter Type</Text>
        <TouchableOpacity
            onPress={() => setLimiterType('soft')}
            style={styles.radioButton}
        >
          <Text>Soft-Limiter</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setLimiterType('hard')}
            style={styles.radioButton}
        >
          <Text>Hard-Limiter</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 32
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16
  },
  picker: {
    height: 50,
    width: 150
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 150,
    textAlign: 'right',
    paddingHorizontal: 8
  },
  radioButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginHorizontal: 4
  }
})

export default Screen1
